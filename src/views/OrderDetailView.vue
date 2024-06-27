<script setup lang="ts">
import BaseLayout from '@/components/BaseLayout.vue'
import { OrderService } from '@/services/OrderService'
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const order = ref()
onMounted(() => {
  const orderId: string = route.params.id
  OrderService.getOrder(orderId).then((data) => (order.value = data))
})
</script>

<template>
  <BaseLayout>
    <h1 class="text-white font-semibold text-2xl/8">Order #{{ route.params.id.toString() }}</h1>
    <div class="flex flex-row justify-between">
      {{ order }}
    </div>
  </BaseLayout>
</template>
