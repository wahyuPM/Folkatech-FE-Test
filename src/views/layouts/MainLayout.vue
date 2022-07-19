<template>
  <div class="relative">
    <Header />
    <router-view></router-view>
  </div>
</template>
<script>
import Header from "@/components/header/HeaderComponent.vue";
export default {
  components: {
    Header,
  },
};
</script>