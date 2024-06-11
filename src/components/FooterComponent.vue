<script>
export default {
  name: "FooterComponent",
  data(){
    return{
      teamIcons:10,
    }
  },
};
</script>

<template>
   <section>
    <div class="container">
      <div class="row-outer">
        <div v-for="number in teamIcons" class="icon-container">
          <div class="logo-img">
            <img :src="'./img/team/'+ number + '.png'" alt="">
          </div>
        </div>
      </div>
    </div>
  </section>
  <footer>
    <div class="footer-top">
      <div class="footer-row">
        <div class="col-25">
          <img src="../assets/" alt="">
        </div>
        <div class="col-25"></div>
        <div class="col-25"></div>
        <div class="col-25"></div>
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
@use '../assets/scss/partials/variables' as *;
.container {
  max-width: 1320px;
  background-color:$bg-tertiary;
  padding: 40px 0;
}
.row-outer{
  display: flex;
  overflow-x: scroll;
  overflow: hidden;
  justify-content: space-around;
}
.icon-container {
  min-width: 200px;
  margin-right: 10px;
}
.logo-img{
  width: 120px;
  height: 150px;
  margin: 0 auto;
}
img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}
// footer setting
footer {
  background-image: url(/img/background/footer-bg.png);
  background-size: cover;
  overflow: hidden;
}
</style>
