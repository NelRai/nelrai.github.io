<script setup lang="ts">
import { ref } from "vue";

import Card from './Card.vue';
import Icon from './Icon.vue';
import IconBox from './IconBox.vue';
import bookmarkSquare from './svg/bookmark-square.vue'

let isActive = ref(false);
let activeCard = ref(null);
// function cardActive() {
//     isActive.value = !isActive.value;
//     console.log('cardActive');

// }
// @ts-ignore
function cardActive(id) {
    activeCard.value = id;
    console.log('cardActive', id);
    
}

let cards = ref([
    { id: 'card1', headline: 'Apple verwendet Apple GPT bereits intern', timeText: '16 hours ago', image: false },
    { id: 'card2', headline: 'Apple already uses Apple GPT internally Card02', timeText: '17 hours ago', image: false },
    { id: 'card3', headline: 'Google launches generative AI search', timeText: '2 days ago', image: false },
    { id: 'card4', headline: 'Innovative Technology Too Expensive - Report on Meta\'s AR Glasses', timeText: '2 days ago', image: false },
    { id: 'card5', headline: 'Apple already uses Apple GPT internally', timeText: '17 hours ago', image: false },
    { id: 'card6', headline: 'Google launches generative AI search', timeText: '2 days ago', image: false },
    { id: 'card7', headline: 'Innovative Technology Too Expensive - Report on Meta\'s AR Glasses', timeText: '2 days ago', image: false },
    { id: 'card8', headline: 'Apple verwendet Apple GPT bereits intern', timeText: '16 hours ago', image: false },
    { id: 'card9', headline: 'Apple already uses Apple GPT internally ', timeText: '17 hours ago', image: false },
    { id: 'card10', headline: 'Google launches generative AI search', timeText: '2 days ago', image: false },
    { id: 'card11', headline: 'Innovative Technology Too Expensive - Report on Meta\'s AR Glasses', timeText: '2 days ago', image: false },
    { id: 'card12', headline: 'Apple already uses Apple GPT internally', timeText: '17 hours ago', image: false },
    { id: 'card13', headline: 'Google launches generative AI search', timeText: '2 days ago', image: false },
    { id: 'card14', headline: 'Innovative Technology Too Expensive - Report on Meta\'s AR Glasses', timeText: '2 days ago', image: false },
]);

function addCard() {
    cards.value.push({ id: `card${cards.value.length + 1}`, headline: 'New Card', timeText: 'Just now', image: false });
}

// function removeCard() {
//     if (cards.value.length > 0) {
//         cards.value.pop();
//     }
// }

function removeCard(id: string) {
    cards.value = cards.value.filter(card => card.id !== id);
}

</script>

<template>

    <div
        class="projects w-full h-full flex flex-col gap-4 md:p-4 bg-neutral-50  rounded-lg md:rounded-none md:pt-7 md:shadow-md 2xl:h-full 2xl:w-auto lg:overflow-y-scroll">
        <div class="projects_header flex justify-between items-center">

            <div class="flex gap-2">

                <div class="clipboard_headline hidden md:flex justify-center items-center gap-1"> 
                    <bookmarkSquare alt="" class="w-6 h-6 " />
                    <h4>Projects</h4>
                </div>

                <div class="icons flex md:flex-col gap-2 md:gap-4">
                    <span class="tooltip  z-index-999">
                        <Icon magnifyingGlass_icon /> <span class="tooltiptext z-index-999 text-xs">Search </span>
                    </span>  
                </div>

            </div>

            <IconBox plus-circle-mini_icon text="New Project" @click="addCard"  />

            
        </div>

        <Card v-for="card in cards" :key="card.id" :id="card.id" :headline="card.headline" :time-text="card.timeText" :image="card.image" @activeProject="cardActive" :cardRed="activeCard === card.id"
        @cardRemove="() => removeCard(card.id)" />
      

<!--         
        <Card id="card1" headline="Apple verwendet Apple GPT bereits intern" time-text="16 hours ago" image  @activeProject="cardActive"  :cardRed="activeCard === 'card1'"  />
        <Card id="card2" headline="Apple already uses Apple GPT internally" time-text="17 hours ago"            @activeProject="cardActive"  :cardRed="activeCard === 'card2'" />
        <Card id="card3" headline="Google launches generative AI search" time-text="2 days ago"     @activeProject="cardActive"  :cardRed="activeCard === 'card3'" />
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
        <Card headline="Innovative Technology Too Expensive - Report on Meta's AR Glasses" time-text="2 days ago" /> -->

    </div>


</template>

<style scoped></style>
