<script>
export default {
  name: "HomePage",
  data() {
    return {
      currentIndex: 0,
      jumboImages: ["bg1.png", "bg2.png", "bg3.png"],
      interval: null,
    };
  },
  mounted() {
    this.startSlider();
  },
  beforeDestroy() {
    clearInterval(this.interval);
  },
  methods: {
    startSlider() {
      this.interval = setInterval(this.showNextImage, 3000); // Change image every 3 seconds
    },
    showNextImage() {
      this.currentIndex = (this.currentIndex + 1) % this.jumboImages.length;
    },
  },
};
</script>

<template>
  <main>
    <div class="jumbo">
      <img
        v-for="(image, index) in jumboImages"
        :key="index"
        :src="`/img/background/${image}`"
        :class="{ active: index === currentIndex }"
        class="image"
        alt=""
      />
    </div>

    <div class="trending-games"><h2>Trending Games</h2></div>
    <div class="experience"><h2>12 Years Experience</h2></div>
    <div class="live"><h2>Live Streaming</h2></div>
    <div class="trending"><h2>Trending Battle</h2></div>
    <div class="upcoming"><h2>Upcoming Match</h2></div>
    <div class="shop"><h2>Gamers Shop</h2></div>
    <div class="team"><h2>Team Members</h2></div>
    <div class="features"><h2>Our Extreme Features</h2></div>
    <div class="news"><h2>Latest News</h2></div>
  </main>
</template>

<style lang="scss" scoped>
.jumbo {
  background-color: antiquewhite;
  text-align: center;
  position: relative;
  width: 100%;
  height: 900px;
  overflow: hidden;

  .image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    transition: opacity 1s;
  }

  .image.active {
    opacity: 1;
  }
}

.trending-games,
.experience,
.live,
.trending,
.upcoming,
.shop,
.team,
.features,
.news {
  height: 500px;
  text-align: center;
}

.trending-games,
.live,
.upcoming,
.team,
.news {
  background-color: rgb(56, 42, 243);
}

.experience,
.trending,
.shop,
.features {
  background-color: antiquewhite;
}
</style>
