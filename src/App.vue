<script setup lang="ts">
import { RouterView } from 'vue-router'
import MainMenu from '@/components/MainMenu.vue'

</script>

<template>
  <div class="relative isolate flex min-h-svh w-full max-lg:flex-col bg-zinc-900 lg:bg-zinc-950">
    <div class="fixed inset-y-0 left-0 w-64 max-lg:hidden">
      <MainMenu />
    </div>
    <main class="flex flex-1 flex-col pb-2 lg:min-w-0 lg:pl-64 lg:pr-2 lg:pt-2">
      <RouterView />
    </main>
  </div>
</template>

<style scoped></style>
