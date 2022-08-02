import { defineStore } from 'pinia'

function getSpesaList() {
    const spesaList = [];

    return spesaList;
}

export const useSpesaListStore = defineStore('spesaList', {
    state: () => {
        return {
            _spesaList: getSpesaList(),
        }
    },
    actions: {
        saveNewList(name, articleList) {
            this._spesaList.push({
                id: this.getNewId(),
                name,
                articleList,
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