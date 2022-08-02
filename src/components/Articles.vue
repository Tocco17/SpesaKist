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
        click(article) {
            this.$emit('article-click', article)
        }
    },
    computed: {
        articles() {
            return this.articlesStore.articles
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
            <li v-for="(article, index) in articles" @mouseover="hover(article)" @click="click(article)">
                <input v-if="toCheck" :id="`article-${index}`" type="checkbox" value="true" :checked="article.checked"
                    @click="articleClicked(index)">
                <label :for="`article-${index}`">{{ article.name }}</label>
            </li>
        </ul>
    </div>
</template>
