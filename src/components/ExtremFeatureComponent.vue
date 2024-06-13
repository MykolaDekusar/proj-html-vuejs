<!-- JAVASCRIPT -->
<script>


export default {
   nome: 'ExtremFeaturComponent',
   props: {

   },
   data(){
      return{
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

      }
   },
   components: {

   }
}

</script>


<!-- HTML -->
<template>
    <section>
        <div class="container">
            <div class="row text">
                <div class="col-6">
                    <h3 class="pt-5">12 Year Experience</h3>
                    <h1>The Best Gaming Arena On The World!</h1>
                    <p>Nulla quis lorem ut libero malesuada feugiat. Vivamus magna justo, lacinia eget consectetur sed,
                        convallis at tellus. Cras ultricies ligula sed magna dictum porta.Praesent sapien massa,
                        convallis. </p>

                </div>

                <div class="col-6">
                    <div class="row grid">
                        <div class="col-6 square"
                        v-for="(feature, index) in features" :key="index">
                        <div class="thum"></div>
                        <img :src="`/img/features/${feature.image}`" :alt="feature.name">
                        <h3> {{ feature.name }}</h3>
                        <p>{{ feature.info }}</p>
                        </div>
                        

                    </div>


                </div>
            </div>
        </div>
    </section>


</template>


<!-- STYLE -->
<style lang="scss" scoped>
// import
@use '../assets/scss/partials/variables' as *;
@use '../assets/scss/partials/extend' as *;

section {
    background-color: #191943;
    background-image: url('../../public/img/vectorial/v1.png');
    background-repeat: no-repeat;
    background-position: center left;
    width: 100vw;
    height: 100vh;
    .container {
        height: 100%;
        .text {
            height: 100%;
            display: flex;
            justify-content: left;
            align-items: center;
        }
    }
    h3 {
        font-size: 20px;
        font-weight: 600;
        color: $text-secondary;

    }
    h1 {
        color: $text-primary;
        font-size: 45px;
        font-weight: 900;
        text-align: start;
    }
    .grid {
        padding: 20px;
        .square {
            background-color: $bg-feature-square;
            border-radius: 20px;
            height: 200px;
            border: 1px solid red;
        }

    }
}


</style>
