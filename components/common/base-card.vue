<template>
  <div class="card">
    <img class="card-img-top" :src="srcImg" alt="Card image cap" />
    <div class="card-body">
      <h5 class="card-title">{{ title }}</h5>
      <p class="card-text">{{ desc }}</p>
      <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: { type: String, default: '' },
    desc: { type: String, default: '' },
    srcImg: { type: String, default: '/' },
  },
}
</script>

<style lang="scss" scoped></style>
