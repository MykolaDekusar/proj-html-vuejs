
<script>
import BannerComponent from '../components/BannerComponent.vue';
import ContactComponent from '../components/ContactComponent.vue';
import GoogleMapsIFrame from '../components/GoogleMapsIFrame.vue';
export default {
   nome: 'AboutPage',
   components: {
    BannerComponent,
    ContactComponent,
    GoogleMapsIFrame,
   },
}
</script>
<!-- HTML -->
<template>
  <BannerComponent :title="'Contact'" :link="'Home'" />
  <ContactComponent />
  <GoogleMapsIFrame />
</template>

