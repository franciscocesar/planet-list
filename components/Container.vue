<template>
  <div class="container">
    <div class="container-info">
      <img class="container-image" :src="image" alt="logo" />
      <div class="information">
        <h1>{{ name }}</h1>
        <p>{{ description}}</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
    props:{
        name:{
            type: String,
            default:'Planeta'
        },
        description:{
            type:String,
            default:'Teste teste teste'
        },
        image:{
            type:String,
            default:'./'
        }
    }
  // computed:{
  //     $planets(){
  //         return planets.$all
  //     }
  // }
});
</script>

<style scoped>
.container-info {
  display: grid;
  grid-template-columns: 2fr 1fr;
  padding: 18vh;
  justify-items: center;
}
.container-image {
  min-width: 35vh;
  -webkit-animation: rodaroda 3s linear alternate 3;
  -moz-animation: rodaroda 3s linear infinite;
  -ms-animation: rodaroda 3s linear infinite;
  -o-animation: rodaroda 3s linear infinite;
  animation: rodaroda 3s linear infinite;
}
@-webkit-keyframes rodaroda {
  0% {
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -ms-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  50% {
    -webkit-transform: rotate(180deg);
    -moz-transform: rotate(180deg);
    -ms-transform: rotate(180deg);
    -o-transform: rotate(180deg);
    transform: rotate(180deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    -moz-transform: rotate(360deg);
    -ms-transform: rotate(360deg);
    -o-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
@-moz-keyframes rodaroda {
  0% {
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -ms-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  50% {
    -webkit-transform: rotate(180deg);
    -moz-transform: rotate(180deg);
    -ms-transform: rotate(180deg);
    -o-transform: rotate(180deg);
    transform: rotate(180deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    -moz-transform: rotate(360deg);
    -ms-transform: rotate(360deg);
    -o-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
@-ms-keyframes rodaroda {
  0% {
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -ms-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  50% {
    -webkit-transform: rotate(180deg);
    -moz-transform: rotate(180deg);
    -ms-transform: rotate(180deg);
    -o-transform: rotate(180deg);
    transform: rotate(180deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    -moz-transform: rotate(360deg);
    -ms-transform: rotate(360deg);
    -o-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
@-o-keyframes rodaroda {
  0% {
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -ms-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  50% {
    -webkit-transform: rotate(180deg);
    -moz-transform: rotate(180deg);
    -ms-transform: rotate(180deg);
    -o-transform: rotate(180deg);
    transform: rotate(180deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    -moz-transform: rotate(360deg);
    -ms-transform: rotate(360deg);
    -o-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
@keyframes rodaroda {
  0% {
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -ms-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  50% {
    -webkit-transform: rotate(180deg);
    -moz-transform: rotate(180deg);
    -ms-transform: rotate(180deg);
    -o-transform: rotate(180deg);
    transform: rotate(180deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    -moz-transform: rotate(360deg);
    -ms-transform: rotate(360deg);
    -o-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
.information h1 {
  text-transform: uppercase;
  font-family: "Lato", sans-serif;
  letter-spacing: 1vh;
  color: white;
}
.information p {
  color: white;
  font-family: "Lato", sans-serif;
  font-weight: 300;
  font-size: 1.5vh;
}
</style>