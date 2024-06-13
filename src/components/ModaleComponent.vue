<!-- JAVASCRIPT -->
<script>
// import:

export default {
   name: 'ModaleComponent',
   props: {
      subMenu: Array,
   },
}

</script>


<!-- HTML -->
<template>

   <div class="modale" v-show="subMenu">
      <ul>
         <li v-for="(item, index) in subMenu" :key="index">
            <a :href="item.url">{{ item.name }}</a>
         </li>
      </ul>
   </div>

</template>


<!-- STYLE -->
<style lang="scss" scoped>
// import
@use '../assets/scss/partials/variables' as *;
@use '../assets/scss/partials/extend' as *;

*{margin: 0;padding: 0;}
a{text-decoration: none; }
li{list-style-type: none;}

.modale {
   position: absolute;
   top: 20px;
   left: 0;
   padding: 0 45px 0 25px;
   width: 250px;
   background-color: $top-menu;
   text-align: start;
   z-index: 150;
   li {
      padding: 10px 0;
      border-bottom: 1px solid $border-submenu;

      a {
         display: inline-block;
         color: $text-secondary;
         padding: 10px 0;
      }
   }
}

</style>
