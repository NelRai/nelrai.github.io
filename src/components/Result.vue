<script setup lang="ts">
import Animation from './Animation.vue';

</script>

<template>

    <div class="result_wrapper w-full  h-auto bg-white border border-solid border-neutral-200  rounded-xl shadow-xl relative ">


        <div class="result_header flex justify-between items-center  !mb-0   rounded-lg rounded-b-none p-4 md:p-8 relative overflow-hidden z-20">

            <div class="result_header-headline flex flex-col gap-2 items-start">

                <div class="card-headline text-base font-normal z-20">
                    <h4>Google launches "AI Opportunity Initiative for Europe"</h4>
                </div>

                <div class="card-tag p-2 bg-neutral-50  border border-solid border-neutral-200 rounded-lg text-xs font-normal z-20">
                    <div class="flex gap-1 justify-center items-center">
                        <img src="../assets/document-text.svg" alt="" class="w-4 h-4"><span>Ben >> LinkedIn >> All</span>
                    </div>
                </div>

            </div>

            <div class="result_header-icons flex gap-2 z-20">
                <button
                    class=" w-8 h-8   items-center justify-center rounded-full  bg-neutral-50 border border-neutral-200 flex z-40">
                    <img src="../assets/cube-transparent.svg" alt="" class="w-4 h-4" />
                </button>
                <button
                    class=" w-8 h-8   items-center justify-center rounded-full  bg-neutral-50 border border-neutral-200  z-40 hidden md:flex">
                    <img src="../assets/ellipsis-horizontal.svg" alt="" class="w-4 h-4" />
                </button>
            </div>

            <Animation />

        </div>


        <div class="result_item w-full flex flex-col md:flex-row justify-between items-start gap-2 md:gap-4  bg-transparent  rounded-lg rounded-t-none p-4 md:p-8 relative overflow-hidden">

            <div class="icons flex md:flex-co gap-2 md:gap-4">
                <button
                    class="sidebar-close-btn w-8 h-8 items-center justify-center rounded-full  bg-neutral-50 border border-neutral-200 flex z-40 ">
                    <img src="../assets/chevron-left.svg" alt="" class="w-4 h-4" />
                </button>
                <button
                    class="sidebar-close-btn w-8 h-8 items-center justify-center rounded-full  bg-neutral-50 border border-neutral-200 flex z-40 ">
                    <img src="../assets/chat-bubble-left-right.svg" alt="" class="w-4 h-4" />
                </button>

                <button
                    class="sidebar-close-btn w-8 h-8 items-center justify-center rounded-full  bg-neutral-50 border border-neutral-200 flex z-40 ">
                    <img src="../assets/ellipsis-horizontal.svg" alt="" class="w-4 h-4" />
                </button>
            </div>

            <div class="result_item-content w-full border border-neutral-200 rounded-lg p-4 pb-10 relative break-words">
                <p>
                    💡 Google launches "AI Opportunity Initiative for Europe" to boost AI knowledge in the European workforce with a €25 million investment.

🌍 Empowering European workers
Google's initiative allocates €10 million of the total €25 million from Google.org to equip workers with essential skills to prevent them from being "left behind."
In collaboration with the Centre for Public Impact, Google is specifically seeking applications from social enterprises, non-profit organizations, and "vulnerable" communities.

🚀 Google for Start-ups Growth Academies
The initiative includes a new series of "Google for Start-ups Growth Academies" across Europe, the Middle East, and Africa.
These academies focus on start-ups using AI to address major societal challenges in health, education, and cybersecurity.
Google launches "Growth Academy: AI for Health," now accepting applications.

🔚 Investing in Europe's AI future
Google's "AI Opportunity Initiative for Europe" aims to strengthen the European workforce's AI knowledge and foster innovation. While benefiting from Google's resources, it's essential to remember the value of networking and seeking knowledge from various sources. The future is AI, and Europe is getting ready.

More: [URL]

🔔 Follow me for more updates: https://www.linkedin.com/in/benjamin-danneberg/
                </p>

                
            <div class="result_item-close">
                <button
                    class="sidebar-close-btn w-8 h-8 absolute -bottom-4 left-[calc(50%-16px)]  items-center justify-center rounded-full bg-neutral-50 border border-neutral-200 flex z-40 rotate-90">
                    <img src="../assets/chevron-left.svg" alt="" class="w-4 h-4" />
                </button>
            </div>

            <div class="result_item-copy">
                <button
                    class="sidebar-close-btn w-8 h-8 absolute -top-1 -right-1  items-center justify-center rounded-full bg-neutral-50 border border-neutral-200 flex z-40">
                    <img src="../assets/clipboard-document.svg" alt="" class="w-4 h-4" />
                </button>
            </div>

            </div>


        </div>

        <div class="result-close">
                <button
                    class="sidebar-close-btn w-8 h-8 absolute -top-1 -right-1  items-center justify-center rounded-full bg-neutral-50 border border-neutral-200 flex z-40">
                    <img src="../assets/x-mark.svg" alt="" class="w-4 h-4" />
                </button>
            </div>


    </div>


</template>

<style scoped></style>
