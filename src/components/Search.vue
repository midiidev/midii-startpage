<script setup>
import { ref } from 'vue'
import { settings } from '@/settings'

const searchInput = ref('')

const search = () => {
  window.location.href = `${settings.value.search}${searchInput.value}`
}
</script>

<template>
  <input class="w-[90%] sm:w-full bg-base-200 z-10 text-2xl p-4" placeholder="search..." v-model="searchInput" @keyup.enter="search">
</template>
