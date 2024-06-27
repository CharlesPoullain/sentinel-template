<script setup>
import DataView from 'primevue/dataview'
import Tag from 'primevue/tag'
import { EventService } from '@/services/EventService'
import { ref, onMounted } from 'vue'
import { displayDate, displayTime } from '@/utils/Date'

const events = ref()
onMounted(() => {
  EventService.getEventsSmall().then((data) => (events.value = data))
})

function getImageUrl(name) {
  return `/assets/events/${name}`
}
</script>

<template>
  <div class="card">
    <DataView :value="events">
      <template #list="slotProps">
        <div class="flex flex-col">
          <div v-for="(item, index) in slotProps.items" :key="index">
            <div
              class="flex flex-col sm:flex-row sm:items-center ml-4 pr-6 py-6 gap-4 border-t-zinc-800 b-t-solid"
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
