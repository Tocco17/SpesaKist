<script>
import { useArticlesStore } from "../stores/articlesStore";

export default {
    name: 'newArticle',
    data() {
        return {
        }
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
        articles() {
            return this.articlesStore.articlesFiltered
        },
        divClass() {
            return 'flex flex-row items-center mr-2 mb-2'
        },
        inputClass() {
            return 'rounded'
        },
        labelClass() {
            return 'mr-1'
        },
        categories() {
            return this.articlesStore.categories
        }
    }
}
</script>

<template>
    <h2 class="text-2xl mr-2">New Article</h2>

    <div :class="divClass">
        <label for="newArticleNameInput" :class="labelClass">Article Name:</label>
        <input id="newArticleNameInput" :class="inputClass" type="text" placeholder="Insert a name" />
    </div>

    <div :class="divClass">
        <label for="newArticleCategoriesInput" :class="labelClass">List Name:</label>
        <v-select :item-text="categories.text" :item-value="categories.id" :item-disabled="false"></v-select>
        <input id="newArticleCategoriesInput" :class="inputClass" type="text" placeholder="Insert a name list" />
    </div>

    <button class="bg-green-800 rounded-md text-xl text-white p-2" @click="saveNewList">Save</button>
</template>
