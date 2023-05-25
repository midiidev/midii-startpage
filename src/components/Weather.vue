<script setup>
import { ref, watch } from 'vue'
import axios from 'axios'
import { settings } from '@/settings'

const weather = ref({
  temp: '',
  lat: null,
  lon: null,
  city: ''
})

console.log(settings.value)

const getWeatherInfo = () => {
  axios
      .get('https://api.ipify.org?format=json')
      .then((ipRes) => {
        axios
            .get(`http://ip-api.com/json/${ipRes.data.ip}`)
            .then((lookupRes) => {
              weather.value.city = lookupRes.data.city
              weather.value.lat = lookupRes.data.lat
              weather.value.lon = lookupRes.data.lon

              axios
                  .get(`https://api.open-meteo.com/v1/forecast?latitude=${lookupRes.data.lat}&longitude=${lookupRes.data.lon}&temperature_unit=${settings.value.tempUnit}&current_weather=true`)
                  .then((weatherRes) => {
                    weather.value.temp = weatherRes.data.current_weather.temperature
                  })
            })
      })
}

watch(settings, () => {
  getWeatherInfo()
}, { immediate: true, deep: true })
</script>

<template>
  <div class="mt-2">
    <h3 class="text-2xl font-bold">{{ weather.temp }}°{{ settings.tempUnit === 'fahrenheit' ? 'F' : 'C' }}</h3>
    <h4 v-if="settings.locationDisplay === 'coords'" class="font-bold">{{ weather.lat }}, {{ weather.lon }}</h4>
    <h4 v-else-if="settings.locationDisplay === 'city'" class="font-bold">{{ weather.city }}</h4>
  </div>
</template>