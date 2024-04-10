
<script>
import {store} from '../../data/store';

  export default {
    props: {
      explore: Array,
      nullo: Array,
      information: Array,
    },
    data(){
    
      return {
        store
        
      }
    }
  }
</script>


<template>
  <div class="col d-flex justify-content-evenly">
    <div class="explore">
      <h6 class="px-2">Explore</h6>
        <ul>
          <li  
          v-for="(element, index) in explore"
        :key="index"
        class="py-1">
            <a href="">{{ element }}</a>
          </li>
        </ul>
    
    </div>

    <div class="mt-4">
      <ul>
        <li  
        v-for="(element, index) in nullo"
      :key="index"
      class="py-1">
          <a href="">{{ element }}</a>
        </li>
      </ul>

    </div>

    <div class="div">
      <h6>Information</h6>
      <ul>
        <li  
        v-for="(element, index) in information"
      :key="index"
      class="py-1">
          <a href="">{{ element }}</a>
        </li>
      </ul>
    </div>

  </div>
</template>


<style lang="scss" scoped>
@use '../../assets/scss/partials/general' as *;
@use '../../assets/scss/partials/variables' as *;

ul {
      list-style: none;
      padding-left: 7px;
      padding-top: 11px;
      a {
       text-decoration: none;
       color: $color-grigioChiaro;
       padding-top: 10px;
       font-size: 13px;
      }
    }
</style>