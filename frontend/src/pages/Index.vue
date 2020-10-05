<template>
  <q-page>
    <div class="row justify-between">
      <div class="card"></div>
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'PageIndex',
  data () {
    return {
      availableEvents: []
    }
  },
  mounted() {
    this.$api.getEvents().then(data => {
      this.availableEvents = data
    })
  }
}
</script>

<style lang="scss" scoped>
</style>
