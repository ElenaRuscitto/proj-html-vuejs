
<script>
// import {store} from '../data/store';

export default {
  
    // data(){
    //   return {
    //     store,
    //   }
    // }
  }
</script>

<template>
  <div class="jumbotron  ">

    <div class="my-container d-flex">
      <div class="testi">
      <h5>New Challenges, New Skills</h5>
      <h2 class="py-2">BUILD TOUR OWN LIFE COACHING BUSINESS</h2>
      <p class="py-2">Whole-Life Business Coaching for committed entrepreneurs</p>
      <button class="btn btn-success"><strong>Get started today</strong></button>

    </div>

    <div class="immagine">
      <img src="../../assets/img/home-business-hero-avatar.png" alt="home business">
    </div>
    
    </div>

   
  

  </div>
</template>


<style lang="scss" scoped>
@use '../../assets/scss/partials/general' as *;
@use '../../assets/scss/partials/variables' as *;


.jumbotron {
  background-color: $bgc-ghiaccio;
  width: 100%;
  

  .testi {
    width: 40%;
    align-self: center;
    h5 {
      color: $color-verde;
    }
    p {
      color: $color-grigio;
    }
    
    .btn-success {
      background-color: $color-verde;
    }
  }

    .immagine{
    background-image: url('../../assets/img/home-business-hero-global-image.png');
    background-size: contain;
    background-repeat: no-repeat;
    // width: 75%;
    img {
      margin-top: 20px;
    }
       
  }
}


</style>