<script setup>
import { settings } from '@/settings'

const addLink = () => {
  settings.value.links.push({
    name: 'New Link',
    url: 'https://example.com'
  })
}
</script>

<template>
  <div class="fixed bottom-4 left-4">
    <label for="settings-modal" class="btn">Settings</label>
  </div>

  <Teleport to="body">
    <input type="checkbox" id="settings-modal" class="modal-toggle" />
    <div class="modal modal-bottom sm:modal-middle">
      <div class="modal-box">
        <h3 class="font-bold text-lg mb-4">Settings</h3>

        <div class="space-y-4">
          <label class="block">
            Name
            <input class="col-span-2 input w-full bg-base-200" v-model="settings.name">
          </label>

          <label class="block">
            Wallpaper Source
            <input class="col-span-2 input w-full bg-base-200" v-model="settings.wallpaper">
          </label>

          <label class="block">
            Image Source
            <input class="col-span-2 input w-full bg-base-200" v-model="settings.imageSrc">
          </label>

          <label class="block">
            Search URL
            <input class="input w-full bg-base-200" v-model="settings.search">
          </label>

          <label class="block">
            Display Location
            <select class="input w-full bg-base-200" v-model="settings.locationDisplay">
              <option value="city" :selected="settings.locationDisplay === 'city'">City</option>
              <option value="coords" :selected="settings.locationDisplay === 'coords'">Latitude and Longitude</option>
              <option value="none" :selected="settings.locationDisplay === 'none'">None</option>
            </select>
          </label>
        </div>

        <div class="space-y-4 mt-4">
          <h4 class="font-bold">Links</h4>

          <div v-for="(item, index) in settings.links">
            <input class="input w-full bg-base-200" v-model="settings.links[index].name">
            <input class="input w-full bg-base-200" v-model="settings.links[index].url">
            <button @click="settings.links.splice(index, 1)">delete</button>
          </div>

          <button class="btn btn-secondary" @click="addLink">Add Link</button>
        </div>

        <div class="modal-action">
          <label for="settings-modal" class="btn btn-primary">Save</label>
        </div>
      </div>
    </div>
  </Teleport>
</template>