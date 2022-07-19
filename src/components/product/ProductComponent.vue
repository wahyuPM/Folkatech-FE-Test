<template>
  <div
    class="
      rounded
      border-2 border-white
      shadow
      p-4
      flex flex-col
      justify-center
      items-center
      cursor-pointer
      hover:border-2 hover:border-red-300
      text-[#696969]
      h-full
    "
  >
    <div class="box-border mb-2">
      <img :src="data.images[0].image_url" alt="" />
    </div>
    <div class="flex flex-col gap-2 items-center">
      <h3 class="font-bold text-lg leading-4 uppercase text-center">
        {{ data.name }}
      </h3>
      <span class="uppercase text-sm">{{ data.product_type.name }}</span>
      <div class="flex"></div>
      <span class="text-[#EB3F36] font-semibold text-lg">{{
        data.price | formatCurrency
      }}</span>
    </div>
  </div>
</template>
<script>
import formatCurrency from "@/helper/formatCurrency.js";
export default {
  props: ["data"],
  filters: {
    formatCurrency: function (data) {
      return formatCurrency(data);
    },
  },
};
</script>