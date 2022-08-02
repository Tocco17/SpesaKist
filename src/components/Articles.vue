<script>
import { useArticlesStore } from "../stores/articlesStore";

export default {
    name: 'articles',
    props: {
        toCheck: {
            type: Boolean,
            default: false,
            required: false
        }
    },
    setup() {
        const articlesStore = useArticlesStore();
        return {
            articlesStore
        }
    },
    methods: {
        hover(article) {
            this.$emit('article-hover', article)
        },
        checked(id) {
            this.articlesStore.changeArticleCheck(id)
        },
    },
    computed: {
        articles() {
            return this.articlesStore.articlesFiltered
        },
    }
}
</script>

<template>
    <div class="flex flex-col flex-wrap justify-start p-10">
        <!--//HEADER-->
        <h2 class="text-2xl">Articles</h2>

        <!--//LIST-->
        <ul class="flex flex-col">
            <li v-for="article in articles" @mouseover="hover(article)">
                <input v-if="toCheck" :id="`article-${article.id}`" type="checkbox" value="true"
                    :checked="article.checked" @click="checked(article.id)">
                <label :for="`article-${article.id}`">{{ article.name }}</label>
            </li>
        </ul>
    </div>
</template>
