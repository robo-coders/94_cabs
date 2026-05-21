<script setup>
import SiteHeader from './components/SiteHeader.vue'
import SiteFooter from './components/SiteFooter.vue'
import MobileStickyCta from './components/MobileStickyCta.vue'
</script>

<template>
  <div class="app-shell">
    <a class="skip-link" href="#main-content">Skip to main content</a>
    <SiteHeader />
    <main id="main-content" class="main-content">
      <RouterView />
    </main>
    <SiteFooter />
    <MobileStickyCta />
  </div>
</template>
