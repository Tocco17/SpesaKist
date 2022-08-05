import { defineStore } from 'pinia'

function getSpesaList() {
    const spesaList = [{
            id: 0,
            name: 'Coop',
            articles: [{
                    id: 0,
                    name: 'Zucchine',
                    needed: 3,
                    taken: 0,
                    check: false,
                },
                {
                    id: 1,
                    name: 'Pomodori',
                    needed: 2,
                    taken: 0,
                    check: false,
                },
                {
                    id: 1,
                    name: 'Pomodori',
                    needed: 2,
                    taken: 0,
                    check: false,
                },
                {
                    id: 1,
                    name: 'Pomodori',
                    needed: 2,
                    taken: 0,
                    check: false,
                },
                {
                    id: 1,
                    name: 'Pomodori',
                    needed: 2,
                    taken: 0,
                    check: false,
                },
                {
                    id: 1,
                    name: 'Pomodori',
                    needed: 2,
                    taken: 0,
                    check: false,
                },
            ]
        },
        {
            id: 1,
            name: 'Concessionaria',
            articles: [{
                    id: 2,
                    name: 'Moto',
                    needed: 1,
                    taken: 0,
                    check: false,
                },
                {
                    id: 3,
                    name: 'Casco',
                    needed: 1,
                    taken: 0,
                    check: false,
                }
            ]
        },
    ];

    return spesaList;
}

export const useSpesaListStore = defineStore('spesaList', {
    state: () => {
        return {
            _spesaList: getSpesaList(),
        }
    },
    actions: {
        saveNewList(name, articles) {
            this._spesaList.push({
                id: this.getNewId(),
                name,
                articles,
            })
        },
        getNewId() {
            return this._spesaList.reduce((maxId, list) => {
                return list.id > maxId ? list.id : maxId
            }, 0)
        },
        saveNewList(name) {

        },
    },
    getters: {
        spesaList() {
            return this._spesaList
        },
    },
})