import CONSTANTS from '@/constants'
import firestore from '@/firebase/firestore'
import { MEMO_SET } from './mutation-types'

const memosRef = firestore.collection('memos')

export default {
    namespaced: true,
    unsubscribe: null,
    state () {
        return {
            data: {}
        }
    },
    mutations: {
        [MEMO_SET] (state, payload) {
            state.data = payload
        }
    },
    getters: {
        data (state) {
            return state.data
        }
    },
    actions: {
        clear ({ commit }) {
            commit(MEMO_SET, CONSTANTS.NEW_EMPTY_MEMO())
        },
        startListener ({ commit }, payload) {
            console.log('start Listener')
            if (this.unsubscribe) {
                console.warn('listener is running.', this.unsubscribe)
                this.unsubscribe()
                this.unsubscribe = null
            }
            this.unsubscribe = memosRef.doc(payload.id)
            .onSnapshot(docSnapshot => {
                let payload = null
                if (docSnapshot.exists) {
                    payload = {
                        id: docSnapshot.id,
                        title: docSnapshot.data().title,
                        description: docSnapshot.data().description,
                        platforms: docSnapshot.data().platforms,
                        million: docSnapshot.data().million,
                        releasedAt: new Date(docSnapshot.data().releasedAt.seconds * 1000)
                    }
                }
                commit(MEMO_SET, payload)
            })
        },
        
    }
}