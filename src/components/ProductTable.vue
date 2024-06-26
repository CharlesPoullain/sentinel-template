<script setup>
import { ref, defineProps } from 'vue'
import DataTable from 'primevue/datatable'
import Column from 'primevue/column'
import { useRouter } from 'vue-router'

const router = useRouter()

const selectedProduct = ref()

defineProps({
  products: Array
})

function onRowSelect(event) {
  router.push(`/orders/${event.data.id}`)
}
</script>
<template>
  <DataTable
    id="products-table"
    v-model:selection="selectedProduct"
    :value="products"
    tableStyle="min-width: 50rem"
    selectionMode="single"
    dataKey="code"
    @rowSelect="onRowSelect"
    size="large"
  >
    <Column field="code" header="Code"></Column>
    <Column field="name" header="Name"></Column>
    <Column field="category" header="Category"></Column>
    <Column field="quantity" header="Quantity"></Column>
  </DataTable>
</template>
<style scoped>
:deep(.p-datatable-column-title) {
  @apply 'text-zinc-400 font-normal';
}
</style>
