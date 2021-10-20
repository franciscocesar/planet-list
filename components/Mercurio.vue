<template>
  <div>
    <Header />
    <Container :name="$planets.name" 
    :image="$planets.image"  
    description="É o menor e mais interno planeta do Sistema Solar, orbitando o Sol a cada 87,969 dias terrestres. A sua órbita tem a maior excentricidade e o seu eixo apresenta a menor inclinação em relação ao plano da órbita dentre todos os planetas do Sistema Solar. Mercúrio completa três rotações em torno de seu eixo a cada duas órbitas. " />
    
    <Footer 
    :orbitalspeed="$planets.features.orbitalSpeed" 
    :rotationDuration="$planets.features.rotationDuration" 
    :radius="$planets.features.radius"
    :sunDistance="$planets.features.sunDistance"
    />
  </div>
  
</template>

<script lang="ts">
import Vue from "vue";
import { planets } from "@/store";
export default Vue.extend({
  
  computed: {
    $planets() {
      return planets.$all;
    },
  },
});
</script>

<style scoped>
</style>