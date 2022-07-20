<template>
  <section class="container mx-auto my-6">
    <div class="grid grid-cols-12 grid-rows-2 gap-2">
      <div class="col-start-1 col-end-4 h-full px-2 row-span-2">
        <Accordion title="Urutkan Berdasarkan">
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
                    id="default-checkbox"
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
                    for="default-checkbox"
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
                    id="default-checkbox"
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
                    for="default-checkbox"
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
                    id="default-checkbox"
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
                    for="default-checkbox"
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
                    id="default-checkbox"
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
                    for="default-checkbox"
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
            <p>dari 100</p>
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
        <div class="grid grid-cols-6 mt-4 gap-2 h-[30rem] overflow-y-auto">
          <div
            v-for="(row, index) in productItems"
            :key="index"
            class="col-span-2"
          >
            <Product :data="row" />
          </div>
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
export default {
  components: {
    Accordion,
    Product,
  },
  computed: {
    ...mapGetters(["productItems"]),
  },
  created() {
    this.$store.dispatch("getProductItems");
  },
  watch: {
    "params.limit": function () {
      this.getData();
    },
    "params.order": function () {
      this.getData();
    },
    products: function () {
      this.filterProduct();
    },
  },
  data() {
    return {
      products: [],
      params: {
        page: 1,
        limit: 10,
        price: "",
        order: "product_name,ASC",
      },
      errors: [],
    };
  },
  methods: {
    ...mapActions(["updateProductList"]),
    filterProduct() {
      this.updateProductList(this.products);
    },
    async getData() {
      try {
        this.$emit("loading", (this.isLoading = true));
        let params = new URLSearchParams();
        params.append("page", this.params.page);
        params.append("limit", this.params.limit);
        params.append("price", this.params.price);
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
};
</script>