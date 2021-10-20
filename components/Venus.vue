<template>
  <div>
    <Header />
    <Container :name="$venus.name" 
    :image="$venus.image"  
    description="É o segundo planeta do Sistema Solar em ordem de distância a partir do Sol, orbitando-o a cada 224,7 dias. Recebeu seu nome em homenagem à deusa romana do amor e da beleza Vénus, equivalente a Afrodite. Depois da Lua, é o objeto mais brilhante do céu noturno, atingindo uma magnitude aparente de -4,6, o suficiente para produzir sombras. A distância média da Terra a Vênus é de 0,28 AU, sendo esta a menor distância entre qualquer par de planetas." />
    
    <Footer 
    :orbitalspeed="$venus.features.orbitalSpeed" 
    :rotationDuration="$venus.features.rotationDuration" 
    :radius="$venus.features.radius"
    :sunDistance="$venus.features.sunDistance"
    />
  </div>
  
</template>

<script lang="ts">
import Vue from "vue";
import { venus } from "@/store";
export default Vue.extend({
  
  computed: {
    $venus() {
      return venus.$all;
    },
  },
});
</script>

<style scoped>
</style>