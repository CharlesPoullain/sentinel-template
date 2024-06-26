<script setup lang="ts">
import { defineProps } from 'vue'
defineProps({
  title: String,
  description: String
})
</script>

<template>
  <div class="grid gap-x-8 gap-y-6 sm:grid-cols-2 items-center border-t-zinc-800 b-t-solid py-10">
    <div>
      <h2 class="font-semibold text-lg m-0 p-0">{{ title }}</h2>
      <span class="font-normal text-base text-zinc-500">{{ description }}</span>
    </div>
    <div>
      <slot />
    </div>
  </div>
</template>
