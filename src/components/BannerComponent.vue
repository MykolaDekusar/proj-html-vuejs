<!-- JAVASCRIPT -->
<script>


export default {
   nome: 'BannerComponent',
   props: {
    title:String,
    link:String,
   },
}

</script>


<!-- HTML -->
<template>
  <section class="banner">
      <div class="container">
         <div class="content">
            <h1 class="title">{{ title }}</h1>
            <span><a href="/">{{ link }}</a><i class="fa-solid fa-arrow-right"></i><a href="">{{ title }}</a></span>
         </div>
      </div>
  </section>
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
   background-size: cover;
   background-repeat: no-repeat;
   background-position: center;
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

.content {
   position:relative;
   text-align: center;
   a{
      text-decoration: none;
   }
   svg{
      padding: 0 10px;
      color: $bg-btn-primary;
   }
}
.contact-info {
      margin-bottom: 2.5rem;
   }

.title {
   text-transform: uppercase;
   font-size: 48px;
   font-weight: 700;
}
</style>
