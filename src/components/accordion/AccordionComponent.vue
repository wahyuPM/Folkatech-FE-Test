<template>
  <div class="rounded">
    <div
      v-on:click="isOpen = !isOpen"
      class="
        flex
        justify-between
        text-[#696969] text-base
        font-normal
        cursor-pointer
        uppercase
        leading-[17.23px]
        bg-[#F5F5F5BF]
        p-4
      "
    >
      {{ title }} <span class="ml-2 font-bold" v-if="isOpen">&#8743;</span>
      <span class="ml-2 font-bold" v-else>&#8744;</span>
    </div>
    <div class="mt-4" :class="isOpen ? 'd-block' : 'hidden'">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      isOpen: true,
    };
  },
  name: "AccordionComponent",
  props: {
    title: String,
  },
};
</script>
