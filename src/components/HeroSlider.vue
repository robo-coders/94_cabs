<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Pagination, Autoplay, EffectFade, Keyboard, A11y } from 'swiper/modules'
import HeroSlideText from './HeroSlideText.vue'
import HeroTwoCityMap from './HeroTwoCityMap.vue'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/effect-fade'

/**
 * Homepage hero slider.
 * Each slide: { id, theme: 'image' | 'gradient', image?, imageAlt?, eyebrow, title, subtitle, ctas }
 *
 * Slide 1 (image theme) is untouched — its background + baked-in scrim,
 * grain layer and content stacking are unchanged. Slide 2 (gradient theme)
 * is now a self-contained two-city map (see HeroTwoCityMap.vue) rather than
 * a text-over-background banner, so it owns its own layout, scrim and
 * typography entirely — this component just mounts it and, because that
 * layout is taller on mobile than a standard banner, tells Swiper to
 * auto-size the slide container per active slide (see `autoHeight` below)
 * instead of forcing every slide to share one fixed height.
 */
const props = defineProps({
  slides: { type: Array, required: true }
})

const modules = [Navigation, Pagination, Autoplay, EffectFade, Keyboard, A11y]

const AUTOPLAY_DELAY = 6800 // ms — within the requested 6-7s window
const RESUME_IDLE_MS = 9000 // how long to wait after an interaction before ambient rotation resumes

const prevElRef = ref(null)
const nextElRef = ref(null)
const paginationElRef = ref(null)
const activeIndex = ref(0)
const reduceMotion = ref(false)
const autoplayActive = ref(false)

let motionQuery
let swiperInstance = null
let resumeTimer = null

onMounted(() => {
  motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
  reduceMotion.value = motionQuery.matches
  motionQuery.addEventListener('change', onMotionChange)
})

onBeforeUnmount(() => {
  motionQuery?.removeEventListener('change', onMotionChange)
  clearTimeout(resumeTimer)
})

function onMotionChange(e) {
  reduceMotion.value = e.matches
  if (e.matches) stopAutoplay()
}

function onSwiperReady(swiper) {
  swiperInstance = swiper
  autoplayActive.value = !reduceMotion.value
}

function stopAutoplay() {
  clearTimeout(resumeTimer)
  swiperInstance?.autoplay?.stop()
  autoplayActive.value = false
}

function startAutoplay() {
  if (reduceMotion.value) return
  swiperInstance?.autoplay?.start()
  autoplayActive.value = true
}

// Discrete interactions (arrow click, dot click, a tap, an arrow-key press)
// pause and then quietly resume once the person has stopped actively
// driving the slider for a bit — it shouldn't stay frozen forever just
// because someone clicked through once.
function pauseAndScheduleResume() {
  stopAutoplay()
  if (reduceMotion.value) return
  resumeTimer = setTimeout(startAutoplay, RESUME_IDLE_MS)
}

// Hovering is a continuous state, not a discrete action — pause exactly
// while the pointer is present, resume the instant it leaves.
function handlePointerEnter() {
  stopAutoplay()
}
function handlePointerLeave() {
  startAutoplay()
}

function handleKeydown(e) {
  if (['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(e.key)) {
    pauseAndScheduleResume()
  }
}

function handleSlideChange(swiper) {
  activeIndex.value = swiper.realIndex
}

// Same scrim recipe for every slide, image or gradient: a left-and-bottom
// weighted darken so the text zone is always comfortably legible,
// regardless of what's underneath. For the image slide this is baked
// directly into the photo's own background-image list (one paint layer,
// can't separate/reorder). For the gradient slide it's its own topmost
// div using the identical value, so the treatment matches exactly.
const TEXT_SCRIM =
  'linear-gradient(100deg, rgba(3,5,4,0.78) 0%, rgba(5,9,7,0.5) 40%, rgba(6,11,8,0.22) 68%, rgba(6,11,8,0.08) 100%),' +
  'linear-gradient(0deg, rgba(2,4,3,0.6) 0%, rgba(2,4,3,0) 42%)'

function imageBgStyle(slide) {
  return { backgroundImage: `${TEXT_SCRIM}, url(${slide.image})` }
}
</script>

<template>
  <section class="hero-slider" aria-roledescription="carousel" aria-label="Featured highlights">
    <Swiper
      class="hero-swiper"
      :modules="modules"
      effect="fade"
      :fade-effect="{ crossFade: true }"
      :loop="slides.length > 1"
      :auto-height="true"
      :speed="reduceMotion ? 0 : 900"
      :autoplay="reduceMotion ? false : { delay: AUTOPLAY_DELAY }"
      :keyboard="{ enabled: true }"
      :grab-cursor="true"
      :a11y="{
        prevSlideMessage: 'Previous slide',
        nextSlideMessage: 'Next slide',
        paginationBulletMessage: 'Go to slide {{index}}',
        containerMessage: 'Homepage hero, {{slidesLength}} slides'
      }"
      :navigation="{ prevEl: prevElRef, nextEl: nextElRef }"
      :pagination="{ el: paginationElRef, clickable: true }"
      @swiper="onSwiperReady"
      @slide-change="handleSlideChange"
      @mouseenter="handlePointerEnter"
      @mouseleave="handlePointerLeave"
      @touchstart.passive="pauseAndScheduleResume"
      @keydown="handleKeydown"
    >
      <SwiperSlide v-for="slide in slides" :key="slide.id" v-slot="{ isActive }">
        <div class="hero-slide" :class="{ 'hero-slide--map': slide.theme === 'gradient' }">
          <template v-if="slide.theme === 'image'">
            <div
              class="hero-slide__bg"
              :style="imageBgStyle(slide)"
              role="img"
              :aria-label="slide.imageAlt || ''"
            ></div>
            <div class="hero-slide__grain" aria-hidden="true"></div>

            <div class="container hero-slide__content">
              <HeroSlideText
                :key="isActive ? `${slide.id}-in` : slide.id"
                :eyebrow="slide.eyebrow"
                :title="slide.title"
                :subtitle="slide.subtitle"
                :ctas="slide.ctas"
                :active="isActive"
              />
            </div>
          </template>

          <template v-else>
            <HeroTwoCityMap :key="isActive ? `${slide.id}-in` : slide.id" :active="isActive" />
            <div class="hero-slide__grain" aria-hidden="true"></div>
          </template>
        </div>
      </SwiperSlide>

      <button
        ref="prevElRef"
        type="button"
        class="hero-nav hero-nav--prev"
        aria-label="Previous slide"
        @click="pauseAndScheduleResume"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <path d="M15 18l-6-6 6-6" />
        </svg>
      </button>
      <button
        ref="nextElRef"
        type="button"
        class="hero-nav hero-nav--next"
        aria-label="Next slide"
        @click="pauseAndScheduleResume"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <path d="M9 18l6-6-6-6" />
        </svg>
      </button>

      <div
        ref="paginationElRef"
        class="hero-pagination"
        :class="{ 'hero-pagination--playing': autoplayActive }"
        :style="{ '--autoplay-delay': `${AUTOPLAY_DELAY}ms` }"
        @click="pauseAndScheduleResume"
      ></div>
    </Swiper>
  </section>
</template>

<style scoped>
.hero-slider {
  position: relative;
}

.hero-swiper {
  position: relative;
}

.hero-slide {
  position: relative;
  isolation: isolate;
  min-height: clamp(480px, 85vh, 900px);
  overflow: hidden;
}

/* Slide 2's map layout is intrinsically taller once it stacks on mobile
   (two full-width map sections plus a text block) — this only affects that
   slide's minimum height; combined with the Swiper `auto-height` set above,
   the slider container resizes to fit whichever slide is active instead of
   clipping the taller one. */
@media (max-width: 860px) {
  .hero-slide--map {
    min-height: clamp(760px, 145vh, 1180px);
  }
}

/* ─── z-index scale (all explicit, all self-contained to this component):
   1  background (photo). Slide 2's map owns its own internal stack instead.
   2  grain texture (both slide types — sits as a top-level film layer)
   10 text content (slide 1 only — slide 2's text lives inside its own component)
   20 nav arrows + pagination ─── */

.hero-slide__bg {
  position: absolute;
  inset: 0;
  z-index: 1;
  background-size: cover;
  background-position: center;
}

.hero-slide__grain {
  position: absolute;
  inset: 0;
  z-index: 2;
  opacity: 0.035;
  pointer-events: none;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
}

/* ─── Content ─── */
.hero-slide__content {
  position: relative;
  z-index: 10;
  display: flex;
  align-items: center;
  min-height: inherit;
  padding-top: clamp(4rem, 10vh, 7rem);
  padding-bottom: clamp(3.5rem, 7vh, 5.5rem);
}

/* ─── Nav arrows ─── */
.hero-nav {
  position: absolute;
  top: 50%;
  z-index: 20;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 3rem;
  height: 3rem;
  transform: translateY(-50%);
  border-radius: 999px;
  border: 1px solid rgba(255, 255, 255, 0.24);
  background: rgba(8, 12, 10, 0.4);
  backdrop-filter: blur(10px);
  color: #f7fbf5;
  cursor: pointer;
  transition: background-color 0.2s ease, border-color 0.2s ease;
}

.hero-nav svg {
  width: 1.15rem;
  height: 1.15rem;
}

.hero-nav:hover {
  background: rgba(157, 205, 66, 0.24);
  border-color: rgba(184, 232, 96, 0.6);
}

.hero-nav:focus-visible {
  outline: 2px solid var(--brand-bright, #b8e860);
  outline-offset: 2px;
}

.hero-nav--prev {
  left: clamp(0.75rem, 3vw, 2.25rem);
}

.hero-nav--next {
  right: clamp(0.75rem, 3vw, 2.25rem);
}

.hero-nav.swiper-button-disabled {
  opacity: 0.35;
  cursor: default;
  pointer-events: none;
}

/* ─── Pagination — bottom-left dots with a fill animation on the active
   dot that visually counts down to the next auto-advance. ─── */
.hero-pagination {
  position: absolute;
  left: clamp(1.25rem, 4vw, 3rem);
  bottom: clamp(1.25rem, 4vh, 2.25rem);
  z-index: 20;
  display: flex;
  gap: 0.55rem;
}

.hero-pagination :deep(.swiper-pagination-bullet) {
  position: relative;
  width: 0.55rem;
  height: 0.55rem;
  margin: 0;
  overflow: hidden;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.45);
  opacity: 1;
  cursor: pointer;
  transition: background-color 0.2s ease, width 0.2s ease;
}

.hero-pagination :deep(.swiper-pagination-bullet-active) {
  width: 1.6rem;
  background: rgba(255, 255, 255, 0.3);
}

.hero-pagination :deep(.swiper-pagination-bullet-active)::after {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: inherit;
  background: var(--brand-bright, #b8e860);
  transform-origin: left center;
  transform: scaleX(0);
}

/* The fill only animates while autoplay is actually counting down.
   Toggling this class off doesn't freeze the fill mid-way — it drops it
   back to empty, matching the fact that a paused slider has no countdown
   in progress. Resuming starts a fresh full-duration fill. */
.hero-pagination--playing :deep(.swiper-pagination-bullet-active)::after {
  animation: hero-dot-fill var(--autoplay-delay, 6.8s) linear forwards;
}

@keyframes hero-dot-fill {
  from {
    transform: scaleX(0);
  }
  to {
    transform: scaleX(1);
  }
}

@media (prefers-reduced-motion: reduce) {
  .hero-pagination :deep(.swiper-pagination-bullet-active)::after {
    display: none;
  }
}

@media (max-width: 720px) {
  .hero-nav {
    width: 2.5rem;
    height: 2.5rem;
  }

  .hero-nav--prev {
    left: 0.6rem;
  }

  .hero-nav--next {
    right: 0.6rem;
  }
}

@media (max-width: 560px) {
  .hero-nav {
    display: none;
  }

  .hero-pagination {
    left: 50%;
    transform: translateX(-50%);
  }
}
</style>