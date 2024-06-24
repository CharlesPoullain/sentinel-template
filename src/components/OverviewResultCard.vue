<script setup lang="ts">
import FormatNumber from '@/utils/FormatNumber'
import { computed } from 'vue'

const props = defineProps({
  title: String,
  amount: Number,
  variation: Number,
  isPositiveVariation: Boolean,
  sincePeriod: String
})

const computedAmount = computed(() => {
  return `${FormatNumber.amountFormat(props.amount || 0)}€`
})

const computedVariation = computed(() => {
  return `${props.isPositiveVariation ? `+` : `-`}${props.variation}%`
})
</script>
<template>
  <div class="border-t-solid border-t border-zinc-600">
    <h3 class="my-3 text-base font-medium">{{ title }}</h3>
    <span class="text-3xl font-semibold">{{ computedAmount }}</span>
    <div class="mt-3 space-x-2">
      <span
        class="bg-green-400/20 text-green-400 px-1.5 py-0.5 rounded-md font-semibold"
        :class="{ 'bg-red-400/20 text-red-400': !isPositiveVariation }"
      >
        {{ computedVariation }}
      </span>
      <span class="text-zinc-500 text-xs">{{ sincePeriod }}</span>
    </div>
  </div>
</template>
