
<script>
export default {
   nome: 'Google IFrame',
}
</script>
<!-- HTML -->
<template>
  <section  class="google-map">
    <iframe frameborder="0" scrolling="no" width="100%" height="500" border="0" src="https://maps.google.com/maps?width=100%25&amp;height=500&amp;hl=en&amp;q=69/6%20Broklyn%20Street,%20New%20York%20city,%20United%20States%20of%20America+()&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
  </section>
</template>
<style scoped lang="scss">
@use '../assets/scss/partials/variables' as *;
.google-map{
    background-color: $bg-btn-secondary;
    height: 500px;
}
</style>