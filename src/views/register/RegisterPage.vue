<template>
  <div class="center w-[80%] md:w-[30%] rounded-lg shadow p-5 bg-white">
    <h2 v-if="!nextForm" class="text-2xl font-bold text-[#730C07]">
      Daftar Sekarang
    </h2>
    <button v-else @click.prevent="toggleBack" class="font-bold text-[#730C07]">
      &#8678; Kembali
    </button>
    <form @submit.prevent="register" class="mt-4">
      <div class="mx-auto max-w-lg">
        <!-- Start: First Form -->
        <div v-if="!nextForm">
          <div class="py-2">
            <input
              v-model="firstName"
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
              v-model="lastName"
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
        </div>
        <!-- End: First Form -->
        <!-- Start: Second Form -->
        <div v-else>
          <div class="py-2">
            <input
              v-model="form.phone"
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
            <span
              v-for="index in errors.password"
              :key="index"
              class="text-[#730C07]"
              >{{ errors.password[0] }}</span
            >
          </div>
          <div class="py-2 mb-4">
            <div class="relative">
              <input
                v-model="confirmPassword"
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
            <span
              v-for="index in errors.password"
              :key="index"
              class="text-[#730C07]"
              >{{ errors.password[0] }}</span
            >
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
import swal from "sweetalert";
export default {
  data() {
    return {
      nextForm: false,
      showPassword: false,
      showConfirmPass: false,
      firstName: "",
      lastName: "",
      confirmPassword: "",
      form: {
        name: "",
        email: "",
        phone: "",
        password: "",
      },
      errors: [],
      isLoading: false,
    };
  },
  watch: {
    firstName: function (val) {
      this.form.name = val + " " + this.lastName;
    },
    lastName: function (val) {
      this.form.name = this.firstName + " " + val;
    },
  },
  methods: {
    toggleNextForm() {
      if (this.firstName && this.lastName && this.form.email) {
        this.nextForm = true;
      } else {
        swal("Oops...", "Lengkapi form terlebih dahulu!", "error");
      }
    },
    toggleBack() {
      this.nextForm = false;
    },
    toggleShow() {
      this.showPassword = !this.showPassword;
    },
    toggleShow2() {
      this.showConfirmPass = !this.showConfirmPass;
    },
    async register() {
      try {
        if (this.confirmPassword === this.form.password) {
          this.$emit("loading", (this.isLoading = true));
          const response = await this.$http.post(`${this.$api_url}/register`, {
            ...this.form,
          });

          if (response) {
            this.$emit("loading", (this.isLoading = false));
            swal({
              title: "Berhasil!",
              text: "Berhasil mendaftar",
              icon: "success",
              button: "OK",
            }).then((status) => {
              if (status === true) {
                this.$router.push("/");
              }
            });
          }
        } else {
          swal("Oops...", "Konfirmasi password tidak sama!", "error");
        }
      } catch (error) {
        this.$emit("loading", (this.isLoading = false));
        if (error.response.status === 400) {
          this.errors = error.response.data.data;
          this.nextForm = false;
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