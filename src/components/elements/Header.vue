<script setup lang="ts">
import Icon from "../buttons/buttonRound40.vue";
import Animation from '../Animation.vue';

defineProps({
  clipboardVisible: Boolean,
  projectsVisible: Boolean
})


const emit = defineEmits(["showProjectsBTN"]);


function showProjectsBTN() {
  emit("showProjectsBTN");
}
</script>


<template>
  <header
    class="flex justify-between items-center p-4  bg-[#F8F8FC] w-full fixed top-0 left-0 shadow-lg md:shadow-none lg:relative lg:rounded-lg z-50 "
  >
    <img src="../../assets/dcio-logo.svg" alt="" class="z-50">

    <Icon bars2_icon class="md:hidden z-50"/>
    <Icon 
    adjustmentHorizontal_icon
    class="hidden lg:flex 2xl:hidden z-50"  
    @click="showProjectsBTN" 
    :class="{
          'text-dc-400 border-dc-400 hover:!border-dc-400 [&_path]:stroke-dc-400 icon_active': projectsVisible
        }"
     v-tooltip.top="$t('tooltips.WorkSpaceSettings')"
    />

    <div class="overflow-hidden absolute top-0 left-0 w-full h-full rounded-lg">
      <Animation class="overflow-hidden"/>
    </div>
  </header>
</template>

<style scoped>



</style>
