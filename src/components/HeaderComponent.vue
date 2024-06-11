<script>
export default {
  name: "HeaderComponent",
};
</script>

<template>
  <header>
    <div class="container">
      <h2>Header</h2>
    </div>
  </header>
</template>

<style lang="scss" scoped>
header {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 100;
  .container {
    text-align: center;
    height: 180px;
    background-color: antiquewhite;
  }
}
</style>
