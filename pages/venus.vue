<template>
  <Venus />
</template>

<script lang="ts">
import Vue from "vue";
import { venus } from "@/store";
export default Vue.extend({
  async asyncData() {
    await venus.index();
  },
});
</script>

<style scoped>
</style>