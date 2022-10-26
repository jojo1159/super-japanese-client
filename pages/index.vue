<template>
  <SignIn />
</template>

<script>
import SignIn from './sign-in.vue'
// import SignIn from '~/pages/sign-in.vue'
export default {
  name: 'IndexPage',
  components: {
    // SignIn,
    SignIn,
  },
  layout: 'empty',
  data() {
    return {
      form: {
        name: '',
        course: '',
      },
    }
  },
  created() {},
  methods: {},
}
</script>
