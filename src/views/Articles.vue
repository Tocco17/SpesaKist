<script>
import { defineComponent } from "vue";
import { useArticlesStore } from "../stores/articlesStore";
import categories from "../components/Categories.vue"
import articles from "../components/Articles.vue"

export default defineComponent({
    data() {
        return {
            articleImgSrc: '',
            toCheck: false,
            listName: '',
        }
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
        articleHover(article) {
            this.articleImgSrc = '/src/assets/' + article.image
        },
        saveNewList() {
            console.log('Articles.vue/saveNewList =>')

            console.log('this.listName', this.listName)

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
                <input id="newListInput" class="rounded" type="text" placeholder="Insert a name list"
                    :value="listName" />
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
            <v-img :src="articleImgSrc"></v-img>
        </div>
    </div>
</template>
