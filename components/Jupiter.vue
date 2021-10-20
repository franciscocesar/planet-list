<template>
  <div>
    <Header />
    <Container :name="$jupiter.name" 
    :image="$jupiter.image"  
    description="Possui menos de um milésimo da massa solar, contudo tem 2,5 vezes a massa de todos os outros planetas em conjunto. É um planeta gasoso, junto com Saturno, Urano e Netuno. Estes quatro planetas são por vezes chamados de planetas jupiterianos ou planetas jovianos, e são os quatro gigantes gasosos, isto é, que não são compostos primariamente de matéria sólida." />
    
    <Footer 
    :orbitalspeed="$jupiter.features.orbitalSpeed" 
    :rotationDuration="$jupiter.features.rotationDuration" 
    :radius="$jupiter.features.radius"
    :sunDistance="$jupiter.features.sunDistance"
    />
  </div>
  
</template>

<script lang="ts">
import Vue from "vue";
import { jupiter } from "@/store";
export default Vue.extend({
  
  computed: {
    $jupiter() {
      return jupiter.$all;
    },
  },
});
</script>

<style scoped>
</style>