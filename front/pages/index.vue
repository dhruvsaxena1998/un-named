<template>
  <div class="container">
    UNNAMED

    <vs-button :active="active" @click="active = !active" style="outline: none">
      Active
    </vs-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: false,
    }
  },
}
</script>

<style lang="scss" scoped>
.container {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: $xl-size;
}
</style>
