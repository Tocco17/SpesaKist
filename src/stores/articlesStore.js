import { defineStore } from 'pinia'

function getArticles() {
    const articles = [{
            id: 1,
            name: 'Zuchini',
            categories: [
                'food',
                'kitchen'
            ],
            image: 'Zucchina.jpg',
            checked: false,
        },
        {
            id: 2,
            name: 'Tomato',
            categories: [
                'food',
                'kitchen'
            ],
            image: 'Pomodoro.jpg',
            checked: false,
        },
        {
            id: 3,
            name: 'Moto',
            categories: [
                'vehicles'
            ],
            image: '',
            checked: false,
        }
    ];

    return articles;
}

function getCategories() {
    let count = 0

    const categoriesAux = getArticles().reduce((category, article) => {
        category.push(...article.categories)
        return [...new Set(category)]
    }, [])

    const categories = categoriesAux.map(x => x = {
        checked: false,
        text: x,
        id: count++,
    })

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
        changeCategoryCheck(id) {
            const index = this._categories.indexOf(c => c.id === id)
            this._categories[index].checked = !this._categories[index].checked
        },
        changeArticleCheck(id) {
            const index = this._articles.indexOf(a => a.id === id)
            this._articles[index].checked = !this._articles[index].checked
        },
    },
    getters: {
        article(id) {
            if (!id) {
                console.error('Id not defined for the search of an article')
                return
            }

            return this._articles.find(a => a.id === id)
        },
        articles() {
            return this._articles
        },
        articlesFiltered() {
            const selectedCategories = this._categories.filter(x => x.checked).map(x => x.text)
            const filteredArticles = selectedCategories.length == 0 ?
                this._articles :
                this._articles.filter(a => a.categories.some(c => selectedCategories.includes(c)))
            return filteredArticles
        },
        articlesChecked() {
            return this._articles.filter(a => a.checked)
        },
        category(id) {
            if (!id) {
                console.error('Id not defined for the search of a category')
                return
            }

            return this._categories.find(c => c.id === id)
        },
        categories() {
            return this._categories
        },
    },
})