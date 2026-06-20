<script setup>
import { RouterLink } from 'vue-router'
import { navLinks, companyInfo, serviceLinks } from '../data/site'
</script>

<template>
  <footer class="site-footer">
    <div class="footer-main">
      <div class="container footer-grid">
        <section class="footer-brand-col">
          <RouterLink to="/" class="footer-brand-row" aria-label="94 Cabs Red Deer home">
            <span class="footer-logo-card">
              <img src="/Images/Home/logo.png" alt="94 Cabs Red Deer" class="footer-logo" />
            </span>
          </RouterLink>

          <p class="footer-about">
            Local taxi and passenger transport with licensed drivers for city rides, airport trips, medical
            bookings, accessible travel, and pre-arranged pickups across Red Deer and surrounding routes.
          </p>

          <div class="footer-social">
            <a
              v-for="s in companyInfo.social"
              :key="s.label"
              :href="s.href"
              target="_blank"
              rel="noopener noreferrer"
            >
              {{ s.label }}
            </a>
          </div>
        </section>

        <section class="footer-col">
          <p class="footer-title">Navigate</p>
          <RouterLink v-for="item in navLinks" :key="item.to" :to="item.to">
            {{ item.label }}
          </RouterLink>
        </section>

        <section class="footer-col">
          <p class="footer-title">Services</p>
          <RouterLink v-for="item in serviceLinks.slice(0, 5)" :key="item.label" :to="item.to">
            {{ item.label }}
          </RouterLink>
        </section>

        <section class="footer-col">
          <p class="footer-title">Special services</p>
          <RouterLink to="/94-shuttle">94 Shuttle</RouterLink>
          <RouterLink to="/handicap-services">Accessible vehicles</RouterLink>
          <RouterLink to="/book-online">Book online</RouterLink>
          <a :href="companyInfo.appLink" target="_blank" rel="noopener noreferrer">Passenger app</a>
          <a :href="companyInfo.parentBrandLink" target="_blank" rel="noopener noreferrer">94 Cabs network</a>
        </section>

        <section class="footer-col">
          <p class="footer-title">Contact</p>

          <div class="footer-contact-block">
            <div class="footer-contact-item">
              <strong>Dispatch</strong>
              <a :href="companyInfo.phoneLink">{{ companyInfo.phoneDisplay }}</a>
            </div>

            <div class="footer-contact-item">
              <strong>Email</strong>
              <a :href="`mailto:${companyInfo.email}`">{{ companyInfo.email }}</a>
            </div>

            <div class="footer-contact-item">
              <strong>Office</strong>
              <span>{{ companyInfo.primaryAddress }}</span>
            </div>
          </div>

          <p class="footer-meta">Cash, cards, e-transfer and mobile payments accepted.</p>
        </section>
      </div>
    </div>

    <div class="container footer-bottom">
      <p>© {{ new Date().getFullYear() }} {{ companyInfo.name }}. All rights reserved.</p>

      <div class="footer-bottom-links">
        <RouterLink to="/contact-us">Contact &amp; directions</RouterLink>
        <RouterLink to="/about-us">About</RouterLink>
        <a
          href="https://maps.google.com/?q=7460+49+Ave+%238,+Red+Deer,+AB"
          target="_blank"
          rel="noopener noreferrer"
        >
          Map
        </a>
      </div>

      <p class="footer-credit">
        Developed by
        <a href="https://robocoders.dev" target="_blank" rel="noopener noreferrer nofollow">Robo Coders</a>
      </p>
    </div>
  </footer>
</template>

<style scoped>
.site-footer {
  background: #0b120e;
  border-top: 1px solid rgba(255, 255, 255, 0.05);
  color: rgba(255, 255, 255, 0.84);
}

.footer-main {
  padding: 4.25rem 0 3rem;
}

.footer-grid {
  display: grid;
  grid-template-columns: minmax(0, 1.2fr) repeat(3, minmax(0, 0.9fr)) minmax(0, 1fr);
  gap: 2.75rem;
}

.footer-brand-col {
  max-width: 17.5rem;
}

.footer-brand-row {
  display: inline-flex;
  align-items: center;
  text-decoration: none;
  margin-bottom: 1.5rem;
}

/*
  Footer logo treatment.

  Previous attempt used a lime glow behind the card on hover —
  looked wrong because a colored halo against a white card reads
  as a mismatch rather than polish; the white card already carries
  enough visual weight on its own against the dark background.

  This version leans on clean elevation instead of color:
  - A refined two-layer shadow (soft + tight) for real depth
  - A slightly cooler off-white gradient so the card doesn't look
    like a flat sticker, without needing a colored accent
  - A barely-visible cool-grey ring instead of a green-tinted one
  - On hover: only lift + shadow intensify, no color introduced —
    calm, premium, consistent with how the white card already
    contrasts against the dark footer
*/
.footer-logo-card {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 1rem 1.25rem;
  border-radius: 16px;
  background: linear-gradient(160deg, #ffffff 0%, #eef1ea 100%);
  box-shadow:
    0 1px 0 rgba(255, 255, 255, 0.9) inset,
    0 0 0 1px rgba(16, 24, 22, 0.06),
    0 8px 16px rgba(0, 0, 0, 0.22),
    0 2px 4px rgba(0, 0, 0, 0.16);
  transition: transform 220ms ease, box-shadow 220ms ease;
}

.footer-brand-row:hover .footer-logo-card {
  transform: translateY(-3px);
  box-shadow:
    0 1px 0 rgba(255, 255, 255, 0.95) inset,
    0 0 0 1px rgba(16, 24, 22, 0.08),
    0 16px 28px rgba(0, 0, 0, 0.3),
    0 4px 8px rgba(0, 0, 0, 0.2);
}

.footer-logo {
  display: block;
  height: 42px;
  width: auto;
  max-width: 100%;
  object-fit: contain;
  position: relative;
  z-index: 1;
}

.footer-about {
  margin: 0 0 1.65rem;
  color: rgba(255, 255, 255, 0.7);
  line-height: 1.78;
}

.footer-title {
  margin: 0 0 1.05rem;
  font-size: 0.78rem;
  font-weight: 800;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.95);
}

.footer-col a,
.footer-col :deep(a) {
  display: block;
  width: fit-content;
  margin-bottom: 0.8rem;
  color: rgba(255, 255, 255, 0.78);
  text-decoration: none;
  transition: color 180ms ease;
}

.footer-col a:hover,
.footer-col :deep(a:hover) {
  color: #c8ee63;
}

.footer-contact-block {
  display: grid;
  gap: 1.2rem;
  margin-bottom: 1.35rem;
}

.footer-contact-item strong {
  display: block;
  margin-bottom: 0.38rem;
  font-size: 0.77rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.56);
}

.footer-contact-item a {
  color: rgba(255, 255, 255, 0.9);
  text-decoration: none;
}

.footer-contact-item span,
.footer-meta {
  color: rgba(255, 255, 255, 0.62);
  line-height: 1.7;
}

.footer-social {
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;
}

.footer-social a {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 42px;
  padding: 0.72rem 1rem;
  border-radius: 999px;
  border: 1px solid rgba(255, 255, 255, 0.12);
  background: transparent;
  color: rgba(255, 255, 255, 0.84);
  text-decoration: none;
  transition:
    color 180ms ease,
    border-color 180ms ease,
    background 180ms ease;
}

.footer-social a:hover {
  color: #d8ff72;
  border-color: rgba(200, 238, 99, 0.4);
  background: rgba(200, 238, 99, 0.05);
}

.footer-bottom {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding: 1.55rem 0 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.07);
  color: rgba(255, 255, 255, 0.42);
  font-size: 0.95rem;
}

.footer-bottom-links {
  display: flex;
  align-items: center;
  gap: 1.5rem;
}

.footer-bottom-links a,
.footer-credit a {
  color: rgba(255, 255, 255, 0.58);
  text-decoration: none;
  transition: color 180ms ease;
}

.footer-bottom-links a:hover,
.footer-credit a:hover {
  color: #c8ee63;
}

.footer-credit {
  margin: 0;
}

@media (max-width: 1100px) {
  .footer-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 2.2rem;
  }

  .footer-brand-col {
    max-width: none;
  }

  .footer-bottom {
    flex-direction: column;
    align-items: flex-start;
  }

  .footer-bottom-links {
    flex-wrap: wrap;
  }
}

@media (max-width: 720px) {
  .footer-main {
    padding: 3.4rem 0 2.2rem;
  }

  .footer-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .footer-logo-card {
    padding: 0.8rem 1rem;
    border-radius: 16px;
  }

  .footer-logo {
    height: 40px;
  }

  .footer-bottom {
    padding: 1.3rem 0 1.6rem;
  }

  .footer-bottom-links {
    gap: 1rem 1.25rem;
  }
}
</style>