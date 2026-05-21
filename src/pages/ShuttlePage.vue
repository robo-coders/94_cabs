<script setup>
import { RouterLink } from 'vue-router'
import PageBanner from '../components/PageBanner.vue'
import RevealOnScroll from '../components/RevealOnScroll.vue'
import { companyInfo, photoSet, testimonials } from '../data/site'

const coordinationSteps = [
  {
    step: '01',
    title: 'Brief & headcount',
    text: 'Tell us how many people are travelling, whether there is luggage and if anyone needs extra assistance.'
  },
  {
    step: '02',
    title: 'Pickup plan',
    text: 'We organise the pickup details and help make sure the right vehicles are in the right place at the right time.'
  },
  {
    step: '03',
    title: 'Timing',
    text: 'We confirm the pickup timing and any important schedule details before your booking is finalised.'
  },
  {
    step: '04',
    title: 'Day of travel',
    text: 'If anything changes on the day, our team can help with updates and keep your booking moving smoothly.'
  }
]

const useCases = [
  { title: 'Workplace loops', text: 'Shift changes, site to site travel, and regular staff transport.' },
  { title: 'Airport arrivals', text: 'Ideal when multiple travellers are arriving within the same hour.' },
  { title: 'Venues & events', text: 'Hotel events and conference pickups with clear meeting points when needed.' },
  { title: 'Industrial crews', text: 'Crew transport with timings, waiting time, and pickup details agreed in advance.' }
]
</script>

<template>
  <div class="page shuttle-page">
    <PageBanner
      eyebrow="94 SHUTTLE"
      title="Make group travel easier with one booking contact instead of several separate pickups."
      subtitle="From workplace transport to airport runs and event pickups, our dispatch team can help plan and manage your booking from start to finish."
      :image="photoSet.shuttle"
      compact
    >
      <div class="cta-row">
        <a class="btn btn-primary" :href="companyInfo.phoneLink">Plan with dispatch</a>
        <RouterLink class="btn btn-outline-light" to="/book-online">Book online</RouterLink>
      </div>
    </PageBanner>

    <section class="section-block shuttle-coordination">
      <div class="container">
        <RevealOnScroll>
          <div class="section-head">
            <p class="eyebrow">COORDINATION FLOW</p>
            <h2>How shuttle planning works with our Booking team</h2>
            <p class="section-lede">
              This is a professional shuttle service with licensed drivers, not a charter bus service. Availability and pickup planning depend on the date and your booking needs, and we make everything clear before your journey is confirmed.
            </p>
          </div>
        </RevealOnScroll>

        <RevealOnScroll class="reveal-stagger">
          <ol class="shuttle-steps">
            <li v-for="s in coordinationSteps" :key="s.step" class="shuttle-step panel-card hover-lift">
              <span class="shuttle-step__num">{{ s.step }}</span>
              <div>
                <h3>{{ s.title }}</h3>
                <p>{{ s.text }}</p>
              </div>
            </li>
          </ol>
        </RevealOnScroll>
      </div>
    </section>

    <section class="section-block section-surface">
      <div class="container">
        <RevealOnScroll>
          <div class="section-head section-head--center">
            <p class="eyebrow">WHERE IT FITS</p>
            <h2>Shuttle style moves beat separate taxis when timing is shared</h2>
          </div>
        </RevealOnScroll>
        <RevealOnScroll class="reveal-stagger">
          <div class="shuttle-use-grid">
            <article v-for="u in useCases" :key="u.title" class="shuttle-use-card panel-card hover-lift">
              <h3>{{ u.title }}</h3>
              <p>{{ u.text }}</p>
            </article>
          </div>
        </RevealOnScroll>
      </div>
    </section>

    <section class="section-block">
      <div class="container shuttle-ops-grid">
        <RevealOnScroll>
          <div class="shuttle-ops-visual">
            <img :src="photoSet.vanInterior" alt="Interior configured for group shuttle passengers" loading="lazy" />
            <div class="shuttle-ops-badge">Vans · SUVs · coordinated units</div>
          </div>
        </RevealOnScroll>
        <RevealOnScroll>
          <article class="shuttle-ops-panel panel-card">
            <p class="eyebrow">OPERATIONS</p>
            <h2>Pricing and vehicle mix</h2>
            <p>
              Shuttle bookings can include a mix of metered travel and agreed flat rate sections, especially when waiting time is expected. We explain the pricing clearly in advance so your team knows what to expect before the journey is confirmed.
            </p>
            <ul class="shuttle-checklist">
              <li>Clear timing details confirmed before the day</li>
              <li>One dispatch contact for changes on the day</li>
              <li>Extra vehicles arranged when needed</li>
            </ul>
            <a class="btn btn-dark" :href="companyInfo.phoneLink">Request a quote</a>
          </article>
        </RevealOnScroll>
      </div>
    </section>

    <section class="section-block section-dark">
  <div class="container">
    <RevealOnScroll>
      <div class="section-head section-head--center">
        <p class="eyebrow">TRUST</p>
        <h2>Reliable planning for group travel</h2>
        <p class="section-lede">
          We help keep shuttle bookings clear, organised, and easy to manage from the first enquiry to the day of travel.
        </p>
      </div>
    </RevealOnScroll>
  </div>
</section>

    <section class="section-block">
      <div class="container cta-panel">
        <RevealOnScroll>
          <h2>Send us your trip details and we will get back to you</h2>
          <p>if helpful, you can send pickup notes, photos, or simple directions so our team can plan the journey clearly.</p>
          <div class="cta-row">
            <a class="btn btn-primary" :href="companyInfo.phoneLink">Call {{ companyInfo.phoneDisplay }}</a>
            <RouterLink class="btn btn-outline-light" to="/contact-us">Contact form</RouterLink>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  </div>
</template>

<style scoped>
.shuttle-steps {
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  gap: 1rem;
}

@media (min-width: 720px) {
  .shuttle-steps {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (min-width: 1100px) {
  .shuttle-steps {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
}

.shuttle-step {
  display: grid;
  gap: 0.85rem;
  align-content: start;
}

.shuttle-step__num {
  font-size: 0.72rem;
  font-weight: 800;
  letter-spacing: 0.1em;
  color: var(--brand-deep);
}

.shuttle-step h3 {
  margin-bottom: 0.4rem;
}

.shuttle-use-grid {
  display: grid;
  gap: 1.25rem;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 240px), 1fr));
}

.shuttle-ops-grid {
  display: grid;
  gap: 1.5rem;
  align-items: stretch;
}

@media (min-width: 880px) {
  .shuttle-ops-grid {
    grid-template-columns: 1fr 1fr;
  }
}

.shuttle-ops-visual {
  position: relative;
  border-radius: var(--radius-lg);
  overflow: hidden;
  min-height: 320px;
  box-shadow: var(--shadow-md);
}

.shuttle-ops-visual img {
  width: 100%;
  height: 100%;
  min-height: 320px;
  object-fit: cover;
}

.shuttle-ops-badge {
  position: absolute;
  left: 1.25rem;
  bottom: 1.25rem;
  padding: 0.5rem 0.85rem;
  border-radius: 999px;
  font-size: 0.78rem;
  font-weight: 800;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: #fff;
  background: rgba(8, 12, 10, 0.75);
  border: 1px solid rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(8px);
}

.shuttle-ops-panel {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.shuttle-checklist {
  margin: 1rem 0 1.25rem;
  padding: 0;
  list-style: none;
  display: grid;
  gap: 0.55rem;
}

.shuttle-checklist li {
  padding-left: 1.35rem;
  position: relative;
  color: var(--ink-soft);
  font-size: 0.95rem;
}

.shuttle-checklist li::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0.55rem;
  width: 8px;
  height: 8px;
  border-radius: 2px;
  background: var(--brand);
}

.shuttle-ops-panel .btn {
  margin-top: auto;
  align-self: flex-start;
}
</style>
