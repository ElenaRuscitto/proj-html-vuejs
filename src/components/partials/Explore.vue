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
        <h2 class="descr py-4 mb-5">
          <strong>Explore How can I help you</strong>
        </h2>
      </div>

      <div class="row row-cols-4 ">

        <div class="col"
        v-for="(element, index) in store.explore.card"
        :key="index">
          <div class="my-card text-bg-dark h-100 my-card-img">
            <img :src="getImage(element.image)" class="card-img " alt="poster">
            <div class="card-img-overlay   ">
              <div class="pippo">
                <div class="scritte">
                  <p class="no-marg d-flex ">
                    <h5 class="card-title my-card-title"> {{ element.title }}</h5>
                    <span class="littleTitle"> {{ element.littleTitle }} </span>
                  </p>
                  <p class="card-text"><strong> {{ element.description }}</strong></p>
                </div>
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
        <p>Take the control of their life back and start doing thinghs to make their dream come true. <strong>View all courses
          <i class="fa-solid fa-arrow-right-long"></i>
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


 
  .pippo {
    box-shadow: inset -20px -100px 50px 0 #000000;
    opacity: 1;
    height: 100%;
    width: 100%;
    padding: 15px;
  }

  .scritte {
    position: absolute;
    left:15px;
    bottom: 15px;
  }

  .no-marg {
    margin-bottom: 5px;
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
  font-size: 13px;
   margin: 50px auto 80px ;
   max-width: 440px;

   strong {
    
    border-bottom: 1px solid $color-grigioChiaro;
   }
  }


</style>