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
      title="Dispatch, office and everything between"
      subtitle="For live pickups, call first. Use email or the form for accounts, receipts and non-urgent coordination."
      :image="photoSet.contact"
      compact
    >
      <div class="cta-row">
        <a class="btn btn-primary" :href="companyInfo.phoneLink">Call dispatch now</a>
        <RouterLink class="btn btn-outline-light" to="/book-online">Book online</RouterLink>
      </div>
    </PageBanner>

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
            <p class="section-lede">Drivers accept cards, cash and mobile wallets.</p>
            <div class="pill-strip contact-pill-strip">
              <span class="pill">Cash</span>
              <span class="pill">Debit / credit</span>
              <span class="pill">Apple Pay</span>
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
                <span>Use the form for non-urgent requests without attachments.</span>
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
              Use this form for non-urgent enquiries.The fields are set up to match what dispatch asks for on a second call.
            </p>
            <form class="contact-form" @submit.prevent>
              <label>
                Full name *
                <input type="text" name="name" autocomplete="name" placeholder="Jordan Smith" required />
              </label>
              <label>
                Phone *
                <input type="tel" name="phone" autocomplete="tel" placeholder="403-555-0100" required />
              </label>
              <label>
                Email *
                <input type="email" name="email" autocomplete="email" placeholder="you@company.com" required />
              </label>
              <label>
                Topic
                <input type="text" name="subject" placeholder="Corporate account, lost item, …" />
              </label>
              <label>
                Message
                <textarea
                  name="message"
                  rows="6"
                  placeholder="Pickup zones, typical times, accessibility needs…"
                  required
                />
              </label>
              <button type="submit" class="btn btn-dark">Submit inquiry</button>
            </form>
          </article>
        </RevealOnScroll>

        <RevealOnScroll>
          <aside class="contact-aside">
            <div class="contact-map card-block hover-lift">
              <h3>Map</h3>
              <div class="map-frame">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2439.7912255572483!2d-113.81396782316001!3d52.3016436720048!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e3545c10d21e1e3%3A0x590aa2c7771afa9e!2s94%20Cabs%20-%20Red%20Deer!5e0!3m2!1sen!2suk!4v1781135959880!5m2!1sen!2suk" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
              </div>
            </div>
          </aside>
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
}

.contact-map {
  min-height: 100%;
  display: flex;
  flex-direction: column;
}

.map-frame {
  margin-top: 1rem;
  border-radius: 18px;
  overflow: hidden;
  min-height: 420px;
  flex: 1;
}

.map-frame iframe {
  width: 100%;
  height: 100%;
  border: 0;
  display: block;
}
</style>