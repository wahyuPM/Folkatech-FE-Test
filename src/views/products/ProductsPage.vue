<template>
  <section class="container mx-auto my-6">
    <div class="grid grid-cols-12 grid-rows-2 grid-flow-dense gap-2">
      <div class="col-start-1 col-end-4 h-full px-2 row-span-2">
        <Accordion title="Urutkan Berdasarkan">
          <div class="flex flex-col gap-4 px-2 mb-4">
            <label for="">Harga</label>
            <vue-slider
              v-model="params.price"
              :min="5000"
              :max="500000"
              :order="false"
              :lazy="true"
            >
              <template v-slot:tooltip="{ value }">
                <div class="w-max rounded-md bg-[#EB3F36] p-2 text-white">
                  {{ value | formatCurrency }}
                </div>
              </template>
            </vue-slider>
            <div class="w-full">
              <form
                @submit.prevent="onchangePrice"
                action=""
                class="flex items-center justify-center gap-2"
              >
                <div class="flex items-center gap-2">
                  <label class="text-xs" for="price1">Rp</label>
                  <input
                    id="price1"
                    class="
                      bg-[#F2F2F2]
                      p-2
                      flex-auto
                      block
                      w-full
                      text-xs
                      focus:outline-none
                    "
                    type="number"
                    v-model.lazy="params.price[0]"
                  />
                </div>
                <div class="flex items-center gap-2">
                  <label class="text-xs" for="price2">Rp</label>
                  <input
                    id="price2"
                    class="
                      bg-[#F2F2F2]
                      p-2
                      flex-auto
                      block
                      w-full
                      text-xs
                      focus:outline-none
                    "
                    type="number"
                    v-model.lazy="params.price[1]"
                  />
                </div>
                <button class="hidden" type="submit"></button>
              </form>
            </div>
          </div>
          <Accordion title="Origin">
            <div class="flex flex-col px-2">
              <div class="flex items-center justify-between mb-4">
                <div class="flex items-center">
                  <input
                    id="1"
                    type="checkbox"
                    value=""
                    class="
                      w-4
                      h-4
                      text-blue-600
                      bg-gray-100
                      rounded
                      border-gray-300
                      focus:ring-blue-500
                      dark:focus:ring-blue-600 dark:ring-offset-gray-800
                      focus:ring-2
                      dark:bg-gray-700 dark:border-gray-600
                    "
                  />
                  <label
                    for="1"
                    class="
                      ml-2
                      text-sm
                      font-normal
                      text-gray-900
                      dark:text-gray-300
                    "
                    >Aceh</label
                  >
                </div>
                <span>(20)</span>
              </div>
              <div class="flex items-center justify-between mb-4">
                <div class="flex items-center">
                  <input
                    id="2"
                    type="checkbox"
                    value=""
                    class="
                      w-4
                      h-4
                      text-blue-600
                      bg-gray-100
                      rounded
                      border-gray-300
                      focus:ring-blue-500
                      dark:focus:ring-blue-600 dark:ring-offset-gray-800
                      focus:ring-2
                      dark:bg-gray-700 dark:border-gray-600
                    "
                  />
                  <label
                    for="2"
                    class="
                      ml-2
                      text-sm
                      font-normal
                      text-gray-900
                      dark:text-gray-300
                    "
                    >Semarang</label
                  >
                </div>
                <span>(20)</span>
              </div>
            </div>
          </Accordion>
          <Accordion title="Species">
            <div class="flex flex-col px-2">
              <div class="flex items-center justify-between mb-4">
                <div class="flex items-center">
                  <input
                    id="3"
                    type="checkbox"
                    value=""
                    class="
                      w-4
                      h-4
                      text-blue-600
                      bg-gray-100
                      rounded
                      border-gray-300
                      focus:ring-blue-500
                      dark:focus:ring-blue-600 dark:ring-offset-gray-800
                      focus:ring-2
                      dark:bg-gray-700 dark:border-gray-600
                    "
                  />
                  <label
                    for="3"
                    class="
                      ml-2
                      text-sm
                      font-normal
                      text-gray-900
                      dark:text-gray-300
                    "
                    >Arabika</label
                  >
                </div>
                <span>(20)</span>
              </div>
              <div class="flex items-center justify-between mb-4">
                <div class="flex items-center">
                  <input
                    id="4"
                    type="checkbox"
                    value=""
                    class="
                      w-4
                      h-4
                      text-blue-600
                      bg-gray-100
                      rounded
                      border-gray-300
                      focus:ring-blue-500
                      dark:focus:ring-blue-600 dark:ring-offset-gray-800
                      focus:ring-2
                      dark:bg-gray-700 dark:border-gray-600
                    "
                  />
                  <label
                    for="4"
                    class="
                      ml-2
                      text-sm
                      font-normal
                      text-gray-900
                      dark:text-gray-300
                    "
                    >Robusta</label
                  >
                </div>
                <span>(20)</span>
              </div>
            </div>
          </Accordion>
          <Accordion title="Roast Level">
            <div class="flex flex-col px-2">
              <div class="flex items-center justify-between mb-4">
                <div class="flex items-center">
                  <input
                    id="5"
                    type="checkbox"
                    value=""
                    class="
                      w-4
                      h-4
                      text-blue-600
                      bg-gray-100
                      rounded
                      border-gray-300
                      focus:ring-blue-500
                      dark:focus:ring-blue-600 dark:ring-offset-gray-800
                      focus:ring-2
                      dark:bg-gray-700 dark:border-gray-600
                    "
                  />
                  <label
                    for="5"
                    class="
                      ml-2
                      text-sm
                      font-normal
                      text-gray-900
                      dark:text-gray-300
                    "
                    >Light Roast</label
                  >
                </div>
                <span>(20)</span>
              </div>
              <div class="flex items-center justify-between mb-4">
                <div class="flex items-center">
                  <input
                    id="6"
                    type="checkbox"
                    value=""
                    class="
                      w-4
                      h-4
                      text-blue-600
                      bg-gray-100
                      rounded
                      border-gray-300
                      focus:ring-blue-500
                      dark:focus:ring-blue-600 dark:ring-offset-gray-800
                      focus:ring-2
                      dark:bg-gray-700 dark:border-gray-600
                    "
                  />
                  <label
                    for="6"
                    class="
                      ml-2
                      text-sm
                      font-normal
                      text-gray-900
                      dark:text-gray-300
                    "
                    >Medium Roast</label
                  >
                </div>
                <span>(20)</span>
              </div>
            </div>
          </Accordion>
        </Accordion>
      </div>
      <div class="col-start-4 col-end-13 px-4 row-span-2">
        <div class="flex justify-between">
          <div class="flex gap-4 items-center">
            <p>Menampilkan</p>
            <select
              v-model="params.limit"
              name=""
              id=""
              class="border rounded p-1"
            >
              <option value="5">5</option>
              <option value="10">10</option>
              <option value="20">20</option>
            </select>
            <p>dari {{ total }}</p>
          </div>
          <div class="flex gap-4 items-center">
            <p>Urutkan</p>
            <select
              v-model="params.order"
              name=""
              id=""
              class="border rounded p-1"
            >
              <option selected value="product_name,ASC">Nama Produk</option>
              <option value="price,ASC">Harga Terendah</option>
              <option value="price,DESC">Harga Tertinggi</option>
              <option value="date,ASC">Tanggal</option>
            </select>
          </div>
        </div>
        <div
          class="
            grid grid-cols-6
            mt-4
            gap-2
            h-[35rem]
            overflow-y-auto
            py-2
            scroll
          "
        >
          <h1 v-if="productItems.length == []">Please wait...</h1>
          <div
            v-else
            v-for="(row, index) in productItems"
            :key="index"
            class="col-span-2"
          >
            <Product :data="row" />
          </div>
        </div>
      </div>
      <div class="col-start-4 col-end-13">
        <div class="flex justify-center my-4">
          <nav
            class="relative z-0 inline-flex rounded-md shadow-sm -space-x-px"
            aria-label="Pagination"
          >
            <a
              href="#"
              class="
                relative
                inline-flex
                items-center
                px-2
                py-2
                rounded-l-md
                border border-gray-300
                bg-white
                text-sm
                font-medium
                text-gray-500
                hover:bg-gray-50
              "
            >
              <span class="sr-only">Previous</span>
              <!-- Heroicon name: solid/chevron-left -->
              <svg
                class="h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                  clip-rule="evenodd"
                />
              </svg>
            </a>
            <!-- Current: "z-10 bg-indigo-50 border-indigo-500 text-indigo-600", Default: "bg-white border-gray-300 text-gray-500 hover:bg-gray-50" -->
            <a
              href="#"
              aria-current="page"
              class="
                z-10
                bg-indigo-50
                border-indigo-500
                text-indigo-600
                relative
                inline-flex
                items-center
                px-4
                py-2
                border
                text-sm
                font-medium
              "
            >
              1
            </a>
            <a
              href="#"
              class="
                bg-white
                border-gray-300
                text-gray-500
                hover:bg-gray-50
                relative
                inline-flex
                items-center
                px-4
                py-2
                border
                text-sm
                font-medium
              "
            >
              2
            </a>
            <a
              href="#"
              class="
                bg-white
                border-gray-300
                text-gray-500
                hover:bg-gray-50
                hidden
                md:inline-flex
                relative
                items-center
                px-4
                py-2
                border
                text-sm
                font-medium
              "
            >
              3
            </a>
            <a
              href="#"
              class="
                relative
                inline-flex
                items-center
                px-2
                py-2
                rounded-r-md
                border border-gray-300
                bg-white
                text-sm
                font-medium
                text-gray-500
                hover:bg-gray-50
              "
            >
              <span class="sr-only">Next</span>
              <!-- Heroicon name: solid/chevron-right -->
              <svg
                class="h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clip-rule="evenodd"
                />
              </svg>
            </a>
          </nav>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import Accordion from "@/components/accordion/AccordionComponent.vue";
import Product from "@/components/product/ProductComponent.vue";
import swal from "sweetalert";
import { mapGetters, mapActions } from "vuex";
import formatCurrency from "@/helper/formatCurrency";
export default {
  components: {
    Accordion,
    Product,
  },
  computed: {
    ...mapGetters({
      productItems: "productItems",
      total: "total",
      keyword: "keyword",
    }),
  },
  created() {
    if (this.keyword == "") {
      this.$store.dispatch("getProductItems");
    }
  },
  watch: {
    "params.limit": function () {
      this.getData();
    },
    "params.order": function () {
      this.getData();
    },
    "params.price": function () {
      this.getData();
    },
    products() {
      this.filterProduct();
    },
  },
  data() {
    return {
      products: [],
      newTotal: 0,
      params: {
        page: 1,
        limit: 10,
        price: [5000, 200000],
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
    filterProduct() {
      this.updateProductList(this.products);
      this.updateTotal(this.newTotal);
    },
    onchangePrice() {
      this.getData();
    },
    async getData() {
      try {
        this.$emit("loading", (this.isLoading = true));
        let params = new URLSearchParams();
        params.append("keyword", this.keyword);
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
          this.products = response.data.data.list;
          this.newTotal = response.data.data.total;

          if (this.products.length == []) {
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
  filters: {
    formatCurrency: function (value) {
      return formatCurrency(value);
    },
  },
};
</script>
<style lang="css">
.vue-slider-process {
  background-color: #eb3f36;
}
</style>