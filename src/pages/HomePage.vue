<script>
import { Carousel, Navigation, Slide } from "vue3-carousel";
export default {
  name: "HomePage",
  components: {
    Carousel,
    Slide,
    Navigation,
  },
  data() {
    return {
      currentIndex: 0,
      jumboImages: ["bg1.png", "bg2.png", "bg3.png"],
      jumboText: [
        "you speak of justice",
        "you speak of justice",
        "we fall. then we rise.",
      ],
      gameTeams: ["1.png", "5.png", "6.png", "3.png"],
      gameTitles: [
        "Assassin's Creed",
        "Call of Duty",
        "Tomb Raider",
        "Mortal Combat X",
      ],
      interval: null,
      portfolioImages: [1, 2, 3, 4],
      settings: {
        snapAlign: "left",
      },
    };
  },
  mounted() {
    this.startSlider();
  },
  beforeUnmount() {
    clearInterval(this.interval);
  },
  methods: {
    startSlider() {
      this.interval = setInterval(this.showNextImage, 4000);
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
          <h3>welcome to raxg</h3>
          <h1>{{ jumboText[currentIndex] }}</h1>
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

    <div class="trending-games">
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
            <Slide v-for="(slide, index) in portfolioImages" :key="index">
              <div class="carousel__item">
                <img
                  :src="`/img/portfolio/${slide}.png`"
                  :alt="`portfolio-${slide}.png`"
                  class="img-fluid"
                />
                <div class="new-label"><span>New</span></div>
                <div class="game-info">
                  <div class="logo">
                    <img
                      :src="`/img/team/${gameTeams[index % gameTeams.length]}`"
                      alt=""
                    />
                  </div>

                  <div class="extra-info">
                    <h3>{{ gameTitles[index % gameTitles.length] }}</h3>
                    <p>Donec sollicitudin malesuada.</p>
                  </div>
                </div>
              </div>
            </Slide>
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
    </div>
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
@use "../assets/scss/partials/variables" as *;

.jumbo {
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
    align-items: center;
    margin-top: 30px;
  }
  .read {
    padding: 15px 25px;
    border: none;
    border-radius: 5px;
    margin-right: 20px;
    background-color: $bg-green-primary;
    color: $bg-primary;
    font-weight: 900;
  }

  .play {
    border: none;
    padding: 7px 22px;
    border-radius: 100%;
    font-size: 30px;
    background-color: $bg-green-primary;
    color: $bg-primary;
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

.trending-games .col-6 h1 {
  margin-top: 10px;
  font-size: 55px;
  font-weight: 600;
  color: #ffffff;
}
.trending-games .col-6 h3 {
  font-size: 18px;
  font-weight: 600;
  color: #00ac4d;
  position: relative;
  margin-bottom: 10px;
  text-transform: capitalize;
}
.trending-games {
  background-color: $bg-primary;
  padding-top: 100px;
  padding-bottom: 80px;
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
