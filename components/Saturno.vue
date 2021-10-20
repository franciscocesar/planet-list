<template>
  <div>
    <Header />
    <Container :name="$saturno.name" 
    :image="$saturno.image"  
    description="É o sexto planeta a partir do Sol e o segundo maior do Sistema Solar atrás de Júpiter. Pertencente ao grupo dos gigantes gasosos, possui cerca de 95 massas terrestres e orbita a uma distância média de 9,5 unidades astronômicas." />
    
    <Footer 
    :orbitalspeed="$saturno.features.orbitalSpeed" 
    :rotationDuration="$saturno.features.rotationDuration" 
    :radius="$saturno.features.radius"
    :sunDistance="$saturno.features.sunDistance"
    />
  </div>
  
</template>

<script lang="ts">
import Vue from "vue";
import { saturno } from "@/store";
export default Vue.extend({
  
  computed: {
    $saturno() {
      return saturno.$all;
    },
  },
});
</script>

<style scoped>
</style>