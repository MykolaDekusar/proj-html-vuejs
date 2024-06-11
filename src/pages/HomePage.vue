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
      <div class="container">
        <div class="col-6 content">
          <h3>WELCOME TO RAXG</h3>
          <h1>YOU SPEAK OF JUSTICE</h1>
          <div class="buttons">
            <button class="read">
              Read More <i class="fas fa-arrow-right-long"></i>
            </button>
            <button class="play"><i class="fas fa-caret-right"></i></button>
          </div>
        </div>
        <div class="col-6 thumb">
          <img src="/img/banner/banner-img.png" alt="" />
        </div>
      </div>
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
  .container {
    display: flex;
    justify-items: center;
    align-items: center;
    height: 100%;
    margin: 0 auto;
    padding-top: 100px;

    .col-6 {
      z-index: 3;
    }
    .thumb img {
      max-width: 500px;
      transform: rotate(-2deg);
      border-radius: 18px;
      overflow: hidden;
    }
    .thumb {
      display: grid;
      place-items: center;
      z-index: 0;
    }
    .content {
      color: white;
      display: flex;
      flex-direction: column;

      h1 {
        font-size: 76px;
        color: #ffffff;
        text-transform: uppercase;
        font-weight: 700;
      }
      h3 {
        color: #00ac4d;
        text-transform: uppercase;
        font-weight: 600;
        display: block;
        font-size: 18px;
        margin-bottom: 15px;
      }
    }
  }
  .buttons {
    display: flex;
    margin-top: 30px;
  }
  .read {
    padding: 10px 25px;
    border: none;
    border-radius: 5px;
    margin-right: 20px;
  }

  .play {
    border: none;
    padding: 7px 20px;
    border-radius: 100%;
    font-size: 25px;
  }
}

.jumbo::before {
  content: "";
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background: rgba(26, 25, 53, 0.5);
  z-index: 1;
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
