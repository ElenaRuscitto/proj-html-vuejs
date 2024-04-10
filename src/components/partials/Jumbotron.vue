
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
        <h2 class="py-2"><strong>BUILD TOUR OWN LIFE COACHING BUSINESS</strong></h2>
        <p class="py-2">Whole-Life Business Coaching for committed entrepreneurs</p>
        <button class="btn my-btn btn-success "><strong>Get started today</strong></button>

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
  background-image: url('../../assets/img/home-business-hero-global-image.png');
    background-size: contain;
    background-repeat: no-repeat;
    background-position: 750px;
  
  .my-btn {
    padding: 12px 8%;
    &:hover {
    background-color: $color-indaco-hover;
  }
  }

  .testi {
    margin-bottom: 120px;
  }
 

    .immagine{
    margin-left: 50px;

    img {
      margin-top: 20px;
      width: 480px;
      margin-left: 150px;
    }
       
  }
}


</style>