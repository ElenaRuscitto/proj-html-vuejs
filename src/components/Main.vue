<script>
import {store} from '../data/store';
import Pioneers from './partials/Pioneers.vue';
import CarouselPrimo from './partials/CarouselPrimo.vue'
import Explore from './partials/Explore.vue';
import Youtube from './partials/Youtube.vue'
import Newsletters from './partials/Newsletters.vue';



export default {

  components: {
     Pioneers,
     CarouselPrimo,
     Explore,
     Youtube,
     Newsletters
   },
  
    data(){
      return {
        store,
      }
    }
  }
</script>


<template>
  <div>
    <Pioneers />
    <CarouselPrimo />
    <Explore />
    <Youtube />
    <Newsletters />
    
  </div>
  
</template>


<style lang="scss" scoped>
@use '../assets/scss/partials/general' as *;
@use '../assets/scss/partials/variables' as *;

</style>