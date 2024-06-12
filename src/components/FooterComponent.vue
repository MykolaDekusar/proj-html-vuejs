<script>
import { defineComponent } from 'vue'
import { Carousel, Slide} from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'
export default {
  name: "FooterComponent",
  components: {
    Carousel,
    Slide,
  },
  data(){
    return{
      settings:{
        snapAlign:'left',
      },
      teamIcons:10,
      footerInfo:{
        quickLinks:{
          title:'Quick Links',
          list:['Home', 'Pages', 'Tournament', 'Shop', 'Blog', 'Contact'],
        },
        ourServices:{
          title:'Our Services',
          list:['About Us', 'Latest Tournament', 'Upcoming Game', 'Faqs', 'Privacy', 'Terms & Conditions']
        },
      },
      
      socials:[{
        name:'facebook',
        link:'https://www.facebook.com/',
      },{
        name:'twitter',
        link:'https://www.twitter.com/',
      },{
        name:'instagram',
        link:'https://www.instagram.com/',
      },{
        name:'linkedin',
        link:'https://www.linkedin.com/',
      }],

      contacts:{
        title:'Contact Us',
        info:[
        {
        name:'69 Broklyn Street, New York city, United States of America',
        link:'/contact',
        icon:'location-pin'
      },{
        name:'+880 222 333 2580 ',
        link:'/contact',
        icon:'phone'
      },{
        name:'example@gmail.com ',
        link:'/contact',
        icon:'envelope'
      },{
        name:'www.example.com ',
        link:'/contact',
        icon:'globe'
      }
      ]},
    }
  },
};
</script>

<template>
   <section class="team-icons">
    <div class="container">
      <Carousel class="row-outer" v-bind="settings" :items-to-show="6"  :wrap-around="true">
        <Slide v-for="slide in teamIcons" :key="slide">
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
            <li v-for="icon in socials"><a target="_blank" :href="icon.link"><i :class="`fa-brands fa-${icon.name}`"></i></a></li>
          </ul>
        </div>
        <div class="col-xl-2 col-lg-6 col-md-6 col-sm-8">
          <h4 class="mt-3">{{footerInfo.quickLinks.title}}</h4>
          <ul class="quick-links">
            <li v-for="item in footerInfo.quickLinks.list"><a href="/">{{ item }}</a></li>
          </ul>
        </div>
        <div class="col-xl-3 col-lg-6 col-md-6 col-sm-8">
          <h4 class="mt-3">{{footerInfo.ourServices.title}}</h4>
          <ul class="our-services">
            <li v-for="item in footerInfo.ourServices.list"><a href="/about">{{ item }}</a></li>
          </ul>
        </div>
        <div class="col-xl-3 col-lg-6 col-md-6 col-sm-8">
          <h4 class="mt-3">{{ contacts.title }}</h4>
          <ul class="contact-us">
            <li v-for="item in contacts.info"><i :class="`fa-solid fa-${item.icon}`"></i><a :href="item.link">{{ item.name }}</a></li>
          </ul>
        </div>
      </div>
    </div>
    <div class="footer-bottom">
      <p>Copyright RaxG | Designed by <a href="" target="_blank" rel="noopener noreferrer">Team 3</a></p>
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
.contact-us li:first-child{
  svg {
    width: 35px;
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