<template>
  <Sol />
</template>
<script lang="ts">
import Vue from "vue";
import {planets} from '@/store'
export default Vue.extend({
  async asyncData() {
    await planets.index();
  },
});
</script>