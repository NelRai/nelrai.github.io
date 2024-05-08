<script setup lang="ts">
import Card from './Card.vue';
import Icon from './Icon.vue';
import clipboardDocument from './svg/clipboard-document.vue'
import archiveBoxMini from './svg/archive-box-mini.vue'



</script>

<template>

    <div id="clipboard" class="clipboard w-full flex flex-col gap-4 md:p-4  bg-neutral-50 rounded-lg md:shadow-none md:w-full overflow-hidden" >

        <div class="clipboard_header flex justify-between items-center">

            <div class="clipboard_headline hidden md:flex justify-center items-center gap-1"> 
                <clipboardDocument  alt="" class="w-6 h-6 " />
                <h4>Clipboard</h4>

            </div>

            <div class="icons flex  gap-2 2xl:gap-4">
                <Icon bars3_icon />
                <Icon linkSVG_icon />
            <span class="tooltip  z-index-999">
                <Icon arrowUpTray_icon /> <span class="tooltiptext z-index-999 text-xs">File Upload </span>
            </span>  
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

            <div class="card-tag px-2 py-[6px] bg-neutral-50  border border-solid border-neutral-200 rounded-lg text-xs font-normal z-20 hover:border-red-100 hover:cursor-pointer hover:text-red-200 active:border-red-400  active:text-red-400 group/icon transition-0-3s  ">
                <div class="flex gap-1 justify-center items-center">
                    <archiveBoxMini  alt=""  class="w-5 h-5" /><span>Clear</span>
                </div>
            </div>
        </div>
        
        <div class="w-full  h-full flex flex-col pr-4 gap-4 overflow-y-scroll">
        
            <Card headline="OpenAI_App-Store_AI-models.pdf" file-upload  />
            <Card headline="Apple already uses Apple GPT internally" linked-in  />
            <Card headline="Earth Virtualization Engines are the future of climate research" url image />
            <Card headline="Google will KI in Europa mit 25 Millionen Euro fördern" url  />
        
            <Card headline="OpenAI_App-Store_AI-models.pdf" file-upload  />
            <Card headline="Apple already uses Apple GPT internally" linked-in  />
            <Card headline="Earth Virtualization Engines are the future of climate research" url />
            <Card headline="Google will KI in Europa mit 25 Millionen Euro fördern" url image  />

            <Card headline="OpenAI_App-Store_AI-models.pdf" file-upload  />
            <Card headline="Apple already uses Apple GPT internally" linked-in  />
            <Card headline="Earth Virtualization Engines are the future of climate research" url />
            <Card headline="Google will KI in Europa mit 25 Millionen Euro fördern" url  />

        </div>


    </div>


</template>

<style scoped></style>
