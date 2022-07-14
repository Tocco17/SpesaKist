<script>
import { defineComponent } from "vue";


export default defineComponent({
  data() {
    return {
    }
  },

  methods: {

  }

})

</script>

<template>
  <h1>Hello App!</h1>
  <p>
    <router-link to="/">Home</router-link>
    <router-link to="/">Category</router-link>
    <router-link to="/login">Profile</router-link>
  </p>

  <router-view />
</template>

<style>
</style>
