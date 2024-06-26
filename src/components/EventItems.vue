<script setup>
import DataView from 'primevue/dataview'
import Tag from 'primevue/tag'
import { EventService } from '@/services/EventService'
import { ref, onMounted } from 'vue'

const events = ref()
onMounted(() => {
  EventService.getEventsSmall().then((data) => (events.value = data))
})

function getImageUrl(name) {
  return `/assets/events/${name}`
}

function displayDate(date) {
  return new Date(date).toLocaleDateString('en-US', {
    month: 'short',
    day: '2-digit',
    year: 'numeric'
  })
}

function displayTime(time) {
  return new Date(time).toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit'
  })
}
</script>

<template>
  <div class="card">
    <DataView :value="events">
      <template #list="slotProps">
        <div class="flex flex-col">
          <div v-for="(item, index) in slotProps.items" :key="index">
            <div
              class="flex flex-col sm:flex-row sm:items-center p-6 gap-4"
              :class="{ 'border-t border-surface-200 dark:border-surface-700': index !== 0 }"
            >
              <div class="md:w-40 relative">
                <img
                  class="landscape-img block xl:block mx-auto rounded w-full"
                  :src="`${getImageUrl(item.image)}`"
                  :alt="item.name"
                />
              </div>
              <div class="flex flex-col md:flex-row justify-between md:items-center flex-1 gap-6">
                <div class="flex flex-row md:flex-col justify-between items-start gap-2">
                  <div>
                    <div class="text-xl font-semibold mt-2">{{ item.name }}</div>
                  </div>
                  <div class="text-zinc-500">
                    {{ displayDate(item.date) }} at {{ displayTime(item.date) }} -
                    {{ item.address }}
                  </div>
                  <div class="text-zinc-600">
                    {{ item.tickets_sold }}/{{ item.total_tickets }} billets vendus
                  </div>
                </div>
                <div class="flex flex-col md:items-end gap-8">
                  <Tag
                    :value="item.status"
                    :severity="item.status === 'open' ? 'success' : 'secondary'"
                  />
                  <!-- additional menu -->
                </div>
              </div>
            </div>
          </div>
        </div>
      </template>
    </DataView>
  </div>
</template>
<style scoped>
.landscape-img {
  width: 100%;
  height: auto;
  aspect-ratio: 3 / 2;
  object-fit: cover;
  object-position: center;
}
</style>
