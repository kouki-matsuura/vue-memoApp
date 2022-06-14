<script>
export default {
    name: 'MemoDetails',
    data () {
        return {
            targetId: this.id
        }
    },
    //routeの動的セグメント
    props: ['id'],
    //pathの:idを直接書き換えた時の対応
    beforeRouteUpdate (to, from, next) {
        this.targetId = to.params.id
        next()
    },
    computed: {
        memo () {
            if (!this.targetId) {
                console.error('invalid id')
            }
            return this.$store.getters.memoById(parseInt(this.targetId, 10))
        }
    },
}
</script>