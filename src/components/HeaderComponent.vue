<script>
import ModaleComponent from './ModaleComponent.vue';
import CartComponent from './CartComponent.vue';

export default {
  name: "HeaderComponent",
  components: {
    ModaleComponent,
    CartComponent,
  },
    data(){
      return {
        currentModale: null,
        cartModale: false,
        logo: '/img/logo/menulogo.png',
        menus: [
          {
            name: 'home',
            url: '/',
            subMenu: [
              {
                name: 'home uno',
                url: '/home1',
              },
              {
                name: 'home due',
                url: '/home2',
              },
              {
                name: 'home tre',
                url: '/home2',
              },
              {
                name: 'home quattro',
                url: '/home2',
              },
            ]
          },
          {
            name: 'pagine',
            url: '/pagine',
            subMenu: [
              {
                name: 'pagine uno',
                url: '/pagine1',
              },
              {
                name: 'pagine due',
                url: '/pagine2',
              },
              {
                name: 'pagine tre',
                url: '/pagine2',
              },
            ]
          },
          {
            name: 'torneo',
            url: '/torneo',
          },
          {
            name: 'negozio',
            url: '/negozio',
            subMenu: [
              {
                name: 'negozio uno',
                url: '/negozio1',
              },
              {
                name: 'negozio due',
                url: '/negozio2',
              },
              {
                name: 'negozio tre',
                url: '/negozio2',
              },
            ]
          },
          {
            name: 'blog',
            url: '/blog',
            subMenu: [
              {
                name: 'blog uno',
                url: '/blog1',
              },
              {
                name: 'blog due',
                url: '/blog2',
              },
            ]
          },
          {
            name: 'about',
            url: '/about',
          },
          {
            name: 'contact',
            url: '/contact',
          },
        ],
        carts: [
          {
            name: 'Sony PS5 White',
            price: 254,
            image: './img/shop/s1.png'
          },
          {
            name: 'A4 Tec Mouse',
            price: 121,
            image: './img/shop/s2.png'
          },
          {
            name: 'Gear VR Led',
            price: 514,
            image: './img/shop/s3.png'
          },
        ]
      }
    },
    methods: {
      modaleOn(subMenu) {
        this.currentModale = subMenu;
      },
      modaleOff() {
        this.currentModale = null;
      },
      cartOn(){
        this.cartModale = true;
      },
      cartOff() {
        this.cartModale = false;
      }
    }
};
</script>

<template>
  <header>
    <div class="container">
      <!-- parte alta del menu -->
      <div class="top-header">
        <div class="row">
          <div class="col-6">
            <div class="top-left d-flex">
              <ul class="d-flex social">
                <li><a href=""><i class="fab fa-facebook"></i></a></li>
                <li><a href=""><i class="fab fa-twitter"></i></a></li>
                <li><a href=""><i class="fab fa-linkedin"></i></a></li>
                <li><a href=""><i class="fab fa-instagram"></i></a></li>
              </ul>
              <ul class="phone">
                <li>
                  <i class="fas fa-headphones-simple"></i>
                  <a href="#">+880 222 333 2580</a>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-6">
            <div class="top-right">
              <p>this is <a href="">RaxG.</a> A template for games, clans & esports</p>
              <button class="streaming">
                <i class="fas fa-message"></i>
                Live Streaming
              </button>
            </div>
          </div>
        </div>

      </div>
      <!-- /parte alta del menu -->
      <!-- parte bassa del menu -->
      <div class="bottom-header">
        <nav class="nav row">
          <div class="logo col-3">
            <a href="/">
              <img :src="logo" alt="">
            </a>
          </div>
          <div class="menu col-7">
            <ul>
              <li v-for="(menu, index) in menus" :key="index" @mouseenter="modaleOn(menu.subMenu)"
                @mouseleave="modaleOff()">
                <a :href="menu.url">{{ menu.name }}
                  <i v-show="menu.subMenu" class="fas fa-angle-down"></i>
                  <ModaleComponent v-if="currentModale === menu.subMenu" :subMenu="menu.subMenu" />
                </a>
              </li>
            </ul>
            </div>
            <div class="search col-2">
              <ul>
                <li>
                  <a href=""><i class="fas fa-magnifying-glass"></i></a></li>
                <li @mouseenter="cartOn"
                    @mouseleave="cartOff">
                  <a href=""><i class="fas fa-cart-shopping"></i></a>
                  <span>{{ carts.length }}</span>
                  <CartComponent v-if="cartModale"
                  :products="carts"/>
                </li>
              </ul>
            </div>
            


          <!-- <div v-for="(menu, idx) in menus" :key="idx">
            <h3> {{ menu. }}</h3>

          </div> -->


        </nav>
      </div>


    </div>
  </header>
</template>

<style lang="scss" scoped>
// import:
@use '../assets/scss/partials/variables' as *;
@use '../assets/scss/partials/extend' as *;

*{margin: 0;padding: 0;}
a{text-decoration: none; }
li{list-style-type: none;}


header {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 100;
  .container {
    text-align: center;
    height: 180px;

  .top-header {
    background-color: $top-menu;
    padding: 8px 20px 10px;
    height: 40%;
    .top-left {
      justify-content: start;
      align-items: center;
      ul.social {
        margin-right: 20px;
        border-right: 1px solid $text-primary;
        li {
  
          a {
            display: inline-block;
            width: 40px;
            height: 40px;
            text-align: center;
            border-radius: 50%;
            background-color: $bg-darkblue;
            margin-right: 10px;         
            line-height: 40px;
            color: $text-primary;
            font-size: 16px;
            transition: all .3s;
            &:hover {
              background-color: $bg-green-primary;
            }
          }
        }
      }
      ul.phone {
        li{
          display: flex;
          color: $bg-green-primary;
          font-size: 20px;
          line-height: 20px;
          a {
            font-size: 20px;
            vertical-align: middle;
            margin-left: 15px;
            color: $text-primary;
          }
        }
      }
    }
    }
    .top-right {
      display: flex;
      align-items: center;
      justify-content: center;
      p {
        color: $text-primary;
        padding-right: 10px;
        border-right: 1px solid $text-primary;
        a {
          color: $bg-green-primary;
        }
        
      }
      .streaming {
        border: 1px solid $bg-green-primary;
        margin-left: 15px;
        @extend %btn;
        padding: 10px 20px;
        border-radius: 5px;
        font-weight: 700;
      }
    }

  }

  .bottom-header {
    padding: 8px 20px 10px;
    background-color: $bg-primary;
    height: 50%;
    display: flex;
  }
  .logo {
    padding-right: 20px;
  }
  nav {
    width: 100%;
    // justify-content: space-between;
    align-items: center;
    .menu {
      
      text-transform: uppercase;
      ul {
        display: block;
        li {
          display: inline-block;
          margin-right: 25px;
          
          a {
            position: relative;
            color: $text-primary;
            
            
          }
        }
    
      }
  
    }
    .search {
      display: flex;
      justify-content: end;
     

      ul {

        li {
          padding: 5px;
          display: inline-block;
          align-items: center;
          position: relative;
          a {
              display: inline-block;
              width: 50px;
              height: 50px;
              text-align: center;
              border-radius: 50%;
              margin-right: 10px;
              line-height: 50px;
              font-size: 20px;
              color: $bottom-menu;
              background-color: $text-primary;
              transition: all 0.3s;
          }
          span {
            width: 25px;
            height: 25px;
            font-size: 15px;
            line-height: 25px;
            text-align: center;
            display: inline-block;
            position: absolute;
            top: 0;
            right: 10px;
            background-color: $bg-number-cart;
            color: $text-primary;
            border-radius: 50%;
          }
        }
      }
    }
  }
}


</style>
