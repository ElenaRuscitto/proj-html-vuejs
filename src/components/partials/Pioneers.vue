<script>
import {store} from '../../data/store';

  export default {
    data(){
     
     return {
       store
       
     }
   },
   methods: {
      getImage(image){
        return new URL (`../../assets/img/${image}`, import.meta.url).href
      }
    }
    
  }
</script>


<template>
  <div class="er-container">
    <div class="testi text-center w-100">
      <h5 class="mt-5">Let's Dream Big Together</h5>
      <h4 class="descr py-4 w-75 mb-5">
        <strong>We are pioneers of the digital approach, using leading-edge technology to simplify procedures and apply executive coaching in the new age of digitalization.</strong>
      </h4>

      <div class="row row-cols-3 ">
        <div class="col mb-5 "
          v-for="(element, index) in store.pioneers.one"
          :key="index"> 
          <div class="d-flex text-start cardPioneers">
            <img 
            :src="getImage(element.image)" alt="icons">
            <div class="pippo">
              <h6> {{ element.title }} </h6>
              <p> {{ element.description }} </p>
            </div>

          </div>
        </div>



        <!-- <div class="col my-5">
          <div class="d-flex text-start cardPioneers">
            <img src="../../assets/img/icona1.svg" alt="icons1">
            <div>
              <h6>One to One</h6>
              <p>Getting the necessary clarity about the current state to help you impove your game.</p>
            </div>

          </div>
        </div>




        <div class="col my-5">
          <div class="d-flex text-start cardPioneers">
            <img src="../../assets/img/icona1.svg" alt="icons1">
            <div>
              <h6>One to One</h6>
              <p>Getting the necessary clarity about the current state to help you impove your game.</p>
            </div>

          </div>
        </div>




        <div class="col my-5">
          <div class="d-flex text-start cardPioneers">
            <img src="../../assets/img/icona1.svg" alt="icons1">
            <div>
              <h6>One to One</h6>
              <p>Getting the necessary clarity about the current state to help you impove your game.</p>
            </div>

          </div>
        </div>




        <div class="col my-5">
          <div class="d-flex text-start cardPioneers">
            <img src="../../assets/img/icona1.svg" alt="icons1">
            <div>
              <h6>One to One</h6>
              <p>Getting the necessary clarity about the current state to help you impove your game.</p>
            </div>

          </div>
        </div>




        <div class="col my-5">
          <div class="d-flex text-start cardPioneers">
            <img src="../../assets/img/icona1.svg" alt="icons1">
            <div>
              <h6>One to One</h6>
              <p>Getting the necessary clarity about the current state to help you impove your game.</p>
            </div>

          </div>
        </div> -->






      </div>
 
      <div class="">
        <button class="btn my-btn btn-light"><strong>Learn more</strong></button>
        <button class="btn btn-success mx-5 my-btn-2"><strong>Get started today</strong></button>
      </div>
    
    </div>
  </div>
</template>



<style lang="scss" scoped>
@use '../../assets/scss/partials/general' as *;
@use '../../assets/scss/partials/variables' as *;

.my-btn {
  color:$color-verde;
  border: 1px solid $color-grigioChiaro;
  &:hover {
    background-color: $color-indaco-hover;
    color: $color-white;
  }
}

.my-btn-2:hover {
  background-color: rgb(99, 211, 191);
}

.pippo {
  margin-left: 20px;
}

.descr {
  margin: 0 auto;
  line-height: 1.5;
}

p {
  font-size: 13px;
  color: $color-grigioChiaro;
}

</style>