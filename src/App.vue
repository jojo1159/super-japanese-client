<template>
  <nav>
    <AppBar />
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav>
  <router-view />
</template>

<script>
import AppBar from "@/layout/AppBar.vue"; // @ is an alias to /src

export default {
  methods: {},
  props: {},
  components: { AppBar },
};
</script>
