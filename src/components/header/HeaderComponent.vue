<template>
  <div class="fixed top-0 w-full bg-white z-10">
    <div class="container mx-auto">
      <div class="bg-white px-6 py-8 flex justify-end items-center">
        <div class="w-[30%] mx-6">
          <form @submit.prevent="getData">
            <div class="flex">
              <div class="relative w-full">
                <input
                  v-model="params.keyword"
                  type="search"
                  id="search-dropdown"
                  class="
                    text-base text-[#868686]
                    block
                    px-3
                    py-2
                    rounded-lg
                    w-full
                    bg-white
                    border-2 border-gray-300
                    placeholder-[#868686]
                    shadow-md
                    focus:placeholder-gray-500 focus:bg-white focus:outline-none
                  "
                  placeholder="Search "
                />
                <button
                  type="submit"
                  class="
                    absolute
                    top-0
                    right-0
                    py-2.5
                    px-6
                    text-sm
                    font-medium
                    text-white
                    bg-[#EB3F36]
                    rounded-r-lg
                    border border-[#EB3F36]
                    hover:bg-[#cf2c23]
                    focus:ring-4 focus:outline-none
                  "
                >
                  <svg
                    aria-hidden="true"
                    class="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    ></path>
                  </svg>
                  <span class="sr-only">Search</span>
                </button>
              </div>
            </div>
          </form>
        </div>
        <div class="flex gap-6">
          <a href=""><img src="@/assets/img/heart.png" alt="heart" /></a>
          <a href=""><img src="@/assets/img/shopping-bag.png" alt="cart" /></a>
          <div class="relative">
            <div>
              <button
                @click.prevent="toggleDropdown"
                type="button"
                class="
                  max-w-xs
                  rounded-full
                  flex
                  items-center
                  text-sm
                  focus:outline-none
                "
                id="user-menu-button"
                aria-expanded="false"
                aria-haspopup="true"
              >
                <span class="sr-only">Open user menu</span>
                <img src="@/assets/img/user.png" alt="profile" />
              </button>
            </div>
            <div
              :class="showDropdown ? 'block' : 'hidden'"
              class="
                origin-top-right
                absolute
                right-0
                mt-2
                w-48
                rounded-md
                shadow-lg
                py-1
                bg-white
                ring-1 ring-black ring-opacity-5
                focus:outline-none
              "
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="user-menu-button"
              tabindex="-1"
            >
              <!-- Active: "bg-gray-100", Not Active: "" -->
              <a
                href="#"
                class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                role="menuitem"
                tabindex="-1"
                id="user-menu-item-0"
                >Your Profile</a
              >

              <a
                href="#"
                class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                role="menuitem"
                tabindex="-1"
                id="user-menu-item-1"
                >Settings</a
              >

              <a
                href="#"
                class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                role="menuitem"
                tabindex="-1"
                id="user-menu-item-2"
                >Sign out</a
              >
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="h-[64px] pl-10 w-full bg-[#F5F5F5]">
      <button class="bg-[#EB3F36] uppercase h-full px-10 text-white">
        Belanja
      </button>
    </div>
  </div>
</template>
<script>
import swal from "sweetalert";
import { mapActions } from "vuex";
export default {
  data() {
    return {
      showDropdown: false,
      params: {
        keyword: "",
        page: 1,
        limit: 10,
        price: "",
        order: "product_name,ASC",
      },
      errors: [],
    };
  },
  methods: {
    ...mapActions({
      updateProductList: "updateProductList",
      updateTotal: "updateTotal",
    }),
    toggleDropdown() {
      this.showDropdown = !this.showDropdown;
    },
    async getData() {
      try {
        this.$emit("loading", (this.isLoading = true));
        let params = new URLSearchParams();
        params.append("keyword", this.params.keyword);
        params.append("page", this.params.page);
        params.append("limit", this.params.limit);
        params.append("price", this.params.price.toString());
        params.append("order", this.params.order);

        let request = {
          params: params,
        };
        let response = await this.$http.get(
          `${this.$api_url}/product`,
          request
        );

        if (response) {
          this.$emit("loading", (this.isLoading = false));
          let products = response.data.data.list;
          let total = response.data.data.total;
          this.updateProductList(products);
          this.updateTotal(total);

          // if (this.$route.path !== "/produk") {
          //   this.$router.push("/produk");
          // }

          if (products.length == []) {
            swal({
              title: "Warning!",
              text: `Data not found!`,
              icon: "warning",
              buttons: "OK",
              closeOnClickOutside: false,
            });
            return;
          }
        }
      } catch (error) {
        this.$emit("loading", (this.isLoading = false));
        this.errors = error.response.data.errors;
        console.log(error);
      }
    },
  },
};
</script>