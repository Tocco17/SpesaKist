<script>
import { defineComponent } from "vue";
import { useAuthStore } from "./stores/authStore";


export default defineComponent({
  data() {
    return {
      navbarOpened: false,
    }
  },
  setup() {
    const authStore = useAuthStore();
    return {
      authStore
    }
  },
  methods: {

  }

})

</script>

<template>

  <header>
    <nav class="
          flex flex-wrap
          items-center
          justify-between
          w-full
          py-4
          md:py-0
          px-4
          text-lg text-gray-700
          bg-white
        ">
      <div>
        <a href="#">
          Pippo
        </a>
      </div>

      <svg xmlns="http://www.w3.org/2000/svg" id="menu-button" class="h-6 w-6 cursor-pointer md:hidden block"
        fill="none" viewBox="0 0 24 24" stroke="currentColor" @click="navbarOpened = !navbarOpened">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
      </svg>

      <div class="w-full md:flex md:items-center md:w-auto" id="menu" v-if="authStore.isLogged" :class="{'hidden' : navbarOpened}">
        <ul class="
              pt-4
              text-base text-gray-700
              md:flex
              md:justify-between
              md:pt-0">
          <li>
            <router-link to="/" class="md:p-4 py-2 block hover:text-purple-400" href="#">Features</router-link>
          </li>
          <li>
            <a class="md:p-4 py-2 block hover:text-purple-400" href="#">Pricing</a>
          </li>
          <li>
            <a class="md:p-4 py-2 block hover:text-purple-400" href="#">Customers</a>
          </li>
          <li>
            <a class="md:p-4 py-2 block hover:text-purple-400" href="#">Blog</a>
          </li>
          <li>
            <a class="md:p-4 py-2 block hover:text-purple-400 text-purple-500" href="#">Sign Up</a>
          </li>
        </ul>
      </div>
    </nav>
  </header>

  <router-view />
</template>

<style>
</style>
