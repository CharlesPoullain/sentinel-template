<script setup lang="ts">
import { ref } from 'vue'
import BaseLayout from '@/components/BaseLayout.vue'
import InputText from 'primevue/inputtext'
import FormItemWrapper from '@/components/FormItemWrapper.vue'
const formData = ref({
  teamName: 'Sentinel'
})
</script>

<template>
  <BaseLayout>
    <div class="mx-10">
      <h1 class="text-white font-semibold text-2xl/8">Paramètres</h1>

      <FormItemWrapper title="Nom de l'équipe" description="Affiché sur votre profile publique.">
        <InputText type="text" v-model="formData.teamName" class="w-full" />
      </FormItemWrapper>
    </div>
  </BaseLayout>
</template>
