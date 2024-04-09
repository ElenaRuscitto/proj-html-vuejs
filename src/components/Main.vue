<script>
import {store} from '../data/store';
import Pioneers from './partials/Pioneers.vue';
import Explore from './partials/Explore.vue';

export default {

  components: {
     Pioneers,
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
    <Explore />
    
  </div>
  
</template>


<style lang="scss" scoped>
@use '../assets/scss/partials/general' as *;
@use '../assets/scss/partials/variables' as *;

</style>