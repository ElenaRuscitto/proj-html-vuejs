<script>
  export default {
    
  }
</script>


<template>
   <div class="people py-5">

      <div class="my-container">
            <div class="testi text-center w-100">
                <h5 class="mt-5">People are praising Maxcoach</h5>
                <h2 class=" py-2 mb-5">
                  <strong>What make they love us?</strong>
                </h2>
            </div>

        <div class="row justify-content-between ">
          <!-- card 1 -->
          <div class="col">
            <div class="card my-card opacity" style="width: 29rem;">
              <div class="card-body m-3">
                <h6 class="card-title color">It's a choice of quality for people with special needs</h6>
                
                <p class="card-text">I'm a very strict so I require everything to be organized and neat. Then, I'll be able to make things right and shine. MaxCoach guys just got me.</p>
              
                <div class="name d-flex  ">
                  <img src="../../assets/img/testimonial-avata-03.jpg" alt="avatar 3" class="testimonial">
                  
                  <div class="testiTestimonial d-flex flex-column mx-3">
                    <p class=" d-inline color mt-3"><strong>FLORENCE THEMES</strong></p>
                    <span class="d-inline"> / Multimedia Admin</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- / card 1 -->
          
          <!-- card 2 -->
          <div class="col">
            <div class="card my-card" style="width: 29rem;">
              <div class="card-body  m-3">
                <h6 class="card-title color">High leavel of efficiency and scientific teaching methods</h6>
                
                <p class="card-text">I'm a free to learn at own pace, follow my own schedule and choose the subject I want to learn from the syllabus. Great study portal for people like me..</p>
              
                <div class="name d-flex  ">
                  <img src="../../assets/img/testimonial-avata-02.jpg" alt="avatar 2" class="testimonial">
                  
                  <div class="d-flex flex-column mx-3">
                    <p class=" d-inline color mt-3"><strong>MINA HOLLACE</strong></p>
                    <span class="d-inline"> / Freelancer</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- / card 2 -->

          <!-- card 3 -->
          <div class="col">
            <div class="card my-card opacity" style="width: 29rem;">
              <div class="card-body m-3">
                <h6 class="card-title color">Professional team of specialists and passionate mwntors at reach</h6>
                
                <p class="card-text">I need to get a certification for English proficiency and MaxCoach is my best choise. Their tutors are smart and professional when deadling with students.</p>
              
                <div class="name d-flex  ">
                  <img src="../../assets/img/testimonial-avata-04.jpg" alt="avatar 4" class="testimonial">
                  
                  <div class="d-flex flex-column mx-3">
                    <p class=" d-inline color mt-3"><strong>MADLEY PONDOR</strong></p>
                    <span class="d-inline"> / IT Specialist</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- / card 3 -->
        </div>

          <!-- pallini -->
          <div class="scorrimento d-flex align-items-center justify-content-center">
            
            <p class="pagi"></p>
            <p class="paginator"></p>
            <p class="pagi"></p>
          </div>

      </div>


  </div>
</template>



<style lang="scss" scoped>
@use '../../assets/scss/partials/general' as *;
@use '../../assets/scss/partials/variables' as *;


.people {
  background-color: $bgc-grigino;

  .my-container {
    max-width: 1700px;
    margin: 0 29px;
  }
 
    .my-card {
      border: none;
      border-radius: 5px;
      height: 300px;
  
      .color {
      color: rgb(47, 42, 87);
      }
      .testimonial {
        margin-top: 15px;
        border-radius: 50%;
        height: 60px;
      }
      p {
        font-size: 13px;
      }
      span {
        font-size: 12px;
      }


    }


    .opacity {
      opacity: .3;
    }
}








// pallini
.scorrimento {
    margin: 0 auto;
    margin-top: 40px;
    padding-bottom: 40px;

    .paginator {
      border: 5px solid rgb(47, 42, 87);
      border-radius: 50%;
      margin: 0 10px;
    }

    .pagi {
      border: 3.5px solid $color-grigioChiaro;
      border-radius: 50%;
      margin: 0 10px;
    }
  }
</style>