<template>
<div>
  <router-link
    v-bind:to="{name: 'MemoDetails', params:{ id: memo.id }}"
    v-bind:class="{ 'btn-sm btn-primary': !memo.million, 'btn-sm btn-success': memo.million}">
    {{ memo.id }}
  </router-link>
  <span class="card-title">{{ formatedTitle }}</span>

</div>
</template>
<script>
export default {
  computed: {
    formatedTitle () {
      if (!this.memo || !this.memo.title) {
        return ''
      }
      return this.getOmissionAndPlusMidpoint(this.memo.title, 16)
    }
  },
  methods: {
    getOmissionAndPlusMidpoint (str, limit) {
      if (str.length < limit) {
        return str
      }
      return str.substr(0, limit) + '...'
    }
  }
}
</script>