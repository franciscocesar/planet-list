<template>
  <Saturno />
</template>
<script lang="ts">
import Vue from "vue";
import {saturno} from '@/store'
export default Vue.extend({
  async asyncData() {
    await saturno.index();
  },
});
</script>