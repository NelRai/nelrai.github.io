<script setup lang="ts">

import { ref } from "vue";
import Tag from '../atoms/tag.vue';
import svgLink from '../svg/link.vue';
import arrowUpTray from '../svg/arrow-up-tray.vue'
import Icon from '../Icon.vue';
import IconBox from "../IconBox.vue";
import pillButton from "../atoms/pillButton.vue";
import plusCircleMini from '../svg/plus-circle-mini.vue'
import FileUpload from 'primevue/fileupload';


defineProps({
    headline: String,
    IconBoxText: String,
    linkIcon: Boolean,
    arrowUpTray_icon: Boolean,
    datasetButton: Boolean,
    newText: Boolean,
    importURL: Boolean,
    uploadFiles: Boolean,
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

</script>


<template>

    <div class="modal-addLink z-50 ">

        <div class="modal-addLink-content max-w-[928px] w-[calc(100%-64px)]  relative rounded-xl shadow-xl z-50">

            <Icon xMark_icon @click="$emit('close')" class="absolute -top-4 -right-4 " />

            <div
                class="modal-addLink-header px-8 py-6 flex justify-between items-center bg-neutral-50 border-neutral-200 border-x border-t rounded-t-xl border-b">

                <div class="flex flex-col gap-2 items-start ">
                    <div class="flex gap-2">
                        <svgLink v-if="linkIcon" class="w-6 h-6" />
                        <arrowUpTray v-if="arrowUpTray_icon" class="w-6 h-6" />

                        <h2 class="text-lg">{{ headline }}</h2>
                    </div>
                    <IconBox bars3_icon :text="IconBoxText" v-if="IconBoxText" />
                </div>

                <div class="flex gap-2 ">
                    <Icon magnifyingGlass_icon v-if="datasetButton" />
                    <Icon ellipsisHorizontal_icon />
                </div>



            </div>


            <div class="modal-addLink-body p-8  bg-neutral-50  border-neutral-200 border-x border-b rounded-b-xl"
                v-if="newText">

                <!-- New Text content -->
                <div
                    class="modal-newText-content w-full flex flex-col md:flex-row justify-between items-start gap-2 md:gap-4 bg-neutral-50 rounded-lg rounded-t-none  relative overflow-hidden">

                    <div class="icons flex md:flex-col gap-2 md:gap-4">
                        <Icon OpenaiSvgrepoCom_icon class="rounded-lg" />
                    </div>

                    <div
                        class="result_item-content-wrapper w-full border border-neutral-200 rounded-lg p-4 pb-10 break-words relative resultItemHidden quill">
                        <div class="result_item-content editor " id="editor">
                            <p>
                                Lorem Ipsum
                            </p>
                        </div>
                    </div>

                </div>




            </div>


            <!-- import URL content -->

            <div class="modal-addLink-body p-8  bg-neutral-50  border-neutral-200 border-x  " v-if="importURL">

                <div class="modal-importURL-content flex flex-col gap-4">
                    <input class="p-4 w-full border-neutral-200 border rounded-lg" type="text"
                        placeholder="Enter URL" />

                    <div class="tags">
                        <h3 class="text-neutral-500 text-xs mb-1">Import as</h3>
                        <div class="flex gap-1">
                            <tag text="Text" :class="{ '!border-dc-400 text-dc-400': modalAddlink_modeText }"
                                @click="modalAddlink_modeText_function" />
                            <tag text="HTML" :class="{ '!border-dc-400 text-dc-400': modalAddlink_modeHTML }"
                                @click="modalAddlink_modeHTML_function" />
                            <tag text="Markdown" :class="{ '!border-dc-400 text-dc-400': modalAddlink_modeMarkdown }"
                                @click="modalAddlink_modeMarkdown_function" />
                        </div>
                    </div>
                </div>

            </div>

            <div class="flex justify-between px-8 py-4 bg-neutral-100 border border-neutral-200 rounded-b-xl"
                v-if="importURL">

                <button class="user-guide flex gap-[6px] items-center">
                    <plusCircleMini class="w-5 h-5 !fill-neutral-500" />
                    <span class="text-neutral-500 text-xs">User Guide</span>
                </button>

                <pillButton text="Import&nbsp;URLs" />

            </div>


            <!-- import URL content -->

            <div class="modal-addLink-body p-8  bg-neutral-50  border-neutral-200 border-x  " v-if="uploadFiles">

                <div class="modal-uploadFiles-content flex flex-col gap-4">
                    <FileUpload name="demo[]" url="/api/upload" @upload="onAdvancedUpload($event)" :multiple="true" accept="image/*" :maxFileSize="1000000">
                        <template #empty>
                            <p>Drag and drop files to here to upload.</p>
                        </template>
                    </FileUpload>
                    <div class="tags">
                        <h3 class="text-neutral-500 text-xs mb-1">Include markup</h3>
                        <div class="flex gap-1">
                            <tag text="Metadata" :class="{ '!border-dc-400 text-dc-400': modalAddlink_modeText }"
                                @click="modalAddlink_modeText_function" />
                            <tag text="Page numbers" :class="{ '!border-dc-400 text-dc-400': modalAddlink_modeHTML }"
                                @click="modalAddlink_modeHTML_function" />
                        </div>
                    </div>
                </div>

            </div>

            <div class="flex justify-between px-8 py-4 bg-neutral-100 border border-neutral-200 rounded-b-xl"
                v-if="uploadFiles">

                <button class="user-guide flex gap-[6px] items-center">
                    <plusCircleMini class="w-5 h-5 !fill-neutral-500" />
                    <span class="text-neutral-500 text-xs">User Guide</span>
                </button>

                <pillButton text="Upload&nbsp;Files" />

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