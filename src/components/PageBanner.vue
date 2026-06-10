<script setup>
defineProps({
  eyebrow: { type: String, default: '' },
  title: { type: String, required: true },
  subtitle: { type: String, default: '' },
  image: { type: String, required: true },
  compact: { type: Boolean, default: false },
  /** Full homepage hero layout with slots: default (CTAs), stats, aside */
  home: { type: Boolean, default: false }
})
</script>

<template>
  <section class="page-banner" :class="{ compact, 'page-banner--home': home }">
    <div class="banner-media" :style="{ backgroundImage: `url(${image})` }"></div>
    <div class="banner-overlay"></div>
    <div class="banner-mesh" aria-hidden="true"></div>
    <div class="banner-noise" aria-hidden="true"></div>
    <div class="container banner-content">
      <template v-if="home">
        <div class="hero-grid">
          <div>
            <p v-if="eyebrow" class="eyebrow">{{ eyebrow }}</p>
            <h1>{{ title }}</h1>
            <p v-if="subtitle" class="banner-subtitle">{{ subtitle }}</p>
            <slot />
            <slot name="stats" />
          </div>
          <div v-if="$slots.aside" class="hero-aside hover-lift">
            <slot name="aside" />
          </div>
        </div>
      </template>
      <template v-else>
        <p v-if="eyebrow" class="eyebrow">{{ eyebrow }}</p>
        <h1>{{ title }}</h1>
        <p v-if="subtitle" class="banner-subtitle">{{ subtitle }}</p>
        <slot />
      </template>
    </div>
  </section>
</template>
