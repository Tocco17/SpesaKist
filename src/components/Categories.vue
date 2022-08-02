<script>
import { useArticlesStore } from "../stores/articlesStore";

export default {
    name: 'categories',
    setup() {
        const articlesStore = useArticlesStore();
        return {
            articlesStore
        }
    },
    methods: {
        checked(id) {
            this.articlesStore.changeCategoryCheck(id)
        }
    },
    computed: {
        categories() {
            return this.articlesStore.categories
        },
    }
}
</script>

<template>
    <div class="bg-gray-500 flex flex-col flex-wrap justify-start ml-50 mr-50 p-10 rounded-lg">
        <!--//HEADER-->
        <h2 class="text-2xl">Categories</h2>

        <!--//LIST-->
        <ul class="flex flex-col">
            <li v-for="category in categories">
                <input :id="`category-${category.id}`" type="checkbox" value="true" :checked="category.checked"
                    @click="checked(category.id)">
                <label :for="`category-${category.id}`">{{ category.text }}</label>
            </li>
        </ul>
    </div>
</template>
