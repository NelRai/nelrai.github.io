<script setup lang="ts">
// @ts-nocheck 
import { ref, computed } from "vue";
import Card from '../elements/Card.vue';
import Icon from '../buttons/buttonRound40.vue';
import IconBox from '../buttons/button32.vue';

import clipboardDocument from '../svg/clipboard-document.vue'
import archiveBoxMini from '../svg/archive-box-mini.vue'
import Modal from '../pattern/Modal.vue';


//ConfirmPopup for clearing the clipboard https://primevue.org/confirmpopup/
//CSS fixed employed to keep the popup in view
import ConfirmPopup from 'primevue/confirmpopup';
import { useConfirm } from "primevue/useconfirm";
const confirm = useConfirm();

const isFixed = ref(false);

const requireConfirmation = (event) => {
    confirm.require({
        target: event.currentTarget,
        group: 'headless',
        message: 'Wollen sie das Clipboard wirklich leeren?',
        onShow : () => { isFixed.value = true 
        },
        accept: () => {
        },
        reject: () => { 
        }
    });
}

const removeAllCards = () => {
    store.removeAllCards();
    console.log('removeAllCards');
};


let modal3barsVisible = ref(false);
let modalLinkVisible = ref(false);
let modalFileVisible = ref(false);


import { useClipboardsStore } from '../../stores/ClipboardsStore'; 


useClipboardsStore();

const store = useClipboardsStore();
// Use a computed property to always get the latest value of the clipboards array
const clipboards = computed(() => store.clipboards);


// const emit = defineEmits(["modalAddLink"]);
// const onModalAddLink = () => {   
// emit('modalAddLink')
// }
</script>

<template>

    <div id="clipboard" class="clipboard w-full h-full flex flex-col gap-4 md:p-4 md:pl-0  bg-neutral-50 rounded-lg md:shadow-none md:w-full overflow-hidden" >

        <div class="clipboard_header flex justify-between items-center md:pl-4">

        <div class="flex gap-4">

            <div class="clipboard_headline hidden md:flex justify-center items-center gap-1"> 
                <clipboardDocument  alt="" class="w-6 h-6 " />
                <h4 class="text-lg blinker">{{$t('clipboard.Clipboard')}}</h4>

            </div>

            <div class="icons flex  gap-2 2xl:gap-2">
                <Icon bars3_icon @click="modal3barsVisible = true"  v-tooltip.top="$t('tooltips.CreateText')" />
                <Icon linkSVG_icon @click="modalLinkVisible = true"  v-tooltip.top="$t('tooltips.ImportURLs')" />
                <Icon arrowUpTray_icon  @click="modalFileVisible = true"  v-tooltip.top="$t('tooltips.UploadFiles')" /> 
            </div>

        </div>

            <IconBox archive-box-mini_icon :text="$t('clipboard.Clear.title')" @click="requireConfirmation($event)" />

            <ConfirmPopup group="headless" class="confirmPopup " :class="{ fixedImportant : isFixed }">
                <template #container="{ message, acceptCallback, rejectCallback }">
                    <div class=" border-round p-3">
                        <span class="text-xs">{{ $t('clipboard.Clear.message') }}</span>
                        <div class="flex align-items-center gap-2 mt-3">
                            <IconBox  @click="rejectCallback" :text="$t('clipboard.Clear.cancel')"></IconBox>
                            <IconBox  outlined @click="(event) => { acceptCallback(event); removeAllCards(event) }"  :text="$t('clipboard.Clear.delete')" class="!bg-dc-600 text-neutral-50 hover:!bg-dc-700 hover:text-neutral-50"></IconBox>
                        </div>
                    </div>
                </template>
            </ConfirmPopup>

        </div>
        
        <div id="asdf"  class="w-full  h-full flex flex-col md:pl-4 lg:pr-4 pb-8  gap-4 lg:overflow-y-scroll">

            <Card clipboard
            v-for="clipboard in clipboards" :key="clipboard.id" :id="clipboard.id" :headline="clipboard.headline" :fileUpload="clipboard.fileUpload" :linkedIn="clipboard.linkedIn" :url="clipboard.url" :textTag="clipboard.textTag" :image="clipboard.image" :urlLink="clipboard.urlLink" :content="clipboard.content" @activeProject="cardActive" :cardRed="store.activeCard === clipboard.id"
            @click="store.clipboardActive(clipboard.id); console.log('activeCard:', store.activeCard)"
         />

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
