<script setup>
import { RouterLink } from 'vue-router'
import PageBanner from '../components/PageBanner.vue'
import RevealOnScroll from '../components/RevealOnScroll.vue'
import { companyInfo, photoSet, testimonials } from '../data/site'

const milestones = [
  { year: 'Local first', text: 'Decisions made in Red Deer dispatch, maintenance and rider relationships stay on the ground.' },
  { year: 'Dispatch-led', text: 'We invested in live voice backup and ETA clarity before marketing spend.' },
  { year: 'Fleet mix', text: 'Sedans, SUVs, vans, and WAV units sized for real trips not one size fits all.' }
]
</script>

<template>
  <div class="page about-page">
    <PageBanner
      eyebrow="ABOUT US"
      title="Built in Red Deer for riders who notice the details"
      subtitle="Local ownership, disciplined dispatch and a fleet maintained to feel professional from a franchise playbook."
      :image="photoSet.dispatch"
      compact
    >
      <div class="cta-row">
        <RouterLink class="btn btn-primary" to="/services">Our services</RouterLink>
        <a class="btn btn-outline-light" :href="companyInfo.phoneLink">Call dispatch</a>
      </div>
    </PageBanner>

    <!-- Brand story: editorial asymmetric layout -->
    <section class="section-block about-story">
      <div class="container about-story-grid">
        <RevealOnScroll>
          <div class="about-story-copy">
            <p class="eyebrow">OUR STORY</p>
            <h2>Why we invested heavier in dispatch than in billboards</h2>
            <p>
              Riders remember the ride cabin comfort, how turns felt, whether the driver listened. They also remember
              the thirty minutes after booking when nobody knew where the car was. We built around the second problem
              first.
            </p>
            <p>
              That means live voice backup for the app, clearer ETAs when QEII slows, and drivers expected to behave
              like professionals even on quiet Tuesday afternoons.
            </p>
            <blockquote class="about-pull-quote">
              "Our goal is simple: clear communication, dependable pickups and rides people feel good booking again."
            </blockquote>
          </div>
        </RevealOnScroll>

        <RevealOnScroll>
          <figure class="about-story-visual">
            <div class="about-story-image about-story-image--main">
              <img :src="photoSet.fleet" alt="94 Cabs fleet vehicle in Red Deer" loading="lazy" />
            </div>
          </figure>
        </RevealOnScroll>
      </div>
    </section>

    <section class="section-block section-surface about-milestones">
      <div class="container">
        <RevealOnScroll>
          <div class="section-head section-head--center">
            <p class="eyebrow">HOW WE OPERATE</p>
            <h2>Three commitments riders feel on every trip</h2>
          </div>
        </RevealOnScroll>
        <RevealOnScroll class="reveal-stagger">
          <div class="about-milestone-row">
            <article v-for="m in milestones" :key="m.year" class="about-milestone panel-card hover-lift">
              <p class="about-milestone__label">{{ m.year }}</p>
              <p>{{ m.text }}</p>
            </article>
          </div>
        </RevealOnScroll>
      </div>
    </section>

    <section class="section-block">
      <div class="container standards-grid standards-grid--adaptive">
        <RevealOnScroll>
          <article class="panel-card hover-lift">
            <h3>Driver licensing</h3>
            <p>
              Class 4 Professional licences, five-year abstracts on intake, and ongoing insurer visibility on serious
              patterns across Canada.
            </p>
          </article>
        </RevealOnScroll>
        <RevealOnScroll>
          <article class="panel-card hover-lift">
            <h3>Vehicle standards</h3>
            <p>
              Rotation of sedans, SUVs, and vans sized for real cargo. Non-smoking cabins and regular detailing blocks.
            </p>
          </article>
        </RevealOnScroll>
        <RevealOnScroll>
          <article class="panel-card hover-lift">
            <h3>Customer care path</h3>
            <p>
              Lost something? Dispatch notes the trip ID and routes you to someone on the same screen
              the driver used.
            </p>
          </article>
        </RevealOnScroll>
      </div>
    </section>

    <section class="section-block section-surface">
      <div class="container about-dual-panels">
        <RevealOnScroll>
          <article class="panel-card panel-card--story hover-lift">
            <p class="eyebrow">PASSENGER EXPERIENCE</p>
            <h2>From first ring to door opening</h2>
            <p>
              Our dispatch team confirms the key pickup details, from the right hospital entrance to the correct hotel door, so your driver arrives in the right place without delay.
            </p>
            <p>
              If there is a problem, we focus on resolving it quickly with practical support, whether that means sending another vehicle, reviewing the fare or calling you back promptly.
            </p>
          </article>
        </RevealOnScroll>

        <RevealOnScroll>
          <article class="panel-card panel-card--facts hover-lift">
            <p class="panel-kicker">Quick facts</p>

            <ul class="facts-list">
              <li>
                <span class="facts-dot"></span>
                <span>24/7 dispatch under Taxi Dispatch Services branding</span>
              </li>
              <li>
                <span class="facts-dot"></span>
                <span>Airport, business, senior, and non-emergency medical work</span>
              </li>
              <li>
                <span class="facts-dot"></span>
                <span>Website booking, passenger app and phone dispatch</span>
              </li>
              <li>
                <span class="facts-dot"></span>
                <span>Payments: cash, cards, e-transfer, Apple Pay and Interac</span>
              </li>
              <li>
                <span class="facts-dot"></span>
                <span>Dispatch: {{ companyInfo.phoneDisplay }}</span>
              </li>
            </ul>
          </article>
        </RevealOnScroll>
      </div>
    </section>

    <section class="section-block section-dark">
      <div class="container">
        <RevealOnScroll>
          <div class="section-head section-head--center">
            <p class="eyebrow">EVERYDAY TRAVEL</p>
            <h2>How we help riders every day</h2>
            <p class="section-lede">
              From everyday local trips to planned journeys, we make booking simple and support riders with dependable service.
            </p>
          </div>
        </RevealOnScroll>

        <RevealOnScroll>
          <div class="trust-grid">
            <article class="trust-card">
              <h3>Local rides</h3>
              <p>Quick and convenient trips across Red Deer for shopping, errands, appointments, and everyday travel.</p>
            </article>

            <article class="trust-card">
              <h3>Scheduled pickups</h3>
              <p>Pre book your ride for early mornings, airport journeys, work travel or important appointments.</p>
            </article>

            <article class="trust-card">
              <h3>Friendly support</h3>
              <p>If you need help with your booking, our dispatch team is ready to assist by phone at any time.</p>
            </article>
          </div>
        </RevealOnScroll>
      </div>
    </section>

    <section class="section-block about-community-band">
      <div class="container about-community-grid">
        <RevealOnScroll>
          <div class="about-community-image">
            <img :src="photoSet.team" alt="94 Cabs team coordination" loading="lazy" />
          </div>
        </RevealOnScroll>
        <RevealOnScroll>
          <div class="about-community-copy">
            <p class="eyebrow">COMMUNITY</p>
            <h2>Red Deer is small enough that reputation still moves by word of mouth</h2>
            <p>
             Our service is shaped by the people who rely on us every day. When something is not right, we hear about it, we learn from it, and we work to make the next ride better.
            </p>
            <RouterLink class="btn btn-dark" to="/contact-us">Reach the team</RouterLink>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  </div>
</template>

<style scoped>
.about-story-grid {
  display: grid;
  gap: clamp(2rem, 4vw, 3.5rem);
  align-items: start;
}

@media (min-width: 900px) {
  .about-story-grid {
    grid-template-columns: 1.05fr 0.95fr;
    gap: clamp(2.5rem, 5vw, 4.5rem);
  }
}

.about-pull-quote {
  margin: 1.75rem 0 0;
  padding: 1.25rem 0 0 1.25rem;
  border-left: 3px solid var(--brand);
  font-size: clamp(1.05rem, 2vw, 1.2rem);
  font-weight: 650;
  line-height: 1.55;
  color: var(--ink);
  font-style: normal;
}

.about-story-visual {
  margin: 0;
  display: grid;
  gap: 1rem;
}

.about-story-image--main {
  border-radius: var(--radius-lg);
  overflow: hidden;
  box-shadow: var(--shadow-md);
}

.about-story-image--main img {
  width: 100%;
  min-height: 320px;
  max-height: 440px;
  object-fit: cover;
  transition: transform 0.8s var(--ease-out);
}

.about-story-image--main:hover img {
  transform: scale(1.03);
}

.about-story-caption {
  margin: 0;
}

.about-story-caption strong {
  display: block;
  margin-bottom: 0.35rem;
  font-size: 0.95rem;
}

.about-milestone-row {
  display: grid;
  gap: 1.25rem;
}

@media (min-width: 768px) {
  .about-milestone-row {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}

.about-milestone__label {
  font-size: 0.72rem;
  font-weight: 800;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--brand-deep);
  margin-bottom: 0.65rem;
}

.about-community-band {
  padding-bottom: clamp(3rem, 6vw, 5rem);
}

.about-community-grid {
  display: grid;
  gap: 2rem;
  align-items: center;
}

@media (min-width: 880px) {
  .about-community-grid {
    grid-template-columns: 1.1fr 0.9fr;
  }
}

.about-community-image {
  border-radius: var(--radius-lg);
  overflow: hidden;
  box-shadow: var(--shadow-md);
}

.about-community-image img {
  width: 100%;
  min-height: 280px;
  max-height: 400px;
  object-fit: cover;
}

.about-community-copy {
  display: grid;
  gap: 1rem;
}

@media (prefers-reduced-motion: reduce) {
  .about-story-image--main:hover img {
    transform: none;
  }
}

.about-dual-panels {
  display: grid;
  grid-template-columns: minmax(0, 1.08fr) minmax(320px, 0.92fr);
  gap: clamp(1.25rem, 2vw, 2rem);
  align-items: stretch;
}

.about-dual-panels > * {
  height: 100%;
}

.about-dual-panels .panel-card {
  height: 100%;
}

.panel-card--story,
.panel-card--facts {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100%;
}

.panel-card--story {
  padding: clamp(1.4rem, 2.2vw, 2rem);
}

.panel-card--story h2 {
  max-width: 12ch;
  margin-bottom: 0.9rem;
}

.panel-card--story p:not(.eyebrow) {
  max-width: 58ch;
  color: rgba(16, 24, 20, 0.74);
  line-height: 1.72;
}

.panel-card--facts {
  padding: clamp(1.4rem, 2.2vw, 2rem);
  border: 1px solid rgba(151, 191, 61, 0.16);
  background:
    radial-gradient(circle at top left, rgba(151, 191, 61, 0.08), transparent 34%),
    linear-gradient(180deg, #07110b 0%, #0b1710 100%);
  color: #f4f7f2;
  box-shadow: 0 18px 40px rgba(6, 14, 10, 0.18);
}

.panel-kicker {
  display: inline-flex;
  align-items: center;
  width: fit-content;
  margin: 0 0 1rem;
  padding: 0.38rem 0.7rem;
  border-radius: 999px;
  background: rgba(151, 191, 61, 0.14);
  border: 1px solid rgba(151, 191, 61, 0.18);
  color: #b9d86a;
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
}

.facts-list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  gap: 0.95rem;
}

.facts-list li {
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 0.75rem;
  align-items: start;
  color: rgba(244, 247, 242, 0.86);
  line-height: 1.6;
}

.facts-dot {
  width: 0.55rem;
  height: 0.55rem;
  margin-top: 0.45rem;
  border-radius: 999px;
  background: #a7d037;
  box-shadow: 0 0 0 6px rgba(167, 208, 55, 0.12);
}

@media (max-width: 980px) {
  .about-dual-panels {
    grid-template-columns: 1fr;
  }

  .about-dual-panels > *,
  .about-dual-panels .panel-card {
    height: auto;
  }

  .panel-card--story h2 {
    max-width: none;
  }
}

.trust-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 24px;
  margin-top: 40px;
}

.trust-card {
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 24px;
  padding: 28px;
  backdrop-filter: blur(6px);
}

.trust-card h3 {
  margin: 0 0 12px;
  color: #fff;
  font-size: 1.25rem;
}

.trust-card p {
  margin: 0;
  color: rgba(255, 255, 255, 0.78);
  line-height: 1.7;
}

@media (max-width: 991px) {
  .trust-grid {
    grid-template-columns: 1fr;
  }
}
</style>
