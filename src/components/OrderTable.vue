<script setup>
import { ref, defineProps } from 'vue'
import DataTable from 'primevue/datatable'
import Column from 'primevue/column'
import { useRouter } from 'vue-router'
import { displayDate } from '@/utils/Date'
const router = useRouter()

const selectedOrder = ref()

defineProps({
  orders: Array
})

function onRowSelect(event) {
  router.push(`/orders/${event.data.transactionId}`)
}

</script>
<template>
  <DataTable
    id="orders-table"
    v-model:selection="selectedOrder"
    :value="orders"
    tableStyle="min-width: 50rem"
    selectionMode="single"
    dataKey="code"
    @rowSelect="onRowSelect"
    size="large"
  >
    <Column field="transactionId" header="Id de Transaction"></Column>
    <Column field="date" header="Date">
      <template #body="slotProps">
        {{ displayDate(slotProps.data.date)}}
      </template>
    </Column>
    <Column field="customer" header="Client"></Column>
    <Column field="eventId" header="Événement"></Column>
    <Column field="amount" header="Prix"></Column>
  </DataTable>
</template>
<style scoped>
:deep(.p-datatable-column-title) {
  @apply 'text-zinc-400 font-normal';
}
</style>
