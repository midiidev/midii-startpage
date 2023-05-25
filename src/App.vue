<script setup>
import { watch } from 'vue'
import Content from '@/components/Content.vue'
import Settings from '@/components/Settings.vue'
import { settings } from '@/settings'

watch(settings, async () => {
  localStorage.settings = JSON.stringify(settings.value)
}, { deep: true })
</script>

<template>
  <Content />
  <Settings />
</template>
