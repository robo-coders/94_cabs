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


    <!-- ① HERO — dark -->
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
    </PageBanner>


    <!-- ② SERVICE — white. Immediately opens up after the dark hero -->
    <section class="home-segment seg-white">
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


    <!-- ③ BOOKING — sage surface. Warm contrast between the two white sections -->
    <section class="home-segment seg-surface">
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


    <!-- ④ FARE + CONTACT — white. Cards read crisply; breaks the sage run -->
    <section class="home-segment seg-white">
      <div class="container fare-contact-grid">
        <RevealOnScroll>
          <FarePanel />
        </RevealOnScroll>


        <RevealOnScroll>
          <article class="quick-contact">


            <div class="quick-contact__trust" role="list" aria-label="Service highlights">
              <div class="trust-item" role="listitem">
                <span class="trust-item__value">24/7</span>
                <span class="trust-item__label">Dispatch<br>support</span>
              </div>
              <div class="trust-item" role="listitem">
                <span class="trust-item__value">Fast</span>
                <span class="trust-item__label">Booking<br>response</span>
              </div>
              <div class="trust-item" role="listitem">
                <span class="trust-item__value">Online</span>
                <span class="trust-item__label">Book from<br>anywhere</span>
              </div>
            </div>


            <div class="quick-contact__contact">
              <a class="contact-row" :href="companyInfo.phoneLink">
                <span class="contact-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.32 2 2 0 0 1 3.6 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.6a16 16 0 0 0 5.49 5.49l.96-.96a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21 16.92z"/>
                  </svg>
                </span>
                <span>{{ companyInfo.phoneDisplay }}</span>
              </a>
              <a class="contact-row" :href="`mailto:${companyInfo.email}`">
                <span class="contact-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <rect x="2" y="4" width="20" height="16" rx="2"/>
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                  </svg>
                </span>
                <span>{{ companyInfo.email }}</span>
              </a>
            </div>


            <div class="quick-contact__actions">
              <a class="btn-call" :href="companyInfo.phoneLink">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.32 2 2 0 0 1 3.6 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.6a16 16 0 0 0 5.49 5.49l.96-.96a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21 16.92z"/>
                </svg>
                Call dispatch — {{ companyInfo.phoneDisplay }}
              </a>
              <RouterLink class="btn-book" to="/book-online">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                  <line x1="16" y1="2" x2="16" y2="6"/>
                  <line x1="8" y1="2" x2="8" y2="6"/>
                  <line x1="3" y1="10" x2="21" y2="10"/>
                </svg>
                Book online
              </RouterLink>
            </div>


          </article>
        </RevealOnScroll>
      </div>
    </section>


    <!-- ⑤ TESTIMONIALS — dark. Mirrors the hero; strong visual closure before footer -->
    <section class="home-segment seg-dark">
      <div class="container">
        <RevealOnScroll>
          <div class="section-head">
            <p class="eyebrow eyebrow--on-dark">RIDER FEEDBACK</p>
            <h2 class="heading--on-dark">Trusted by riders across Red Deer</h2>
            <p class="section-lede lede--on-dark">
              Real feedback from riders across Red Deer — dependable service, clear communication, and comfortable rides.
            </p>
          </div>
        </RevealOnScroll>
        <RevealOnScroll class="reveal-stagger">
          <div class="testimonial-wrap">
            <TestimonialStrip :items="testimonials.home" variant="marquee" />
          </div>
        </RevealOnScroll>
        <div class="logo-strip logo-strip--on-dark" aria-hidden="true">
          <span>Airport trips</span>
          <span>Medical visits</span>
          <span>Business travel</span>
          <span>Student fares</span>
          <span>Accessible vans</span>
        </div>
      </div>
    </section>


  </div>
</template>


<style scoped>


/* ─────────────────────────────────────────────
   Section background tokens
   Page rhythm: dark → white → sage → white → dark
   No two adjacent sections share the same bg.
───────────────────────────────────────────── */
.seg-white   { background: #ffffff; }
.seg-surface { background: #f0f2ee; }
.seg-dark    { background: #111a10; }


/* ─────────────────────────────────────────────
   Dark section — text overrides
───────────────────────────────────────────── */
.eyebrow--on-dark {
  color: #7ec874 !important;
}


.heading--on-dark {
  color: #f0f2ee;
}


.lede--on-dark {
  color: rgba(240, 242, 238, 0.58);
}


.logo-strip--on-dark {
  border-top-color: rgba(240, 242, 238, 0.1) !important;
}


.logo-strip--on-dark span {
  color: rgba(240, 242, 238, 0.3) !important;
  border-color: rgba(240, 242, 238, 0.12) !important;
}


/*
  Remove ALL side fade/shadow effects from the testimonial slider.
  This overrides mask-image, ::before, and ::after that create
  the ugly edge gradients on both sides of the marquee.
*/
.testimonial-wrap :deep(.marquee-slider),
.testimonial-wrap :deep(.marquee-slider)::before,
.testimonial-wrap :deep(.marquee-slider)::after {
  mask-image: none !important;
  -webkit-mask-image: none !important;
}


.testimonial-wrap :deep(*::before) {
  display: none !important;
}


.testimonial-wrap :deep(*::after) {
  display: none !important;
}


.testimonial-wrap :deep(*) {
  mask-image: none !important;
  -webkit-mask-image: none !important;
  mask-mode: alpha !important;
  -webkit-mask-mode: alpha !important;
}


/* ─────────────────────────────────────────────
   Service section
───────────────────────────────────────────── */
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
  border: 1px solid rgba(17, 24, 19, 0.09);
  background: #f8faf7;
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
  color: rgba(15, 23, 32, 0.68);
  line-height: 1.6;
}


/* ─────────────────────────────────────────────
   Media stack
───────────────────────────────────────────── */
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


/* ─────────────────────────────────────────────
   Booking editorial — on sage surface
───────────────────────────────────────────── */
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


/* Solid white on sage — intentionally elevated */
.booking-editorial-side {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 420px;
  padding: clamp(1.2rem, 1.8vw, 1.6rem);
  border-radius: 28px;
  border: 1px solid rgba(17, 24, 19, 0.08);
  background: #ffffff;
  box-shadow: 0 16px 36px rgba(15, 23, 32, 0.07);
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


/* ─────────────────────────────────────────────
   Fare + Contact grid — on white
───────────────────────────────────────────── */
.fare-contact-grid {
  display: grid;
  grid-template-columns: minmax(0, 1.15fr) minmax(300px, 0.85fr);
  gap: clamp(1.25rem, 2vw, 2rem);
  align-items: stretch;
}


.fare-contact-grid > * {
  display: flex !important;
  flex-direction: column;
}


.fare-contact-grid > * > * {
  flex: 1;
  height: 100%;
}


/* ─────────────────────────────────────────────
   Quick-contact card
───────────────────────────────────────────── */
.quick-contact {
  background: #fff;
  border-radius: 16px;
  border: 1px solid rgba(0, 0, 0, 0.07);
  box-shadow: 0 8px 32px rgba(15, 23, 32, 0.07);
  overflow: hidden;
  display: flex;
  flex-direction: column;
}


.quick-contact__trust {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  background-color: #1c2b1a;
}


.trust-item {
  background: transparent;
  padding: 22px 16px;
  display: flex;
  flex-direction: column;
  gap: 4px;
}


.trust-item + .trust-item {
  border-left: 0.5px solid rgba(255, 255, 255, 0.1);
}


.trust-item__value {
  font-size: 18px;
  font-weight: 700;
  color: #f5f5f3;
  letter-spacing: -0.02em;
  line-height: 1;
}


.trust-item__label {
  font-size: 11.5px;
  color: rgba(245, 245, 243, 0.5);
  line-height: 1.3;
}


/* flex:1 absorbs extra height so CTAs always pin to bottom */
.quick-contact__contact {
  flex: 1;
  padding: 16px 28px;
  display: flex;
  flex-direction: column;
  gap: 9px;
  border-bottom: 0.5px solid rgba(0, 0, 0, 0.07);
}


.contact-row {
  display: flex;
  align-items: center;
  gap: 10px;
  text-decoration: none;
}


.contact-icon {
  width: 32px;
  height: 32px;
  border-radius: 8px;
  background: #f3f4f6;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}


.contact-icon svg {
  width: 15px;
  height: 15px;
  color: var(--brand-deep, #4a7c3f);
}


.contact-row span:last-child {
  font-size: 14px;
  font-weight: 500;
  color: #1a1a1a;
  transition: color 0.15s;
}


.contact-row:hover span:last-child {
  color: var(--brand-deep, #4a7c3f);
}


.quick-contact__actions {
  padding: 16px 28px 24px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}


.btn-call {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  background: var(--brand-deep, #4a7c3f);
  color: #fff;
  font-size: 15px;
  font-weight: 600;
  padding: 14px 20px;
  border-radius: 10px;
  text-decoration: none;
  letter-spacing: -0.01em;
  transition: background 0.15s;
}


.btn-call svg {
  width: 16px;
  height: 16px;
  flex-shrink: 0;
}


.btn-call:hover {
  background: #3d6b34;
}


.btn-book {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 7px;
  background: transparent;
  color: #374151;
  font-size: 14.5px;
  font-weight: 500;
  padding: 13px 20px;
  border-radius: 10px;
  border: 0.5px solid rgba(0, 0, 0, 0.15);
  text-decoration: none;
  letter-spacing: -0.01em;
  transition: background 0.15s, border-color 0.15s;
}


.btn-book svg {
  width: 15px;
  height: 15px;
}


.btn-book:hover {
  background: #f9fafb;
  border-color: rgba(0, 0, 0, 0.22);
}


/* ─────────────────────────────────────────────
   Responsive
───────────────────────────────────────────── */
@media (max-width: 980px) {
  .media-frame--primary  { min-height: 280px; }
  .media-frame--stacked  { min-height: 200px; }


  .booking-editorial {
    grid-template-columns: 1fr;
  }


  .booking-editorial-main,
  .booking-editorial-overlay,
  .booking-editorial-side {
    min-height: auto;
  }


  .booking-editorial-overlay h2,
  .booking-editorial-side h3 {
    max-width: none;
  }


  .fare-contact-grid {
    grid-template-columns: 1fr;
    align-items: start;
  }


  .fare-contact-grid > *,
  .fare-contact-grid > * > * {
    flex: none !important;
    height: auto !important;
  }


  .quick-contact__contact {
    flex: none;
  }
}


@media (max-width: 640px) {
  .booking-editorial-main  { border-radius: 24px; }


  .booking-editorial-side {
    border-radius: 22px;
    padding: 1.05rem 0.95rem 1.1rem;
  }


  .booking-editorial-overlay {
    padding: 1.1rem 1rem 1.2rem;
  }


  .quick-contact__contact {
    padding: 14px 18px;
  }


  .quick-contact__actions {
    padding: 14px 18px 20px;
  }


  .trust-item {
    padding: 14px 10px;
  }


  .trust-item__value {
    font-size: 15px;
  }


  .trust-item__label {
    font-size: 11px;
  }
}
</style>