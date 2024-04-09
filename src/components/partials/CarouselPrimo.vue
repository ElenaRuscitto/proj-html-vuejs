<script>
  export default {
    
  }
</script>


<template>
  <div class="carousel">
    <div class="er-container">

      <div class="testi text-center w-100">
        <h5 class="mt-5">Let's Dream Big Together</h5>
        <h2 class="descr py-4 mb-5">
          <strong>Explore How can I help you</strong>
        </h2>
      </div>

      <div class="row row-cols-3 d-flex ">
        <!-- card 1-->
        <div class="col">
            
            <div class="card" style="width: 20rem;">
              <img src="../../assets/img/home-business-service-slide-01-480x298.jpg" class="card-img-top" alt="...">
              <div class="card-body text-center ">
                <h5 class="card-title">Consultative Training</h5>
                <p class="card-text">With a coach addressing multiple issues that are off balance, affecting your business in various unconsidered ways.</p>
              </div>
              <ul class="list-group list-group-flush">

              </ul>
              <div class="card-body text-center ">
                <a href="#" class="card-link my-card">
                  <strong>Discover now</strong>
                  <i class="fa-solid fa-arrow-right"></i>
                </a>
                
              </div>
            </div>
           
        </div>
         <!-- /card 1-->

         <!-- card 2-->
        <div class="col">
            
            <div class="card" style="width: 20rem;">
              <img src="../../assets/img/home-business-service-slide-02-480x298.jpg" class="card-img-top" alt="...">
              <div class="card-body text-center ">
                <h5 class="card-title">Real Deal Coaching</h5>
                <p class="card-text">Brings an expceptionally powerful opportunity. Being able to accept, to work whith that opportunity.</p>
              </div>
              <ul class="list-group list-group-flush">

              </ul>
              <div class="card-body text-center ">
                <a href="#" class="card-link my-card">
                  <strong>Discover now</strong>
                  <i class="fa-solid fa-arrow-right"></i>
                </a>
                
              </div>
            </div>
           
        </div>
         <!-- /card 2-->

        <!-- card 3-->
        <div class="col">
            
            <div class="card" style="width: 20rem;">
              <img src="../../assets/img/home-business-service-slide-03-480x298.jpg" class="card-img-top" alt="...">
              <div class="card-body text-center ">
                <h5 class="card-title">Advisor Training Programg</h5>
                <p class="card-text">Getting high quality, entrepreneur mindset driven online business coaching, is what is needed.</p>
              </div>
              <ul class="list-group list-group-flush">

              </ul>
              <div class="card-body text-center ">
                <a href="#" class="card-link my-card">
                  <strong>Discover now</strong>
                  <i class="fa-solid fa-arrow-right"></i>
                </a>
                
              </div>
            </div>
           
        </div>
         <!-- /card 3-->

      </div>


      <!-- pallini -->
      <div class="scorrimento d-flex align-items-center justify-content-center ">
        <p class="paginator"></p>
        <p class="pagi"></p>
        <p class="pagi"></p>
      </div>

    </div>
  </div>
</template>



<style lang="scss" scoped>
@use '../../assets/scss/partials/general' as *;
@use '../../assets/scss/partials/variables' as *;


.carousel {
  background-color: $bgc-begie;
  margin: 100px auto;

  .row {
    padding-bottom: 100px;
  }

  .testi {
    padding-top: 50px;
  }

  .my-card {
    color: $color-verde;
    text-decoration: none;

    .fa-arrow-right {
      padding-left: 7px;
    }
  }

  .scorrimento {
    margin: 0 auto;
    padding-bottom: 80px;

    .paginator {
      border: 5px solid black;
      border-radius: 50%;
      margin: 0 5px;
    }

    .pagi {
      border: 5px solid rgb(114, 114, 114);
      border-radius: 50%;
      margin: 0 5px;
    }
  }
  


}



</style>