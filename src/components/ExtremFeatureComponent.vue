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
        <div class="container  pt-5 pb-5">
            <div class="row text">
                <div class="col-5">
                    <h3 class="pt-5">12 Year Experience</h3>
                    <h1>The Best Gaming Arena On The World!</h1>
                    <p>Nulla quis lorem ut libero malesuada feugiat. Vivamus magna justo, lacinia eget consectetur sed,
                        convallis at tellus. Cras ultricies ligula sed magna dictum porta.Praesent sapien massa,
                        convallis. </p>

                </div>

                <div class="col-7">
                    <div class="row g-3 grid">
                        <div class="col-5 square"
                        v-for="(feature, index) in features" :key="index">
                        <div class="thumb">
                            <img :src="`/img/features/${feature.image}`" 
                            :alt="feature.name">
                        </div>
                        <h4> {{ feature.name }}</h4>
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
    background-color: $bg-featur;
    background-image: url('../../public/img/vectorial/v1.png');
    background-repeat: no-repeat;
    background-position: center left;
    width: 100vw;
    
    .container {

        height: 100%;
        .text {
            height: 100%;
            display: flex;
            justify-content: space-around;
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
        margin: 30px;
        justify-content: flex-end;
        .square {
            text-align: center;
            padding: 35px 25px 50px;
            background-color: $bg-feature-square;
            border-radius: 20px;
            &:hover {
                background-color: $bg-feature-hover;
            }
            &:hover .thumb {
                transform: scale(1.08);
                }
            &:nth-child(1),
            &:nth-child(3) {
                margin-right: 15px;
            }
            &:nth-child(1) {
                background-color: $bg-feature-hover;
            }
        }

    }
    .thumb {
        width: 100px;
        height: 100px;
        border-radius: 50%;
        background: $bg-tertiary;
        line-height: 100px;
        text-align: center;
        margin: 0 auto 20px;
        transition: all .5s;
        

        img {
            width: 60px;
            height: 60px;
        }
    }
}
</style>
