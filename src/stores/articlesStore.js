import { defineStore } from 'pinia'
import router from '../plugins/router'

export const useArticlesStore = defineStore('articles', {
    state: () => {
        // const articles = this.getArticles
        // const categories = this.getCategories
        // return {
        //     articles,
        //     categories
        // }
    },
    actions: {},
    getters: {
        getArticles() {
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
            ];

            return articles;
        },
        getCategories() {
            const articles = this.getArticles

            const categoriesAux = articles.reduce((category, article) => {
                category.push(...article.categories)
                return [...new Set(category)]
            }, [])
            const categories = categoriesAux.map(x => x = { checked: false, value: x })

            return categories
        }
    },
})