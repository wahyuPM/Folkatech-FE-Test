<template>
  <div
    @click.prevent="detailProduct"
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
    <div class="box-border mb-4">
      <img
        v-show="isLoaded"
        @load="onImgLoad"
        :src="data.images[0].image_url"
        :alt="data.images[0].id"
        class="w-full h-auto"
      />
      <vue-element-loading :active="!isLoaded" />
    </div>
    <div class="flex flex-col gap-2 items-center">
      <h3 class="font-bold text-lg leading-4 uppercase text-center">
        {{ data.name }}
      </h3>
      <span class="uppercase text-sm">{{ data.product_type.name }}</span>
      <div class="flex">
        <img src="@/assets/img/star.png" alt="" />
      </div>
      <span class="text-[#EB3F36] font-semibold text-lg">{{
        data.price | formatCurrency
      }}</span>
    </div>
  </div>
</template>
<script>
import VueElementLoading from "vue-element-loading";
import formatCurrency from "@/helper/formatCurrency.js";
export default {
  props: ["data"],
  components: {
    VueElementLoading,
  },
  data() {
    return {
      isLoaded: false,
    };
  },
  methods: {
    detailProduct() {
      this.$router.push({
        path: `/detail/${this.data.product_type.slug}/${this.data.id}`,
      });
    },
    onImgLoad() {
      console.log(` >> isLoaded:`, this.isLoaded);
      return (this.isLoaded = true);
    },
  },
  filters: {
    formatCurrency: function (data) {
      return formatCurrency(data);
    },
  },
};
</script>