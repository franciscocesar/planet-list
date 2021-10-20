<template>
  <Jupiter />
</template>
<script lang="ts">
import Vue from "vue";
import {jupiter} from '@/store'
export default Vue.extend({
  async asyncData() {
    await jupiter.index();
  },
});
</script>