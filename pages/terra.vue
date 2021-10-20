<template>
  <Terra />
</template>

<script lang="ts">
import Vue from "vue";
import { terra } from "@/store";
export default Vue.extend({
  async asyncData() {
    await terra.index();
  },
});
</script>

<style scoped>
</style>