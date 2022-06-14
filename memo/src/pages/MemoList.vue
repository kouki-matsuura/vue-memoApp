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
    }
}
</script>