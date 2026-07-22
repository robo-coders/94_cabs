<script setup>
/**
 * Shared text block for every hero slide. Both slides render through this
 * single component so their copy is guaranteed to share the same position,
 * sizing, alignment, and — critically — the same explicit, self-contained
 * text color. Nothing here is inherited from an ambient page color, on
 * purpose: that's what made the previous version unreadable.
 */
defineProps({
  eyebrow: { type: String, default: '' },
  title: { type: String, required: true },
  subtitle: { type: String, default: '' },
  ctas: { type: Array, default: () => [] },
  active: { type: Boolean, default: false }
})
</script>

<template>
  <div class="hero-text" :class="{ 'hero-text--in': active }">
    <p v-if="eyebrow" class="hero-text__eyebrow">{{ eyebrow }}</p>
    <h1 class="hero-text__title">{{ title }}</h1>
    <p v-if="subtitle" class="hero-text__subtitle">{{ subtitle }}</p>
    <div v-if="ctas.length" class="hero-text__ctas">
      <template v-for="cta in ctas" :key="cta.label">
        <RouterLink v-if="cta.to" :to="cta.to" class="btn" :class="`btn-${cta.variant || 'primary'}`">
          {{ cta.label }}
        </RouterLink>
        <a v-else :href="cta.href" class="btn" :class="`btn-${cta.variant || 'primary'}`">
          {{ cta.label }}
        </a>
      </template>
    </div>
  </div>
</template>

<style scoped>
.hero-text {
  max-width: 42rem;
  /* Explicit, self-contained color — never relies on inheriting an
     ambient/page-level text color, which is exactly what went wrong before. */
  color: #f7fbf5;
}

.hero-text__eyebrow {
  margin: 0 0 0.75rem;
  font-size: 0.72rem;
  font-weight: 800;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--brand-bright, #b8e860);
  text-shadow: 0 1px 10px rgba(0, 0, 0, 0.55);
}

.hero-text__title {
  margin: 0;
  max-width: 15ch;
  font-size: clamp(2.05rem, 5.4vw, 4.1rem);
  line-height: 1.06;
  letter-spacing: -0.03em;
  font-weight: 900;
  color: #ffffff;
  text-wrap: balance;
  text-shadow: 0 4px 28px rgba(0, 0, 0, 0.45), 0 1px 4px rgba(0, 0, 0, 0.4);
}

.hero-text__subtitle {
  margin-top: 1.15rem;
  max-width: 50ch;
  font-size: clamp(0.95rem, 1.9vw, 1.1rem);
  line-height: 1.68;
  color: rgba(255, 255, 255, 0.86);
  text-shadow: 0 2px 14px rgba(0, 0, 0, 0.4);
}

.hero-text__ctas {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-top: 1.45rem;
}

/* Entrance animation — replays whenever this component is (re)mounted,
   which HeroSlider triggers by changing this component's :key on activation. */
.hero-text--in {
  animation: hero-text-in 0.85s var(--ease-out, ease-out) both;
}

.hero-text--in .hero-text__eyebrow {
  animation: hero-text-in 0.6s var(--ease-out, ease-out) both;
}

.hero-text--in .hero-text__title {
  animation: hero-text-in 0.7s 0.08s var(--ease-out, ease-out) both;
}

.hero-text--in .hero-text__subtitle {
  animation: hero-text-in 0.7s 0.16s var(--ease-out, ease-out) both;
}

.hero-text--in .hero-text__ctas {
  animation: hero-text-in 0.7s 0.24s var(--ease-out, ease-out) both;
}

@keyframes hero-text-in {
  from {
    opacity: 0;
    transform: translateY(18px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (prefers-reduced-motion: reduce) {
  .hero-text--in,
  .hero-text--in .hero-text__eyebrow,
  .hero-text--in .hero-text__title,
  .hero-text--in .hero-text__subtitle,
  .hero-text--in .hero-text__ctas {
    animation: none !important;
    opacity: 1 !important;
    transform: none !important;
  }
}

@media (max-width: 520px) {
  .hero-text__ctas {
    flex-direction: column;
    align-items: stretch;
  }

  .hero-text__ctas .btn {
    text-align: center;
  }
}
</style>