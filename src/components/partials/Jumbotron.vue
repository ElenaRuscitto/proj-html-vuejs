
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
      <h6>New Challenges, New Skills</h6>
      <h2>BUILD TOUR OWN LIFE COACHING BUSINESS</h2>
      <p>Whole-Life Business Coaching for committed entrepreneurs</p>
      <button class="btn btn-success">Get started today</button>

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

.my-container {
  max-width: 1000px;
  margin: 0 auto;
}
.jumbotron {
  background-color: $bgc-ghiaccio;
  width: 100%;

  .testi {
    width: 30%;
    h6 {
      color: $color-verde;
    }
    .btn {
      background-color: $color-verde;
    }
  }

  .immagine{
  background-image: url('../../assets/img/home-business-hero-global-image.png');
  background-size: contain;
  width: 70%;
}
}


</style>