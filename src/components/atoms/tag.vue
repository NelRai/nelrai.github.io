<script setup lang="ts">




defineProps({
  text: String
})


</script>

<template>
  <button
    class="tag-button w-auto h-auto py-1 px-2 items-center justify-center text-xs rounded-[4px] bg-neutral-50 border border-neutral-200 flex z-40 hover:border-neutral-200 hover:bg-neutral-100 active:border-dc-400 group/icon transition-0-3s">


{{ text }}

  </button>

</template>

<style scoped>
</style>
