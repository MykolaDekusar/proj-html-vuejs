<script>
import { Carousel, Navigation, Slide } from "vue3-carousel";
export default {
  name: "ShopCarousel",

  components: {
    Carousel,
    Slide,
    Navigation,
  },
  data() {
    return {
      products: [1, 2, 3, 4],
      settings: {
        snapAlign: "left",
      },
    };
  },
};
</script>

<template>
  <div class="container">
    <div class="col-6">
      <h3>Gamer Shop</h3>
      <h1>Explore Our Shop</h1>
    </div>
    <div class="carousel-container">
      <Carousel
        :items-to-show="4"
        :autoplay="4000"
        v-bind="settings"
        :wrap-around="true"
      >
        <Slide v-for="(image, index) in products" :key="index">
          <div class="carousel__item">
            <div class="card">
              <div class="img-box">
                <div class="thumb">
                  <img
                    :src="`/img/shop/s${image}.png`"
                    :alt="`shop-s${image}.png`"
                    class="img-fluid"
                  />
                  <ul class="soc-team">
                    <li>
                      <a href="assets/images/shop/s3.png" class="bg-blue">
                        <i class="fa-solid fa-eye"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#0" class="bg-green">
                        <i class="fa-solid fa-cart-flatbed"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#0" class="bg-blue">
                        <i class="fa-solid fa-heart"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="item-info">
                <div class="content">
                  <div class="cont">
                    <div class="stars">
                      <i class="fas fa-star-half-stroke green"></i>
                      <i class="fas fa-star-half-stroke green"></i>
                      <i class="fas fa-star-half-stroke"></i>
                      <i class="fas fa-star-half-stroke"></i>
                    </div>
                    <h6 class="title">Asus Rog Strix A53</h6>
                    <div class="price">
                      <span class="green">$970.00 </span>
                      <span>$999.00</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Slide>
        <!-- Navigation Arrows Style and position -->
        <template #addons>
          <Navigation>
            <template #next>
              <button class="carousel__next">
                <i class="fas fa-arrow-right-long"></i>
              </button>
            </template>
            <template #prev>
              <button class="carousel__prev">
                <i class="fas fa-arrow-left-long"></i>
              </button>
            </template>
          </Navigation>
        </template>
      </Carousel>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "../assets/scss/partials/variables" as *;

.container {
  position: relative;
  z-index: 10;
}
.col-6 {
  text-align: center;
  h1 {
    margin-top: 10px;
    color: #fff;
    font-size: 50px;
    font-weight: 800;
  }
  h3 {
    font-size: 18px;
    font-weight: 800;
    color: #00ac4d;
    position: relative;
    margin-bottom: 10px;
  }
}

.soc-team {
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: 13px;
  left: 13px;
  opacity: 0;
  transition: all 0.3s;

  li {
    margin-right: 9px;
    a {
      background-color: #333287;
      width: 45px;
      height: 45px;
      line-height: 45px;
      color: #ffffff;
      display: block;
      width: 35px;
      height: 35px;
      line-height: 35px;
      border-radius: 50%;
      text-align: center;
      transition: all 0.3s;
      &:hover {
        background-color: #00ac4d;
      }
    }
  }
}
.card {
  width: 330px;
  height: 400px;
  background-color: transparent;
  border: none;
  padding: 20px;
}
.img-box {
  padding: 30px 45px;
  background: #1a1935;
  border-radius: 8px;
  &:hover .soc-team {
    opacity: 1;
  }
  .thumb {
    height: 200px;
    position: relative;
    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
}
.green {
  color: $bg-btn-primary;
}

.fa-star-half-stroke {
  margin-right: 5px;
}

.stars {
  margin-top: 14px;
  margin-bottom: 7px;
}
.content {
  text-align: left;
  color: #ffffff;
  font-weight: 800;
  .title {
    margin-bottom: 0;
    font-size: 24px;
    font-weight: 800;
  }
}
.carousel-container {
  max-width: 1250px;
  margin: 0 auto;
  position: relative;
}
.carousel__item {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding: 20px;
}
.carousel__next {
  position: absolute;
  top: -230px;
  font-size: 18px;
  padding: 5px;
  background-color: $bg-green-primary;
  border-radius: 50%;
  color: #ffffff;
}
.carousel__prev {
  position: absolute;
  top: -230px;
  left: 1120px;
  font-size: 18px;
  padding: 5px;
  background-color: white;
  border-radius: 50%;
}

.item-info {
  padding: 1px;
}
.logo {
  background-color: $bg-socials;
  border-radius: 100%;
  height: 74px;
  width: 100px;
  display: grid;
  place-items: center;
  margin-bottom: 5px;
}
.logo img {
  width: 40px;
}
.extra-info p {
  text-align: left;
  padding-left: 10px;
  font-size: 15px;
}
.extra-info h3 {
  text-align: left;
  padding-left: 9px;
  font-size: 19px;
  padding-top: 5px;
}
</style>
