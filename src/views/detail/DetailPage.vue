<template>
  <div class="container mx-auto px-8">
    <div class="grid grid-cols-12 mb-6 gap-2">
      <div class="col-start-1 col-end-6">
        <div class="border border-black flex justify-center items-center">
          <img src="@/assets/img/image61.png" alt="" class="h-auto w-full" />
        </div>
        <div class="my-4">
          <hooper :settings="hooperSettings">
            <slide>
              <div
                class="
                  border
                  flex
                  justify-center
                  items-center
                  h-full
                  border-black
                "
              >
                <img
                  class="h-auto w-full"
                  src="@/assets/img/image61.png"
                  id="0"
                  alt="img-galery"
                />
              </div>
            </slide>
            <hooper-navigation slot="hooper-addons"></hooper-navigation>
          </hooper>
        </div>
      </div>
      <div class="col-start-7 col-end-13">
        <div class="flex flex-col text-[#696969]">
          <h1 class="font-bold text-2xl uppercase mb-6 tracking-wider">
            {{ detail.name }}
          </h1>
          <span class="text-xl font-[500] mb-4">{{
            detail.product_type.name
          }}</span>
          <div class="block mb-4">
            <img src="@/assets/img/star.png" alt="" class="" />
          </div>
          <div class="flex justify-between items-center mb-6">
            <span class="text-[#EB3F36] font-semibold text-2xl">{{
              detail.price | formatCurrency
            }}</span>
            <span class="text-sm text-[#6F8EFF] font-light">Tersedia</span>
          </div>
          <div class="flex gap-4 mb-6">
            <div class="overflow-hidden flex border border-[#F1F1F1]">
              <button
                @click="changeCounter('-1')"
                type="button"
                class="py-4 px-6 hover:bg-[#F5F5F5] text-xl"
              >
                -
              </button>
              <input
                v-model="counter"
                type="number"
                onkeypress="return /[0-9.,]/i.test(event.key)"
                min="0"
                class="
                  text-xl text-center
                  border-x border-[#F1F1F1]
                  w-[4rem]
                  p-4
                  focus:outline-none
                "
              />
              <button
                @click="changeCounter('1')"
                type="button"
                class="py-4 px-6 hover:bg-[#F5F5F5] text-xl"
              >
                +
              </button>
            </div>
            <button
              type="button"
              class="
                py-4
                px-8
                bg-[#EB3F36]
                hover:bg-[#cf2c23]
                text-base text-white
                uppercase
              "
            >
              Tambah ke keranjang
            </button>
            <div
              class="
                p-4
                flex
                items-center
                justify-center
                bg-[#F5F5F5]
                cursor-pointer
              "
            >
              <button class="block" type="button">
                <img src="@/assets/img/heart.png" alt="heart" />
              </button>
            </div>
          </div>
          <p class="text-[#696969] text-lg leading-8">
            {{ detail.description }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { Hooper, Slide, Navigation as HooperNavigation } from "hooper";
import "hooper/dist/hooper.css";
import formatCurrency from "@/helper/formatCurrency.js";
export default {
  components: {
    Hooper,
    Slide,
    HooperNavigation,
  },
  created() {
    this.detail = this.$store.getters.productItemById(this.$route.params.id);
  },
  data() {
    return {
      detail: null,
      counter: 0,
      hooperSettings: {
        itemsToShow: 5,
        wheelControl: false,
        breakpoints: {
          375: {
            itemsToShow: 3,
          },
          1000: {
            itemsToShow: 5,
          },
        },
      },
    };
  },
  methods: {
    changeCounter: function (num) {
      this.counter += +num;
      !isNaN(this.counter) && this.counter > 0
        ? this.counter
        : (this.counter = 0);
    },
  },
  filters: {
    formatCurrency: function (value) {
      return formatCurrency(value);
    },
  },
};
</script>
<style scoped>
.hooper {
  padding: 0;
  height: 120px;
}
</style>