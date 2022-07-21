<script>
import { defineComponent } from "vue";
import { useAuthStore } from "./stores/authStore";
import { Helper } from "./utils/tests"


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
    logout() {
      console.log('Logout clicked')
      this.authStore.logout()
    }
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
          text-4xl text-gray-700
          bg-gray-500
        ">
      <div>
        <router-link to="/">Spesa List</router-link>
      </div>

      <svg xmlns="http://www.w3.org/2000/svg" id="menu-button" class="h-6 w-6 cursor-pointer md:hidden block"
        fill="none" viewBox="0 0 24 24" stroke="currentColor" @click="navbarOpened = !navbarOpened">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
      </svg>

      <div class="w-full md:flex md:items-center md:w-auto" id="menu" v-if="authStore.isLogged"
        :class="{ 'hidden': navbarOpened }">
        <ul class="
              pt-4
              text-base text-gray-700
              md:flex
              md:justify-between
              md:pt-0">
          <li>
            <router-link to="/" class="md:p-4 py-2 block hover:text-purple-400">Home</router-link>
          </li>
          <li>
            <router-link to="/Articles" class="md:p-4 py-2 block hover:text-purple-400">Articles</router-link>
          </li>
          <li>
            <router-link to="/Recipies" class="md:p-4 py-2 block hover:text-purple-400">Recipies</router-link>
          </li>
          <li>
          <li>
            <button class="md:p-4 py-2 block hover:text-purple-400" @click="logout">Sign out
            </button>
          </li>
          </li>
        </ul>
      </div>
    </nav>
  </header>

  <div class="bg-gray-400 min-h-screen p-5 flex flex-row flex-wrap justify-center content-start">
    <router-view />
  </div>
</template>

<style>
</style>
