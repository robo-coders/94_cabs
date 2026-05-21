<script setup>
import { RouterLink } from 'vue-router'
import { navLinks, companyInfo, serviceLinks } from '../data/site'
</script>

<template>
  <footer class="site-footer">
    <div class="footer-cta">
      <div class="container footer-cta-inner">
        <div>
          <p class="footer-dispatch-pill">24/7 dispatch · Red Deer, AB</p>
          <h2>Book now or plan your next ride</h2>
          <p>
            For immediate pickups, call dispatch. For airport runs, medical trips, shuttle coordination, or account
            setup we answer around the clock.
          </p>
        </div>
        <div class="footer-cta-actions">
          <a class="btn btn-primary" :href="companyInfo.phoneLink">{{ companyInfo.phoneDisplay }}</a>
          <RouterLink class="btn btn-outline-light" to="/book-online">Book online</RouterLink>
        </div>
      </div>
    </div>

    <div class="footer-main">
      <div class="container footer-grid">
        <section class="footer-brand-col">
          <div class="footer-brand-row">
            <span class="footer-brand-num">94</span>
            <span class="footer-brand-text">Cabs Red Deer</span>
          </div>
          <p class="footer-about">
           Local taxi and passenger transport with licensed drivers for city rides, airport trips, medical bookings, accessible travel, and pre-arranged pickups across Red Deer and surrounding routes.
          </p>
          <p class="footer-meta">Calls answered as Taxi Dispatch Services · Licensed service</p>
          <div class="footer-social">
            <a
              v-for="s in companyInfo.social"
              :key="s.label"
              :href="s.href"
              target="_blank"
              rel="noopener noreferrer"
              >{{ s.label }}</a
            >
          </div>
        </section>

        <section>
          <p class="footer-title">Navigate</p>
          <RouterLink v-for="item in navLinks" :key="item.to" :to="item.to">{{ item.label }}</RouterLink>
        </section>

        <section>
          <p class="footer-title">Services</p>
          <RouterLink v-for="item in serviceLinks.slice(0, 5)" :key="item.label" :to="item.to">{{ item.label }}</RouterLink>
        </section>

        <section>
          <p class="footer-title">Special services</p>
          <RouterLink to="/94-shuttle">94 Shuttle</RouterLink>
          <RouterLink to="/handicap-services">Accessible vehicles</RouterLink>
          <RouterLink to="/book-online">Book online</RouterLink>
          <a :href="companyInfo.appLink" target="_blank" rel="noopener noreferrer">Passenger app</a>
          <a :href="companyInfo.parentBrandLink" target="_blank" rel="noopener noreferrer">94 Cabs network</a>
        </section>

        <section>
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
        <a>Map</a>
      </div>

      <p class="footer-credit">
        Developed by
        <a href="https://robocoders.dev" target="_blank" rel="noopener noreferrer nofollow">Robo Coders</a>
      </p>
    </div>
  </footer>
</template>
