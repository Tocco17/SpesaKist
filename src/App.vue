<script>
import { defineComponent } from "vue";


export default defineComponent({
  data() {
    return {
      forms: []
    }
  },

  methods: {

  }

})

</script>

<template>
  <h1>Hello App!</h1>
  <p>
    <router-link to="/">Go to Home</router-link>
    <router-link to="/login">Go to Login</router-link>
  </p>


  <router-view />
</template>

<style>
</style>
