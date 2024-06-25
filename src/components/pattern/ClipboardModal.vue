<script setup lang="ts">
// @ts-nocheck
import { ref } from "vue";
import selectButton24 from '../buttons/button24.vue';
import svgLink from '../svg/link.vue';
import arrowUpTray from '../svg/arrow-up-tray.vue'
import arrowDownTray from '../svg/arrow-down-tray.vue'
import Icon from '../buttons/buttonRound40.vue';
import IconBox from "../buttons/button32.vue";
import button40 from "../buttons/button40.vue";
import plusCircleMini from '../svg/plus-circle-mini.vue'
import questionMark from "../svg/question-mark.vue";
import FileUpload from 'primevue/fileupload';


defineProps({
    headline: String,
    content: String,
    IconBoxText: String,
    linkIcon: Boolean,
    arrowUpTray_icon: Boolean,
    datasetButton: Boolean,
    newText: Boolean,
    importURL: Boolean,
    uploadFiles: Boolean,
    fileUpload: Boolean,
    linkedIn: Boolean,
    url: Boolean,
    text: Boolean,
})

const modal3barsVisible = ref(true);

const modalAddlink_modeText = ref(true);
const modalAddlink_modeHTML = ref(false);
const modalAddlink_modeMarkdown = ref(false);

const modalAddlink_modeText_function = () => {
    modalAddlink_modeText.value = true;
    modalAddlink_modeHTML.value = false;
    modalAddlink_modeMarkdown.value = false;
}

const modalAddlink_modeHTML_function = () => {
    modalAddlink_modeText.value = false;
    modalAddlink_modeHTML.value = true;
    modalAddlink_modeMarkdown.value = false;
}

const modalAddlink_modeMarkdown_function = () => {
    modalAddlink_modeText.value = false;
    modalAddlink_modeHTML.value = false;
    modalAddlink_modeMarkdown.value = true;
}
           

function onAdvancedUpload(event: Event | undefined) {
}

import { usePrimeVue } from 'primevue/config';
import Content from "./Content.vue";
// import { useToast } from "primevue/usetoast";

const $primevue = usePrimeVue();
// const toast = useToast();

</script>


<template>

    <div class="modal-addLink z-50 ">

        <div class="modal-addLink-content max-w-[928px] w-[calc(100%-64px)]  relative rounded-xl shadow-xl z-50">

            <Icon xMark_icon @click="$emit('close')" class="absolute -top-4 -right-4 " />

            <div
                class="modal-addLink-header px-8 py-6 flex justify-between items-center bg-neutral-50 border-neutral-200 border-x border-t rounded-t-xl border-b">

                <div class="flex flex-col gap-2 items-start ">
                    <div class="flex gap-1">
                        <!-- <svgLink v-if="linkIcon" class="w-6 h-6" />
                        <arrowUpTray v-if="arrowUpTray_icon" class="w-6 h-6" /> -->
                        <h2 class="text-lg blinker">{{ headline }}</h2>
                    </div>
                    <IconBox bars3_icon text="Text" v-if="text" />
                    <IconBox arrowUpTray_icon text="File Upload" v-if="fileUpload" />
                    <IconBox documentText_icon text="LinkedIn" v-if="linkedIn" />
                    <IconBox linkSVG_icon text="URL" v-if="url" />

                </div>

                <div class="flex gap-2 ">
                    <Icon magnifyingGlass_icon v-if="datasetButton" />
                    <Icon ellipsisHorizontal_icon />
                </div>

            </div>

            
             <!-- Clipboard Text content -->
              
             <div class="modal-addLink-body p-8  bg-neutral-50  border-neutral-200 border-x border-b rounded-b-xl"
                >

                <div
                    class="modal-newText-content w-full flex flex-col md:flex-row justify-between items-start gap-2 md:gap-4 bg-neutral-50 rounded-lg rounded-t-none  relative overflow-hidden">

                    <div class="icons flex md:flex-col gap-2 md:gap-4">
                        <Icon OpenaiSvgrepoCom_icon class="rounded-lg" />
                    </div>

                    <div
                        class="result_item-content-wrapper w-full border border-neutral-200 rounded-lg p-4 pb-10 break-words relative  quill">
                        <div class="result_item-content editor " id="editor">
                            <p>
                               {{ content }}
                            </p>
                        </div>
                    </div>

                </div>

            </div>




        </div>

        <div @click="$emit('close')" class="white-overlay"></div>

    </div>
</template>

<style scoped>
.modal-addLink {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    /* background-color: rgba(255, 255, 255, 0.5); */
    display: flex;
    justify-content: center;
    align-items: center;
    /* backdrop-filter: blur(10px); */
}

.white-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(255, 255, 255, 0.5);
    backdrop-filter: blur(10px);
    z-index: 10;
}
</style>