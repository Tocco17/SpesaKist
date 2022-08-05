<script>
import { defineComponent } from "vue";
import { useArticlesStore } from "../stores/articlesStore";
import { useSpesaListStore } from "../stores/spesaListStore";
import categories from "../components/Categories.vue"
import articles from "../components/Articles.vue"

export default defineComponent({
    data() {
        return {
            spesaList: this.spesaListStore.spesaList.map(s => {
                return {
                    ...s,
                    toShow: false
                }
            })
        }
    },
    components: {
    },
    setup() {
        const spesaListStore = useSpesaListStore()
        return {
            spesaListStore,
        }
    },
    methods: {
        saveNewList() {
            console.log('Articles.vue/saveNewList =>')

            const input = document.querySelector('#newListInput')
            const listName = input.value
            const articlesChecked = this.articlesStore.articlesChecked
            this.spesaListStore.saveNewList(listName, articlesChecked)

            console.log('<= Articles.vue/saveNewList')
        },
        goToSpesa(id) {
            //TODO - Vai alla pagina della spesa cliccata
        }
    },
    computed: {
    },
})
</script>

<template>
    <div class="flex flex-row justify-start items-start">
        <ul class="flex flex-row justify-start items-start">
            <li v-for="spesa in spesaList"
                class="flex flex-col justify-between rounded border-2 border-black m-2 w-auto">
                <div class="flex flex-row justify-between rounded border-black" :class="{ 'border-b': spesa.toShow }">
                    <button class="mr-2 ml-2" @click="goToSpesa(id)">{{ spesa.name }}</button>
                    <button class="mr-2 ml-2 transition-transform" :class="{ '-rotate-90': !spesa.toShow }"
                        @click="spesa.toShow = !spesa.toShow">V</button>
                </div>
                <ul v-if="spesa.toShow" class="overflow-hidden overflow-y-scroll h-32 scrollbar">
                    <li v-for="article in spesa.articles" class="ml-6 mr-4">
                        <label>{{ article.name }}</label>
                    </li>
                </ul>
            </li>
        </ul>
    </div>
</template>

<style>
.scrollbar::-webkit-scrollbar {
    width: 10px;
    height: 10px;
}

.scrollbar::-webkit-scrollbar-track {
    border-radius: 100vh;
    background: #8a94a6;
}

.scrollbar::-webkit-scrollbar-thumb {
    background: #e0cbcb;
    border-radius: 100vh;
    border: 3px solid #f6f7ed;
}

.scrollbar::-webkit-scrollbar-thumb:hover {
    background: #c0a0b9;
}
</style>
