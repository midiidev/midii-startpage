<script setup>
import { settings } from '@/settings'
import Search from '@/components/Search.vue'
import Weather from '@/components/Weather.vue'
</script>

<template>
  <main class="flex flex-col gap-4 justify-center items-center h-[100vh] x-background" :style="`background-image: url('${settings.wallpaper}')`">
    <div class="flex flex-col gap-4 justify-center items-center w-fit h-[100vh]">
      <Search />
      <div class="w-[90%] sm:w-full max-w-[76ch] flex flex-col-reverse sm:flex-row gap-4 z-10">
        <img class="sm:w-56 sm:h-56 bg-base-200 object-cover" :src="settings.imageSrc">
        <div class="flex flex-col justify-between bg-base-200 min-w-[25vw] p-4">
          <div>
            <h2 class="text-3xl font-black">Hello, {{ settings.name }}</h2>
            <Weather />
          </div>
          <ul class="flex flex-wrap gap-2">
            <li v-for="item in settings.links">
              <a class="underline" :href="item.url">{{ item.name }}</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
.x-background {
  background-position: center;
  background-size: cover;
}

.x-background:after {
  content: '';
  position: absolute;
  inset: 0;
  height: 100%;
  width: 100%;
  background: hsla(180,0%,0%,0.25);
  z-index: 0;
}
</style>
