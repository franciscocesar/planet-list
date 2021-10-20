<template>
  <div>
    <Header />
    <Container :name="$marte.name" 
    :image="$marte.image"  
    description="É o quarto planeta a partir do Sol, o segundo menor do Sistema Solar. Batizado em homenagem ao deus romano da guerra, muitas vezes é descrito como o Planeta Vermelho, porque o óxido de ferro predominante em sua superfície lhe dá uma aparência avermelhada" />
    
    <Footer 
    :orbitalspeed="$marte.features.orbitalSpeed" 
    :rotationDuration="$marte.features.rotationDuration" 
    :radius="$marte.features.radius"
    :sunDistance="$marte.features.sunDistance"
    />
  </div>
  
</template>

<script lang="ts">
import Vue from "vue";
import { marte } from "@/store";
export default Vue.extend({
  
  computed: {
    $marte() {
      return marte.$all;
    },
  },
});
</script>

<style scoped>
</style>