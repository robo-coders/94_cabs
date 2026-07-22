<template>
  <article class="fare-panel hover-lift">
    <p class="eyebrow" style="color: var(--brand-deep); margin-bottom: 0.5rem">Metered taxi</p>
    <h3>Current fare structure</h3>
    <p style="margin-top: 0.5rem; font-size: 0.92rem; color: var(--ink-soft)">
      Rates follow City of Red Deer taxi bylaws. Final trip totals depend on route, time in traffic, and stops.
    </p>
    <dl>
      <div>
        <dt>Initial Charge</dt>
        <dd>$3.20</dd>
      </div>
      <div>
        <dt>Distance</dt>
        <dd>$2.20 / km</dd>
      </div>
      <div>
        <dt>Waiting Time</dt>
        <dd>$0.75 / minute</dd>
      </div>
    </dl>
    <p style="margin-top: 1rem; font-size: 0.9rem">
      We are proud to offer special discounts for Seniors. Book a taxi through 94 cabs in Red Deer.
    </p>
  </article>
</template>

<style>
.fare-panel {
  height: 100%;
  display: flex;
  flex-direction: column;
}
</style>
