<script setup lang="ts">
import { ref } from "vue";
import Card from './Card.vue';
import Icon from './Icon.vue';
import IconBox from './IconBox.vue';

import clipboardDocument from './svg/clipboard-document.vue'
import archiveBoxMini from './svg/archive-box-mini.vue'
import Modal from './modal/Modal.vue';


let modal3barsVisible = ref(false);
let modalLinkVisible = ref(false);
let modalFileVisible = ref(false);

// let cards = ref([
//     { headline: 'OpenAI_App-Store_AI-models.pdf', type: 'file-upload', imagePath: '/path/to/image1.png' },
//     { headline: 'Apple already uses Apple GPT internally', type: 'linked-in', imagePath: '/path/to/image2.png' },
//     { headline: 'Earth Virtualization Engines are the future of climate research', type: 'url', imagePath: '/path/to/image3.png' },
//     // Add more card data here...
// ]);



const emit = defineEmits(["modalAddLink"]);

const onModalAddLink = () => {
   
emit('modalAddLink')
}


</script>

<template>

    <div id="clipboard" class="clipboard w-full flex flex-col gap-4 md:p-4 md:pl-0  bg-neutral-50 rounded-lg md:shadow-none md:w-full overflow-hidden" >

        <div class="clipboard_header flex justify-between items-center md:pl-4">

        <div class="flex gap-4">

            <div class="clipboard_headline hidden md:flex justify-center items-center gap-1"> 
                <clipboardDocument  alt="" class="w-6 h-6 " />
                <h4>Clipboard</h4>

            </div>

            <div class="icons flex  gap-2 2xl:gap-2">
                <Icon bars3_icon @click="modal3barsVisible = true"  v-tooltip.top="'Create Text'" />
                <Icon linkSVG_icon @click="modalLinkVisible = true"  v-tooltip.top="'Import URLs'" />
                <Icon arrowUpTray_icon  @click="modalFileVisible = true"  v-tooltip.top="'Upload Files'" /> 
            </div>

        </div>

            <IconBox archive-box-mini_icon text="Clear" />


            <!-- <div class="card-tag px-2 py-[6px] bg-neutral-50  border border-solid border-neutral-200 rounded-lg text-xs font-normal z-20 hover:cursor-pointer hover:bg-neutral-100 active:border-dc-400   group/icon transition-0-3s  ">
                <div class="flex gap-1 justify-center items-center">
                    <archiveBoxMini  alt=""  class="w-5 h-5" /><span>Clear</span>
                </div>
            </div> -->

        </div>
        
        <div id="asdf"  class="w-full  h-full flex flex-col md:pl-4 lg:pr-4 pb-8  gap-4 lg:overflow-y-scroll">

            <!-- <Card v-for="card in cards" :key="card.headline" :headline="card.headline" :type="card.type" :image-path="card.imagePath" /> -->
        
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


    <Teleport to="body">
        <Modal 
        v-if="modal3barsVisible" class="" @close="modal3barsVisible = false" 
        newText
        datasetButton
        headline="New Text"
        IconBoxText="Text"
        />
    </Teleport>

    <Teleport to="body">
        <Modal 
        v-if="modalLinkVisible" class="" @close="modalLinkVisible = false" 
        importURL
        linkIcon
        
        headline="Import URL"
        />
    </Teleport>


    <Teleport to="body">
        <Modal 
        v-if="modalFileVisible" class="" @close="modalFileVisible = false" 
        uploadFiles
        arrowUpTray_icon
        headline="Upload Files"
        />
    </Teleport>



</template>

<style scoped>



</style>
