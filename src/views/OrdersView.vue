<script setup lang="ts">
import BaseLayout from '@/components/BaseLayout.vue'
import { OrderService } from '@/services/OrderService'
import { ref, onMounted } from 'vue'
import OrderTable from '@/components/OrderTable.vue'
import Button from 'primevue/button'

const orders = ref()
onMounted(() => {
  OrderService.getOrders().then((data) => (orders.value = data))
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

    <OrderTable :orders />
  </BaseLayout>
</template>
