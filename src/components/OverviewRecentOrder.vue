<script setup>
import { ref, onMounted } from 'vue'
import { OrderService } from '@/services/OrderService'
import OrderTable from '@/components/OrderTable.vue'

const orders = ref()
onMounted(() => {
  OrderService.getOrdersSmall().then((data) => (orders.value = data))
})
</script>
<template>
  <OrderTable :orders />
</template>
