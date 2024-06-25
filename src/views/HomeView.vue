<script setup lang="ts">
import BaseLayout from '@/components/BaseLayout.vue'
import Select from 'primevue/select'
import OverviewResultCard from '@/components/OverviewResultCard.vue'
import OverviewRecentOrder from '@/components/OverviewRecentOrder.vue'

import { ref } from 'vue'

const timeRangeList = ref([
  { name: 'Dernière semaine' },
  { name: 'Deux dernières semaines' },
  { name: 'Dernier mois' },
  { name: 'Dernière année' }
])
const selectedTimeRange = ref(timeRangeList.value[0])

const displayedCardResult = ref([
  {
    id: '001',
    title: 'Revenue total',
    amount: 23000000,
    variation: 2.5,
    isPositiveVariation: true
  },
  {
    id: '002',
    title: 'Moyenne des commandes',
    amount: 230,
    variation: 0.5,
    isPositiveVariation: true
  },
  {
    id: '003',
    title: 'Nombre de vente',
    amount: 2340,
    variation: 1.5,
    isPositiveVariation: false
  },
  {
    id: '004',
    title: 'Trafic',
    amount: 123000,
    variation: 0.5,
    isPositiveVariation: true
  }
])
</script>

<template>
  <BaseLayout>
    <h1 class="text-white font-semibold text-2xl/8">Bonjour John</h1>
    <div class="flex flex-row justify-between">
      <h2 class="text-base font-medium">Aperçu</h2>
      <div>
        <Select
          v-model="selectedTimeRange"
          :options="timeRangeList"
          optionLabel="name"
          placeholder="Plage de temps"
          class="w-full"
        />
      </div>
    </div>
    <div class="grid grid-cols-2 md:grid-cols-4 gap-10">
      <OverviewResultCard
        v-for="card in displayedCardResult"
        :key="card.id"
        :title="card.title"
        :amount="card.amount"
        :variation="card.variation"
        :isPositiveVariation="card.isPositiveVariation"
        :sincePeriod="selectedTimeRange.name"
      />
    </div>

    <div class="mt-20">
      <h2 class="text-base font-medium">Dernières commandes</h2>
      <OverviewRecentOrder />
    </div>
  </BaseLayout>
</template>
