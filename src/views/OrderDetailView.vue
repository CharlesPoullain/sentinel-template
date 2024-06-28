<script setup lang="ts">
import BaseLayout from '@/components/BaseLayout.vue'
import { OrderService } from '@/services/OrderService'
import { EventService } from '@/services/EventService'
import Tag from 'primevue/tag'
import Skeleton from 'primevue/skeleton'
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { displayDate, displayTime } from '@/utils/Date'

const route = useRoute()

const order = ref()
const event = ref()
const loading = ref(true)
onMounted(() => {
  fetchData()
})

async function fetchData() {
  loading.value = true
  const orderId = route.params.id
  await OrderService.getOrder(orderId).then((data) => (order.value = data))
  setTimeout(async () => {
    await EventService.getEvent(order.value?.eventId).then((data) => (event.value = data))
    loading.value = false
  }, 200)
}
</script>

<template>
  <BaseLayout>
    <RouterLink
      to="/orders"
      class="flex justify-start items-center px-4 no-underline hover:bg-zinc-900 px-2 py-1.5 rounded-lg w-full text-white font-semibold text-lg"
    >
      <i class="pi pi-chevron-left mr-4 text-xs"></i>
      <span class="text-base font-medium">Commandes</span>
    </RouterLink>
    <div class="flex items-center space-x-4">
      <h1 class="text-white font-semibold text-2xl/8">Order #{{ route.params.id.toString() }}</h1>
      <div>
        <Tag
          :severity="order?.status === `cancelled` ? `danger` : `success`"
          :value="order?.status"
        />
      </div>
    </div>
    <div class="mt-10">
      <h3 class="font-semibold text-base m-0 py-2">Résumé</h3>

      <div class="">
        <div class="grid grid-cols-3 border-t-zinc-800 b-t-solid items-center">
          <p class="text-base text-zinc-500">Client</p>
          <p v-if="!loading" class="text-base col-span-2">{{ order?.customer }}</p>
          <Skeleton v-else class=""></Skeleton>
        </div>
        <div class="grid grid-cols-3 border-t-zinc-800 b-t-solid items-center">
          <p class="text-base text-zinc-500">Evenement</p>
          <RouterLink
            v-if="!loading"
            :to="`/events/${order?.eventId}`"
            class="no-underline text-white"
          >
            <p class="text-base col-span-2">{{ event?.name }}</p>
          </RouterLink>
          <Skeleton v-else class=""></Skeleton>
        </div>
        <div class="grid grid-cols-3 border-t-zinc-800 b-t-solid items-center">
          <p class="text-base text-zinc-500">Prix</p>
          <p v-if="!loading" class="text-base col-span-2">{{ order?.amount }}</p>
          <Skeleton v-else class=""></Skeleton>
        </div>
        <div class="grid grid-cols-3 border-t-zinc-800 b-t-solid items-center">
          <p class="text-base text-zinc-500">Date de la commande</p>
          <p v-if="!loading" class="text-base col-span-2">
            {{ displayDate(order?.date) }} {{ displayTime(order?.date) }}
          </p>
          <Skeleton v-else class=""></Skeleton>
        </div>
      </div>
    </div>
  </BaseLayout>
</template>
