<template>
  <div>
    <Header />
    <Container :name="$netuno.name" 
    :image="$netuno.image"  
    description="É o oitavo planeta do Sistema Solar, o último a partir do Sol desde a reclassificação de Plutão para a categoria de planeta anão, em 2006. Pertencente ao grupo dos gigantes gasosos, possui um tamanho ligeiramente menor que o de Urano, mas maior massa, equivalente a 17 massas terrestres. Netuno orbita o Sol a uma distância média de 30,1 unidades astronômicas." />
    
    <Footer 
    :orbitalspeed="$netuno.features.orbitalSpeed" 
    :rotationDuration="$netuno.features.rotationDuration" 
    :radius="$netuno.features.radius"
    :sunDistance="$netuno.features.sunDistance"
    />
  </div>
  
</template>

<script lang="ts">
import Vue from "vue";
import { netuno } from "@/store";
export default Vue.extend({
  
  computed: {
    $netuno() {
      return netuno.$all;
    },
  },
});
</script>

<style scoped>
</style>