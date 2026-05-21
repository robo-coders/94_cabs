<script setup>
import { RouterLink } from 'vue-router'
import PageBanner from '../components/PageBanner.vue'
import RevealOnScroll from '../components/RevealOnScroll.vue'
import TestimonialStrip from '../components/TestimonialStrip.vue'
import {
  companyInfo,
  photoSet,
  serviceCategories,
  additionalServiceOfferings,
  testimonials
} from '../data/site'
</script>

<template>
  <div class="page services-page">
    <PageBanner
      eyebrow="SERVICES"
      title="Taxi services for everyday, airport, medical & business trips."
      subtitle="From local taxi rides and airport transfers to business travel, medical bookings, accessible vehicles, and shuttle planning, everything is handled by one dispatch team you can call any time."
      :image="photoSet.airportTerminal"
      compact
    >
      <div class="services-hero-meta">
        <span class="meta-chip">Licensed drivers</span>
        <span class="meta-chip">24 hour dispatch</span>
        <span class="meta-chip">Accessible vehicles</span>
        <span class="meta-chip">Airport and regional trips</span>
      </div>
      <div class="cta-row">
        <RouterLink class="btn btn-primary" to="/book-online">Book online</RouterLink>
        <a class="btn btn-outline-light" :href="companyInfo.phoneLink">Call dispatch</a>
      </div>
    </PageBanner>

    <section class="section-block services-catalog">
      <div class="container">
        <RevealOnScroll>
          <div class="section-head">
            <p class="eyebrow">SERVICE CATALOG</p>
            <h2>Taxi services for daily and planned travel</h2>
            <p class="section-lede">
              Browse our services and choose the one that fits your journey. Photos are for illustration only and may not show the exact vehicle sent.
            </p>
          </div>
        </RevealOnScroll>

        <div class="services-stack">
          <RevealOnScroll v-for="(cat, index) in serviceCategories" :key="cat.id">
            <article
              class="service-category"
              :class="{ 'service-category--reverse': index % 2 === 1 }"
            >
              <div
                class="service-category__media"
                :style="{ backgroundImage: `url(${cat.image})` }"
                role="img"
                :aria-label="cat.title"
              ></div>
              <div class="service-category__body">
                <h2>{{ cat.title }}</h2>
                <p class="section-lede" style="margin: 0">{{ cat.lede }}</p>
                <ul>
                  <li v-for="pt in cat.points" :key="pt">{{ pt }}</li>
                </ul>
                <RouterLink v-if="cat.link" class="service-category__link" :to="cat.link.to"
                  >{{ cat.link.label }} →</RouterLink
                >
              </div>
            </article>
          </RevealOnScroll>
        </div>
      </div>
    </section>

  <section class="section-block section-dark">
    <div class="container">
      <RevealOnScroll>
        <div class="section-head section-head--center">
          <p class="eyebrow">WHY RIDERS CHOOSE US</p>
          <h2>Reliable service people come back to</h2>
          <p class="section-lede">
            From airport transfers to everyday trips, customers count on clear communication, professional drivers, and dependable pickups.
          </p>
        </div>
      </RevealOnScroll>
      <RevealOnScroll>
        <TestimonialStrip :items="testimonials.services" variant="balanced" />
      </RevealOnScroll>
    </div>
  </section>

    <section class="section-block section-surface">
      <div class="container">
        <RevealOnScroll>
          <div class="section-head">
            <p class="eyebrow">BOOKING & EXTRAS</p>
            <h2>More ways to book and ride</h2>
          </div>
        </RevealOnScroll>
        <RevealOnScroll class="reveal-stagger">
          <div class="services-bento services-bento--three">
            <article v-for="block in additionalServiceOfferings" :key="block.title" class="bento-card hover-lift">
              <h3>{{ block.title }}</h3>
              <ul>
                <li v-for="line in block.items" :key="line">{{ line }}</li>
              </ul>
            </article>
          </div>
        </RevealOnScroll>
      </div>
    </section>

    <section class="section-block">
      <div class="container services-ops-split">
        <RevealOnScroll>
          <div class="services-ops-copy">
            <p class="eyebrow">DRIVERS & SAFETY</p>
            <h2>Licensed drivers and professional standards</h2>
            <p>
              Our drivers meet local licensing requirements and carry the documents needed for commercial passenger service.
            </p>
            <p>
              Clinics, hotels, and job sites can ask us about recurring bookings and after-hours pickup coordination.
            </p>
          </div>
        </RevealOnScroll>
        <RevealOnScroll>
          <div class="services-ops-visual">
            <img :src="photoSet.highway" alt="Regional highway service context" loading="lazy" />
          </div>
        </RevealOnScroll>
      </div>
    </section>

    <section class="section-block section-surface">
      <div class="container">
        <RevealOnScroll>
          <div class="section-head section-head--center">
            <p class="eyebrow">SPECIAL SERVICES</p>
            <h2>Shuttle, accessible, and business travel</h2>
          </div>
        </RevealOnScroll>
        <RevealOnScroll class="reveal-stagger">
          <div class="services-special-grid card-row card-row--adaptive">
            <article class="panel-card hover-lift">
              <div
                class="services-special-thumb"
                :style="{ backgroundImage: `url(${photoSet.shuttle})` }"
                role="img"
                aria-hidden="true"
              ></div>
              <div class="services-special-body">
                <h3>Shuttle services</h3>
                <p>Shared and group transport for workplaces, events and planned trips.</p>
                <RouterLink class="btn btn-ghost-dark" to="/94-shuttle">94 Shuttle</RouterLink>
              </div>
            </article>
            <article class="panel-card hover-lift">
              <div
                class="services-special-thumb"
                :style="{ backgroundImage: `url(${photoSet.wheelchair})` }"
                role="img"
                aria-hidden="true"
              ></div>
              <div class="services-special-body">
                <h3>Accessible vehicles</h3>
                <p>Wheelchair accessible vehicle options with advance booking and clear trip details.</p>
                <RouterLink class="btn btn-ghost-dark" to="/handicap-services">Handicap services</RouterLink>
              </div>
            </article>
            <article class="panel-card hover-lift">
              <div
                class="services-special-thumb"
                :style="{ backgroundImage: `url(${photoSet.business})` }"
                role="img"
                aria-hidden="true"
              ></div>
              <div class="services-special-body">
                <h3>Business travel</h3>
                <p>Reliable transport for staff, guests, and regular account-based bookings.</p>
                <RouterLink class="btn btn-ghost-dark" to="/contact-us">Contact</RouterLink>
              </div>
            </article>
          </div>
        </RevealOnScroll>
      </div>
    </section>

    <section class="section-block">
      <div class="container cta-panel">
        <RevealOnScroll>
          <h2>Need a ride? We’re ready to help</h2>
          <p>Book online or call dispatch to arrange your trip, ask questions or share any special pickup details.</p>
          <div class="cta-row">
            <a class="btn btn-primary" :href="companyInfo.phoneLink">Call dispatch</a>
            <RouterLink class="btn btn-outline-light" to="/book-online">Book online</RouterLink>
          </div>
        </RevealOnScroll>
      </div>
</section>
  </div>
</template>

<style scoped>
.services-catalog {
  padding-top: clamp(2.5rem, 5vw, 4rem);
}

.services-stack {
  display: grid;
  gap: 1.5rem;
}

.services-bento--three {
  display: grid;
  gap: 1.25rem;
}

@media (min-width: 900px) {
  .services-bento--three {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  .services-bento--three .bento-card {
    height: 100%;
    display: flex;
    flex-direction: column;
  }

  .services-bento--three .bento-card ul {
    flex: 1;
  }
}

.services-ops-split {
  display: grid;
  gap: 2rem;
  align-items: center;
}

@media (min-width: 880px) {
  .services-ops-split {
    grid-template-columns: 1fr 1fr;
    gap: 3rem;
  }
}

.services-ops-visual {
  border-radius: var(--radius-lg);
  overflow: hidden;
  box-shadow: var(--shadow-md);
}

.services-ops-visual img {
  width: 100%;
  min-height: 280px;
  max-height: 380px;
  object-fit: cover;
}

.services-special-grid {
  display: grid;
  gap: 1.25rem;
}

.services-special-grid .panel-card {
  padding: 0;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  height: 100%;
}

.services-special-thumb {
  min-height: 160px;
  background-size: cover;
  background-position: center;
}

.services-special-body {
  padding: 1.25rem 1.35rem 1.35rem;
  display: flex;
  flex-direction: column;
  flex: 1;
}

.services-special-body p {
  flex: 1;
  color: var(--ink-soft);
  margin-bottom: 1rem;
}

.services-special-body .btn {
  align-self: flex-start;
  margin-top: auto;
}
</style>
