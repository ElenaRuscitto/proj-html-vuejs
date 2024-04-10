<script>
import {store} from '../data/store';
import FooterAddress from './partials/FooterAddress.vue';
import FooterInformation from './partials/FooterInformation.vue';


export default {
   components: {
    FooterAddress,
    FooterInformation
   },
    data(){
     
      return {
        store,
        
      }
    }
  }
</script>


<template>
  <div class="footer d-flex ">
    <div class="my-container">
      <div class="row py-5">

        <!-- component FooterAddress -->
        <FooterAddress 
        :address="store.footerNavBar.address"
        :icons="store.footerNavBar.icons"/>
        <!-- /component FooterAddress -->

        <!-- component FooterInformation -->
        <FooterInformation 
        :explore="store.footerNavBar.explore"
        :nullo="store.footerNavBar.nullo"
        :information="store.footerNavBar.information"/> <!-- / component FooterInformation -->

        <!-- footer bottom -->
        <div class="footer-bottom pt-5 d-flex justify-content-center  align-items-center ">
          <div class="row">
            <div class="col d-flex">
              <p class="scritta">
                <i class="fa-regular fa-copyright"></i>
                2020 Maxcoach. All Rights Reserved
              </p>
            </div>

          </div>

          <div class="col">
            <div class="arrow">
              <i class="fa-solid fa-arrow-up"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  
</template>


<style lang="scss" scoped>
@use '../assets/scss/partials/general' as *;
@use '../assets/scss/partials/variables' as *;

.footer {
  background-color: $bgc-indaco-footer;
  color: $color-white;
  height: 350px;
  font-size: 13px;
  color: $color-grigioChiaro;
  
  .row{
    width: 1100px;
   }



  .footer-bottom {
     position: relative;

     .scritta,
     i {
      padding-left: 400px;
     }

    .arrow {
    background-color: $color-verde;
    border-radius: 50%;
    width: 30px;
    height: 30px;
    font-weight: lighter;
    padding-top: 5.5px;
    padding-left: 11px;
    position: absolute;
    bottom: -30px;
    right: -120px
    }

    i {
      font-size: 13px;
      padding: 0;
    }

  }
}

</style>