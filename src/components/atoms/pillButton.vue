<script setup lang="ts">
import Icon from '../Icon.vue';
import arrowUpTray from '../svg/arrow-up-tray.vue'
import arrowDownTray from '../svg/arrow-down-tray.vue'

defineProps({
  text: String,
  arrowUpTray_icon: Boolean,
  arrowDownTray_icon: Boolean,
})
</script>

<template>
  <button
    class="tag-button w-auto h-auto py-2 px-4 flex gap-2 items-center justify-center text-xs rounded-full bg-neutral-50 border border-neutral-200  z-40 hover:border-neutral-200 hover:bg-neutral-100 active:border-dc-400 group/icon transition-0-3s">
 <arrowUpTray class="w-6 h-6"  v-if="arrowUpTray_icon" /> 
 <arrowDownTray class="w-6 h-6" v-if="arrowDownTray_icon"  /> 
 
 {{ text }}
  </button>
</template>

<style scoped>
</style>
