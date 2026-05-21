<script setup>
import { RouterLink } from 'vue-router'
import PageBanner from '../components/PageBanner.vue'
import RevealOnScroll from '../components/RevealOnScroll.vue'
import TestimonialStrip from '../components/TestimonialStrip.vue'
import { companyInfo, photoSet, testimonials } from '../data/site'

const trustPillars = [
  {
    title: 'Time without pressure',
    text: 'Extra time for boarding, securement and getting in and out comfortably, with no pressure to rush the process.'
  },
  {
    title: 'Consent first assistance',
    text: 'We ask before offering support and follow the rider’s preference throughout the journey.'
  },
  {
    title: 'Notes that stay with the booking',
    text: 'Important details like door codes, bay letters, and chair dimensions can be added for recurring trips.'
  }
]

const bookingTips = [
  {
    q: 'When should I book ahead?',
    a: 'wheelchair accessible vehicle are limited, so booking ahead is best. Same day may still be possible on quieter days.'
  },
  {
    q: 'What should I tell dispatch?',
    a: 'Tell us about your wheelchair, companion, pickup details, and any access needs.'
  },
  {
    q: 'Is this ambulance service?',
    a: 'No, this is planned passenger transport in WAV capable vans not emergency medical service.'
  }
]
</script>

<template>
  <div class="page handicap-page">
    <PageBanner
      eyebrow="ACCESSIBLE TRANSPORT"
      title="Wheelchair accessible transport with care and respect"
      subtitle="Our service includes wheelchair accessible vehicles, support for accessibility needs, and drivers who help make every journey more comfortable and reassuring."
      :image="photoSet.wheelchair"
      compact
    >
      <div class="cta-row">
        <a class="btn btn-primary" :href="companyInfo.phoneLink">Call to book</a>
        <RouterLink class="btn btn-outline-light" to="/contact-us">Ask a question</RouterLink>
      </div>
    </PageBanner>

    <section class="section-block handicap-intro">
      <div class="container">
        <RevealOnScroll>
          <div class="handicap-intro-panel">
            <p class="eyebrow">OUR APPROACH</p>
            <h2>Support that never feels rushed</h2>
            <p>
              Many riders need a little extra time, thoughtful assistance and a driver who understands how important comfort and dignity are throughout the journey.
            </p>
            <br>
            <p>
              Companions can travel too when seating allows. Please mention the full number of passengers when booking so we can send the right vehicle for your journey.
            </p>
          </div>
        </RevealOnScroll>
      </div>
    </section>

    <section class="section-block section-surface">
      <div class="container">
        <RevealOnScroll>
          <div class="section-head section-head--center">
            <p class="eyebrow">WHAT TO EXPECT</p>
            <h2>Calm, clear & considerate at every step</h2>
          </div>
        </RevealOnScroll>
        <RevealOnScroll class="reveal-stagger">
          <div class="handicap-pillars">
            <article v-for="p in trustPillars" :key="p.title" class="handicap-pillar panel-card hover-lift">
              <h3>{{ p.title }}</h3>
              <p>{{ p.text }}</p>
            </article>
          </div>
        </RevealOnScroll>
      </div>
    </section>

    <section class="section-block">
      <div class="container handicap-visual-block">
        <RevealOnScroll>
          <figure class="handicap-figure">
            <img :src="photoSet.medical" alt="Calm transportation to healthcare appointments" loading="lazy" />
            <figcaption>
              Non-emergency medical and senior trips with extra time for boarding and support.
            </figcaption>
          </figure>
        </RevealOnScroll>
        <RevealOnScroll>
          <div class="handicap-faq">
            <p class="eyebrow">BOOKING PRACTICE</p>
            <h2>Questions before the first ride</h2>
            <details v-for="item in bookingTips" :key="item.q" class="handicap-faq-item">
              <summary>{{ item.q }}</summary>
              <p>{{ item.a }}</p>
            </details>
          </div>
        </RevealOnScroll>
      </div>
    </section>

    <section class="section-block section-dark handicap-trust">
      <div class="container">
        <RevealOnScroll>
          <div class="section-head section-head--center">
            <p class="eyebrow">TRUST</p>
            <h2>Families notice when details are handled properly</h2>
          </div>
        </RevealOnScroll>
        <RevealOnScroll>
          <TestimonialStrip :items="testimonials.handicap" variant="single" />
        </RevealOnScroll>
      </div>
    </section>

    <section class="section-block">
      <div class="container cta-panel handicap-cta">
        <RevealOnScroll>
          <h2>Talk through door widths, snow banks and chair brakes — we will take notes.</h2>
          <p>Medical trips are stressful enough without repeating the same details every time.</p>
          <div class="cta-row">
            <a class="btn btn-primary" :href="companyInfo.phoneLink">Call {{ companyInfo.phoneDisplay }}</a>
            <RouterLink class="btn btn-outline-light" to="/book-online">Try web booking</RouterLink>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  </div>
</template>

<style scoped>
.handicap-page {
  --handicap-accent: #5a8f6e;
}

.handicap-intro-panel {
  max-width: 42rem;
  margin-inline: auto;
  text-align: center;
  padding: clamp(1.5rem, 4vw, 2.5rem);
  border-radius: var(--radius-lg);
  background: linear-gradient(180deg, #f6faf7, #eef4ef);
  border: 1px solid var(--line-light);
}

.handicap-intro-panel h2 {
  max-width: none;
}

.handicap-intro-panel p {
  color: var(--ink-soft);
  max-width: var(--measure);
  margin-inline: auto;
}

.handicap-pillars {
  display: grid;
  gap: 1.25rem;
}

@media (min-width: 768px) {
  .handicap-pillars {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}

.handicap-pillar {
  text-align: center;
  background: #fff;
}

.handicap-pillar h3 {
  color: #1a3d28;
}

.handicap-visual-block {
  display: grid;
  gap: 2rem;
  align-items: start;
}

@media (min-width: 880px) {
  .handicap-visual-block {
    grid-template-columns: 1fr 1fr;
    gap: 2.5rem;
  }
}

.handicap-figure {
  margin: 0;
  border-radius: var(--radius-lg);
  overflow: hidden;
  box-shadow: var(--shadow-sm);
}

.handicap-figure img {
  width: 100%;
  min-height: 260px;
  max-height: 360px;
  object-fit: cover;
}

.handicap-figure figcaption {
  padding: 1rem 1.15rem;
  font-size: 0.9rem;
  color: var(--ink-soft);
  background: var(--surface-2);
  border-top: 1px solid var(--line-light);
}

.handicap-faq {
  display: grid;
  gap: 0.75rem;
}

.handicap-faq-item {
  border: 1px solid var(--line-light);
  border-radius: var(--radius-sm);
  background: #fff;
  padding: 0 1rem;
}

.handicap-faq-item summary {
  cursor: pointer;
  font-weight: 750;
  padding: 1rem 0;
  list-style: none;
}

.handicap-faq-item summary::-webkit-details-marker {
  display: none;
}

.handicap-faq-item summary::after {
  content: '+';
  float: right;
  color: var(--brand-deep);
  font-weight: 800;
}

.handicap-faq-item[open] summary::after {
  content: '−';
}

.handicap-faq-item p {
  margin: 0 0 1rem;
  color: var(--ink-soft);
  font-size: 0.95rem;
  line-height: 1.65;
}

.handicap-cta {
  background: linear-gradient(135deg, #0f1612, #1a2a22);
}
</style>
