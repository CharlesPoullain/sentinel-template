<script setup lang="ts">
import { ref } from 'vue'
import BaseLayout from '@/components/BaseLayout.vue'
import InputText from 'primevue/inputtext'
import Textarea from 'primevue/textarea'
import Checkbox from 'primevue/checkbox'
import Select from 'primevue/select'
import FormItemWrapper from '@/components/FormItemWrapper.vue'
import Button from 'primevue/button'

const countries = ref([{ name: 'France' }, { name: 'Germany' }, { name: 'United Kingdom' }])

const currencies = ref([{ name: 'Euros' }, { name: 'Pounds' }])

const formData = ref({
  name: 'Sentinel',
  description: `Description de l'équipe Sentinel`,
  email: 'contact@sentinel.com',
  showedEmail: true,
  adresse1: '57 rue de la sentinelle',
  adresse2: null,
  city: 'Angers',
  postalCode: '49000',
  country: countries.value[0],
  currency: currencies.value[0]
})
</script>

<template>
  <BaseLayout>
    <div class="mx-10">
      <h1 class="text-white font-semibold text-2xl/8">Paramètres</h1>

      <FormItemWrapper title="Nom de l'équipe" description="Affiché sur votre profile publique.">
        <InputText type="text" v-model="formData.name" class="w-full" />
      </FormItemWrapper>

      <FormItemWrapper
        title="Description de l'équipe"
        description="Affiché sur votre profile publique. Au maximum 240 charactères."
      >
        <Textarea type="text" v-model="formData.description" class="w-full" />
      </FormItemWrapper>

      <FormItemWrapper
        title="Email de l'équipe"
        description="Pour que les clients contact votre support."
      >
        <div class="space-y-4">
          <InputText type="email" v-model="formData.email" class="w-full" />
          <div class="flex items-center">
            <Checkbox v-model="formData.showedEmail" inputId="showEmail" name="showEmail"  :binary="true"/>
            <label for="showEmail" class="ml-2"> Afficher l'email sur le profile publique</label>
          </div>
        </div>
      </FormItemWrapper>

      <FormItemWrapper title="Adresse" description="L'adresse de votre équipe.">
        <div class="space-y-4">
          <InputText type="text" v-model="formData.adresse1" class="w-full" />
          <InputText type="text" v-model="formData.adresse2" class="w-full" />
          <div class="gap-4 grid grid-cols-2">
            <InputText type="text" v-model="formData.city" />
            <InputText type="text" v-model="formData.postalCode" />
          </div>
          <Select
            v-model="formData.country"
            :options="countries"
            optionLabel="name"
            placeholder="Choisir un pays"
            class="w-full md:w-56"
          />
        </div>
      </FormItemWrapper>

      <FormItemWrapper title="Monnaie" description="Quel monnaie votre organization va utiliser.">
        <Select
          v-model="formData.currency"
          :options="currencies"
          optionLabel="name"
          placeholder="Select une monnaie"
          class="w-full md:w-56"
        />
      </FormItemWrapper>

      <data class="flex justify-end items-center border-t-zinc-800 b-t-solid py-10 space-x-4">
        <Button label="Créer une commande" text  severity="secondary" />
        <Button label="Sauvegarder" severity="secondary" />
      </data>
    </div>
  </BaseLayout>
</template>
