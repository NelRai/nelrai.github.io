<script setup lang="ts">
import Card from './Card.vue';
import Icon from './Icon.vue';


</script>

<template>

    <div id="clipboard" class="clipboard w-full h-full flex flex-col gap-4 md:p-4 bg-neutral-50 rounded-lg md:shadow-md md:w-full  overflow-y-scroll">

    <div class="clipboard_header flex justify-between items-center">

        <div class="icons flex md:flex-col gap-2 md:gap-4">
            <Icon :image="('/src/assets/bars-3.svg')"/>
            <Icon :image="('/src/assets/link.svg')"/>
            <Icon :image="('/src/assets/arrow-up-tray.svg')"/>
<!-- 
            <button
                class="sidebar-close-btn w-10 h-10 md:w-8 md:h-8 items-center justify-center rounded-full  bg-neutral-50 border border-neutral-200 flex z-40 ">
                <img src="../assets/bars-3.svg" alt=""  class="w-5 h-5 md:w-4 md:h-4" />
            </button>
            <button
                class="sidebar-close-btn w-10 h-10 md:w-8 md:h-8  items-center justify-center rounded-full  bg-neutral-50 border border-neutral-200 flex z-40 ">
                <img src="../assets/link.svg" alt=""  class="w-5 h-5 md:w-4 md:h-4" />
            </button>

            <button
                class="sidebar-close-btn w-10 h-10 md:w-8 md:h-8 items-center justify-center rounded-full  bg-neutral-50 border border-neutral-200 flex z-40 ">
                <img src="../assets/arrow-up-tray.svg" alt="" class="w-5 h-5 md:w-4 md:h-4" />
            </button> -->
        </div>

        <div class="card-tag p-2 bg-neutral-50  border border-solid border-neutral-200 rounded-lg text-xs font-normal z-20">
            <div class="flex gap-1 justify-center items-center">
                <img src="../assets/archive-box-mini.svg" alt=""  class="w-5 h-5 md:w-4 md:h-4"><span>Clear</span>
            </div>
        </div>
    </div>
    
        <Card headline="OpenAI_App-Store_AI-models.pdf" file-upload  />
        <Card headline="Apple already uses Apple GPT internally" linked-in  />
        <Card headline="Earth Virtualization Engines are the future of climate research" url />
        <Card headline="Google will KI in Europa mit 25 Millionen Euro fördern" url  />
    
        <Card headline="OpenAI_App-Store_AI-models.pdf" file-upload  />
        <Card headline="Apple already uses Apple GPT internally" linked-in  />
        <Card headline="Earth Virtualization Engines are the future of climate research" url />
        <Card headline="Google will KI in Europa mit 25 Millionen Euro fördern" url  />

        <Card headline="OpenAI_App-Store_AI-models.pdf" file-upload  />
        <Card headline="Apple already uses Apple GPT internally" linked-in  />
        <Card headline="Earth Virtualization Engines are the future of climate research" url />
        <Card headline="Google will KI in Europa mit 25 Millionen Euro fördern" url  />


    </div>


</template>

<style scoped></style>
