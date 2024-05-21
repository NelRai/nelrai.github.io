<script setup lang="ts">
import { ref, onMounted, computed } from "vue";
import Result from "./Result.vue";
import IconBox from './IconBox.vue';
import projects from "../data/projects.js";
import { useProjectsStore } from '../stores/ProjectsStore'; 

useProjectsStore();

const store = useProjectsStore();

const activeProject = computed(() => {
    return store.projects.find(project => project.id === store.activeCard);
});

onMounted(() => {
  projects.forEach(project => {
    console.log(project.results); // logs the results array of each project
  });
});




// const results = (projects as { id: string; headline: string; timeText: string; image: boolean; anchorLinks: string[]; results: { id: string; headline: string; infoBox: string; text: string; image: boolean; }[]; }[]).results;
// console.log('projects', projects.results);


const props = defineProps({
    cards: Array
})


// let newItem = '';

// let items =
//     [
//         'item 1',
//         'item 2'
//         ]
// ;

// function addItem() {
//     if (newItem) {
//         items.push(newItem);
//         newItem = '';
//     }
// }


// let contents = ref([
//     { id: 'content', headline: 'Apple verwendet Apple GPT bereits intern', infoBox: 'Lorem - LinkedIn', text: 'Text Beispiel', image: false },
//     { id: 'content2', headline: 'Apple already uses Apple GPT internally content02', infoBox: 'Ipsum - LinkedIn', text: 'Text Beispiel',  image: false },

// ]);

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


<div>

</div>

<div 


></div>
<div 
    class="w-full flex flex-col gap-8"

v-if="activeProject" :id="activeProject.id" :headline="activeProject.headline" :image="activeProject.image" @activeProject="contentActive" :contentRed="store.activeCard === activeProject.id"
    @contentRemove="() => removeContents(activeProject.id)">
        <Result v-for="(results, index) in activeProject.results" :key="`results-${index}`" :id="results.id" :headline="results.headline" :infoBox="results.infoBox" :text="results.text" />
    </div>

<!-- <div v-for="project in projects" :key="project.id" :id="project.id" :headline="project.headline" :image="project.image" @activeProject="contentActive" :contentRed="activecontent === project.id"
       @contentRemove="() => removeContents(project.id)" >
    <Result v-for="(results, index) in project.results" :key="`results-${index}`" :id="results.id" :headline="results.headline" :infoBox="results.infoBox" :text="results.text" />
</div> -->
<!-- 
<Result v-for="project in projects" :key="project.id" :id="project.id" :headline="project.headline" :infoBox="project.infoBox" :text="project.text" :image="project.image" @activeProject="contentActive" :contentRed="activecontent === project.id"
       @contentRemove="() => removeContents(project.id)" /> -->

       <!-- <Result v-for="content in contents" :key="content.id" :id="content.id" :headline="content.headline" :infoBox="content.infoBox" :text="content.text" :image="content.image" @activeProject="contentActive" :contentRed="activecontent === content.id"
       @contentRemove="() => removeContents(content.id)" /> -->



<!-- 
            <div class="w-full" v-for="(item, index) in items">

      


                <Result />
            </div> -->
        </div>
    </div>
</template>

<style scoped></style>
