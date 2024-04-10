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
          <img src="../../assets/img/maxcoach-shape-07-150x150.png" alt="" class="bg">
          <div class="logo">
            <img src="../../assets/img/icon-youtube-play.png" alt="logo" >
          </div>
        </div>
        
        <div class="col my-col col-4 text-white">

          <h2 class="descr py-4 mb-5 text-white ">
              <strong>To Thrive In Business Today, You'II Need a Good Plan</strong>
          </h2>

    <!-- 1 -->
          <div class="faq d-flex justify-content-between">

            <div class="faq-left">  
              
              <div class="faq-right d-inline-flex  ">
                <i class="fa-solid fa-caret-down mx-2"></i>
                <i class="bonus fa-solid fa-caret-up"></i>
                <h5>How can we help?</h5>
              </div>
            

              <div class="bonus mx-3">
                <p>
                  How many courses you've been on, using however many techiques and methods. unless you've come to realize the value of mindeset, then you've yet to understand how success comes.
                </p>
                <p> 
                  Whit everyone else's mindset involved impacting too. Hence why business coaching is so crucial for success.
                </p>
              </div>
            </div>

         
          
          </div>
    <!-- 2 -->
          <div class="faq-special d-flex justify-content-between">

            <div class="faq-left">    
              
              <div class="faq-right d-inline-flex">
                <i class="fa-solid fa-caret-down mx-2"></i>
                <i class="bonus fa-solid fa-caret-up"></i>
                <h5>Why would I need a business COACH?</h5>
              </div>
              

              <div class="bonus mx-3">
                <p>
                  How many courses you've been on, using however many techiques and methods. unless you've come to realize the value of mindeset, then you've yet to understand how success comes.
                </p>
                <p>
                  Whit everyone else's mindset involved impacting too. Hence why business coaching is so crucial for success.
                </p>
              </div>
            </div>


          
          </div>
    <!-- 3 -->
          <div class="faq-special d-flex justify-content-between ">

            <div class="faq-left">      
              
              
              <div class="faq-right d-inline-flex">
                <div class="circle-chev">
                  <i class="fa-solid fa-caret-down mx-2"></i>
                  <i class="bonus fa-solid fa-caret-up"></i>
                </div>
                <h5>What is one-on-one coaching?</h5>
              </div>
             

              <span class="bonus mx-3">
                <p>
                  How many courses you've been on, using however many techiques and methods. unless you've come to realize the value of mindeset, then you've yet to understand how success comes.
                </p>
                <p>
                  Whit everyone else's mindset involved impacting too. Hence why business coaching is so crucial for success.
                </p>
              </span>
            </div>


          
          </div>     

        </div>

      </div>
    </div>
  </div>
</template>

<i class="fa-solid fa-caret-up"></i>

<style lang="scss" scoped>
@use '../../assets/scss/partials/general' as *;
@use '../../assets/scss/partials/variables' as *;

.youtube {
  background-color: $bgc-viola;
  // padding-top: 150px;

  background-image: url('../../assets/img/background-map-dots-top-right-transparent.png');
  background-size: 1200px;
  background-repeat: no-repeat;
  background-position: 650px;
  height: 660px;
  position: relative;

}

.video {
  // position: relative;
  padding-top: 150px;
  z-index: 1;
  
  img {
    height: 350px;
    width: 530px;
    margin-left: 40px;

    &.bg {
    width: 150px !important;
    height: 150px;
    position: absolute;
    bottom: 10px;
    left: 5px;

  }
 
  }



  .logo {
    position: absolute;
    top: 300px;
    left: 445px;
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



}

.faq,
.faq-special {
  border-bottom: 1px solid rgb(93, 90, 110);
  padding: 15px;
}
  // faq


  .bonus {
  display: none;
  p {
    font-size: 13px;
  }
}

.faq:hover .bonus,
.faq-special:hover .bonus {
  display: inline-block;
  margin-top: 20px;
  
  
}

.faq:hover h5,
.faq-special:hover h5 {
  color: $color-verde;
  margin-top: 15px;
  margin-left: 10px;
}

.fa-caret-up,
.fa-caret-down {
  font-size: 15px;
}


// .faq:hover .circle-chev,
// .faq-special:hover .circle-chev {
//   border: 2px solid $color-verde;
//   border-radius: 50%;
//   padding: 0 15px;
 
// }


.faq:hover .fa-caret-up,
.faq-special:hover .fa-caret-up {
  color: $color-verde;

}


.faq:hover .fa-caret-down,
.faq-special:hover .fa-caret-down {
  display: none;
  
}

</style>