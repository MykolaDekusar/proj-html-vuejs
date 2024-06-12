
<script>
export default {
   nome: 'Google IFrame',
}
</script>
<!-- HTML -->
<template>
  <section  class="google-map">
    <div style="width: 100%"><iframe width="100%" height="500" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=500&amp;hl=en&amp;q=69/6%20Broklyn%20Street,%20New%20York%20city,%20United%20States%20of%20America+()&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe></div>
  </section>
</template>

<!-- STYLE -->
<style lang="scss" scoped>
.google-map{
   iframe{
      width: 100%;
      height: 500px;
   }
}
</style>
