<template>
  <Marte />
</template>
<script lang="ts">
import Vue from "vue";
import { marte } from "@/store";
export default Vue.extend({
  async asyncData() {
    await marte.index();
  },
});
</script>