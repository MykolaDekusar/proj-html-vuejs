<script>
export default {
  name: "Features",
  data() {
    return {
      features: [
        {
          name: "Live Streaming",
          info: "Nulla porttitor accumsan tincidunt. Pellentesque in.",
          image: "feature1.png",
        },
        {
          name: "Great Tournament",
          info: "Nulla porttitor accumsan tincidunt. Pellentesque in.",
          image: "feature2.png",
        },
        {
          name: "Award Ceremony",
          info: "Nulla porttitor accumsan tincidunt. Pellentesque in.",
          image: "feature3.png",
        },
        {
          name: "Gaming News",
          info: "Nulla porttitor accumsan tincidunt. Pellentesque in.",
          image: "feature4.png",
        },
      ],
    };
  },
};
</script>

<template>
  <div class="container">
    <div class="section-title">
      <h5>Our Extreme Features</h5>
      <h1>The Best Gaming Arena On The World!</h1>
    </div>
    <div class="row g-4">
      <div
        class="card-container col-xl-3 col-lg-4 col-md-6"
        v-for="feat in features"
      >
        <div class="features-card">
          <div class="thumb">
            <img :src="`/img/features/${feat.image}`" :alt="feat.name" />
          </div>
          <div class="content">
            <h3>{{ feat.name }}</h3>
            <p>{{ feat.info }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container {
  padding: 120px 0;
}

.card-container {
  &:hover .features-card {
    background-color: #05cc7c;
  }
  &:hover .content h3 {
    color: #1a1935;
  }
  &:hover .content p {
    color: #1a1935;
  }
}

.section-title {
  margin-bottom: 40px;
  max-width: 556px;
  margin: 0 auto 50px;

  h1 {
    margin-top: 10px;
    color: #fff;
    font-size: 50px;
  }
}

.features-card {
  display: flex;
  flex-wrap: wrap;
  padding: 40px 20px;
  background: #333287;
  border: none;
  transition: all 0.3s;
  align-items: center;
  border-radius: 10px;
  .thumb {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background: #202046;
    line-height: 100px;
    text-align: center;
    margin: 0 auto 20px;
    img {
      width: 60px;
      height: 60px;
    }
  }
}

.content {
  width: 100%;
  padding-left: 0;
  text-align: center;
  h3 {
    margin-bottom: 9px;
    color: #ffffff;
    font-size: 22px;
    font-weight: 800;
  }
  p {
    color: #ffffff;
    font-size: 17px;
    margin-bottom: 0;
  }
}

.section-title {
  text-align: center;
  h5 {
    font-size: 18px;
    font-weight: 600;
    color: #00ac4d;
    position: relative;
    margin-bottom: 10px;
    text-transform: capitalize;
  }
  h1 {
    margin-top: 10px;
    color: #fff;
    font-size: 50px;
    font-weight: 800;
  }
}
</style>
