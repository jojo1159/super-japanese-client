<template>
  <div class="container">
    <div class="row">
      <div v-for="item in courses" :key="item.id" class="col-3 mt-4">
        <BaseCard
          :title="item.name"
          :desc="item.desc"
          src="https://glints.com/vn/blog/wp-content/uploads/2019/10/pha%CC%81t-trie%CC%82%CC%89n-kinh-doanh.jpg"
        ></BaseCard>
      </div>
    </div>
  </div>
</template>

<script>
import BaseCard from '~/components/common/base-card.vue'
export default {
  components: { BaseCard },

  layout: 'dashboard',
  data() {
    return {
      // courses: [],
    }
  },
  computed: {
    isLoading() {
      return this.$store.getters['course/isLoading']
    },
    courses() {
      return this.$store.getters['course/all']
    },
  },
  mounted() {
    this.getCourses()
  },
  methods: {
    async getCourses() {
      try {
        await this.$store.dispatch('course/getList')
      } catch (error) {}
    },
  },
}
</script>

<style lang="scss" scoped></style>
