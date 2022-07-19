<template>
  <div class="center w-[80%] md:w-[30%] rounded-lg shadow p-5 bg-white">
    <h2 class="text-2xl font-bold text-[#730C07]">Masuk</h2>
    <form @submit.prevent="login" class="mt-4">
      <div class="mx-auto max-w-lg">
        <div class="py-2">
          <input
            v-model="form.email"
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
            :class="{
              'border-red-500': errors.email,
            }"
          />
          <span
            v-for="index in errors.email"
            :key="index"
            class="text-[#730C07]"
            >{{ errors.email[0] }}</span
          >
        </div>
        <div class="py-2">
          <div class="relative">
            <input
              v-model="form.password"
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
              :class="{
                'border-red-500': errors.password,
              }"
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
              <button
                @click.prevent="toggleShow"
                type="button"
                class="text-[#730C07]"
              >
                {{ !showPassword ? "Show" : "Hide" }}
              </button>
            </div>
          </div>
          <span
            v-for="index in errors.password"
            :key="index"
            class="text-[#730C07]"
            >{{ errors.password[0] }}</span
          >
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
        <router-link
          to="register"
          class="text-[#730C07] hover:text-[#c0372f] font-bold"
          >Daftar Sekarang</router-link
        ></span
      >
    </div>
  </div>
</template>

<script>
import swal from "sweetalert";
import { mapActions } from "vuex";
import Vue from "vue";
export default {
  data() {
    return {
      showPassword: false,
      form: {
        email: "",
        password: "",
      },
      errors: [],
    };
  },
  methods: {
    ...mapActions(["actionSetAuth"]),
    toggleShow() {
      this.showPassword = !this.showPassword;
    },
    async login() {
      try {
        this.$emit("loading", (this.isLoading = true));
        const response = await this.$http.post(`${this.$api_url}/login`, {
          ...this.form,
        });

        if (response) {
          this.$emit("loading", (this.isLoading = false));
          let auth = {
            token: response.data.data.token,
          };

          this.actionSetAuth(auth);
          localStorage.setItem("auth", JSON.stringify(auth));

          Vue.prototype.$http.defaults.headers.common["Authorization"] =
            "Bearer " + auth.token;

          this.$router.push("/home");
        }
      } catch (error) {
        this.$emit("loading", (this.isLoading = false));
        if (error.response.status === 400) {
          this.errors = error.response.data.data;
        }
        swal({
          title: "Error!",
          text: `${error.response.data.message}, silahkan cek form anda!`,
          icon: "error",
        });
      }
    },
  },
};
</script>