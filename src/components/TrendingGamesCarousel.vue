<script>
import { Carousel, Navigation, Slide } from "vue3-carousel";
export default {
  name: "TrendingGamesCarousel",
  props: ["teams", "titles", "images"],
  components: {
    Carousel,
    Slide,
    Navigation,
  },
  data() {
    return {
      settings: {
        snapAlign: "left",
      },
    };
  },
};
</script>

<template>
  <div class="carousel-container">
    <Carousel
      :items-to-show="4"
      :autoplay="4000"
      v-bind="settings"
      :wrap-around="true"
    >
      <Slide v-for="(image, index) in images" :key="index">
        <div class="carousel__item">
          <img
            :src="`/img/portfolio/${image}.png`"
            :alt="`portfolio-${image}.png`"
            class="img-fluid"
          />
          <div class="new-label"><span>New</span></div>
          <div class="game-info">
            <div class="logo">
              <img :src="`/img/team/${teams[index % teams.length]}`" alt="" />
            </div>

            <div class="extra-info">
              <h3>{{ titles[index % titles.length] }}</h3>
              <p>Donec sollicitudin malesuada.</p>
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
</template>

<style lang="scss" scoped>
@use "../assets/scss/partials/variables" as *;

.carousel-container {
  max-width: 1250px;
  margin: 0 auto;
  position: relative;
}
.carousel__item img {
  width: 290px;
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
  background-color: $text-secondary;
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

.game-info {
  color: #ffffff;
  position: sticky;
  bottom: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: $bg-cards;
  padding: 10px;
  max-width: 250px; // Ensure max width for the content
  height: 100px;
  padding-top: 18px;
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
.new-label {
  position: absolute;
  top: 20px;
  left: 20px;
  padding: 5px 10px;
  background-color: $bg-green-primary;
}
</style>
