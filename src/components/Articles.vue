<script>
import { useArticlesStore } from "../stores/articlesStore";

export default {
    name: 'articles',
    setup() {
        const articlesStore = useArticlesStore();
        return {
            articlesStore
        }
    },
    methods: {
    },
    computed: {
        articles() {
            return this.articlesStore.articles
        },
    }
}
</script>

<template>
    <div class="bg-gray-500 flex flex-col flex-wrap justify-start ml-50 mr-50 p-10 rounded-lg">
        <!--//HEADER-->
        <h2 class="">Articles</h2>

        <!--//LIST-->
        <ul class="flex flex-col">
            <li v-for="article in articles">
                <label>{{ article.name }}</label>
            </li>
        </ul>
    </div>
</template>
