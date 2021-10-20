<template>
  <div class="container-detail">
    <div class="info">
      <p>Velocidade Rotação</p>
      <h1 >
        {{ orbitalspeed }}
      </h1>
    </div>
    <div class="info">
      <p>Duração Rotação</p>
      <h1 class="info-h1" >
        {{ rotationDuration }}
      </h1>
    </div>
    <div class="info">
      <p>Raio</p>
      <h1 class="info-h1" >
        {{radius }}
      </h1>
    </div>
    <div class="info">
      <p>Distância do Sol</p>
      <h1 class="info-h1" >
        {{ sunDistance }}
      </h1>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    props:{
        orbitalspeed:{
            type: String,
            default:'0.0 km'
        },
        rotationDuration:{
            type: String,
            default:'0.0 km'
        },
        radius:{
            type: String,
            default:'0.0 km'
        },
        sunDistance:{
            type: String,
            default:'0.0 km'
        }
    }
})
</script>

<style scoped>
.container-detail {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  justify-items: center;
  
}
.info {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.013);
  border: solid 1px rgb(136, 135, 135);
  width: 25vh;
  height: 10vh;
  color: white;
  text-transform: uppercase;
  text-align: center;
  font-family: "lato";
}

.info p {
  font-size: 1rem;
  text-transform: uppercase;
  text-align: center;
  font-family: "lato";
}
.info-h1 {
  font-size: 1.8rem;
}
</style>