<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

defineProps({
  active: { type: Boolean, default: false }
})

const RED_DEER_PATH =
  'M160,175 C250,140 320,150 340,190 C365,235 375,360 355,420 C330,465 210,470 150,430 C100,395 95,240 160,175 Z'
const SYLVAN_LAKE_PATH =
  'M230,150 C330,155 400,200 400,270 C400,340 330,420 250,455 C170,485 110,420 100,330 C92,260 140,148 230,150 Z'

const reduceMotion = ref(false)
let motionQuery

function onMotionChange(e) {
  reduceMotion.value = e.matches
}

onMounted(() => {
  motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
  reduceMotion.value = motionQuery.matches
  motionQuery.addEventListener('change', onMotionChange)
})

onBeforeUnmount(() => {
  motionQuery?.removeEventListener('change', onMotionChange)
})
</script>

<template>
  <div class="map-slide" :class="{ 'map-slide--in': active }">
    <!-- Red Deer -->
    <div class="map-slide__half map-slide__half--left">
      <svg class="map-slide__svg" viewBox="0 0 480 580" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
        <line x1="40" y1="90" x2="440" y2="60" class="map-road" />
        <line x1="60" y1="500" x2="420" y2="530" class="map-road" />
        <line x1="30" y1="260" x2="120" y2="520" class="map-road" />
        <line x1="380" y1="40" x2="450" y2="300" class="map-road" />
        <line x1="80" y1="40" x2="300" y2="20" class="map-road" />
        <rect x="210" y="60" width="90" height="60" rx="14" class="map-block" />
        <rect x="60" y="330" width="70" height="50" rx="12" class="map-block" />
        <rect x="330" y="330" width="80" height="55" rx="14" class="map-block" />

        <path :d="RED_DEER_PATH" class="map-route" />

        <g class="map-landmark">
          <circle cx="160" cy="175" r="4" />
          <text x="160" y="158" text-anchor="middle">Downtown</text>
        </g>
        <g class="map-landmark">
          <circle cx="340" cy="190" r="4" />
          <text x="340" y="173" text-anchor="middle">North End</text>
        </g>
        <g class="map-landmark">
          <circle cx="355" cy="420" r="4" />
          <text x="355" y="440" text-anchor="middle">College Park</text>
        </g>
        <g class="map-landmark">
          <circle cx="150" cy="430" r="4" />
          <text x="150" y="450" text-anchor="middle">Riverside</text>
        </g>

        <text x="34" y="545" text-anchor="start" class="map-city-label">Red Deer</text>

        <g class="map-cab" :transform="reduceMotion ? 'translate(160,175)' : null">
          <rect x="-8" y="-4" width="16" height="7" rx="2" fill="#f5f5f0" />
          <rect x="-4" y="-6.5" width="7" height="3.5" rx="1.2" fill="#f5f5f0" />
          <rect x="-8" y="-1.2" width="16" height="1.6" fill="#9dcd42" opacity="0.9" />
          <circle cx="-4.5" cy="3.2" r="1.6" fill="#12180f" />
          <circle cx="4.5" cy="3.2" r="1.6" fill="#12180f" />
          <animateMotion v-if="!reduceMotion" dur="10.5s" begin="0s" repeatCount="indefinite" rotate="auto" :path="RED_DEER_PATH" />
        </g>
      </svg>
    </div>

    <!-- Sylvan Lake -->
    <div class="map-slide__half map-slide__half--right">
      <svg class="map-slide__svg" viewBox="0 0 480 580" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
        <line x1="20" y1="70" x2="420" y2="100" class="map-road" />
        <line x1="60" y1="470" x2="440" y2="500" class="map-road" />
        <line x1="380" y1="30" x2="430" y2="480" class="map-road" />
        <line x1="60" y1="60" x2="100" y2="500" class="map-road" />
        <rect x="180" y="40" width="90" height="55" rx="14" class="map-block" />
        <rect x="60" y="380" width="75" height="50" rx="12" class="map-block" />
        <rect x="320" y="360" width="85" height="55" rx="14" class="map-block" />

        <path :d="SYLVAN_LAKE_PATH" class="map-route" />

        <g class="map-landmark">
          <circle cx="230" cy="150" r="4" />
          <text x="230" y="132" text-anchor="middle">Lakefront</text>
        </g>
        <g class="map-landmark">
          <circle cx="400" cy="270" r="4" />
          <text x="412" y="274" text-anchor="start">Main Street</text>
        </g>
        <g class="map-landmark">
          <circle cx="250" cy="455" r="4" />
          <text x="250" y="476" text-anchor="middle">Marina</text>
        </g>
        <g class="map-landmark">
          <circle cx="100" cy="330" r="4" />
          <text x="88" y="334" text-anchor="end">Beach Access</text>
        </g>

        <text x="446" y="545" text-anchor="end" class="map-city-label">Sylvan Lake</text>

        <g class="map-cab" :transform="reduceMotion ? 'translate(230,150)' : null">
          <rect x="-8" y="-4" width="16" height="7" rx="2" fill="#f5f5f0" />
          <rect x="-4" y="-6.5" width="7" height="3.5" rx="1.2" fill="#f5f5f0" />
          <rect x="-8" y="-1.2" width="16" height="1.6" fill="#9dcd42" opacity="0.9" />
          <circle cx="-4.5" cy="3.2" r="1.6" fill="#12180f" />
          <circle cx="4.5" cy="3.2" r="1.6" fill="#12180f" />
          <animateMotion v-if="!reduceMotion" dur="11s" begin="1s" repeatCount="indefinite" rotate="auto" :path="SYLVAN_LAKE_PATH" />
        </g>
      </svg>
    </div>

    <div class="map-slide__divider" aria-hidden="true"></div>
    <div class="map-slide__scrim" aria-hidden="true"></div>

    <div class="map-slide__center">
      <p class="map-slide__eyebrow">Now serving two communities</p>
      <h1 class="map-slide__headline">Home in Red Deer.<br />Now serving Sylvan Lake too.</h1>
      <p class="map-slide__sub">
        The same dependable dispatch, clean vehicles & professional drivers, now on the road in both communities.
      </p>
      <RouterLink to="/book-online" class="btn btn-primary map-slide__cta">Book your ride today</RouterLink>
    </div>
  </div>
</template>

<style scoped>
.map-slide {
  position: absolute;
  inset: 0;
  z-index: 1;
  display: flex;
  background: linear-gradient(135deg, #0c0e0d 0%, #121a15 46%, #16211a 100%);
}

.map-slide__half {
  position: relative;
  flex: 1 1 50%;
  min-width: 0;
  overflow: hidden;
}

.map-slide__svg {
  display: block;
  width: 100%;
  height: 100%;
}

/* ─── Static map texture ─── */
.map-road {
  stroke: #eef2ec;
  stroke-width: 1.4;
  stroke-linecap: round;
  opacity: 0.1;
}

.map-block {
  fill: #eef2ec;
  opacity: 0.05;
}

.map-route {
  fill: none;
  stroke: #9dcd42;
  stroke-width: 2;
  stroke-linecap: round;
  stroke-dasharray: 2 10;
  opacity: 0.4;
}

.map-landmark circle {
  fill: #b8e860;
  opacity: 0.75;
}

.map-landmark text {
  font-family: var(--font);
  font-size: 15px;
  font-weight: 600;
  fill: rgba(240, 247, 242, 0.72);
  letter-spacing: 0.01em;
}

.map-city-label {
  font-family: Georgia, 'Iowan Old Style', 'Palatino Linotype', 'Book Antiqua', Palatino, serif;
  font-size: 27px;
  fill: rgba(240, 247, 242, 0.55);
  letter-spacing: 0.01em;
}

/* ─── Divider + center legibility scrim ─── */
.map-slide__divider {
  position: absolute;
  left: 50%;
  top: 8%;
  bottom: 8%;
  width: 1px;
  z-index: 3;
  pointer-events: none;
  transform: translateX(-50%);
  background: linear-gradient(to bottom, transparent, rgba(157, 205, 66, 0.4) 20%, rgba(157, 205, 66, 0.4) 80%, transparent);
}

.map-slide__scrim {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 50%;
  width: clamp(320px, 48vw, 620px);
  z-index: 4;
  pointer-events: none;
  transform: translateX(-50%);
  background: linear-gradient(
    90deg,
    transparent 0%,
    rgba(5, 8, 6, 0.72) 24%,
    rgba(4, 7, 5, 0.86) 50%,
    rgba(5, 8, 6, 0.72) 76%,
    transparent 100%
  );
}

/* ─── Center text ─── */
.map-slide__center {
  position: absolute;
  left: 50%;
  top: 50%;
  z-index: 5;
  width: min(90vw, 640px);
  padding: 0 1.5rem;
  text-align: center;
  color: #f7fbf5;
  transform: translate(-50%, -50%);
}

.map-slide__eyebrow {
  margin: 0 0 0.85rem;
  font-family: var(--font);
  font-size: 0.7rem;
  font-weight: 800;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--brand-bright, #b8e860);
  text-shadow: 0 1px 10px rgba(0, 0, 0, 0.6);
}

.map-slide__headline {
  margin: 0;
  font-family: Georgia, 'Iowan Old Style', 'Palatino Linotype', 'Book Antiqua', Palatino, serif;
  font-weight: 600;
  font-size: clamp(1.9rem, 4.2vw, 3.1rem);
  line-height: 1.18;
  letter-spacing: -0.01em;
  color: #ffffff;
  text-shadow: 0 4px 26px rgba(0, 0, 0, 0.5), 0 1px 4px rgba(0, 0, 0, 0.45);
}

.map-slide__sub {
  margin: 1.1rem auto 0;
  max-width: 34rem;
  font-family: var(--font);
  font-size: clamp(0.92rem, 1.6vw, 1.02rem);
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.82);
  text-shadow: 0 2px 12px rgba(0, 0, 0, 0.4);
}

.map-slide__cta {
  margin-top: 1.5rem;
  display: inline-flex;
}

/* ─── Entrance ─── */
.map-slide--in .map-slide__center {
  animation: map-text-in 0.85s var(--ease-out, ease-out) both;
}

@keyframes map-text-in {
  from {
    opacity: 0;
    transform: translate(-50%, -42%);
  }
  to {
    opacity: 1;
    transform: translate(-50%, -50%);
  }
}

@media (prefers-reduced-motion: reduce) {
  .map-slide--in .map-slide__center {
    animation: none !important;
    opacity: 1 !important;
    transform: translate(-50%, -50%) !important;
  }
}

/* ─── Mobile: stack Red Deer → text → Sylvan Lake, each full width ─── */
@media (max-width: 860px) {
  .map-slide {
    flex-direction: column;
  }

  .map-slide__half {
    flex: 1 1 50%;
    min-height: 0;
  }

  .map-city-label {
    font-size: 24px;
  }

  .map-landmark text {
    font-size: 14px;
  }

  .map-slide__divider {
    left: 6%;
    right: 6%;
    top: 50%;
    bottom: auto;
    width: auto;
    height: 1px;
    transform: translateY(-50%);
    background: linear-gradient(to right, transparent, rgba(157, 205, 66, 0.4) 20%, rgba(157, 205, 66, 0.4) 80%, transparent);
  }

  .map-slide__scrim {
    left: 0;
    right: 0;
    top: 50%;
    bottom: auto;
    width: auto;
    height: clamp(210px, 42vh, 340px);
    transform: translateY(-50%);
    background: linear-gradient(
      180deg,
      transparent 0%,
      rgba(5, 8, 6, 0.72) 24%,
      rgba(4, 7, 5, 0.86) 50%,
      rgba(5, 8, 6, 0.72) 76%,
      transparent 100%
    );
  }

  .map-slide__center {
    width: min(92vw, 460px);
  }
}
</style>