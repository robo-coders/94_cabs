<script setup>
import { RouterLink } from 'vue-router'
import { companyInfo, photoSet, testimonials } from '../data/site'
import FarePanel from '../components/FarePanel.vue'
import PageBanner from '../components/PageBanner.vue'
import RevealOnScroll from '../components/RevealOnScroll.vue'
import TestimonialStrip from '../components/TestimonialStrip.vue'
</script>

<template>
  <div class="page home-page">
    <PageBanner
      home
      eyebrow="RED DEER TAXI &amp; DISPATCH"
      title="Come ride in the newest fleet in town"
      subtitle="94 Cabs Red Deer is available 24/7 with well-maintained vehicles, professional drivers, and dependable dispatch for airport runs, business travel, senior transportation, non-emergency medical trips and everyday rides across Red Deer."
      :image="photoSet.homeHero"
    >
      <div class="cta-row">
        <a class="btn btn-primary" :href="companyInfo.phoneLink">Call dispatch</a>
        <RouterLink class="btn btn-outline-light" to="/book-online">Book online</RouterLink>
        <RouterLink class="btn btn-outline-light" to="/services">View services</RouterLink>
      </div>

      <template #stats>
        <div class="hero-stats">
          <div class="hero-stat">
            <strong>24/7</strong>
            <span>Available day and night for bookings</span>
          </div>
          <div class="hero-stat">
            <strong>Newer fleet</strong>
            <span>Sedans, SUVs, and vans kept ride-ready</span>
          </div>
          <div class="hero-stat">
            <strong>Easy booking</strong>
            <span>Phone, website &amp; application</span>
          </div>
        </div>
      </template>

      <template #aside>
        <h3>Popular ride requests</h3>
        <ul>
          <li>Airport and long distance transportation</li>
          <li>Business and account based travel</li>
          <li>Senior and non-emergency medical trips</li>
          <li>Wheelchair-accessible vans and family travel</li>
        </ul>
      </template>
    </PageBanner>

    <section class="home-segment section-surface">
      <div class="container split-content media-focus service-balance-section">
        <RevealOnScroll>
          <div class="service-copy">
            <p class="eyebrow">ROUND-THE-CLOCK SERVICE</p>
            <h2>Reliable transportation with clean vehicles and experienced drivers</h2>
            <p>
              94 Cabs Red Deer operates with a focus on dependable local service. Vehicles are maintained for comfort
              and reliability, while drivers stay approachable and professional so passengers can travel with greater
              peace of mind.
            </p>
            <p>
              From quick city rides to scheduled pickups, senior travel, and business transport, the goal is to make
              booking and riding as straightforward as possible.
            </p>

            <div class="cta-row">
              <RouterLink class="btn btn-dark" to="/services">Explore full services</RouterLink>
              <RouterLink class="btn btn-ghost-dark" to="/about-us">About 94 Cabs Red Deer</RouterLink>
            </div>

            <div class="service-points">
              <article class="service-point hover-lift">
                <strong>24/7 dispatch support</strong>
                <p>Book by phone, online, or through the app whenever you need a ride.</p>
              </article>
              <article class="service-point hover-lift">
                <strong>Professional vehicle mix</strong>
                <p>Clean sedans, SUVs, vans, and accessible vehicles for different trip types.</p>
              </article>
              <article class="service-point hover-lift">
                <strong>Practical trip coverage</strong>
                <p>Airport travel, medical transport, business trips and reliable local rides across Red Deer.</p>
              </article>
            </div>
          </div>
        </RevealOnScroll>

        <RevealOnScroll>
          <div class="media-stack media-stack--balanced">
            <div class="media-frame media-frame--primary">
              <img :src="photoSet.fleet" alt="Professional taxi fleet ready for service" loading="lazy" />
            </div>

            <article class="media-card media-card--stacked hover-lift">
              <div class="media-frame media-frame--secondary media-frame--stacked">
                <img :src="photoSet.dispatch" alt="Taxi dispatch team supporting local bookings" loading="lazy" />
              </div>
            </article>
          </div>
        </RevealOnScroll>
      </div>
    </section>

    <section class="home-segment">
      <div class="container">
        <RevealOnScroll>
          <div class="section-head">
            <p class="eyebrow">RIDER FEEDBACK</p>
            <h2>Trusted by riders across Red Deer</h2>
            <p class="section-lede">
              Real feedback from riders across Red Deer — dependable service, clear communication, and comfortable rides.
            </p>
          </div>
        </RevealOnScroll>
        <RevealOnScroll class="reveal-stagger">
          <TestimonialStrip :items="testimonials.home" variant="marquee" />
        </RevealOnScroll>
        <div class="logo-strip" aria-hidden="true">
          <span>Airport trips</span>
          <span>Medical visits</span>
          <span>Business travel</span>
          <span>Student fares</span>
          <span>Accessible vans</span>
        </div>
      </div>
    </section>

    <section class="home-segment section-surface">
      <div class="container booking-editorial">
        <RevealOnScroll>
          <article class="booking-editorial-main" :style="{ backgroundImage: `url(${photoSet.appBooking})` }">
            <div class="booking-editorial-overlay">
              <p class="eyebrow">BOOKING &amp; APP</p>
              <h2>The cab booking at your fingertips</h2>
              <p>
                Book online, use the app or call dispatch directly. Whether you need an immediate pickup or want to
                arrange a ride in advance, 94 Cabs Red Deer gives you simple ways to book and stay on top of your trip.
              </p>

              <div class="booking-editorial-actions">
                <RouterLink class="btn btn-primary" to="/book-online">Open booking page</RouterLink>
                <a class="btn btn-outline-light" :href="companyInfo.appLink" target="_blank" rel="noreferrer">Get the app</a>
              </div>
            </div>
          </article>
        </RevealOnScroll>

        <RevealOnScroll>
          <aside class="booking-editorial-side hover-lift">
            <div class="booking-editorial-side-top">
              <p class="booking-mini-label">Why riders choose us</p>
              <h3>Simple booking and dependable local support</h3>
            </div>

            <div class="booking-editorial-points">
              <article class="booking-point">
                <span class="booking-point-index">01</span>
                <div>
                  <strong>Book your way</strong>
                  <p>Book online, app or over the phone.</p>
                </div>
              </article>

              <article class="booking-point">
                <span class="booking-point-index">02</span>
                <div>
                  <strong>Ready for more trip types</strong>
                  <p>Sedans, SUVs, vans, and accessible vehicles.</p>
                </div>
              </article>

              <article class="booking-point">
                <span class="booking-point-index">03</span>
                <div>
                  <strong>Dispatch when plans change</strong>
                  <p>Helpful support when timing matters.</p>
                </div>
              </article>
            </div>

            <div class="booking-editorial-side-bottom">
              <RouterLink class="booking-inline-link" to="/services">
                Explore all services
                <span aria-hidden="true">→</span>
              </RouterLink>
            </div>
          </aside>
        </RevealOnScroll>
      </div>
    </section>

    <section class="home-segment section-dark">
      <div class="container">
        <RevealOnScroll>
          <div class="section-head section-head--center">
            <p class="eyebrow">SERVICE PROMISE</p>
            <h2>Striving to provide the best taxi service round the clock</h2>
            <p class="section-lede">
              94 Cabs Red Deer is built around responsive dispatch, dependable vehicles, and practical local service for
              the people who rely on transportation every day.
            </p>
          </div>
        </RevealOnScroll>
        <RevealOnScroll>
          <div class="split-content">
            <div class="media-frame" style="max-height: 360px">
              <img :src="photoSet.nightCity" alt="Reliable taxi service available day and night in Red Deer" loading="lazy" />
            </div>
            <div>
              <h3 style="color: #fff">Built for everyday travel and scheduled trips</h3>
              <p style="color: #b4c9bc; margin-top: 0.65rem">
                Riders count on 94 Cabs Red Deer for early airport departures, local shopping trips, evening pickups,
                pre-arranged bookings, and transportation that fits real daily schedules.
              </p>
              <p style="color: #b4c9bc; margin-top: 0.75rem">
                If you are travelling for work, need extra space, or want to plan ahead for a medical or senior trip,
                dispatch can help guide the booking to the right service.
              </p>
              <div class="cta-row" style="margin-top: 1rem">
                <RouterLink class="btn btn-primary" to="/contact-us">Talk to dispatch</RouterLink>
                <a class="btn btn-outline-light" :href="companyInfo.phoneLink">Call now</a>
              </div>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>

    <section class="home-segment">
      <div class="container quote-band">
        <RevealOnScroll>
          <article>
            <p class="quote">
              “Clean vehicle, courteous driver, and a smooth pickup process from booking to drop-off.”
            </p>
            <p class="quote-author">Local rider</p>
          </article>
        </RevealOnScroll>
        <RevealOnScroll>
          <article>
            <p class="quote">
              “Used 94 Cabs Red Deer for an early airport run and everything was on time, simple and stress free.”
            </p>
            <p class="quote-author">Frequent traveller</p>
          </article>
        </RevealOnScroll>
      </div>
    </section>

    <section class="home-segment section-surface">
      <div class="container fare-contact-grid">
        <RevealOnScroll>
          <FarePanel />
        </RevealOnScroll>
        <RevealOnScroll>
          <article class="quick-contact hover-lift">
            <p class="eyebrow" style="color: var(--brand-deep)">DIRECT LINE</p>
            <h3>Flexible taxi rates and 24/7 dispatch support</h3>
            <p>
              We answer calls as Taxi Dispatch Services and help riders arrange bookings quickly for city trips,
              scheduled travel, and special transportation needs.
            </p>
            <p>
              Call anytime for quick bookings, fare questions or help choosing the right service for your trip.
            </p>
            <a :href="companyInfo.phoneLink">{{ companyInfo.phoneDisplay }}</a>
            <a :href="`mailto:${companyInfo.email}`">{{ companyInfo.email }}</a>
            <p>{{ companyInfo.primaryAddress }}</p>
            <RouterLink class="btn btn-dark" to="/contact-us">Contact &amp; directions </RouterLink>
          </article>
        </RevealOnScroll>
      </div>
    </section>

    <section class="home-segment">
      <div class="container cta-panel">
        <RevealOnScroll>
          <h2>Book your next ride with confidence</h2>
          <p>
            Whether you are heading across Red Deer, arranging an airport trip, or planning a pickup in advance, 94
            Cabs Red Deer is ready to help day or night.
          </p>
          <div class="cta-row">
            <a class="btn btn-primary" :href="companyInfo.phoneLink">Call {{ companyInfo.phoneDisplay }}</a>
            <RouterLink class="btn btn-outline-light" to="/book-online">Book online</RouterLink>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  </div>
</template>

<style scoped>
.service-balance-section {
  align-items: start;
  gap: clamp(2rem, 4vw, 4.5rem);
}

.service-copy {
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 100%;
}

.service-points {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
  margin-top: 1.75rem;
}

.service-point {
  padding: 1rem 1.1rem;
  border-radius: 20px;
  border: 1px solid rgba(17, 24, 19, 0.08);
  background: rgba(255, 255, 255, 0.72);
  backdrop-filter: blur(10px);
}

.service-point strong {
  display: block;
  margin-bottom: 0.35rem;
  font-size: 1rem;
  line-height: 1.3;
  color: #0f1720;
}

.service-point p {
  margin: 0;
  color: rgba(15, 23, 32, 0.72);
  line-height: 1.6;
}

.media-stack--balanced {
  display: grid;
  gap: 1.25rem;
  align-content: start;
}

.media-frame--primary img,
.media-frame--secondary img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.media-frame--primary {
  min-height: 360px;
}

.media-card {
  border-radius: 24px;
  background: #ffffff;
  border: 1px solid rgba(17, 24, 19, 0.08);
  box-shadow: 0 18px 45px rgba(15, 23, 32, 0.08);
  overflow: hidden;
}

.media-card--stacked {
  display: grid;
  grid-template-columns: 1fr;
}

.media-frame--secondary {
  min-height: 180px;
  overflow: hidden;
}

.media-frame--stacked {
  min-height: 220px;
}

.media-card-copy {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.media-card-copy--stacked {
  padding: 1.35rem 1.35rem 1.45rem;
}

.media-card-copy .media-card-label {
  display: inline-block;
  margin-bottom: 0.5rem;
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--brand-green);
}

.media-card-copy h3 {
  margin: 0 0 0.55rem;
  font-size: 1.2rem;
  line-height: 1.2;
}

.media-card-copy p {
  margin: 0;
  color: rgba(15, 23, 32, 0.72);
  line-height: 1.65;
}

.booking-editorial {
  display: grid;
  grid-template-columns: minmax(0, 1.5fr) minmax(320px, 0.82fr);
  gap: clamp(1.25rem, 2vw, 2rem);
  align-items: stretch;
}

.booking-editorial-main {
  position: relative;
  min-height: 420px;
  border-radius: 32px;
  overflow: hidden;
  background-size: cover;
  background-position: center;
  box-shadow: 0 24px 58px rgba(15, 23, 32, 0.12);
}

.booking-editorial-main::before {
  content: '';
  position: absolute;
  inset: 0;
  background:
    linear-gradient(180deg, rgba(9, 14, 11, 0.12) 0%, rgba(9, 14, 11, 0.56) 100%),
    linear-gradient(90deg, rgba(9, 14, 11, 0.74) 0%, rgba(9, 14, 11, 0.34) 52%, rgba(9, 14, 11, 0.08) 100%);
}

.booking-editorial-overlay {
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  min-height: 420px;
  padding: clamp(1.5rem, 2.7vw, 2.4rem);
  max-width: 38rem;
}

.booking-editorial-overlay .eyebrow {
  margin-bottom: 0.8rem;
}

.booking-editorial-overlay h2 {
  margin: 0;
  max-width: 10.5ch;
  font-size: clamp(2rem, 3vw, 3.15rem);
  line-height: 0.97;
  letter-spacing: -0.04em;
  color: #fff;
}

.booking-editorial-overlay p:not(.eyebrow) {
  margin-top: 1rem;
  max-width: 34rem;
  color: rgba(255, 255, 255, 0.84);
  line-height: 1.72;
}

.booking-editorial-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.85rem;
  margin-top: 1.35rem;
}

.booking-editorial-side {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 420px;
  padding: clamp(1.2rem, 1.8vw, 1.6rem);
  border-radius: 28px;
  border: 1px solid rgba(17, 24, 19, 0.08);
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.84));
  box-shadow: 0 16px 36px rgba(15, 23, 32, 0.06);
}

.booking-mini-label {
  margin: 0 0 0.35rem;
  font-size: 0.74rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--brand-green);
}

.booking-editorial-side h3 {
  margin: 0;
  font-size: clamp(1.1rem, 1.5vw, 1.35rem);
  line-height: 1.15;
  color: #101814;
  max-width: none;
}

.booking-editorial-points {
  display: grid;
  gap: 0.85rem;
  margin-top: 1rem;
}

.booking-point {
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 0.75rem;
  align-items: start;
  padding-bottom: 0.85rem;
  border-bottom: 1px solid rgba(17, 24, 19, 0.07);
}

.booking-point:last-child {
  padding-bottom: 0;
  border-bottom: 0;
}

.booking-point-index {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 1.9rem;
  height: 1.9rem;
  border-radius: 999px;
  background: rgba(151, 191, 61, 0.12);
  color: var(--brand-green);
  font-size: 0.76rem;
  font-weight: 700;
  letter-spacing: 0.04em;
}

.booking-point strong {
  display: block;
  margin-bottom: 0.15rem;
  font-size: 0.95rem;
  line-height: 1.3;
  color: #101814;
}

.booking-point p {
  margin: 0;
  color: rgba(16, 24, 20, 0.68);
  line-height: 1.45;
}

.booking-editorial-side-bottom {
  margin-top: 1rem;
  padding-top: 0.95rem;
  border-top: 1px solid rgba(17, 24, 19, 0.07);
}

.booking-inline-link {
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  font-weight: 700;
  color: #101814;
  text-decoration: none;
}

.booking-inline-link span {
  transition: transform 0.2s ease;
}

.booking-inline-link:hover span {
  transform: translateX(3px);
}

@media (max-width: 980px) {
  .media-frame--primary {
    min-height: 280px;
  }

  .media-frame--stacked {
    min-height: 200px;
  }

  .media-card-copy--stacked {
    padding: 1.1rem 1rem 1.2rem;
  }

  .booking-editorial {
    grid-template-columns: 1fr;
  }

  .booking-editorial-main,
  .booking-editorial-overlay,
  .booking-editorial-side {
    min-height: auto;
  }

  .booking-editorial-overlay h2 {
    max-width: none;
  }

  .booking-editorial-side h3 {
    max-width: none;
  }
}

@media (max-width: 640px) {
  .booking-editorial-main {
    border-radius: 24px;
  }

  .booking-editorial-side {
    border-radius: 22px;
    padding: 1.05rem 0.95rem 1.1rem;
  }

  .booking-editorial-overlay {
    padding: 1.1rem 1rem 1.2rem;
  }
}
.fare-contact-grid {
  display: grid;
  grid-template-columns: minmax(0, 1.15fr) minmax(320px, 0.85fr);
  gap: clamp(1.25rem, 2vw, 2rem);
  align-items: stretch;
}

.fare-contact-grid > * {
  height: 100%;
}

.quick-contact {
  height: 100%;
  display: flex;
  flex-direction: column;
}

.quick-contact .btn {
  margin-top: auto;
}

@media (max-width: 980px) {
  .fare-contact-grid {
    grid-template-columns: 1fr;
  }

  .fare-contact-grid > *,
  .quick-contact {
    height: auto;
  }
}
</style>