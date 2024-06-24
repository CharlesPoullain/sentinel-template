<script setup lang="ts">
import { ref } from 'vue'
import Button from 'primevue/button'
import Menu from 'primevue/menu'
import LogoComponent from '@/components/Logo.vue'
const menu = ref()
const items = ref([
  {
    label: 'Options',
    items: [
      {
        label: 'Parametres',
        icon: 'pi pi-cog'
      }
    ]
  },
  {
    separator: true
  },
  {
    label: 'Applications',
    items: [
      {
        label: 'Sentinel'
      },
      {
        label: 'Application 2'
      }
    ]
  },
  {
    separator: true
  },
  {
    label: 'Options',
    items: [
      {
        label: 'Nouvelle Application',
        icon: 'pi pi-plus'
      }
    ]
  }
])

const toggle = (event: Event) => {
  menu.value.toggle(event)
}

const navigationItems = [
  {
    label: 'Home',
    icon: 'pi pi-fw pi-home',
    to: '/'
  },
  {
    label: 'Evénements',
    icon: 'pi pi-fw pi-calendar',
    to: '/events'
  },
  {
    label: 'Commandes',
    icon: 'pi pi-fw pi-shopping-cart',
    to: '/orders'
  },
  {
    label: 'Paramètres',
    icon: 'pi pi-fw pi-cog',
    to: '/settings'
  }
]
</script>
<template>
  <nav class="flex h-full min-h-0 flex-col ">
    <!-- Select App -->
    <div class="card flex justify-center">
      <Button
        type="button"
        @click="toggle"
        aria-haspopup="true"
        aria-controls="overlay_menu"
        text
        plain
        class="w-full m-2"
      >
        <template #default>
          <div class="flex items-center justify-between w-full">
            <div class="space-x-4">
              <LogoComponent class="w-4 h-4" />
              <span class="font-semibold text-lg">Sentinel</span>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-6 w-4 h-4"
            >
              <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
            </svg>
          </div>
        </template>
      </Button>
      <Menu ref="menu" id="overlay_menu" :model="items" :popup="true">
        <template #item="{ item, props }">
          <a v-ripple class="flex items-center" v-bind="props.action">
            <span :class="item.icon" />
            <span>{{ item.label }}</span>
            <Badge v-if="item.badge" class="ml-auto" :value="item.badge" />
            <span
              v-if="item.shortcut"
              class="ml-auto border border-surface rounded bg-emphasis text-muted-color text-xs p-1"
              >{{ item.shortcut }}</span
            >
          </a>
        </template>
      </Menu>
    </div>

    <!-- Navigation -->
    <div class="border-t-solid border-t border-zinc-900 mt-4 py-4">
      <RouterLink
        v-for="item in navigationItems"
        :key="item.label"
        :to="item.to"
        class="flex justify-start items-center w-full h-12 px-4"
      >
          <div class="w-full text-white font-semibold text-lg">
            <i :class="item.icon" class="mr-4"></i>
            <span class="text-lg">{{ item.label }}</span>
          </div>
      </RouterLink>
    </div>

    <!-- Support + Changelog -->
    <div></div>

    <!-- User Account Select -->
    <div></div>
  </nav>
</template>
