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
        <img src="/Images/Home/logo.png" alt="94 Cabs Red Deer" class="brand-logo" />
      </RouterLink>

      <button
        class="menu-toggle"
        type="button"
        aria-label="Toggle menu"
        @click="menuOpen = !menuOpen"
      >
        Menu
      </button>

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
        <RouterLink
          v-for="item in navLinks"
          :key="item.to"
          :to="item.to"
          @click="closeMenu"
        >
          {{ item.label }}
        </RouterLink>
      </div>
    </nav>
  </header>
</template>

<style scoped>
.site-header {
  position: relative;
  z-index: 50;
  background: #ffffff;
  border-bottom: 1px solid rgba(16, 24, 22, 0.08);
  box-shadow: 0 8px 24px rgba(16, 24, 22, 0.04);
}

.top-strip {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding: 0.75rem 0;
  font-size: 0.82rem;
  color: rgba(18, 24, 22, 0.72);
  border-bottom: 1px solid rgba(16, 24, 22, 0.06);
}

.top-strip p {
  margin: 0;
}

.strip-actions {
  display: flex;
  align-items: center;
  gap: 1.5rem;
}

.strip-actions a {
  color: #121816;
  text-decoration: none;
  font-weight: 600;
}

.strip-actions a:hover {
  color: #7fbf2f;
}

.nav-row {
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  gap: 2rem;
  min-height: 92px;
  padding: 0.85rem 0;
}

.brand-lockup {
  display: inline-flex;
  align-items: center;
  text-decoration: none;
}

.brand-logo {
  display: block;
  height: 52px;
  width: auto;
  max-width: 100%;
  object-fit: contain;
}

.desktop-nav {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.75rem;
}

.nav-link {
  color: #1b2421;
  text-decoration: none;
  font-weight: 600;
  padding: 0.7rem 0;
  transition: color 0.2s ease, background-color 0.2s ease;
}

.nav-link:hover {
  color: #7fbf2f;
}

.nav-link.active {
  color: #ffffff;
  background: #1f2a24;
  padding: 0.72rem 1rem;
  border-radius: 999px;
}

.header-actions {
  display: flex;
  align-items: center;
}

.header-cta {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.95rem 1.4rem;
  border-radius: 999px;
  background: #9cdb32;
  color: #101312;
  text-decoration: none;
  font-weight: 700;
  box-shadow: 0 10px 24px rgba(156, 219, 50, 0.22);
}

.header-cta:hover {
  background: #b2ef4c;
}

.menu-toggle {
  display: none;
  border: 0;
  background: transparent;
  color: #1b2421;
  font-weight: 700;
}

.mobile-nav {
  display: none;
}

.mobile-nav-inner {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem 0 1.25rem;
}

.mobile-nav-inner a {
  color: #1b2421;
  text-decoration: none;
  font-weight: 600;
}

@media (max-width: 1100px) {
  .nav-row {
    grid-template-columns: auto auto;
    justify-content: space-between;
    gap: 1rem;
    min-height: 76px;
    padding: 0.7rem 0;
  }

  .desktop-nav,
  .header-actions {
    display: none;
  }

  .menu-toggle {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 0.7rem 0.95rem;
    border: 1px solid rgba(16, 24, 22, 0.12);
    border-radius: 999px;
    background: #f7f8f5;
    color: #1b2421;
    font-weight: 700;
    line-height: 1;
  }

  .mobile-nav {
    display: block;
    border-top: 1px solid rgba(16, 24, 22, 0.06);
    background: #ffffff;
  }

  .mobile-nav-inner {
    display: flex;
    flex-direction: column;
    gap: 0.35rem;
    padding: 0.9rem 0 1rem;
  }

  .mobile-nav-inner a {
    color: #1b2421;
    text-decoration: none;
    font-weight: 600;
    padding: 0.9rem 0.2rem;
    border-bottom: 1px solid rgba(16, 24, 22, 0.06);
  }

  .mobile-nav-inner a:last-child {
    border-bottom: 0;
  }
}

@media (max-width: 720px) {
  .top-strip {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.55rem;
    padding: 0.65rem 0;
  }

  .strip-actions {
    flex-wrap: wrap;
    gap: 0.65rem 1rem;
  }

  .nav-row {
    min-height: 70px;
    padding: 0.65rem 0;
  }

  .brand-logo {
    height: 44px;
  }

  .menu-toggle {
    padding: 0.65rem 0.9rem;
    font-size: 0.95rem;
  }
}
</style>