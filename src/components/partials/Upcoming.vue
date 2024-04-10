<script>
import {store} from '../../data/store';

  export default {
    data(){
     
     return {
       store
       
     }
    }
  }
</script>

<template>
  <div class="er-container">

      <div class="testi text-center w-100">
        <h5 class="mt-5">Wanna transform your life?</h5>
        <h2 class=" py-2 mb-5">
          <strong>Upcoming Events</strong>
        </h2>
      </div>
    <div class="row row-cols-2 ">
      <div class="col"
         v-for="(element, index) in store.upcoming.card"
         :key="index">

         <!-- card -->
        <div class="card my-3">
          <div class="card-body">
            <div class="row">
              <div class="col col-9">
                <p class="card-text my-card-text">
                  <i class="fa-solid fa-location-dot"></i>
                  {{element.location}}
                </p>
                <h5 class="card-title"> {{element.title}} </h5>
              </div>
              <div class="col d-flex flex-column text-center ">
                <span class="numero"> {{element.numeber}}</span>
                <span> {{element.month}}</span>
                <a href="#" class="btn btn-success py-1 my-1"><strong>Get ticket</strong></a>
              </div>
            </div>
            
          </div>
        </div>
        <!-- /card -->
   
      </div>




    </div>

      <div class="testi-special my-testi my-3">
        <p class="">
          Excited about our event? 
          <strong>View all events
          <i class="fa-solid fa-arrow-right-long"></i>
          </strong>
        </p>
      </div>

      <div class="svg">
        <img src="../../assets/img/path1.svg" alt="" width="550px">
      </div>

   

  </div>
</template>



<style lang="scss" scoped>
@use '../../assets/scss/partials/general' as *;
@use '../../assets/scss/partials/variables' as *;

.svg {
  position: absolute;
  bottom:-3936px;
  right: 0;
 
 

}
.card {
  border: none !important;
}
.card-body {
  background-color: $bgc-grigino;

  &:hover {
    border-left: 3px solid $color-verde;
    background-color: #fff;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  }
  &:hover a {
    background-color: $color-indaco-hover;
  }
 }

 .my-card-text {
  color: $color-grigio;
  font-size: 14px;

 }

.numero {
  color: $color-verde;
  font-size: 30px;
}
a {
  background-color: $color-verde;
}

.testi-special {
  margin-left: 340px;
  & strong {
  color: $color-verde;
  border-bottom: 1px solid $color-grigioChiaro;
  }
}


</style>