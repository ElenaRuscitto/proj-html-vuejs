<script>
import {store} from '../data/store';
import Pioneers from './partials/Pioneers.vue';
import CarouselPrimo from './partials/CarouselPrimo.vue'
import Explore from './partials/Explore.vue';


export default {

  components: {
     Pioneers,
     CarouselPrimo,
     Explore
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
    
  </div>
  
</template>


<style lang="scss" scoped>
@use '../assets/scss/partials/general' as *;
@use '../assets/scss/partials/variables' as *;

</style>