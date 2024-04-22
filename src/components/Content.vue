<script setup lang="ts">
import { ref } from "vue";
import Result from "./Result.vue";

const items = ref(
    [
        { message: "Foo" },
        { message: "Bar" }
    ]
);

// function addItem() {
//     if (this.newItem) {
//         this.items.push(this.newItem);
//         this.newItem = '';
//     }
// },
// function removeItem(index) {
//     items.splice(index, 1);
// }
</script>

<template>
    <div class="content w-full h-auto border border-neutral-200 rounded-xl pt-1 pb-16 shadow-inner">
        <div
            class="content-inner flex flex-col justify-start items-start gap-4 md:gap-8 m-4 md:m-8 rounded-xl h-[calc(100%-64px)]">
            <div
                class="card-tag p-2 bg-neutral-50 border border-solid border-neutral-200 rounded-lg text-xs font-normal z-20">
                <div class="flex gap-1 justify-center items-center">
                    <img src="../assets/plus-circle-mini.svg" alt="" class="w-4 h-4" /><span>New Content</span>
                </div>
            </div>
<!-- @ts-ignore -->
            <div class="w-full" v-for="item in items">
                <Result />
            </div>
        </div>
    </div>
</template>

<style scoped></style>
