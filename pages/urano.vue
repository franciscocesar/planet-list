<template>
  <Urano />
</template>
<script lang="ts">
import Vue from "vue";
import { urano } from "@/store";
export default Vue.extend({
  async asyncData() {
    await urano.index();
  },
});
</script>