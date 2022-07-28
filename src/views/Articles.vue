<script>
import { defineComponent } from "vue";
import { useArticlesStore } from "../stores/articlesStore";
import categories from "../components/Categories.vue"

export default defineComponent({
    data() {
        return {
            articles: this.articlesStore.articles,
        }
    },
    components: {
        categories,
    },
    setup() {
        const articlesStore = useArticlesStore();
        return {
            articlesStore
        }
    },
    methods: {
    },
    computed: {
        // articlesToView() {
        //     const selectedCategories = categories.filter(x => x.checked)
        //     return this.articles.filter(x => x.categories.some(c => selectedCategories.includes(c)))
        // }
    },
})
</script>

<template>
    <categories />
</template>
