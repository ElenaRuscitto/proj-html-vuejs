<script>
  export default {
    
  }
</script>


<template>
  <div class="youtube">
    <div class="container-xxl">
      <div class="row">
        <div class="col video">
          <img src="../../assets/img/home-business-video-poster-670x450.jpg" alt="poster" >
          <img src="../../assets/img/maxcoach-shape-07-100x100.png" alt="" class="bg">
          <div class="logo">
            <img src="../../assets/img/icon-youtube-play.png" alt="logo" >
          </div>
        </div>
        
        <div class="col">
          <div class="testi text-center w-100">

            <h2 class="descr py-4 mb-5">
              <strong>To Thrive In Business Today, You'II Need a Good Plan</strong>
            </h2>
            <div class="circle">
              <i class="fa-solid fa-caret-up"></i>
            </div>
            <h5 class="mt-5">How can we help?</h5>


          </div>
        </div>

      </div>
    </div>
  </div>
</template>



<style lang="scss" scoped>
@use '../../assets/scss/partials/general' as *;
@use '../../assets/scss/partials/variables' as *;

.youtube {
  background-color: $bgc-viola;
  padding-top: 150px;
  padding-bottom: 150px;
  background-image: url('../../assets/img/background-map-dots-top-right-transparent.png');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: 650px;
}

.video {
  position: relative;
  
  img {
    height: 450px;
    width: 670px;
  }

  .bg {
    width: 150px;
    height: 150px;


  }

  .logo {
    position: absolute;
    top: 190px;
    left: 400px;
    transform: translate(-50% - 50%);

    img {
      width: 90px;
      height: 60px;
    }
  }

  .circle {
    border: 3px solid $color-verde;
    .fa-caret-up {
      background-color: $color-verde;
    }
  }
}

</style>