<script setup lang="ts">
import { ref, onMounted } from "vue";
import Result from "./Result.vue";
import IconBox from './IconBox.vue';


const props = defineProps({
    cards: Array
})


let newItem = '';

let items =
    [
        'item 1',
        'item 2'
        ]
;

function addItem() {
    if (newItem) {
        items.push(newItem);
        newItem = '';
    }
}


let contents = ref([
    { id: 'content', headline: 'Apple verwendet Apple GPT bereits intern', infoBox: 'Lorem - LinkedIn', text: 'Text Beispiel', image: false },
    { id: 'content2', headline: 'Apple already uses Apple GPT internally content02', infoBox: 'Ipsum - LinkedIn', text: 'Text Beispiel',  image: false },

]);

function newContent() {
    contents.value.unshift({ id: `content${contents.value.length + 1}`, headline: 'New content', infoBox: 'Just now', text: 'Text Beispiel', image: false });
}

function removeContents(id: string) {
    contents.value = contents.value.filter(content => content.id !== id);
}


</script>

<template>
    <div class="content w-full h-auto md:border border-neutral-200 rounded-xl pt-1 pb-16 md:shadow-inner">
        <div
            class="content-inner flex flex-col justify-start items-start gap-4 md:gap-4 md:m-4 rounded-xl h-[calc(100%-64px)]">

            <!-- <div  @click="addItem"
                class="card-tag px-2 py-[6px] bg-neutral-50 border border-solid md:border-neutral-200 rounded-lg text-xs font-normal z-20 hover:bg-neutral-100 hover:cursor-pointer  active:border-dc-400 active:text-dc-400  group/icon transition-0-3s ">
                <div class="flex gap-1 justify-center items-center">
                    <plusCircleMini src="../assets/plus-circle-mini.svg" alt="" class="w-5 h-5" /><span>New Content</span>
                </div>
            </div> -->

            <IconBox  @click="newContent" plusCircleMini_icon text="New Content" />


<!-- @ts-ignore -->

<Result v-for="content in contents" :key="content.id" :id="content.id" :headline="content.headline" :infoBox="content.infoBox" :text="content.text" :image="content.image" @activeProject="contentActive" :contentRed="activecontent === content.id"
        @contentRemove="() => removeContents(content.id)" />
<!-- 
            <div class="w-full" v-for="(item, index) in items">

      


                <Result />
            </div> -->
        </div>
    </div>
</template>

<style scoped></style>
