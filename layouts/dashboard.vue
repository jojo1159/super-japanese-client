<template>
  <div ref="top" class="page-layout">
    <div class="container-fluid p-0">
      <div id="body-row" class="row">
        <SideBar />
        <!-- MAIN -->

        <div class="col no-padding">
          <AppBar />
          <Nuxt />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SideBar from '@/components/side-bar.vue'
import AppBar from '@/components/app-bar.vue'

export default {
  components: {
    SideBar,
    AppBar,
  },
}
</script>

<style lang="scss" scoped>
/*-------------------------------- END ----*/
#body-row {
  margin-left: 0;
  margin-right: 0;
}
</style>
