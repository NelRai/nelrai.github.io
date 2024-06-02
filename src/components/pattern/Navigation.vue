<script setup lang="ts">


</script>

<template>
  <nav>
    <ul
      class="flex  h-12 justify-center items-center  bg-transparent   w-auto text-neutral-700 border border-neutral-200 rounded-lg  text-lg  divide-x divide-neutral-200 ">
      <li class="h-[46px] "  v-ripple>
        <a href="#home" class="blinker flex items-center px-8 h-full hover:border-neutral-200 rounded-s-lg hover:bg-neutral-100 hover:text-neutral-950 active:border-dc-400">Explore</a>
      </li>
      <li class="navigation-active  "  v-ripple>
        <a href="#projects"class="blinker flex items-center px-8 h-[46px]   hover:border-neutral-200 hover:bg-neutral-100 hover:text-neutral-950 active:border-dc-400 ">Workspace</a>
      </li>
      <li class=""  v-ripple>
        <a href="#contact"class="blinker flex items-center px-8 h-[46px]   hover:border-neutral-200 hover:bg-neutral-100 hover:text-neutral-950 active:border-dc-400">Storage</a>
      </li>
      <li class="p-ripple " v-ripple>
        <a href="#contact"class="blinker flex items-center px-8 h-[46px]  rounded-e-lg  hover:border-neutral-200 hover:bg-neutral-100 hover:text-neutral-950 active:border-dc-400">Publish</a>
      </li>

    </ul>
  </nav>

</template>

<style scoped>
.vertical-line {
  border-left: 1px solid #e2e8f0;
  height: 48px;
  margin: 0 0px;
}
.navigation-active {
 /* border: 1px solid #dc3545;
border-radius: 4px;  */
background-color: #DFE2EC;
}

/* .navigation-active a:hover {
  border-radius: 12px;

  cursor: pointer;
} */

/* .navigation-active {
border: 1px solid #dc3545;
border-radius: 12px;
height: 50px;
background-color: #e2e8f0;

} */

</style>
