<template>
  <div class="bg-[#E5E5E5] min-h-screen relative">
    <div class="center md:w-[30%] rounded-lg shadow p-5 bg-white">
      <h2 class="text-2xl font-bold text-[#730C07]">Masuk</h2>
      <form class="mt-4">
        <div class="mx-auto max-w-lg">
          <div class="py-2">
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
          <div class="flex justify-end">
            <label class="block text-gray-500 font-light my-4"
              ><a
                href="#"
                class="
                  cursor-pointer
                  tracking-tighter
                  text-sm text-[#730C07]
                  hover:text-[#c0372f]
                  no-underline
                "
                ><span>Forgot Password?</span></a
              ></label
            >
          </div>
          <button
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
            Masuk
          </button>
        </div>
      </form>
      <hr class="w-[80%] mx-auto bg-gray-500 my-6" />
      <div class="flex justify-center">
        <span class="text-base text-[#868686]"
          >Belum punya akun?
          <a href="" class="text-[#730C07] hover:text-[#c0372f] font-bold"
            >Daftar Sekarang</a
          ></span
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showPassword: false,
      password: null,
    };
  },
  methods: {
    toggleShow() {
      this.showPassword = !this.showPassword;
    },
  },
};
</script>