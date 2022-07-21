<template>
  <main class="mx-auto w-full 2xl:w-[1440px] flex flex-col min-h-screen">
    <Header @loading="LoadingScreen" />
    <div class="p-[80px] mb-2"></div>
    <div class="bg-white px-10 py-8 w-full flex gap-2">
      <Breadcrumbs />
    </div>
    <router-view @loading="LoadingScreen"></router-view>
    <vue-element-loading :active="isLoading" is-full-screen />
  </main>
</template>
<script>
import VueElementLoading from "vue-element-loading";
import Header from "@/components/header/HeaderComponent.vue";
export default {
  components: {
    Header,
    VueElementLoading,
  },
  data() {
    return {
      isLoading: false,
    };
  },
  methods: {
    // get value from child component
    async LoadingScreen(value) {
      try {
        this.isLoading = value;
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>
<style scoped>
</style>