<script>
import {store} from '../data/store';
// import NavBar from './partials/NavBar.vue'

export default {
   components: {
    // NavBar,
   },
    data(){
     
      return {
        store,
        
      }
    }
  }
</script>


<template>
  <header>
<!-- TODO - RENDERE LA NAVBAR UN COMPONENT E STAMPARLO DINAMICAMENTE -->
    <div class="container h-100 ">
      <div class="row d-flex justify-content-between align-center h-100">

        <!-- logo -->
        <div class="col-2 logo">
          <img src=" ../assets/img/dark-logo.png" alt="logo">
        </div>
        <!-- /logo -->

         <!-- navBar menu -->      
        <div class="col menu">
          
          <ul class="d-flex ">

            <li  v-for="(element, index) in store.navBar"
              :key="index">
              <a href="#" >{{element.title}} <i class="fa-solid fa-chevron-down"></i></a>
            </li>        
            
          </ul>
        

        </div>
        <!-- /navBar menu -->

        <!-- serch -->
        <div class="col-3 d-flex align-items-center   ">

          <!-- seleziona lingua -->
          <div class="language d-flex ">
            <img src="../assets/img/en.png" alt="en" class="align-self-center">

            <select class="form-select mx-3" >
              <option > Select Language:</option>
              <option selected value="1">English</option>
              <option value="2">Italiano</option>
              <option value="3">Deutsch</option>
            </select>

            <i class="fa-regular fa-circle-user"></i>
          </div>
          <!-- /seleziona lingua -->

          <!-- cerca -->
          <div class="search d-flex h-25 mx-2">
            <input type="text" placeholder="Search..." class="cerca">
            <i class="fa-solid fa-magnifying-glass"></i>
          </div>
          <!-- /cerca -->
          
        </div>
        <!-- /serch -->
      </div>




      
     
        
    </div>

  </header>

</template>


<style lang="scss" scoped>
@use '../assets/scss/partials/general' as *;
@use '../assets/scss/partials/variables' as *;

header {
  .row {
    height: 80px;
    line-height: 80px;
    .fa-chevron-down {
          font-size: 8px;
        }

  }
 
  .logo img {
  width: 160px ;
  } 
  
  ul {
    list-style: none;
    margin-left: 10%;

    li {
      margin-right: 40px;
  }
  }

  a {
      text-decoration: none;
      color: $bgc-viola;
  }


  .language {
    line-height: 80px;
    height: 40px;
    border: none;
    
      img {
        height: 20px;
      }
  }

  .form-select {
    width: 100px;
    border: none;
    text-transform: uppercase;
    font-family: 'Times New Roman', Times, serif;
    font-size: 12px
  }

  .fa-circle-user {
    line-height: 40px;
  }

  
  .search {
    // border-left: 1px solid grey;

    .cerca {
    width: 150px;
    border: none;
    
    }

    .fa-magnifying-glass {
      padding-top: 7px;
      padding-left: 10px;
      margin-right: 15px;
    }
  }




}

</style>