<template>
  <div class="memo-list container-fluent">
    <div class="row justify-content-start">
      <memo-list-card
        v-for="(memo, index) in memos"
        v-bind:key="index"
        v-bind:memo="memo"/>
      <memo-list-form/>
    </div>
    <div class="row">
      <button class="btn-sm btn-dark m-1"
        v-for="(memo, index) in memos"
        v-bind:key="index"
        v-on:click="remove(memo.id)">
        {{ memo.id }}
      </button>
    </div>
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
    data () {
        return {
        }
    },
    created () {
        console.log('created !!', this.routeInfo)
    },
    //computedは結果がキャッシュされる
    computed: {
        memos () {
            return this.$store.getters['memos/all']
        }
    },
    methods: {
       search () {
        console.log('メモを検索する')
       },
       remove (id) {
        this.$store.dispatch('memos/deleteMemo', { id })
       }
    },
}
</script>
<style scoped>
    .memo-list {
        text-align: center;
    }
    .row {
        margin-left: 0%;
    }
</style>