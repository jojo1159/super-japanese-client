<template>
  <div class="home">
    <AppBar />
    <va-input class="mb-4" v-model="value" placeholder="Bordered" bordered />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "HomeView",
  components: {
    value,
  },
});
</script>
