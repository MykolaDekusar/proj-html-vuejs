<script>
export default {
  name: "Jumbotron",
  props: ["jumboImages", "text"],
  data() {
    return {
      currentIndex: 0,
    };
  },
  mounted() {
    this.startJumbo();
  },
  beforeUnmount() {
    clearInterval(this.interval);
  },
  methods: {
    startJumbo() {
      this.interval = setInterval(this.showNextImage, 4000);
    },
    showNextImage() {
      this.currentIndex = (this.currentIndex + 1) % this.jumboImages.length;
    },
  },
};
</script>

<template>
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
        <h1>{{ text[currentIndex] }}</h1>
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
</style>
