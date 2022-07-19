<template>
  <div class="bg-[#E5E5E5] min-h-screen relative">
    <router-view @loading="LoadingScreen"></router-view>
    <vue-element-loading :active="isLoading" is-full-screen />
  </div>
</template>
<script>
import VueElementLoading from "vue-element-loading";
export default {
  components: {
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
        console.log(this.isLoading); // someValue
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>