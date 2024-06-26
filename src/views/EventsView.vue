<script setup lang="ts">
import BaseLayout from '@/components/BaseLayout.vue'
import IconField from 'primevue/iconfield'
import InputIcon from 'primevue/inputicon'
import InputText from 'primevue/inputtext'
import Select from 'primevue/select'
import Button from 'primevue/button'
import EventItems from '@/components/EventItems.vue'

import { ref } from 'vue'

const selectedSort = ref(null)
const sortList = ref([
  { name: 'Trier par nom' },
  { name: 'Trier par date' },
  { name: 'Trier par status' }
])
</script>

<template>
  <BaseLayout>
    <h1 class="text-white font-semibold text-2xl/8">Événements</h1>
    <div class="flex flex-row justify-between">
      <div class="flex space-x-4">
        <IconField class="min-w-100">
          <InputIcon class="pi pi-search" />
          <InputText class="w-full" v-model="value1" placeholder="Rechercher un événement" />
        </IconField>
        <Select
          v-model="selectedSort"
          :options="sortList"
          optionLabel="name"
          placeholder="Type de tri"
          class="w-full min-w-40"
        />
      </div>
      <Button label="Créer un événement" severity="secondary" />
    </div>
    <div class="mt-8">
      <EventItems />
    </div>
  </BaseLayout>
</template>
