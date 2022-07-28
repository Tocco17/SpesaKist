<script>
import { useArticlesStore } from "../stores/articlesStore";

export default {
    name: 'categories',
    data() {
        return {
            categories: this.articlesStore.getCategories
        }
    },
    setup() {
        const articlesStore = useArticlesStore();
        return {
            articlesStore
        }
    },
}
</script>

<template>
    <div class="bg-gray-500 flex flex-col flex-wrap justify-start ml-50 mr-50 p-10 rounded-lg">
        <!--//HEADER-->
        <h2 class="">Categories</h2>

        <!--//LIST-->
        <ul class="flex flex-col">
            <li v-for="(category, index) in categories">
                <input :id="`category-${index}`" type="checkbox" value="true" :checked="category.checked"
                    @click="category.checked = !category.checked">
                <label :for="`category-${index}`">{{ category.value }}</label>
            </li>
        </ul>
    </div>
</template>
