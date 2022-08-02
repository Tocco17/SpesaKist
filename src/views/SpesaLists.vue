<script>
import { defineComponent } from "vue";
import { useArticlesStore } from "../stores/articlesStore";
import { useSpesaListStore } from "../stores/spesaListStore";
import categories from "../components/Categories.vue"
import articles from "../components/Articles.vue"

export default defineComponent({
    data() {
        return {
            articleImgSrc: '',
            toCheck: true,
        }
    },
    components: {
        categories,
        articles,
    },
    setup() {
        const articlesStore = useArticlesStore()
        const spesaListStore = useSpesaListStore()
        return {
            articlesStore,
            spesaListStore,
        }
    },
    methods: {
        articleHover(article) {
            // this.articleImgSrc = '/src/assets/' + article.image
        },
        saveNewList() {
            console.log('Articles.vue/saveNewList =>')

            const input = document.querySelector('#newListInput')
            const listName = input.value
            const articlesChecked = this.articlesStore.articlesChecked
            this.spesaListStore.saveNewList(listName, articlesChecked)

            console.log('<= Articles.vue/saveNewList')
        }
    },
    computed: {
    },
})
</script>

<template>
    <div class="flex flex-row-reverse justify-between items-center">
        <div v-if="toCheck" class="flex flex-row justify-between items-center order-2">
            <h2 class="text-2xl mr-2">New List</h2>

            <div class="flex flex-row items-center mr-2">
                <label for="newListInput" class="mr-1">List Name:</label>
                <input id="newListInput" class="rounded" type="text" placeholder="Insert a name list" />
            </div>

            <button class="bg-green-800 rounded-md text-xl text-white p-2" @click="saveNewList">Save</button>
        </div>

        <button class="bg-green-800 rounded-full text-3xl text-white text-justify order-1 p-5"
            @click="toCheck = !toCheck">
            {{ toCheck ? '-' : '+' }}
        </button>
    </div>
    <div class="flex flex-row justify-start items-start">
        <categories class="m-1" />

        <articles class="m-1" @article-hover="articleHover" :toCheck="toCheck" />

        <div>

        </div>
    </div>
</template>
