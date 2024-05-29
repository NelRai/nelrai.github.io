<script setup lang="ts">
// @ts-nocheck
import { ref } from "vue";
import Tag from '../atoms/tag.vue';
import svgLink from '../svg/link.vue';
import arrowUpTray from '../svg/arrow-up-tray.vue'
import arrowDownTray from '../svg/arrow-down-tray.vue'
import Icon from '../Icon.vue';
import IconBox from "../IconBox.vue";
import pillButton from "../atoms/pillButton.vue";
import plusCircleMini from '../svg/plus-circle-mini.vue'
import questionMark from "../svg/question-mark.vue";
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


           

function onAdvancedUpload(event: Event | undefined) {
}

import { usePrimeVue } from 'primevue/config';
// import { useToast } from "primevue/usetoast";

const $primevue = usePrimeVue();
// const toast = useToast();

const totalSize = ref(0);
const totalSizePercent = ref(0);
const files = ref([]);

const onRemoveTemplatingFile = (file, removeFileCallback, index) => {
    removeFileCallback(index);
    totalSize.value -= parseInt(formatSize(file.size));
    totalSizePercent.value = totalSize.value / 10;
};

const onClearTemplatingUpload = (clear) => {
    clear();
    totalSize.value = 0;
    totalSizePercent.value = 0;
};

const onSelectedFiles = (event) => {
    files.value = event.files;
    files.value.forEach((file) => {
        totalSize.value += parseInt(formatSize(file.size));
    });
};

const uploadEvent = (callback) => {
    totalSizePercent.value = totalSize.value / 10;
    callback();
};

const onTemplatedUpload = () => {
    toast.add({ severity: "info", summary: "Success", detail: "File Uploaded", life: 3000 });
};

const formatSize = (bytes) => {
    const k = 1024;
    const dm = 3;
    const sizes = $primevue.config.locale.fileSizeTypes;

    if (bytes === 0) {
        return `0 ${sizes[0]}`;
    }

    const i = Math.floor(Math.log(bytes) / Math.log(k));
    const formattedSize = parseFloat((bytes / Math.pow(k, i)).toFixed(dm));

    return `${formattedSize} ${sizes[i]}`;
};
</script>


<template>

    <div class="modal-addLink z-50 ">

        <div class="modal-addLink-content max-w-[928px] w-[calc(100%-64px)]  relative rounded-xl shadow-xl z-50">

            <Icon xMark_icon @click="$emit('close')" class="absolute -top-4 -right-4 " />

            <div
                class="modal-addLink-header px-8 py-6 flex justify-between items-center bg-neutral-50 border-neutral-200 border-x border-t rounded-t-xl border-b">

                <div class="flex flex-col gap-2 items-start ">
                    <div class="flex gap-1">
                        <svgLink v-if="linkIcon" class="w-6 h-6" />
                        <arrowUpTray v-if="arrowUpTray_icon" class="w-6 h-6" />

                        <h2 class="text-lg blinker">{{ headline }}</h2>
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
                    <questionMark class="w-5 h-5 !fill-neutral-500" />
                    <span class="text-neutral-500 text-xs">User Guide</span>
                </button>

                <pillButton arrowDownTray_icon text="Import&nbsp;URLs" />

            </div>


            <!-- Upload FIles content -->

            <div class="modal-addLink-body p-8  bg-neutral-50  border-neutral-200 border-x  " v-if="uploadFiles">

                <div class="modal-uploadFiles-content flex flex-col gap-7">

<!-- 
                    <FileUpload name="demo[]" url="/api/upload" @upload="onAdvancedUpload($event)" :multiple="true" accept="image/*" :maxFileSize="1000000">
                        <template #empty>
                            <p>Drag and drop files to here to upload.</p>
                        </template>
                    </FileUpload> -->

                    



                    <FileUpload name="demo[]" url="/api/upload" @upload="onTemplatedUpload($event)" :multiple="true" accept="image/*" :maxFileSize="1000000" @select="onSelectedFiles">

                        <template #header="{ chooseCallback, uploadCallback, clearCallback, files }">
       

                            <div class="dragndrop w-full py-12 flex flex-col  gap-2 justify-center items-center bg-neutral-50 border border-dashed rounded-lg border-neutral-200 ">
                                <p>Drag and drop files here or</p>
                                <button @click="chooseCallback()">  <IconBox plusCircleMini_icon text="Browse files" /></button>
                            </div>

                            <pillButton  arrowUpTray_icon text="Upload&nbsp;Files" @click="uploadEvent(uploadCallback)" class="absolute bottom-4 right-8" />


                        </template>

                        <template #content="{ files, uploadedFiles, removeUploadedFileCallback, removeFileCallback }">

                            <div class="flex flex-col gap-4">
                                <div class="flex justify-between text-xs text-neutral-500 mb-6">
                                    <p>Supported: PDF, DOC(X), XLS(X), CSV, TXT, MD, JPG, PNG</p>
                                    <p>Maximum size: 5MB</p>
                                </div>

                                <div v-if="files.length > 0" class="flex flex-col gap-4">
                                    <div v-for="(file, index) in files" :key="index" class="flex justify-between items-center p-4 bg-neutral-50 border rounded-lg border-neutral-200">
                                        <div class="flex flex-col gap-2">
                                            <span class="blinker text-base text-neutral-700">{{ file.name }}</span>
                                            <div class="text-xs text-neutral-500">{{ formatSize(file.size) }}</div>
                                        </div>
                                        <Icon Trash_icon @click="onRemoveTemplatingFile(file, removeFileCallback, index)" />
                                    </div>
                                </div>

                                <div v-if="uploadedFiles.length > 0" class="flex flex-col gap-4">
                                    <div v-for="(file, index) in uploadedFiles" :key="index" class="flex justify-between items-center p-4 bg-neutral-50 border rounded-lg border-neutral-200">
                                        <div class="flex flex-col gap-2">
                                            <span class="blinker text-base text-neutral-700">{{ file.name }}</span>
                                            <div class="text-xs text-neutral-500">{{ formatSize(file.size) }}</div>
                                        </div>
                                        <Icon Trash_icon @click="onRemoveTemplatingFile(file, removeUploadedFileCallback, index)" />
                                    </div>

                                    </div>
                            </div>

                        </template>

                    <!-- <div class="flex justify-between text-xs text-neutral-500 mb-6">
                        <p>Supported: PDF, DOC(X), XLS(X), CSV, TXT, MD, JPG, PNG</p>
                        <p>Maximum size: 5MB</p>
                    </div> -->



                    <!-- <div v-if="files.length > 0" class="flex justify-between">

                        <div class="flex flex-col gap-2">
                            <span class="blinker text-base text-neutral-700">{{ file.name }}</span>
                            <div class="font-xs text-neutral-500">{{ formatSize(file.size) }}</div>
                        </div>

                        <Badge value="Pending" severity="warning" />

                        <Icon Trash_icon @click="onRemoveTemplatingFile(file, removeFileCallback, index)" />
                        <Button icon="pi pi-times" @click="onRemoveTemplatingFile(file, removeFileCallback, index)" outlined rounded  severity="danger" />

                    
                    
                    </div> -->



                    <!-- <template #header="{ chooseCallback, uploadCallback, clearCallback, files }">




                        <div class="flex flex-wrap justify-content-between align-items-center flex-1 gap-2">
                            <div class="flex gap-2">
                                <Button @click="chooseCallback()" icon="pi pi-images" rounded outlined></Button>
                                <Button @click="uploadEvent(uploadCallback)" icon="pi pi-cloud-upload" rounded outlined severity="success" :disabled="!files || files.length === 0"></Button>
                                <Button @click="clearCallback()" icon="pi pi-times" rounded outlined severity="danger" :disabled="!files || files.length === 0"></Button>
                            </div>
                            <ProgressBar :value="totalSizePercent" :showValue="false" :class="['md:w-20rem h-1rem w-full md:ml-auto', { 'exceeded-progress-bar': totalSizePercent > 100 }]"
                                ><span class="white-space-nowrap">{{ totalSize }}B / 1Mb</span></ProgressBar
                            >
                        </div>
                    </template> -->

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

            <div class="flex justify-between h-[72px] px-8 py-4 bg-neutral-100 border border-neutral-200 rounded-b-xl"
                v-if="uploadFiles">

               <button class="user-guide flex gap-[6px] items-center">
                    <questionMark class="w-5 h-5 !fill-neutral-500" />
                    <span class="text-neutral-500 text-xs">User Guide</span>
                </button>


                <!-- <pillButton  arrowUpTray_icon text="Upload&nbsp;Files" @click="uploadEvent(uploadCallback)" /> -->

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