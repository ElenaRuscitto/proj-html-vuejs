<script>
 import {store} from '../../data/store';

export default {

  props: {
    address: Array,
    icons: Array
  },
  data(){
   
   return {
     store
     
   }
 }

}
</script>


<template>
  <div class="col-4 footer-nav">
    <h6>Address</h6>
    <p 
    v-for="(element, index) in address"
    :key="index"> {{ element }} </p>

    <span
      v-for="(element, index) in icons"
      :key="index">
      <a :href="element.socialLink">
        <i :class="element.social"></i>
      </a>
    </span>
  </div>
</template>



<style lang="scss" scoped>
@use '../../assets/scss/partials/general' as *;
@use '../../assets/scss/partials/variables' as *;



    h6 {
      color: $color-white;
    }

    i {
      color: $color-grigioChiaro;
      font-size: 20px;
      padding-right: 30px;
    }
  
</style>