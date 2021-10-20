<template>
  <div>
    <Header />
    <Container :name="$urano.name" 
    :image="$urano.image"  
    description="É o sétimo planeta a partir do Sol, o terceiro maior e o quarto mais massivo dos oito planetas do Sistema Solar. Foi nomeado em homenagem ao deus grego do céu, Urano, o pai de Cronos (Saturno) e o avô de Zeus (Júpiter). Embora seja visível a olho nu em boas condições de visualização, não foi reconhecido pelos astrônomos antigos como um planeta devido a seu pequeno brilho e lenta órbita." />
    
    <Footer 
    :orbitalspeed="$urano.features.orbitalSpeed" 
    :rotationDuration="$urano.features.rotationDuration" 
    :radius="$urano.features.radius"
    :sunDistance="$urano.features.sunDistance"
    />
  </div>
  
</template>

<script lang="ts">
import Vue from "vue";
import { urano } from "@/store";
export default Vue.extend({
  
  computed: {
    $urano() {
      return urano.$all;
    },
  },
});
</script>

<style scoped>
</style>