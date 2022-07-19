<template>
  <main class="mx-auto w-full 2xl:w-[1440px] flex flex-col min-h-screen">
    <Header />
    <div class="p-[120px] mb-10"></div>
    <router-view></router-view>
  </main>
</template>
<script>
import Header from "@/components/header/HeaderComponent.vue";
export default {
  components: {
    Header,
  },
};
</script>