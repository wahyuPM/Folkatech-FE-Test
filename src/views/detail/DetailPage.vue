<template>
  <div class="container mx-auto px-8">
    <div class="grid grid-cols-12 grid-flow-dense h-max gap-2">
      <div class="col-start-1 col-end-6">
        <div class="border border-[#D8D8D8] flex justify-center items-center">
          <img
            v-if="image_default === ''"
            :src="detail.images[0].image_url"
            :alt="detail.images[0].id"
            class="h-auto w-full"
          />
          <img
            v-else
            :src="image_default"
            :alt="image_default"
            class="h-auto w-full"
          />
        </div>
        <div class="my-4">
          <hooper :settings="hooperSettings">
            <slide v-for="index in image_list" :key="index">
              <div
                @click.prevent="changeDefaultImage(index)"
                class="
                  border
                  flex
                  justify-center
                  items-center
                  h-full
                  border-[#D8D8D8]
                  p-2
                  mr-2
                  cursor-pointer
                "
              >
                <img class="h-auto w-[80%]" :src="index" :alt="index" />
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
            {{ detail.short_description }}
          </p>
        </div>
      </div>
      <div class="col-start-1 col-end-13">
        <div class="w-full flex flex-col gap-5 justify-center">
          <ul
            class="flex list-none flex-wrap mt-3 mb-4 flex-row justify-center"
            role="tablist"
          >
            <li
              :class="
                `text-center border-b-[3px] ` +
                (openTab === 1 ? 'border-b-[#EB3F36]' : 'border-b-white')
              "
            >
              <button
                @click.prevent="changeTab(1)"
                type="button"
                :class="
                  `text-2xl font-bold uppercase px-10 py-3 block leading-normal hover:text-[#EB3F36] ` +
                  (openTab === 1 ? 'text-[#EB3F36]' : 'text-[#BEBEBE]')
                "
              >
                Deskripsi
              </button>
            </li>
            <li
              :class="
                `text-center border-b-[3px] ` +
                (openTab === 2 ? 'border-b-[#EB3F36]' : 'border-b-white')
              "
            >
              <button
                @click.prevent="changeTab(2)"
                type="button"
                :class="
                  `text-2xl font-bold uppercase px-10 py-3 block leading-normal hover:text-[#EB3F36] ` +
                  (openTab === 2 ? 'text-[#EB3F36]' : 'text-[#BEBEBE]')
                "
              >
                Informasi
              </button>
            </li>
          </ul>
          <div class="relative break-word w-full p-4">
            <div class="px-3 py-5 min-h-[20rem]">
              <div :class="openTab === 1 ? 'block w-full' : 'hidden'" id="tab1">
                <p class="text-[#696969] text-normal leading-6">
                  {{ detail.description }}
                </p>
              </div>
              <div :class="openTab === 2 ? 'block w-full' : 'hidden'" id="tab2">
                <p class="text-[#696969] text-normal leading-6">Comming Soon</p>
              </div>
            </div>
          </div>
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
    this.detail.images.forEach((item) => {
      return this.image_list.push(item.image_url);
    });
  },
  data() {
    return {
      detail: null,
      image_list: [],
      image_default: "",
      counter: 0,
      openTab: 1,
      hooperSettings: {
        itemsToShow: 3,
        wheelControl: false,
        breakpoints: {
          375: {
            itemsToShow: 3,
          },
          1000: {
            itemsToShow: 3,
          },
        },
      },
    };
  },
  methods: {
    changeTab(value) {
      this.openTab = value;
    },
    changeDefaultImage(index) {
      this.image_default = index;
    },
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
  height: 150px;
}
.hooper >>> .hooper-prev {
  left: -20px;
  background-color: #d8d8d8 !important;
  border-radius: 50% !important;
  padding: 0.5rem;
}
.hooper >>> .hooper-next {
  right: -20px;
  background-color: #d8d8d8 !important;
  border-radius: 50% !important;
  padding: 0.5rem;
}
</style>