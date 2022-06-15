<template>
    <div>
        <memo-list-card 
            v-for="(memo, index) in memos"
            v-bind:key="index"
            v-bind:memo="memo">
        </memo-list-card>
        <memo-list-form />
    
        <button class="btn-sm btn-dark m-1"
        v-for="(memo, index) in memos"
        v-bind:key="index"
        v-on:click="removeMemo(memo.id)">
        {{ memo.id }}
        </button>

        <button class="btn-sm btn-light m-1"
        v-for="(memo, index) in memos"
        v-bind:key="index"
        v-on:click="toggleMillion(memo.id)">
        {{ memo.id }}
        </button>
    </div>
</template>
<script>
import MemoListCard from '@/components/MemoListCard'
import MemoListForm from '@/components/MemoListForm'

export default {
    name: 'MemoList',
    components: {
        'memo-list-card': MemoListCard,
        'memo-list-form': MemoListForm
    },
    
    computed: {
        memos () {
            return this.$store.getters.memos
        }
    },

    methods: {
        removeMemo (_id) {
            this.$store.commit('removeMemo', {id: parseInt(_id, 10)})
        },
        toggleMillion (_id) {
            this.$store.commit('toggleMillion', {id: parseInt(_id, 10)})
        }
    },
}
</script>