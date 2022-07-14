<script>
import { defineComponent } from "vue";

export default defineComponent({
    data() {
        return {
            phone: ""
        }
    },
    methods: {

    },
    computed: {
        reveresePhone() {
            return this.phone.split().reverse().join()
        }
    }

})
</script>


<template>
    <input v-model="phone" />

    {{ phone }} - {{ reveresePhone }}
</template>