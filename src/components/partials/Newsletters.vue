<script>
  export default {
    
  }
</script>


<template>
  <div class="container-xxl py-5">
    <div class="row">
      <div class="col col-circle">
        <div class="circle"></div>
      </div>
      <div class="col text-center ">
        
        <h2 class="py-4 ">
          <strong>Subscribe</strong> Newsletters
        </h2>
        <p class="pb-4">
          Enter your email address to register to our newsletter subcription delivered on a regular basis!
        </p>

        <div class="input-group mb-5">
          <input type="text" class="form-control my-input" placeholder="Enter your email" aria-label="Recipient's username" aria-describedby="button-addon2">
          <button class="btn btn-outline-secondary my-btn " type="button" id="button-addon2"><strong>Subscribe</strong></button>
        </div>
      </div>

      <div class="col col-ciclo">
        <img src="../../assets/img/maxcoach-shape-09.png" alt="maxcoach-shape-09">
        <img src="../../assets/img/maxcoach-shape-02.png" alt="maxcoach-shape-02" class="ciclo">
        
      </div>
    </div>
  </div>
</template>



<style lang="scss" scoped>
@use '../../assets/scss/partials/general' as *;
@use '../../assets/scss/partials/variables' as *;

.col-circle {
  position: relative;
  .circle {
    position: absolute;
    top: 120px;
    left: 80px;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: 6px solid rgba(47, 173, 150, 0.5);
  }
}

h2 {
  color: $color-verde;

  strong {
    color: black;
  }
}

.my-input {
  background-color: $bgc-grigino;
}

.my-btn {
  background-color: $color-verde;
  color: $color-white;
  &:hover {
    background-color: rgb(99, 211, 191);
  }
  
}

.col-ciclo {
  position: relative;

  .ciclo {
    position: absolute;
    top: 80px;
    left: 80px;
  }
}



</style>