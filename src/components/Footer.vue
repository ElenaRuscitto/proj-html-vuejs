<script>
import {store} from '../data/store';


export default {
   components: {
   
   },
    data(){
     
      return {
        store,
        
      }
    }
  }
</script>


<template>
  <div class="footer d-flex ">
    <div class="my-container">
      <div class="row py-5">
        <div class="col-4 footer-nav">
          <h6>Address</h6>
          <p 
          v-for="(element, index) in store.footerNavBar.address"
          :key="index"> {{ element }} </p>

          <span
          v-for="(element, index) in store.footerNavBar.icons"
          :key="index">
            <a :href="element.socialLink">
              <i :class="element.social"></i>
            </a>
        </span>
      </div>

      <div class="col d-flex justify-content-evenly">
        <div class="explore">
         <h6 class="px-2">Explore</h6>
          <ul>
            <li  
            v-for="(element, index) in store.footerNavBar.explore"
           :key="index"
           class="py-1">
              <a href="">{{ element }}</a>
            </li>
          </ul>
        
         </div>
        <div class="mt-4">
          <ul>
            <li  
            v-for="(element, index) in store.footerNavBar.nullo"
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
            v-for="(element, index) in store.footerNavBar.information"
           :key="index"
           class="py-1">
              <a href="">{{ element }}</a>
            </li>
          </ul>
        </div>
      </div>


      <!-- footer bottom -->
      <div class="footer-bottom pt-5 d-flex justify-content-center  align-items-center ">
        <div class="row">
          <div class="col d-flex ">
            <p>
              <i class="fa-regular fa-copyright"></i>
              2020 Maxcoach. All Rights Reserved
            </p>
          </div>

        </div>

        <div class="col">
        <div class="arrow">
          <i class="fa-solid fa-arrow-up"></i>
        </div>
      </div>
      </div>
      </div>
    </div>
  </div>
  
</template>


<style lang="scss" scoped>
@use '../assets/scss/partials/general' as *;
@use '../assets/scss/partials/variables' as *;

.footer {
  background-color: $bgc-indaco-footer;
  color: $color-white;
  height: 350px;
  
  .row{
    width: 1100px;
  }
  .footer-nav {
    p {
      color: $color-grigioChiaro;
      font-size: 10px;
    }
    a {
      color: $color-grigioChiaro;
      padding: 0 10px;
    }
  
  }

  ul {
      list-style: none;
      padding-left: 7px;
      padding-top: 11px;
      a {
       text-decoration: none;
       color: $color-grigioChiaro;
       padding-top: 10px;
      }
    }


  .footer-bottom {
    font-size: 10px;
    position: relative;
    .arrow {
    background-color: $color-verde;
    border-radius: 50%;
    width: 30px;
    height: 30px;
    font-weight: lighter;
    padding-top: 7px;
    padding-left: 11px;
    position: absolute;
    bottom: 0;
    right: 5px
  }
  }
}

</style>