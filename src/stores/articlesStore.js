import { defineStore } from 'pinia'
import router from '../plugins/router'

function getArticles() {
    console.log("articlesStore.js/getArticles =>")

    const articles = [{
            id: 1,
            name: 'Zuchini',
            categories: [
                'food',
                'kitchen'
            ],
            image: 'Zucchina.jpg'
        },
        {
            id: 2,
            name: 'Tomato',
            categories: [
                'food',
                'kitchen'
            ],
            image: 'Pomodoro.jpg'
        },
        {
            id: 3,
            name: 'Moto',
            categories: [
                'vehicles'
            ],
            image: ''
        }
    ];

    console.log("articles", articles)

    console.log("<= articlesStore.js/getArticles")
    return articles;
}

function getCategories() {
    console.log("articlesStore.js/getCategories =>")

    const categoriesAux = getArticles().reduce((category, article) => {
        category.push(...article.categories)
        return [...new Set(category)]
    }, [])
    const categories = categoriesAux.map(x => x = { checked: false, value: x })

    console.log("categoriesAux", categoriesAux)
    console.log("categories", categories)

    console.log("<= articlesStore.js/getCategories")
    return categories
}

export const useArticlesStore = defineStore('articles', {
    state: () => {
        return {
            _articles: getArticles(),
            _categories: getCategories(),
        }
    },
    actions: {
        changeCategoryCheck(index) {
            this._categories[index].checked = !this._categories[index].checked
        },
        saveNewList(name) {

        }
    },
    getters: {
        articles() {
            console.log("articlesStore.js/articles =>")

            const selectedCategories = this._categories.filter(x => x.checked).map(x => x.value)
            const filteredArticles = selectedCategories.length == 0 ?
                this._articles :
                this._articles.filter(a => a.categories.some(c => selectedCategories.includes(c)))

            console.log('selectedCategories', selectedCategories)
            console.log('filteredArticles', filteredArticles)

            console.log("<= articlesStore.js/articles")

            return filteredArticles
        },
        categories() {
            return this._categories
        },
    },
})