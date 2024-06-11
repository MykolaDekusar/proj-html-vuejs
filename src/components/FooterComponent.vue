<script>
import Carousell from './Carousell.vue'
import { defineComponent } from 'vue'
import { Carousel, Slide, Navigation } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'
export default {
  name: "FooterComponent",
  components: {
    Carousell,
    Carousel,
    Slide,
    Navigation
  },
  data(){
    return{
      teamIcons:10,
    }
  },
};
</script>

<template>
   <section class="team-icons">
    <div class="container">
      <Carousel class="row-outer" :items-to-show="5" :wrap-around="true">
        <Slide class="logo-img" v-for="slide in 10" :key="slide">
          <div class="carousel__item"><img :src="'./img/team/'+ slide + '.png'" alt=""></div>
        </Slide>
      </Carousel>
        </div>
    
  </section>
  <!-- start footer -->
  <footer>
    <div class="footer-top container">
      <div class="row px-5 justify-content-center">
        <div class="col-xl-3 col-lg-6 col-md-6 col-sm-8">
          <img src="/img/logo/menulogo.png" alt="Logo">
          <p class="mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia ab sit illum sapiente repellendus maxime, praesentium nostrum fuga eligendi qui laudantium quas?
          </p>
          <form>
            <input type="text" placeholder="Enter your Email">
            <button type="submit">Subscribe</button>
          </form>
          <ul class="socials">
            <li><a href=""><i class="fa-brands fa-facebook"></i></a></li>
            <li><a href=""><i class="fa-brands fa-twitter"></i></a></li>
            <li><a href=""><i class="fa-brands fa-instagram"></i></a></li>
            <li><a href=""><i class="fa-brands fa-linkedin"></i></a></li>
          </ul>
        </div>
        <div class="col-xl-2 col-lg-6 col-md-6 col-sm-8">
          <h4 class="mt-3">Quick Links</h4>
          <ul class="quick-links">
            <li><a href="">Home</a></li>
            <li><a href="">Pages</a></li>
            <li><a href="">Tournament</a></li>
            <li><a href="">Shop</a></li>
            <li><a href="">Blog</a></li>
            <li><a href="">Contact</a></li>
          </ul>
        </div>
        <div class="col-xl-3 col-lg-6 col-md-6 col-sm-8">
          <h4 class="mt-3">Our Services</h4>
          <ul class="our-services">
            <li><a href="">About us</a></li>
            <li><a href="">Latest Turnament</a></li>
            <li><a href="">Upcoming Game</a></li>
            <li><a href="">Faqs</a></li>
            <li><a href="">Pricacy</a></li>
            <li><a href="">Terms & Conditions</a></li>
          </ul>
        </div>
        <div class="col-xl-3 col-lg-6 col-md-6 col-sm-8">
          <h4 class="mt-3">Contact Us</h4>
          <ul class="contact-us">
            <li><i class="fa-solid fa-location-pin"></i><a href="">69 Broklyn Street, New York city, United States of America</a></li>
            <li><i class="fa-solid fa-phone"></i><a href="">+880 222 333 2580 </a></li>
            <li><i class="fa-solid fa-envelope"></i><a href="">example@gmail.com </a></li>
            <li><i class="fa-solid fa-globe"></i><a href="">www.example.com </a></li>
          </ul>
        </div>
      </div>
    </div>
    <div class="footer-bottom">
      <p>Copyright RaxG | Designed by <a href="">Draeknes</a></p>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
@use '../assets/scss/partials/variables' as *;
* {
  font-size: 16px;
}

.team-icons {
  transform: translateY(115px);
  position: relative;
  z-index: 1;
}
.row-outer{
  background-color:$bg-tertiary;
  padding: 40px 0;
  border-radius: 10px;
}
.icon-container {
  min-width: 200px;
  margin-right: 10px;
}
.logo-img{
  width: 120px;
  margin: 0 auto;
}
.logo-img img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}
// footer setting
footer {
  background-image: url(/img/background/footer-bg.png);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  overflow: hidden;
  color: white;
  position: relative;
    .footer-top{
      padding: 210px 0 100px;
      height: 100%;
      position: relative;
      p{
        padding-right: 2rem;
      }
    }
    form {
    margin: 25px 0;
    display: flex;
    input{
      outline: none;
      border: none;
      height: 45px;
      padding: 2px 15px;
      width: 175px;
      border-top-left-radius: 8px;
      border-bottom-left-radius: 8px;
      color: white;
      background-color: $bg-btn-secondary;
      }
      button{
        height: 45px;
        border: none;
        padding: 5px 10px;
        border-top-right-radius: 8px;
        border-bottom-right-radius: 8px;
        cursor: pointer;
        background: $bg-green-primary;
      }
    }
    .socials li {
    width: 40px;  
    height: 40px;
    text-align: center;
    line-height: 40px;
    margin-right: 10px;
    background-color: $bg-socials;
    border-radius: 50%;
    }
    svg{
    filter: brightness(0) invert(1) ;
    } 
}

footer::before {
  content:"";
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background: rgba(26, 25, 53, 0.7);
}

ul {
  display: flex;
  padding: 0;
}

h4{
  margin-bottom: 30px;
  font-size: 24px;
  font-weight: 700;
}

.quick-links,
.our-services,
.contact-us {
  flex-direction: column;
  li{
    margin-bottom: 15px;
  }
}

.contact-us {
  font-weight: 700;
  li{
    display: flex;
    align-items: center;
    svg{
      filter: brightness(0) saturate(100%) invert(43%) sepia(67%) saturate(2573%) hue-rotate(121deg) brightness(93%) contrast(102%);
      height: 25px;
      margin-right: 10px;
    }
  }
}

a {
  text-decoration: none;
  color: white;
}

.footer-bottom{
  position: relative;
  background-color: $bg-tertiary;
  padding: 20px 5px;
  text-align: center;
  p{
    margin: 0;
  }
  a{
    color: $bg-btn-primary;
  }
}
</style>