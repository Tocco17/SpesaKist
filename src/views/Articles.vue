<script>
import { defineComponent } from "vue";
import { useArticlesStore } from "../stores/articlesStore";
import categories from "../components/Categories.vue"
import articles from "../components/Articles.vue"
import newArticle from "../components/NewArticle.vue"

export default defineComponent({
    data() {
        return {
            articleImgSrc: '',
            createArticle: true,
        }
    },
    components: {
        categories,
        articles,
        newArticle,
    },
    setup() {
        const articlesStore = useArticlesStore();
        return {
            articlesStore
        }
    },
    methods: {
        articleHover(article) {
            this.articleImgSrc = article.image
        },
        saveNewList() {
            console.log('Articles.vue/saveNewList =>')

            const input = document.querySelector('#newListInput')
            const listName = input.value
            const articlesChecked = this.articlesStore.articlesChecked


            console.log('<= Articles.vue/saveNewList')
        }
    },
    computed: {
        newArticleBorder() {
            if (!this.createArticle) return

            return 'border-black border-2 rounded p-2'

        },
        getImgUrl() {
            return ''

            var images = require.context('../assets/', false, /\.jpg$/)
            return images('./' + this.articleImgSrc)
        }
    },
})
</script>

<template>
    <div class="flex flex-row justify-start items-start">
        <categories class="m-1" />

        <articles class="m-1" @article-hover="articleHover" :toCheck="false" />

        <div>
            <img v-if="false" :src="require(`${articleImgSrc}`)">
            <img :src="getImgUrl">
        </div>
    </div>
    <div class="flex flex-row-reverse justify-between items-center">
        <div v-if="createArticle" class="flex flex-col justify-between items-start order-2" :class="newArticleBorder">
            <new-article></new-article>
        </div>

        <button class="bg-green-800 rounded-full text-3xl text-white text-justify order-1 p-5"
            @click="createArticle = !createArticle">
            {{ createArticle ? '-' : '+' }}
        </button>
    </div>
</template>
