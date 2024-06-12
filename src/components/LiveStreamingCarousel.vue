<script>
import { Carousel, Navigation, Slide } from "vue3-carousel";
export default {
  name: "LiveStreamingCarousel",
  props: ["titles", "images"],
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
    <Carousel :items-to-show="2" v-bind="settings" :wrap-around="true">
      <Slide v-for="(image, index) in images" :key="index">
        <div class="carousel__item">
          <div class="img-container">
            <img
              :src="`/img/live-streaming/${image}.png`"
              :alt="`live-streaming-${image}.png`"
              class="img-fluid"
            />
          </div>
          <div class="game-info">
            <div class="extra-info">
              <h3>{{ titles[index % titles.length] }}</h3>
              <p>
                Vestibulum ac diam sit amet quam vehicula elementum sed sit amet
                dui.
              </p>
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
.img-container {
  width: 300px;
  height: 200px;
  overflow: hidden;
  border-radius: 20px;
}
.carousel__item img {
  width: 100%;
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
  top: -190px;
  font-size: 18px;
  padding: 5px;
  background-color: $text-secondary;
  border-radius: 50%;
  color: #ffffff;
}
.carousel__prev {
  position: absolute;
  top: -190px;
  left: 520px;
  font-size: 18px;
  padding: 5px;
  background-color: white;
  border-radius: 50%;
}

.game-info {
  padding-top: 18px;
  padding-left: 7px;
}

.extra-info p {
  color: #ffffff;
  font-size: 14px;
  text-align: left;
}
.extra-info h3 {
  text-align: left;
  color: #ffffff;
  font-size: 18px;
  font-weight: 800;
  margin-bottom: 6px;
}
</style>
