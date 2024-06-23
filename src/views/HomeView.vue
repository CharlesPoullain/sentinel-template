<script setup lang="ts">
import BaseLayout from '@/components/BaseLayout.vue'
import Select from 'primevue/select'
import { ref } from 'vue'

const timeRangeList = ref([
  { name: 'Dernière semaine' },
  { name: 'Deux dernières semaines' },
  { name: 'Dernier mois' },
  { name: 'Dernière année' }
])
const selectedTimeRange = ref(timeRangeList.value[0])
</script>

<template>
  <BaseLayout>
    <h1 class="text-white font-semibold text-2xl/8">Bonjour Charles</h1>
    <div class="flex flex-row justify-between">
      <h2 class="text-base font-medium">Overview</h2>
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
  </BaseLayout>
</template>
