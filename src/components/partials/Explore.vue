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
  <div class="explore">
    <div class="container">

      <div class="testi text-center w-100">
          <h5 class="mt-5">Let's Dream Big Together</h5>
          <h4 class="descr py-4 mb-5">
            <strong>Explore How can I help you</strong>
          </h4>
        </div>

      <div class="row row-cols-4 ">

        <div class="col"
        v-for="(element, index) in store.explore.card"
        :key="index">
          <div class="my-card text-bg-dark h-100 my-card-img">
            <img :src="getImage(element.image)" class="card-img " alt="...">
            <div class="card-img-overlay d-flex flex-column justify-content-end ">
              <div class="pippo ">
                <div class=" d-flex">
                  <h5 class="card-title my-card-title"> {{ element.title }}</h5>
                  <span class="littleTitle"> {{ element.littleTitle }} </span>
                </div>
                  <p class="card-text"><strong> {{ element.description }}</strong></p>
              </div>
          
            </div>
          </div>
        </div>


        <!-- <div class="col">
          <div class="card text-bg-dark">
            <img src="..." class="card-img" alt="...">
            <div class="card-img-overlay">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              <p class="card-text"><small>Last updated 3 mins ago</small></p>
            </div>
          </div>
        </div>


        <div class="col">
          <div class="card text-bg-dark">
            <img src="..." class="card-img" alt="...">
            <div class="card-img-overlay">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              <p class="card-text"><small>Last updated 3 mins ago</small></p>
            </div>
          </div>
        </div>


        <div class="col">
          <div class="card text-bg-dark">
            <img src="..." class="card-img" alt="...">
            <div class="card-img-overlay">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              <p class="card-text"><small>Last updated 3 mins ago</small></p>
            </div>
          </div>
        </div> -->


      </div>


      <div class="testi my-testi text-center ">
        <p>Take the control of their life back and start doing thinghs to make their dream come tru. <strong>View all courses
          <i class="fa-solid fa-arrow-right"></i>
        </strong></p>
      </div>


    </div>
  </div>
</template>



<style lang="scss" scoped>
@use '../../assets/scss/partials/general' as *;
@use '../../assets/scss/partials/variables' as *;


.my-card {
  border: none;
  position: relative;
  // height: 480px;
  // width: 350px;

  .pippo {
    box-shadow: inset -20px -50px 60px 0 #000000;
    opacity: 1;
    position: absolute;
    left:0;
    bottom: 0;
    height: 100px;
    width: 100%;
    padding: 15px;
  }

  .my-card-title {
    color: $color-verde;
    font-size: 16px;

  }
  .littleTitle {
    color: $color-verde;
    font-weight: bold;
    font-size: 13px;
  
  }


}

.my-testi {
   margin: 50px auto 80px ;

   strong {
    
    border-bottom: 1px solid $color-grigioChiaro;
   }
  }


</style>