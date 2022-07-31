import { defineStore } from 'pinia'
import router from '../plugins/router'

function getArticles() {
    console.log("getArticles =>")

    const articles = [{
            id: 1,
            name: 'Zuchini',
            categories: [
                'food',
                'kitchen'
            ],
            image: '../assets/Zucchina.jpg'
        },
        {
            id: 2,
            name: 'Tomato',
            categories: [
                'food',
                'kitchen'
            ],
            image: '../assets/Pomodoro.jpg'
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

    console.log("<= getArticles")
    return articles;
}

function getCategories() {
    console.log("getCategories =>")

    const categoriesAux = getArticles().reduce((category, article) => {
        category.push(...article.categories)
        return [...new Set(category)]
    }, [])
    const categories = categoriesAux.map(x => x = { checked: false, value: x })

    console.log("categoriesAux", categoriesAux)
    console.log("categories", categories)

    console.log("<= getCategories")
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
            console.log('changeCategoryCheck =>')

            this._categories[index].checked = !this._categories[index].checked

            console.log('index', index)
            console.log('categories[index]', this._categories[index])

            console.log('<= changeCategoryCheck')
        },
    },
    getters: {
        articles() {
            console.log("articles =>")

            const selectedCategories = this._categories.filter(x => x.checked).map(x => x.value)
            const filteredArticles = selectedCategories.length == 0 ?
                this._articles :
                this._articles.filter(a => a.categories.some(c => selectedCategories.includes(c)))

            console.log('selectedCategories', selectedCategories)
            console.log('filteredArticles', filteredArticles)

            console.log("<= articles")

            return filteredArticles
        },
        categories() {
            console.log('categories =>')
            console.log('categories', this._categories)
            console.log('<= categories')

            return this._categories
        },
    },
})