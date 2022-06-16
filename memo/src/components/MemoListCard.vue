<template>
<div class="card p-2 mb-2 float-lg-left" style="width: 18rem;" v-bind:class="{ 'border-primary': !memo.million, 'border-success': memo.million}">

  

</div>
</template>
<script>
export default {
  name: 'MemoListCard',
  data() {
    return {
      releasedAtFromNow: this.getReleasedAtFromNow()
    }
  },
  mounted() {
    window.setInterval(() => {
      this.releasedAtFromNow = this.getReleasedAtFromNow()
    }, 1000 * 60)
  },
  props: {
    'memo': {
      type: Object,
      required: true
    }
  },
  computed: {
    formatedTitle () {
      if (!this.memo || !this.memo.title) {
        return ''
      }
      return this.getOmissionAndPlusMidpoint(this.memo.title, 16)
    },
    formatedDescription () {
      if (!this.memo || !this.memo.description) {
        return ''
      }
      return this.getOmissionAndPlusMidpoint(this.memo.description, 60)
    }
  },
  watch: {
    'memo' (n, o) {
      console.log('watch memo');
    }
  },
  methods: {
    getReleasedAtFromNow () {
      if (!this.memo || !this.memo.releasedAt) {
        return ''
      }
      return this.$moment(this.memo.releasedAt).fromNow();
    },
    getOmissionAndPlusMidpoint (str, limit) {
      if (str.length < limit) {
        return str
      }
      return str.substr(0, limit) + '...'
    }
  },
}
</script>