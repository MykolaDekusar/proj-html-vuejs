<script>
import LiveStreamingCarousel from "./LiveStreamingCarousel.vue";
export default {
  name: "LiveStreaming",
  data() {
    return {
      streamingImages: [1, 2],
      gameTitles: ["Call of Duty", "Assassin's Creed"],
    };
  },
  components: {
    LiveStreamingCarousel,
  },
};
</script>

<template>
  <div class="container d-flex align-baseline">
    <div class="col-6 now-live">
      <img src="/img/live-streaming/1.png" alt="" />
      <div class="play">
        <a href=""><i class="fas fa-play"></i></a>
      </div>
    </div>
    <div class="col-6">
      <h3>Live Streaming</h3>
      <h1>Checkout Our Live Streaming</h1>

      <!-- Carousel -->
      <LiveStreamingCarousel :titles="gameTitles" :images="streamingImages" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "../assets/scss/partials/variables" as *;
@use "../assets/scss/partials/extend" as *;
.container {
  position: relative;
  z-index: 10;
}
h1 {
  margin-top: 10px;
  color: #fff;
  font-size: 50px;
  font-weight: 800;
}
h3 {
  font-size: 18px;
  font-weight: 600;
  color: #00ac4d;
  position: relative;
  margin-bottom: 10px;
  text-transform: capitalize;
}
.now-live {
  position: relative;
}
.now-live img {
  height: 77%;
}

.play {
  position: absolute;
  @extend %play;
  top: 195px;
  left: 290px;
  a {
    .fa-play {
      color: $text-primary;
    }
  }
}
</style>
