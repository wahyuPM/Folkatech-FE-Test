<template>
  <section class="container mx-auto h-screen my-6">
    <div class="grid grid-cols-12 gap-2 h-full">
      <div class="col-start-1 col-end-4 h-full px-2">
        <Accordion title="Urutkan Berdasarkan">
          <Accordion title="Origin">
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
                    >Aceh</label
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
      <div class="col-start-4 col-end-13 px-4">
        <div class="flex justify-between">
          <div class="flex gap-4 items-center">
            <p>Menampilkan</p>
            <select name="" id="" class="border rounded p-1">
              <option value="">10</option>
              <option value="">20</option>
              <option value="">30</option>
              <option value="">40</option>
              <option value="">50</option>
            </select>
            <p>dari 100</p>
          </div>
          <div class="flex gap-4 items-center">
            <p>Urutkan</p>
            <select name="" id="" class="border rounded p-1">
              <option value="">Nama Produk</option>
              <option value="">Harga</option>
              <option value="">Tanggal</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import Accordion from "@/components/accordion/AccordionComponent.vue";
export default {
  components: {
    Accordion,
  },
};
</script>