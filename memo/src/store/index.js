import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    memos: [
      { id: 1, title: '...', description: '...', platforms: ['...'], million: false, releasedAt: new Date ()},
      { id: 2, title: '...', description: '...', platforms: ['...'], million: false, releasedAt: new Date ()},
      { id: 3, title: '...', description: '...', platforms: ['...'], million: false, releasedAt: new Date ()},
      { id: 4, title: '...', description: '...', platforms: ['...'], million: false, releasedAt: new Date ()},
      { id: 5, title: '...', description: '...', platforms: ['...'], million: false, releasedAt: new Date ()},
      { id: 6, title: '...', description: '...', platforms: ['...'], million: false, releasedAt: new Date ()},
      { id: 7, title: '...', description: '...', platforms: ['...'], million: false, releasedAt: new Date ()},
      { id: 8, title: '...', description: '...', platforms: ['...'], million: false, releasedAt: new Date ()},
      { id: 9, title: '...', description: '...', platforms: ['...'], million: false, releasedAt: new Date ()},
      { id: 10, title: '...', description: '...', platforms: ['...'], million: false, releasedAt: new Date ()},
      { id: 11, title: '...', description: '...', platforms: ['...'], million: false, releasedAt: new Date ()},
      { id: 12, title: '...', description: '...', platforms: ['...'], million: false, releasedAt: new Date ()},
      { id: 13, title: '...', description: '...', platforms: ['...'], million: false, releasedAt: new Date ()},
      { id: 14, title: '...', description: '...', platforms: ['...'], million: false, releasedAt: new Date ()},
    ],
    nextId: 15
  },
  getters: {
    //全件返す
    memos (state) {
      return state.memos
    },
    //idで指定した１件を返す
    memoById (state) {
      return function (_id) {
        var memo = state.memos.find(memo => memo.id === _id)
        if (memo) {
          return memo
        }
        console.error('memo not found')
      }
    }
  },

  mutations: {
    //メモを１件追加
    addMemo (state, payload) {
      payload.id = state.nextId
      state.memos.push(payload)
      state.nextId++
    },
    //idで指定したメモを削除
    removeMemo (state, payload) {
      var index = state.memos.findIndex(memo => memo.id === payload.id)
      if (index !== -1) {
        state.memos.splice(index, 1)
      }
    },
    //idで指定したメモのミリオンを反転させる
    toggleMillion (state, payload) {
      var index = state.memos.findIndex(memo => memo.id === payload.id)
      if (index !== -1) {
        state.memos[index].million = !state.memos[index].million
      }
    },
    //idで指定したメモのプラットフォーム配列を操作する同じ要素であれば削除なければ追加
    togglePlatform (state, payload) {
      var index = state.memos.findIndex(memo => memo.id === payload.id)
      if (index !== -1) {
        var platforms = state.memos[index].platforms
        if (platforms.includes(payload.platform)) {
          platforms.splice(platforms.indexOf(payload.platform), 1)
        } else {
          platforms.push(payload.platform)
        }
      }
    }

   
  },
  actions: {
  },
  modules: {
  }
})
