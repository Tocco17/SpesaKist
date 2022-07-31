<script>
import { defineComponent } from "vue";
import { useArticlesStore } from "../stores/articlesStore";
import categories from "../components/Categories.vue"
import articles from "../components/Articles.vue"

export default defineComponent({
    data() {
    },
    components: {
        categories,
        articles,
    },
    setup() {
        // const articlesStore = useArticlesStore();
        // return {
        //     articlesStore
        // }
    },
    methods: {
    },
    computed: {
    },
})
</script>

<template>
    <categories />

    <articles />
</template>
