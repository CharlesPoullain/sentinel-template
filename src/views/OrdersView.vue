<script setup lang="ts">
import BaseLayout from '@/components/BaseLayout.vue'
import { ProductService } from '@/services/ProductService'
import { ref, onMounted } from 'vue'
import ProductTable from '@/components/ProductTable.vue'
import Button from 'primevue/button'

const products = ref()
onMounted(() => {
  ProductService.getProducts().then((data) => (products.value = data))
})
</script>

<template>
  <BaseLayout>
    <div class="flex flex-row justify-between">
      <h1 class="text-white font-semibold text-2xl/8">Commandes</h1>
      <div>
        <Button label="Créer une commande" severity="secondary" />
      </div>
    </div>

    <ProductTable :products />
  </BaseLayout>
</template>
