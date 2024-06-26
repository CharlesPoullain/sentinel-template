<script setup lang="ts">
import { ref } from 'vue'
import BaseLayout from '@/components/BaseLayout.vue'
import InputText from 'primevue/inputtext'

const formData = ref({
  teamName: 'Sentinel'
})
</script>

<template>
  <BaseLayout>
    <div class="mx-10">
      <h1 class="text-white font-semibold text-2xl/8">Paramètres</h1>

      <div
        class="grid gap-x-8 gap-y-6 sm:grid-cols-2 items-center border-t-zinc-800 b-t-solid py-10"
      >
        <div>
          <h2 class="font-semibold text-lg m-0 p-0">Nom de l'équipe</h2>
          <span class="font-normal text-base text-zinc-500"
            >Affiché sur votre profile publique.</span
          >
        </div>
        <div>
          <InputText type="text" v-model="formData.teamName" class="w-full" />
        </div>
      </div>
    </div>
  </BaseLayout>
</template>
