<script setup>
import { ref, onMounted } from 'vue'
import { ProductService } from '@/services/ProductService'
import ProductTable from '@/components/ProductTable.vue'

const products = ref()
onMounted(() => {
  ProductService.getProductsSmall().then((data) => (products.value = data))
})
</script>
<template>
  <ProductTable :products />
</template>
