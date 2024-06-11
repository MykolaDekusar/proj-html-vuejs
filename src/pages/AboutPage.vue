<!-- JAVASCRIPT -->
<script>
// import:
// import nomeImport from 'nomeImport';

export default {
   nome: 'AboutPage',
   props: {

   },
   data(){
      return{

      }
   },
   components: {

   }
}

</script>


<!-- HTML -->
<template>
  <div class="banner">
      <div class="container">
         <div class="content">
            <h1 class="title">Contact</h1>
            <span><a href="/">Home</a><i class="fa-solid fa-arrow-right"></i><a href="">Contact</a></span>
         </div>
      </div>
  </div>

</template>


<!-- STYLE -->
<style lang="scss" scoped>
// import
@use '../assets/scss/partials/variables' as *;
* {
   color: white;
}
.banner {
   padding: 350px 0 150px;
   background-image: url(/public/img/background/breadcump-banner.png);
   position: relative;
}

.banner::before{
  content:"";
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background: rgba(26, 25, 53, 0.6);
}

.title {
   text-transform: uppercase;
   font-size: 48px;
}

</style>
