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
      <h3>Trending Games</h3>
      <h1>Choose Who Is The Best In World!</h1>
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
                <img
                  :src="`/img/shop/s${image}.png`"
                  :alt="`shop-s${image}.png`"
                  class="img-fluid"
                />
              </div>
              <div class="item-info"></div>
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
.card {
  width: 330px;
  height: 400px;
  background-color: transparent;
  border: none;
  padding: 20px;
}
.img-box {
  background-color: aqua;

  border-radius: 10px;
  height: 240px;
  padding: 20px;
  object-fit: contain;
  display: grid;
  place-items: center;
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
  top: -210px;
  font-size: 18px;
  padding: 5px;
  background-color: $bg-green-primary;
  border-radius: 50%;
  color: #ffffff;
}
.carousel__prev {
  position: absolute;
  top: -210px;
  left: 1120px;
  font-size: 18px;
  padding: 5px;
  background-color: white;
  border-radius: 50%;
}

.item-info {
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
