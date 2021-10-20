<template>
  <Netuno />
</template>
<script lang="ts">
import Vue from "vue";
import { netuno } from "@/store";
export default Vue.extend({
  async asyncData() {
    await netuno.index();
  },
});
</script>