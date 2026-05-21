<script setup>
import { onMounted, onUnmounted, ref } from 'vue'
import { RouterLink } from 'vue-router'
import PageBanner from '../components/PageBanner.vue'
import RevealOnScroll from '../components/RevealOnScroll.vue'
import { companyInfo, photoSet } from '../data/site'

const bookingElementId = 'taxicaller-booking-form'
const scriptId = 'taxicaller-embed-script'
const loaded = ref(false)

const initializeEmbed = () => {
  if (!window.TaxiCaller || loaded.value) return
  loaded.value = true

  new window.TaxiCaller.PassengerApp({
    element: `#${bookingElementId}`,
    app: 'taxicaller',
    company: 22600,
    heightDesktop: '720px',
    heightMobile: '260px',
    mobileBreakpoint: '992px',
    returnMessage: 'ᐊ Return to website'
  })
}

onMounted(() => {
  const existing = document.getElementById(scriptId)
  if (existing) {
    initializeEmbed()
    return
  }

  const script = document.createElement('script')
  script.id = scriptId
  script.src = 'https://passenger.taxicaller.net/embed/embed-v1.0.0.js'
  script.async = true
  script.onload = initializeEmbed
  document.body.appendChild(script)
})

onUnmounted(() => {
  const container = document.getElementById(bookingElementId)
  if (container) container.innerHTML = ''
  loaded.value = false
})
</script>

<template>
  <div class="page book-page">
    <PageBanner
      eyebrow="BOOK ONLINE"
      title="Book your cab online in seconds"
      subtitle="Book your next ride quickly and easily with our online booking system, whether you need a pickup now or want to schedule your journey in advance."
      :image="photoSet.appBooking"
      compact
    >
      <div class="book-page__banner-actions">
        <a class="btn btn-outline-light" :href="companyInfo.phoneLink">Prefer to book by phone? Call dispatch</a>
        <a class="btn btn-outline-light" :href="companyInfo.appLink" target="_blank" rel="noreferrer">Open the passenger app</a>
      </div>
    </PageBanner>

    <section class="section-block section-surface book-page__intro">
      <div class="container">
        <RevealOnScroll>
          <div class="section-head section-head--center">
            <p class="eyebrow">BOOK YOUR RIDE</p>
            <h2>Request a pickup now or schedule your ride ahead of time</h2>
            <p class="section-lede">
              Use our online booking system to book a cab when you need one or arrange your trip in advance at a time that suits you.
            </p>
          </div>
        </RevealOnScroll>
      </div>
    </section>

    <section class="section-block section-block--tight book-page__main">
      <div class="container">
        <div class="booking-layout">
          <RevealOnScroll>
            <article class="booking-card booking-card--form hover-lift">
              <div class="booking-card__header">
                <div>
                  <h3>Online booking</h3>
                  <p>Secure booking powered by TaxiCaller</p>
                </div>
              </div>

              <div class="booking-card__body">
                <div :id="bookingElementId" class="booking-embed"></div>
              </div>
            </article>
          </RevealOnScroll>

          <RevealOnScroll>
            <aside class="booking-side">
              <div class="booking-info-card">
                <h3>Before you book</h3>
                <ul class="booking-info-list">
                  <li>Make sure your pickup address is correct and easy for the driver to find.</li>
                  <li>If you are travelling to or from the airport, add your terminal and airline if there is a notes section.</li>
                  <li>If you need a wheelchair accessible vehicle, please call dispatch so we can check availability for you.</li>
                </ul>
              </div>

              <div class="booking-info-card">
                <h3>After you book</h3>
                <p>
                  Once your booking has been sent, you can check for updates in the booking panel or in the app. If you need help or have not received an update for a while, call dispatch and keep your booking details ready.
                </p>
              </div>

              <div class="booking-info-card booking-info-card--action">
                <h3>Need help?</h3>
                <p>
                  If you would rather speak to someone, our dispatch team is available 24 hours a day, 7 days a week.
                </p>
                <a class="btn btn-dark booking-info-card__button" :href="companyInfo.phoneLink">Call {{ companyInfo.phoneDisplay }}</a>
              </div>

              <div class="booking-info-card booking-info-card--action">
                <h3>Use the app</h3>
                <p>
                  For faster booking, live updates, and saved addresses, download the passenger app.
                </p>
                <a class="btn btn-ghost-dark booking-info-card__button" :href="companyInfo.appLink" target="_blank" rel="noreferrer">Download app</a>
              </div>
            </aside>
          </RevealOnScroll>
        </div>
      </div>
    </section>

    <section class="section-block book-page__support">
      <div class="container">
        <RevealOnScroll>
          <div class="cta-panel booking-help-panel">
            <h2>Need help with the booking form?</h2>
            <p>Call dispatch and we can help you complete your booking over the phone.</p>
            <div class="book-page__banner-actions">
              <a class="btn btn-primary" :href="companyInfo.phoneLink">Call dispatch</a>
              <RouterLink class="btn btn-outline-light" to="/contact-us">Other contact options</RouterLink>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  </div>
</template>

<style scoped>
.book-page__banner-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
}

.book-page__intro {
  padding-bottom: 20px;
}

.book-page__main {
  padding-top: 8px;
}

.booking-layout {
  display: grid;
  grid-template-columns: minmax(0, 1.2fr) minmax(340px, 0.8fr);
  gap: 30px;
  align-items: stretch;
}

.booking-card,
.booking-side {
  min-width: 0;
}

.booking-card {
  display: flex;
  flex-direction: column;
  height: 100%;
  background: rgba(255, 255, 255, 0.82);
  border: 1px solid rgba(255, 255, 255, 0.5);
  border-radius: 28px;
  overflow: hidden;
  box-shadow: 0 24px 60px rgba(15, 23, 42, 0.08);
  backdrop-filter: blur(12px);
}

.booking-card__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  padding: 24px 26px 18px;
  border-bottom: 1px solid rgba(15, 23, 42, 0.08);
}

.booking-card__header h3 {
  margin: 0;
  font-size: 1.2rem;
  line-height: 1.2;
}

.booking-card__header p {
  margin: 6px 0 0;
  color: rgba(15, 23, 42, 0.65);
  font-size: 0.95rem;
  line-height: 1.5;
}

.booking-card__body {
  flex: 1;
  padding: 18px;
  display: flex;
  align-items: stretch;
}

.booking-embed {
  width: 100%;
  max-width: 100%;
  min-height: 720px;
  border-radius: 22px;
  overflow: hidden;
  background: #f8fafc;
}

.booking-side {
  display: grid;
  grid-template-rows: repeat(4, minmax(0, auto));
  gap: 18px;
  align-content: start;
}

.booking-info-card {
  background: rgba(255, 255, 255, 0.82);
  border: 1px solid rgba(255, 255, 255, 0.5);
  border-radius: 24px;
  padding: 22px 22px 20px;
  box-shadow: 0 18px 40px rgba(15, 23, 42, 0.06);
  backdrop-filter: blur(12px);
}

.booking-info-card h3 {
  margin: 0 0 10px;
  font-size: 1.08rem;
  line-height: 1.25;
  color: #111827;
}

.booking-info-card p {
  margin: 0;
  color: rgba(17, 24, 39, 0.74);
  line-height: 1.7;
}

.booking-info-list {
  margin: 0;
  padding-left: 18px;
  color: rgba(17, 24, 39, 0.74);
}

.booking-info-list li {
  line-height: 1.7;
}

.booking-info-list li + li {
  margin-top: 10px;
}

.booking-info-card--action {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.booking-info-card__button {
  margin-top: 16px;
}

.booking-help-panel {
  display: flex;
  flex-direction: column;
  gap: 18px;
}

.booking-help-panel h2,
.booking-help-panel p {
  margin: 0;
}

@media (max-width: 1199px) {
  .booking-layout {
    grid-template-columns: minmax(0, 1fr) 360px;
    gap: 24px;
  }
}

@media (max-width: 991px) {
  .booking-layout {
    grid-template-columns: 1fr;
  }

  .booking-card__body {
    padding: 14px;
  }

  .booking-embed {
    min-height: 260px;
  }
}

@media (max-width: 640px) {
  .booking-card {
    border-radius: 22px;
  }

  .booking-card__header {
    padding: 20px 20px 16px;
  }

  .booking-info-card {
    border-radius: 20px;
    padding: 18px;
  }

  .book-page__banner-actions {
    flex-direction: column;
    align-items: stretch;
  }
}
</style>