<script>
  export default {
    
  }
</script>


<template>
  <div class="youtube">
    <div class="container-xxl">
      <div class="row row-cols-2 ">
        <div class="col video">
          <img src="../../assets/img/home-business-video-poster-670x450.jpg" alt="poster" >
          <img src="../../assets/img/maxcoach-shape-07-100x100.png" alt="" class="bg">
          <div class="logo">
            <img src="../../assets/img/icon-youtube-play.png" alt="logo" >
          </div>
        </div>
        
        <div class="col my-col col-4 ">

          <h2 class="descr py-4 mb-5 text-white ">
              <strong>To Thrive In Business Today, You'II Need a Good Plan</strong>
          </h2>

          <!-- accordion -->
          <div class="accordion" id="accordionExample">
            <!-- 1 -->
            <div class="accordion-item">
              <h2 class="accordion-header">
                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                  <h6>How can we help?</h6>
                </button>
              </h2>
              <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                  <p>
                    How many courses you've been on, using however many techiques and methods. unless you've come to realize the value of mindeset, then you've yet to understand how success comes.
                  </p>
                  <p>
                    Whit everyone else's mindset involved impacting too. Hence why business coaching is so crucial for success.
                  </p>
                </div>
              </div>
            </div>
            <!-- /1 -->
            <!-- 2 -->
            <div class="accordion-item">
              <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                  <h6>Why would I need a business COACH?</h6>
                </button>
              </h2>
              <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                  <p>
                    How many courses you've been on, using however many techiques and methods. unless you've come to realize the value of mindeset, then you've yet to understand how success comes.
                  </p>
                  <p>
                    Whit everyone else's mindset involved impacting too. Hence why business coaching is so crucial for success.
                  </p>
                </div>
              </div>
            </div>
            <!-- /2 -->
            <!-- 3 -->
            <div class="accordion-item">
              <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                  <h6>What is one-on-one coaching?</h6>
                </button>
              </h2>
              <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                  <p>
                    How many courses you've been on, using however many techiques and methods. unless you've come to realize the value of mindeset, then you've yet to understand how success comes.
                  </p>
                  <p>
                    Whit everyone else's mindset involved impacting too. Hence why business coaching is so crucial for success.
                  </p>
                </div>
              </div>
            </div>
            <!-- /3 -->

          </div>
          <!-- <div class="testi  w-100">

            <h2 class="descr py-4 mb-5 text-white ">
              <strong>To Thrive In Business Today, You'II Need a Good Plan</strong>
            </h2>
            <div class="circle">
              <i class="fa-solid fa-caret-up"></i>
            </div>
            <h5 class="mt-5">How can we help?</h5>


          </div> -->
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
  // padding-top: 150px;

  background-image: url('../../assets/img/background-map-dots-top-right-transparent.png');
  background-size: 600px;
  background-repeat: no-repeat;
  background-position: 650px;
  height: 620px;
}

.video {
  position: relative;
  padding-top: 150px;
  
  img {
    height: 350px;
    width: 530px;
    margin-left: 40px;
 
  }

  .bg {
    width: 150px;
    height: 150px;
    position: absolute;
    bottom: -110px;
    left: -85px;

  }

  .logo {
    position: absolute;
    top: 300px;
    left: 360px;
    transform: translate(-50% - 50%);

    img {
      width: 90px;
      height: 60px;
    }
  }

// colonna di dx
  .my-col {
  //  padding-bottom: 50px;
   margin-top: 150px !important;
  }

  .circle {
    border: 3px solid $color-verde;
    .fa-caret-up {
      background-color: $color-verde;
    }
  }

}

</style>