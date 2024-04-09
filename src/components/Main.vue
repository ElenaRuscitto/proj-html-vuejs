<script>
import {store} from '../data/store';
import Pioneers from './partials/Pioneers.vue';

export default {

  components: {
     Pioneers
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
    
  </div>
  
</template>


<style lang="scss" scoped>
@use '../assets/scss/partials/general' as *;
@use '../assets/scss/partials/variables' as *;

</style>