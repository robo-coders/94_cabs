<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const props = defineProps({
  delay: { type: Number, default: 0 },
  once: { type: Boolean, default: true },
  rootMargin: { type: String, default: '0px 0px -8% 0px' },
  threshold: { type: Number, default: 0.1 },
  tag: { type: String, default: 'div' }
})

const root = ref(null)
const visible = ref(false)
let observer

const reveal = () => {
  const done = () => {
    visible.value = true
    if (props.once) observer?.disconnect()
  }
  if (props.delay > 0) window.setTimeout(done, props.delay)
  else done()
}

onMounted(() => {
  const el = root.value
  if (!el) return

  observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) reveal()
        else if (!props.once) visible.value = false
      }
    },
    { rootMargin: props.rootMargin, threshold: props.threshold }
  )
  observer.observe(el)
})

onUnmounted(() => {
  observer?.disconnect()
})
</script>

<template>
  <component :is="tag" ref="root" class="reveal-on-scroll" :class="{ 'reveal-on-scroll--visible': visible }">
    <slot />
  </component>
</template>
