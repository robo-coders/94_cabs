<script setup>
import { RouterLink } from 'vue-router'
import PageBanner from '../components/PageBanner.vue'
import RevealOnScroll from '../components/RevealOnScroll.vue'
import TestimonialStrip from '../components/TestimonialStrip.vue'
import { companyInfo, photoSet, testimonials } from '../data/site'

const contactChannels = [
  {
    eyebrow: 'VOICE DISPATCH',
    title: '24/7 phones',
    body: 'Peak bar close and early airport windows included. If lines are busy, stay on — calling back resets your place.',
    primary: { label: companyInfo.phoneDisplay, href: companyInfo.phoneLink },
    note: 'Typical response: vehicle type and rough ETA confirmed; driver may call on approach.'
  },
  {
    eyebrow: 'EMAIL',
    title: 'Written follow-up',
    body: 'Best for corporate accounts, receipt questions, and shuttle planning threads.',
    primary: { label: companyInfo.email, href: `mailto:${companyInfo.email}` },
    secondary: { label: companyInfo.mailingEmail, href: `mailto:${companyInfo.mailingEmail}`, prefix: 'Billing alias' }
  },
  {
    eyebrow: 'OFFICE',
    title: 'Visit & directions',
    body: companyInfo.primaryAddress,
    primary: { label: 'Open in Google Maps', href: companyInfo.mapsQuery, external: true }
  }
]
</script>

<template>
  <div class="page contact-page">
    <PageBanner
      eyebrow="CONTACT"
      title="Dispatch, office, and everything between"
      subtitle="For live pickup assignment, call first. Email and the form below are best for accounts, receipts, and non-urgent coordination."
      :image="photoSet.contact"
      compact
    >
      <div class="cta-row">
        <a class="btn btn-primary" :href="companyInfo.phoneLink">Call dispatch now</a>
        <RouterLink class="btn btn-outline-light" to="/book-online">Book online</RouterLink>
      </div>
    </PageBanner>

    <section class="section-block section-surface contact-phone-band">
      <div class="container">
        <RevealOnScroll>
          <div class="contact-phone-inner">
            <div>
              <p class="eyebrow">IMMEDIATE TRIPS</p>
              <h2 class="contact-hero-phone">
                <a :href="companyInfo.phoneLink">{{ companyInfo.phoneDisplay }}</a>
              </h2>
              <p class="section-lede">
                Answered as <strong>Taxi Dispatch Services</strong>. Have pickup address, destination, and payment
                ready. At a hospital door or hotel porte-cochère — say so; it changes staging.
              </p>
            </div>
            <a class="btn btn-primary contact-phone-cta" :href="companyInfo.phoneLink">Call now</a>
          </div>
        </RevealOnScroll>
      </div>
    </section>

    <section class="section-block">
      <div class="container contact-channels">
        <RevealOnScroll v-for="(ch, i) in contactChannels" :key="i">
          <article class="contact-channel panel-card hover-lift">
            <p class="eyebrow" style="color: var(--brand-deep)">{{ ch.eyebrow }}</p>
            <h3>{{ ch.title }}</h3>
            <p>{{ ch.body }}</p>
            <a
              class="contact-channel__link"
              :href="ch.primary.href"
              :target="ch.primary.external ? '_blank' : undefined"
              :rel="ch.primary.external ? 'noreferrer' : undefined"
              >{{ ch.primary.label }}</a
            >
            <template v-if="ch.secondary">
              <p class="contact-channel__sub"><strong>{{ ch.secondary.prefix }}</strong></p>
              <a class="contact-channel__link" :href="ch.secondary.href">{{ ch.secondary.label }}</a>
            </template>
            <p v-if="ch.note" class="contact-channel__note">{{ ch.note }}</p>
          </article>
        </RevealOnScroll>
      </div>
    </section>

    <section class="section-block section-surface">
      <div class="container contact-payments-grid">
        <RevealOnScroll>
          <article class="contact-payments panel-card hover-lift">
            <p class="eyebrow">PAYMENTS</p>
            <h2>In-vehicle payment options</h2>
            <p class="section-lede">Drivers carry terminal support for common card brands plus cash and mobile wallet flows.</p>
            <div class="pill-strip contact-pill-strip">
              <span class="pill">Cash</span>
              <span class="pill">Debit / credit</span>
              <span class="pill">E-transfer</span>
              <span class="pill">Apple Pay</span>
              <span class="pill">Interac</span>
            </div>
            <p>Need a receipt for expenses? Ask the driver at drop-off or mention it when booking.</p>
          </article>
        </RevealOnScroll>
        <RevealOnScroll>
          <article class="contact-support panel-card hover-lift">
            <h3>Support &amp; response times</h3>
            <ul class="contact-support-list">
              <li>
                <strong>Urgent rides</strong>
                <span>Phone only — we do not assign from social DMs.</span>
              </li>
              <li>
                <strong>Email</strong>
                <span>Next business day for most questions; complex accounts may take two cycles.</span>
              </li>
              <li>
                <strong>Form below</strong>
                <span>Routed to the same mailbox as info@ — use when attachments are not needed.</span>
              </li>
            </ul>
          </article>
        </RevealOnScroll>
      </div>
    </section>

    <section class="section-block">
      <div class="container contact-form-grid">
        <RevealOnScroll>
          <article class="contact-form-shell hover-lift">
            <h3>Send a message</h3>
            <p class="contact-form-lede">
              Front-end form for now — wire to your CRM or email API when ready. Fields match what dispatch asks on a
              second call.
            </p>
            <form class="contact-form" @submit.prevent>
              <label>
                Full name
                <input type="text" name="name" autocomplete="name" placeholder="Jordan Smith" />
              </label>
              <label>
                Phone
                <input type="tel" name="phone" autocomplete="tel" placeholder="403-555-0100" />
              </label>
              <label>
                Email
                <input type="email" name="email" autocomplete="email" placeholder="you@company.com" />
              </label>
              <label>
                Topic
                <input type="text" name="subject" placeholder="Corporate account, lost item, …" />
              </label>
              <label>
                Message
                <textarea name="message" rows="6" placeholder="Pickup zones, typical times, accessibility needs…" />
              </label>
              <button type="submit" class="btn btn-dark">Submit inquiry</button>
            </form>
          </article>
        </RevealOnScroll>

        <RevealOnScroll>
          <aside class="contact-aside">
            <div class="map-placeholder contact-map hover-lift">
              <div>
                <h3>Office location</h3>
                <p>{{ companyInfo.primaryAddress }}</p>
                <a class="btn btn-primary" :href="companyInfo.mapsQuery" target="_blank" rel="noreferrer">Open map</a>
              </div>
            </div>
            <article class="contact-coverage panel-card hover-lift">
              <div
                class="contact-coverage__image"
                :style="{ backgroundImage: `url(${photoSet.downtown})` }"
                role="img"
                aria-label="Red Deer service area"
              ></div>
              <div class="contact-coverage__body">
                <h3>Coverage snapshot</h3>
                <p>
                  Daily work concentrates inside city limits with regular QEII and YYC transfer demand. Out-of-town flat
                  rates are quoted case-by-case.
                </p>
                <a class="btn btn-ghost-dark" :href="companyInfo.phoneLink">Call for a quote</a>
              </div>
            </article>
          </aside>
        </RevealOnScroll>
      </div>
    </section>

    <section class="section-block section-dark">
      <div class="container">
        <RevealOnScroll>
          <div class="section-head section-head--center">
            <p class="eyebrow">TRUST</p>
            <h2>What senders say about follow-through</h2>
          </div>
        </RevealOnScroll>
        <RevealOnScroll>
          <TestimonialStrip :items="testimonials.contact" variant="grid" />
        </RevealOnScroll>
      </div>
    </section>

    <section class="section-block">
      <div class="container cta-panel">
        <RevealOnScroll>
          <h2>Still faster to talk than to type?</h2>
          <p>Especially for discharge timing and late-night pickups outside lit entrances.</p>
          <div class="cta-row">
            <a class="btn btn-primary" :href="companyInfo.phoneLink">Call dispatch</a>
            <RouterLink class="btn btn-outline-light" to="/book-online">Use web booking</RouterLink>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  </div>
</template>

<style scoped>
.contact-phone-inner {
  display: flex;
  flex-wrap: wrap;
  align-items: flex-end;
  justify-content: space-between;
  gap: 1.5rem;
}

.contact-phone-cta {
  flex-shrink: 0;
}

.contact-channels {
  display: grid;
  gap: 1.25rem;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 280px), 1fr));
}

.contact-channel {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.contact-channel p {
  flex: 1;
}

.contact-channel__link {
  display: inline-block;
  margin-top: 0.85rem;
  font-weight: 800;
  color: #1b5926;
  font-size: 1rem;
}

.contact-channel__link:hover {
  color: var(--brand-deep);
}

.contact-channel__sub {
  margin: 0.85rem 0 0.25rem;
  font-size: 0.88rem;
}

.contact-channel__note {
  margin-top: 0.85rem;
  font-size: 0.88rem;
  color: var(--ink-muted);
}

.contact-payments-grid {
  display: grid;
  gap: 1.25rem;
  align-items: stretch;
}

@media (min-width: 768px) {
  .contact-payments-grid {
    grid-template-columns: 1.15fr 0.85fr;
  }
}

.contact-payments,
.contact-support {
  height: 100%;
  display: flex;
  flex-direction: column;
}

.contact-pill-strip {
  margin: 1rem 0 1.15rem;
}

.contact-support-list {
  list-style: none;
  margin: 0.75rem 0 0;
  padding: 0;
  display: grid;
  gap: 1rem;
  flex: 1;
}

.contact-support-list li {
  display: grid;
  gap: 0.25rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid var(--line-light);
}

.contact-support-list li:last-child {
  border-bottom: 0;
  padding-bottom: 0;
}

.contact-support-list strong {
  font-size: 0.95rem;
}

.contact-support-list span {
  color: var(--ink-soft);
  font-size: 0.92rem;
  line-height: 1.55;
}

.contact-form-grid {
  display: grid;
  gap: 1.25rem;
  align-items: stretch;
}

@media (min-width: 900px) {
  .contact-form-grid {
    grid-template-columns: 1.1fr 0.9fr;
  }
}

.contact-form-shell {
  height: 100%;
  display: flex;
  flex-direction: column;
}

.contact-form-lede {
  margin-bottom: 1rem;
  color: var(--ink-soft);
  font-size: 0.92rem;
}

.contact-form {
  flex: 1;
}

.contact-aside {
  display: grid;
  gap: 1rem;
  height: 100%;
  grid-template-rows: auto 1fr;
}

.contact-map {
  min-height: 200px;
}

.contact-coverage {
  display: flex;
  flex-direction: column;
  padding: 0;
  overflow: hidden;
  height: 100%;
}

.contact-coverage__image {
  min-height: 140px;
  background-size: cover;
  background-position: center;
}

.contact-coverage__body {
  padding: 1.25rem 1.35rem;
  display: flex;
  flex-direction: column;
  flex: 1;
}

.contact-coverage__body p {
  flex: 1;
  color: var(--ink-soft);
  margin-bottom: 1rem;
}

.contact-coverage__body .btn {
  align-self: flex-start;
  margin-top: auto;
}
</style>
