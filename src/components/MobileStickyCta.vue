<script setup>
import { RouterLink } from 'vue-router'
import { companyInfo } from '../data/site'
</script>

<template>
  <div class="mobile-cta">
    <a :href="companyInfo.phoneLink">Call dispatch</a>
    <RouterLink to="/book-online">Book online</RouterLink>
  </div>
</template>
