<script setup>
import { ref, watch } from 'vue'
import { useAxios } from '@vueuse/integrations/useAxios'
import { settings } from '@/settings'

const ip = useAxios('https://api.ipify.org?format=json')
const ipLookup = useAxios()
const getWeather = useAxios()

const weather = ref({
  temp: '',
  lat: null,
  lon: null,
  city: ''
})

watch(ip.isFinished, () => {
  if (ip.isFinished) {
    ipLookup.execute(`http://ip-api.com/json/${ip.data.value.ip}`)
  }
})

watch(ipLookup.isFinished, () => {
  if (ipLookup.isFinished) {
    getWeather.execute(`https://api.open-meteo.com/v1/forecast?latitude=${ipLookup.data.value.lat}&longitude=${ipLookup.data.value.lon}&current_weather=true`)
  }
})

watch(getWeather.isFinished, () => {
  if (getWeather.isFinished) {
    weather.value.lat = ipLookup.data.value.lat
    weather.value.lon = ipLookup.data.value.lon
    weather.value.city = ipLookup.data.value.city

    weather.value.temp = getWeather.data.value.current_weather.temperature
  }
})
</script>

<template>
  <div class="mt-2">
    <h3 class="text-2xl font-bold">{{ weather.temp }}°C</h3>
    <h4 v-if="settings.locationDisplay === 'coords'" class="font-bold">{{ weather.lat }}, {{ weather.lon }}</h4>
    <h4 v-else-if="settings.locationDisplay === 'city'" class="font-bold">{{ weather.city }}</h4>
  </div>
</template>