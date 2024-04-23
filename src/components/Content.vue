<script setup lang="ts">
import { ref } from "vue";
import Result from "./Result.vue";

let newItem = '';

let items =
    [
        'item 1',
        'item 1'
        ]
;

function addItem() {
    if (newItem) {
        items.push(newItem);
        newItem = '';
    }
}
// function removeItem() {
//     items.splice(index, 1);
// }
</script>

<template>
    <div class="content w-full h-auto md:border border-neutral-200 rounded-xl pt-1 pb-16 md:shadow-inner">
        <div
            class="content-inner flex flex-col justify-start items-start gap-4 md:gap-8 md:m-8 rounded-xl h-[calc(100%-64px)]">
            <div  @click="addItem"
                class="card-tag p-2 bg-neutral-50 border border-solid md:border-neutral-200 rounded-lg text-xs font-normal z-20">
                <div class="flex gap-1 justify-center items-center">
                    <img src="../assets/plus-circle-mini.svg" alt="" class="w-4 h-4" /><span>New Content</span>
                </div>
            </div>
<!-- @ts-ignore -->
            <div class="w-full" v-for="(item, index) in items">
                <Result />
            </div>
        </div>
    </div>
</template>

<style scoped></style>
