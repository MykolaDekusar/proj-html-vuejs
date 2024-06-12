<script>
import { isCancel } from "axios";
import { Carousel, Navigation, Slide } from "vue3-carousel";
export default {
  name: "UpcomingCarousel",
  components: {
    Carousel,
    Slide,
    Navigation,
    isCancel,
  },
  data() {
    return {
      upcomingTeams: [1, 2, 3],
      teamNames: ["Ninja Warrior Gaming", "Witch Gaming", "SkullG Gaming"],
    };
  },
};
</script>

<template>
  <div class="container">
    <div class="col-6">
      <h3>Upcoming Match</h3>
      <h1>Keep Eyes & Manage upcoming Battle</h1>
    </div>

    <div class="carousel-container">
      <Carousel :items-to-show="3" :wrap-around="true">
        <Slide v-for="(image, index) in upcomingTeams" :key="index">
          <div class="carousel__item">
            <div class="card">
              <div class="box">
                <div class="position-img">
                  <img
                    :src="`/img/upcoming-teams/m${image}.png`"
                    :alt="`upcoming-teams-m${image}.png`"
                  />
                </div>
                <div class="thumb">
                  <img
                    :src="`/img/upcoming-teams/m${image}.png`"
                    :alt="`upcoming-teams-m${image}.png`"
                  />
                </div>
              </div>
              <div class="content">
                <h2 class="title">{{ teamNames[index] }}</h2>
                <div class="socials">
                  <a href=""><i class="fab fa-youtube"></i></a>
                  <a href=""><i class="fas fa-message"></i></a>
                </div>
                <h2 class="time">9.45</h2>
                <h6 class="date">1st November, 2022</h6>
                <div class="match-btn">
                  <a href="" class="btn">View More</a>
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
.card {
  position: relative;
  background: $bg-tertiary;
  padding: 30px 30px;
  border-radius: 10px;
  width: 400px;
}

.box {
  background: $bg-primary;
  border-radius: 20px;
  position: relative;
  z-index: 2;
  margin-bottom: 30px;
}

.position-img {
  position: absolute;
  top: 0;
  right: 0;
  opacity: 0.1;
}

.position-img img {
  height: 300px;
}

.thumb {
  width: 234px;
  height: 300px;
  margin: 0 auto;
  padding: 35px 15px;
  img {
    height: 100%;
    object-fit: contain;
  }
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
  color: $text-secondary;
  position: relative;
  margin-bottom: 10px;
  text-transform: capitalize;
}

.title {
  font-size: 32px;
  color: $text-primary;
  margin-bottom: 21px;
  font-weight: 800;
}

.socials {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 18px;
  a {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    line-height: 40px;
    background: #00ac4d;
    display: grid;
    place-items: center;
    color: $bg-primary;
    &:not(:last-child) {
      margin-right: 10px;
    }
  }
}

.time {
  font-size: 42px;
  color: $text-primary;
  margin-bottom: 1px;
  font-weight: 800;
}

.date {
  color: $text-primary;
}

.match-btn {
  margin-top: 25px;
  .btn {
    font-weight: 700;
    color: #1a1935;
    border-radius: 5px;
    line-height: 28px;
    padding: 12px 30px;
    background: #05cc7c;
    text-transform: capitalize;
    border: 1px solid;
    font-size: 16px;
    transition: all 0.3s;
    margin-bottom: 10px;
    &:hover {
      color: #00ac4d;
      cursor: pointer;
      background-color: transparent;
      border: 1px solid #00ac4d;
      transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
        border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    }
  }
}
.col-6 {
  padding-left: 30px;
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
  top: -380px;
  right: -15px;
  font-size: 18px;
  padding: 5px;
  background-color: $text-secondary;
  border-radius: 50%;
  color: #ffffff;
}
.carousel__prev {
  position: absolute;
  top: -380px;
  left: 1135px;
  font-size: 18px;
  padding: 5px;
  background-color: $text-primary;
  border-radius: 50%;
}

.game-info {
  color: $text-primary;
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
