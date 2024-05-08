<script setup lang="ts">

import Card from './Card.vue';
import Icon from './Icon.vue';
import bookmarkSquare from './svg/bookmark-square.vue'
import plusCircleMini from './svg/plus-circle-mini.vue'


</script>

<template>

    <div
        class="projects w-full h-full flex flex-col gap-4 md:p-4 bg-neutral-50  rounded-lg md:rounded-none md:pt-7 md:shadow-md 2xl:h-full 2xl:w-auto lg:overflow-y-scroll">
        <div class="projects_header flex justify-between items-center">

            <div class="clipboard_headline hidden md:flex justify-center items-center gap-1"> 
            <bookmarkSquare alt="" class="w-6 h-6 " />
            <h4>Projects</h4>

        </div>

            <div class="icons flex md:flex-col gap-2 md:gap-4">

                <span class="tooltip  z-index-999">
                    <Icon magnifyingGlass_icon /> <span class="tooltiptext z-index-999 text-xs">Search </span>
          </span>  
               

                <!-- <button
        class="sidebar-close-btn w-10 h-10 md:w-8 md:h-8 items-center justify-center rounded-full  bg-neutral-50 border border-neutral-200 flex z-40 ">
        <img src="../assets/chevron-left.svg" alt=""  class="w-5 h-5 md:w-4 md:h-4" />
    </button> -->

            </div>

            <div
                class="card-tag px-2 py-[6px] bg-neutral-50  border border-solid border-neutral-200 rounded-lg text-xs font-normal z-20 hover:border-red-100 hover:cursor-pointer hover:text-red-200 active:border-red-400 active:text-red-400  group/icon transition-0-3s ">
                <div class="flex gap-1 justify-center items-center">
                    <plusCircleMini  alt="" class="w-5 h-5" /><span>New Project</span>
                </div>
            </div>
            
        </div>


        <Card headline="Apple verwendet Apple GPT bereits intern" time-text="16 hours ago" image />
        <Card headline="Apple already uses Apple GPT internally" time-text="17 hours ago" />
        <Card headline="Google launches generative AI search" time-text="2 days ago" />
        <Card headline="Innovative Technology Too Expensive - Report on Meta's AR Glasses" time-text="2 days ago" />
        <Card headline="Apple verwendet Apple GPT bereits intern" time-text="16 hours ago" image />
        <Card headline="Apple already uses Apple GPT internally" time-text="17 hours ago" />
        <Card headline="Google launches generative AI search" time-text="2 days ago" />
        <Card headline="Innovative Technology Too Expensive - Report on Meta's AR Glasses" time-text="2 days ago" />
        <Card headline="Apple verwendet Apple GPT bereits intern" time-text="16 hours ago" />
        <Card headline="Apple already uses Apple GPT internally" time-text="17 hours ago" />
        <Card headline="Google launches generative AI search" time-text="2 days ago" />
        <Card headline="Innovative Technology Too Expensive - Report on Meta's AR Glasses" time-text="2 days ago" />
        <Card headline="Apple already uses Apple GPT internally" time-text="17 hours ago" />
        <Card headline="Google launches generative AI search" time-text="2 days ago" />
        <Card headline="Innovative Technology Too Expensive - Report on Meta's AR Glasses" time-text="2 days ago" />
        <Card headline="Apple already uses Apple GPT internally" time-text="17 hours ago" />
        <Card headline="Google launches generative AI search" time-text="2 days ago" />
        <Card headline="Innovative Technology Too Expensive - Report on Meta's AR Glasses" time-text="2 days ago" />

    </div>


</template>

<style scoped></style>
