<template>
    <div class="card mb-2 float-lg-left" style="width: 18rem;">
        <div class="card-header text-left">
            <input type="text" class="form-control" placeholder="title" v-model.trim="memo.title" />
        </div>
        <div class="card-body text-left">
            <textarea class="form-control" placeholder="description" v-model.trim="memo.description"></textarea>
        </div>
        <div class="card-footer text-right">
            <button class="btn-sm btn-secondary" type="button" v-on:click="addMemo">add</button>
        </div>
    </div>
</template>

<script>
    import CONSTANTS from '@/constants'

    export default {
        name: 'MemoListForm',
        data () {
            return {
                memo: this.emptyMemo()
            }
        },
        methods: {
            addMemo () {
                console.log("this.memo.title:"+ this.memo.title);
                console.log("memodiscripption:" + this.memo.description);
                if (this.memo.title==="" || this.memo.description === "") {
                    console.log("aaa");
                    return
                }
                console.log("bbb");
                this.memo.platforms = []
                this.memo.million = false
                this.memo.releasedAt = new Date()
                this.$store.dispatch('memos/addMemo', this.memo)
                this.memo = this.emptyMemo()
            },
            emptyMemo() {
                return CONSTANTS.NEW_EMPTY_MEMO()
            }
        },
    }
</script>