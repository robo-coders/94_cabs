<script setup>
import { computed } from 'vue'

const props = defineProps({
  items: {
    type: Array,
    default: () => []
  },
  /** auto | marquee | featured | balanced | grid | single */
  variant: {
    type: String,
    default: 'auto'
  },
  /** @deprecated use variant="marquee" */
  scrollable: { type: Boolean, default: false }
})

const resolvedVariant = computed(() => {
  if (props.variant !== 'auto') return props.variant
  if (props.scrollable) return 'marquee'
  const n = props.items.length
  if (n <= 1) return 'single'
  if (n === 2) return 'balanced'
  if (n >= 4) return 'marquee'
  return 'grid'
})

const marqueeItems = computed(() => {
  if (resolvedVariant.value !== 'marquee') return props.items
  return [...props.items, ...props.items]
})

const featuredLead = computed(() => props.items[0])
const featuredRest = computed(() => props.items.slice(1))
</script>

<template>
  <div class="testimonial-showcase" :class="`testimonial-showcase--${resolvedVariant}`">
    <div v-if="resolvedVariant === 'marquee'" class="testimonial-marquee" aria-label="Customer testimonials">
      <div class="testimonial-marquee__track">
        <article
          v-for="(t, i) in marqueeItems"
          :key="`${i}-${t.author}`"
          class="testimonial-card testimonial-card--marquee"
        >
          <p class="testimonial-card__quote">“{{ t.quote }}”</p>
          <p class="testimonial-card__meta">{{ t.author }}</p>
          <p v-if="t.context" class="testimonial-card__ctx">{{ t.context }}</p>
        </article>
      </div>
    </div>

    <div v-else-if="resolvedVariant === 'featured'" class="testimonial-featured">
      <article v-if="featuredLead" class="testimonial-card testimonial-card--lead hover-lift">
        <p class="testimonial-card__quote">“{{ featuredLead.quote }}”</p>
        <p class="testimonial-card__meta">{{ featuredLead.author }}</p>
        <p v-if="featuredLead.context" class="testimonial-card__ctx">{{ featuredLead.context }}</p>
      </article>
      <div v-if="featuredRest.length" class="testimonial-featured__secondary">
        <article
          v-for="(t, i) in featuredRest"
          :key="i"
          class="testimonial-card testimonial-card--compact hover-lift"
        >
          <p class="testimonial-card__quote">“{{ t.quote }}”</p>
          <p class="testimonial-card__meta">{{ t.author }}</p>
          <p v-if="t.context" class="testimonial-card__ctx">{{ t.context }}</p>
        </article>
      </div>
    </div>

    <article
      v-else-if="resolvedVariant === 'single' && items[0]"
      class="testimonial-card testimonial-card--spotlight hover-lift"
    >
      <p class="testimonial-card__quote">“{{ items[0].quote }}”</p>
      <p class="testimonial-card__meta">{{ items[0].author }}</p>
      <p v-if="items[0].context" class="testimonial-card__ctx">{{ items[0].context }}</p>
    </article>

    <div v-else-if="resolvedVariant === 'balanced'" class="testimonial-balanced">
      <article v-for="(t, i) in items" :key="i" class="testimonial-card hover-lift">
        <p class="testimonial-card__quote">“{{ t.quote }}”</p>
        <p class="testimonial-card__meta">{{ t.author }}</p>
        <p v-if="t.context" class="testimonial-card__ctx">{{ t.context }}</p>
      </article>
    </div>

    <div v-else class="testimonial-grid" :style="{ '--cols': Math.min(items.length, 3) }">
      <article v-for="(t, i) in items" :key="i" class="testimonial-card hover-lift">
        <p class="testimonial-card__quote">“{{ t.quote }}”</p>
        <p class="testimonial-card__meta">{{ t.author }}</p>
        <p v-if="t.context" class="testimonial-card__ctx">{{ t.context }}</p>
      </article>
    </div>
  </div>
</template>

<style scoped>
.testimonial-showcase {
  width: 100%;
}

.testimonial-marquee {
  overflow: hidden;
  mask-image: linear-gradient(90deg, transparent, #000 6%, #000 94%, transparent);
  -webkit-mask-image: linear-gradient(90deg, transparent, #000 6%, #000 94%, transparent);
}

.testimonial-marquee__track {
  display: flex;
  gap: 1.25rem;
  width: max-content;
  animation: testimonial-marquee 48s linear infinite;
}

.testimonial-card--marquee {
  flex: 0 0 min(340px, 78vw);
}

@keyframes testimonial-marquee {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-50%);
  }
}

@media (prefers-reduced-motion: reduce) {
  .testimonial-marquee__track {
    animation: none;
    flex-wrap: wrap;
    width: 100%;
    justify-content: center;
  }

  .testimonial-marquee {
    mask-image: none;
    -webkit-mask-image: none;
  }

  .testimonial-card--marquee {
    flex: 1 1 min(280px, 100%);
  }
}

.testimonial-featured {
  display: grid;
  gap: 1.25rem;
  align-items: stretch;
}

@media (min-width: 860px) {
  .testimonial-featured {
    grid-template-columns: 1.25fr 1fr;
  }
}

.testimonial-card--lead {
  padding: clamp(1.5rem, 3vw, 2rem);
}

.testimonial-card--lead .testimonial-card__quote {
  font-size: clamp(1.05rem, 2vw, 1.2rem);
  line-height: 1.65;
}

.testimonial-featured__secondary {
  display: grid;
  gap: 1rem;
  align-content: stretch;
}

.testimonial-featured__secondary .testimonial-card {
  height: 100%;
  display: flex;
  flex-direction: column;
}

.testimonial-card--spotlight {
  max-width: 52rem;
  margin-inline: auto;
  text-align: center;
  padding: clamp(1.75rem, 4vw, 2.5rem);
}

.testimonial-card--spotlight .testimonial-card__quote {
  font-size: clamp(1.1rem, 2.2vw, 1.28rem);
}

.testimonial-balanced {
  display: grid;
  gap: 1.25rem;
  max-width: 960px;
  margin-inline: auto;
}

@media (min-width: 720px) {
  .testimonial-balanced {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

.testimonial-grid {
  display: grid;
  gap: 1.25rem;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 280px), 1fr));
}

@media (min-width: 860px) {
  .testimonial-grid {
    grid-template-columns: repeat(var(--cols, 3), minmax(0, 1fr));
  }
}

.testimonial-grid .testimonial-card,
.testimonial-balanced .testimonial-card,
.testimonial-featured .testimonial-card {
  height: 100%;
  display: flex;
  flex-direction: column;
}

.testimonial-grid .testimonial-card__quote,
.testimonial-balanced .testimonial-card__quote {
  flex: 1;
}
</style>
