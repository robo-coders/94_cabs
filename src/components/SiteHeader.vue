<script setup>
import { ref } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import { navLinks, companyInfo } from '../data/site'

const route = useRoute()
const menuOpen = ref(false)

const closeMenu = () => {
  menuOpen.value = false
}
</script>

<template>
  <header class="site-header">
    <div class="container top-strip">
      <p>Taxi Dispatch Services · 24/7 · Red Deer &amp; regional routes</p>
      <div class="strip-actions">
        <a :href="companyInfo.phoneLink">{{ companyInfo.phoneDisplay }}</a>
        <a :href="`mailto:${companyInfo.email}`">{{ companyInfo.email }}</a>
      </div>
    </div>
    <div class="container nav-row">
      <RouterLink class="brand-lockup" to="/" @click="closeMenu">
        <span class="brand-94">94</span>
        <span class="brand-text">CABS RED DEER</span>
      </RouterLink>
      <button class="menu-toggle" type="button" aria-label="Toggle menu" @click="menuOpen = !menuOpen">Menu</button>
      <nav class="desktop-nav" aria-label="Primary navigation">
        <RouterLink
          v-for="item in navLinks"
          :key="item.to"
          :to="item.to"
          class="nav-link"
          :class="{ active: route.path === item.to }"
        >
          {{ item.label }}
        </RouterLink>
      </nav>
      <div class="header-actions">
        <a class="header-cta" :href="companyInfo.phoneLink">Call dispatch</a>
      </div>
    </div>
    <nav v-if="menuOpen" class="mobile-nav" aria-label="Mobile navigation">
      <div class="container mobile-nav-inner">
        <RouterLink v-for="item in navLinks" :key="item.to" :to="item.to" @click="closeMenu">
          {{ item.label }}
        </RouterLink>
      </div>
    </nav>
  </header>
</template>
