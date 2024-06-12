<!-- JAVASCRIPT -->
<script>
// import:
// import nomeImport from 'nomeImport';
import BannerComponent from '../components/BannerComponent.vue';
export default {
   nome: 'AboutPage',
   components: {
    BannerComponent,
   },
   data(){
      return{
         cards:[
            {
               title:'Phone Number',
               data:'+880 130 309 8032',
               icon:'phone'
            },
            {
               title:'Email Address',
               data:'example@gmail.com',
               icon:'envelope'
            },
            {
               title:'Address',
               data:'69/6 Broklyn Street, New York city, United States of America',
               icon:'location-pin'
            },
         ]
      }
   }
}
</script>
<!-- HTML -->
<template>
  <BannerComponent :title="'Contact'" :link="'Home'" />
  <section class="contact">
   <div class="container">
      <div class="row">
         <div class="col-lg-4 ">
            <div class="contact-info">
            <h2>Get a Quote</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor magni in nulla voluptatibus perferendis commodi aperiam sit officia veritatis tempore voluptas
                consequatur accusamus reprehenderit voluptates, nam quas nesciunt repudiandae amet?
            </p>
            </div>
            <div v-for="data in cards" class="phone-number hover-me">
               <div class="quote-icon"><i :class="`fa-solid fa-${data.icon}`"></i></div>
               <div >
                  <h3>{{ data.title }}</h3>
                  <p>{{ data.data }}</p>
               </div>
            </div>
         </div>
         <div class="col-lg-8"></div>
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

// CONTACT STYLE
.contact {
   padding: 120px;
   background-color: $bg-btn-secondary;
   h2{
      font-weight: 800;
      font-size: 2.5rem;
   }
   p {
      margin-bottom: 1rem;
   }
}

.phone-number{
   display: flex;
   align-items: center;
   padding: 1rem;
   height: 125px;
   border: 1px solid $bg-green-primary;
   border-radius: 10px;
   transition: all 0.3s;
   margin-bottom: 2rem;
   svg{
      color: $bg-btn-primary;
      font-size: 2rem;
   }
   p {
      margin: 0;
   }
}

.address {
   .quote-icon{
      svg{
         width: 32px;
      }
   }
}

.quote-icon {
   padding: 1rem;
   background-color:$bg-tertiary;
   border-radius: 50%;
   text-align: center;
   margin-right: 15px;
}

.hover-me:hover{
   transition: all 0.3s;
   h3{
      color:$bg-green-primary;
   }
   border: 1px solid $bg-primary;
   background-color: $bg-tertiary;
   .quote-icon {
      background-color: $bg-btn-primary;
   }
   svg {
      color: $bg-tertiary;
   }
}

</style>
