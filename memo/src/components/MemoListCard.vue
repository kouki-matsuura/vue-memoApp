<memo-list-card
  v-for="(memo, index) in memos"     <!-- 1-1 -->
  v-bind:key="index"
  v-bind:memo="memo"/>