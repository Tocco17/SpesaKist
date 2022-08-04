<script>
import { useArticlesStore } from "../stores/articlesStore";

export default {
    name: 'newArticle',
    data() {
        return {
            categories: this.articlesStore.categories
        }
    },
    setup() {
        const articlesStore = useArticlesStore();
        return {
            articlesStore
        }
    },
    methods: {
        optionClicked() {
            console.log('NewArticle.vue/optionClicked =>')
            const select = document.querySelector("#newArticleCategoriesInput")
            console.log('select', select)
            console.log('select.value', select.value)
            console.log('<= NewArticle.vue/optionClicked')
        }
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
        <select id="newArticleCategoriesInput" :class="inputClass" data-placeholder="Select a category">
            <option v-for="category in categories" :value="category.id" @click="optionClicked">{{ category.text }}
            </option>
        </select>
    </div>

    <button class="bg-green-800 rounded-md text-xl text-white p-2" @click="saveNewList">Save</button>
</template>
