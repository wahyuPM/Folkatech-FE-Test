<template>
  <div class="center md:w-[30%] rounded-lg shadow p-5 bg-white">
    <h2 v-if="!nextForm" class="text-2xl font-bold text-[#730C07]">
      Daftar Sekarang
    </h2>
    <button
      v-else
      @click.prevent="toggleNextForm"
      class="font-bold text-[#730C07]"
    >
      Kembali
    </button>
    <form class="mt-4">
      <div class="mx-auto max-w-lg">
        <!-- Start: First Form -->
        <div v-if="!nextForm">
          <div class="py-2">
            <input
              placeholder="Nama Depan"
              type="text"
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
                focus:placeholder-gray-500
                focus:bg-white
                focus:border-gray-600
                focus:outline-none
              "
            />
          </div>
          <div class="py-2">
            <input
              placeholder="Nama Belakang"
              type="text"
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
                focus:placeholder-gray-500
                focus:bg-white
                focus:border-gray-600
                focus:outline-none
              "
            />
          </div>
          <div class="py-2 mb-4">
            <input
              placeholder="Email"
              type="email"
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
                focus:placeholder-gray-500
                focus:bg-white
                focus:border-gray-600
                focus:outline-none
              "
            />
          </div>
        </div>
        <!-- End: First Form -->
        <!-- Start: Second Form -->
        <div v-else>
          <div class="py-2">
            <input
              placeholder="Nomor Telepon"
              type="number"
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
                focus:placeholder-gray-500
                focus:bg-white
                focus:border-gray-600
                focus:outline-none
              "
            />
          </div>
          <div class="py-2">
            <div class="relative">
              <input
                placeholder="Password"
                :type="!showPassword ? 'password' : 'text'"
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
                  focus:placeholder-gray-500
                  focus:bg-white
                  focus:border-gray-600
                  focus:outline-none
                "
              />
              <div
                class="
                  absolute
                  inset-y-0
                  right-0
                  pr-3
                  flex
                  items-center
                  text-sm
                  leading-5
                "
              >
                <button @click.prevent="toggleShow" class="text-[#730C07]">
                  {{ !showPassword ? "Show" : "Hide" }}
                </button>
              </div>
            </div>
          </div>
          <div class="py-2 mb-4">
            <div class="relative">
              <input
                placeholder="Konfirmasi Password"
                :type="!showConfirmPass ? 'password' : 'text'"
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
                  focus:placeholder-gray-500
                  focus:bg-white
                  focus:border-gray-600
                  focus:outline-none
                "
              />
              <div
                class="
                  absolute
                  inset-y-0
                  right-0
                  pr-3
                  flex
                  items-center
                  text-sm
                  leading-5
                "
              >
                <button @click.prevent="toggleShow2" class="text-[#730C07]">
                  {{ !showConfirmPass ? "Show" : "Hide" }}
                </button>
              </div>
            </div>
          </div>
        </div>
        <!-- End: Second Form -->
        <button
          v-if="!nextForm"
          @click.prevent="toggleNextForm"
          class="
            mt-3
            text-lg
            font-semibold
            bg-[#EB3F36]
            w-full
            text-white
            rounded-lg
            px-6
            py-3
            block
            shadow-xl
            hover:text-white hover:bg-[#cf2c23]
          "
        >
          Selanjutnya
        </button>
        <button
          v-else
          type="submit"
          class="
            mt-3
            text-lg
            font-semibold
            bg-[#EB3F36]
            w-full
            text-white
            rounded-lg
            px-6
            py-3
            block
            shadow-xl
            hover:text-white hover:bg-[#cf2c23]
          "
        >
          Selanjutnya
        </button>
      </div>
    </form>
    <hr class="w-[80%] mx-auto bg-gray-500 my-6" />
    <div class="flex justify-center">
      <span class="text-base text-[#868686]"
        >Sudah punya akun?
        <router-link
          to="/"
          class="text-[#730C07] hover:text-[#c0372f] font-bold"
          >Masuk</router-link
        ></span
      >
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      nextForm: false,
      showPassword: false,
      showConfirmPass: false,
      form: {
        firstName: null,
        lastName: null,
        email: null,
        phone: null,
        password: null,
      },
    };
  },
  methods: {
    toggleNextForm() {
      this.nextForm = !this.nextForm;
    },
    toggleShow() {
      this.showPassword = !this.showPassword;
    },
    toggleShow2() {
      this.showConfirmPass = !this.showConfirmPass;
    },
  },
};
</script>