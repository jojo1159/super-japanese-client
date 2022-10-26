import Auth from "@/api/auth";
import course from "@/api/course";

export default function ({ app, store, $axios, redirect, error: nuxtError }, inject) {
  $axios.onRequest((config) => {
    $axios.setHeader('access-token', store.getters['auth/accessToken'])
    $axios.setHeader('token-type', store.getters['auth/tokenType'])
    $axios.setHeader('client', store.getters['auth/client'])
    $axios.setHeader('uid', store.getters['auth/uid'])
    $axios.setHeader('Access-Control-Allow-Origin', '*')
  })

  $axios.onResponse((response) => {
    if (response.headers['access-token']) {
      store.dispatch('auth/setAuthHeaders', response.headers)
    }
  })

  $axios.onError((error) => {
    const isSignIn = error.response.config.url ===  "/sign_in";
    if (!isSignIn && error.response.status === 401) {
      redirect("/sign-in")
      // const message = error.response?.data?.errors[0]
      // app.$notyf.showMessage({ type: "danger", message })
      throw error
    }
    throw error
  })

  const api = {
    auth: Auth($axios),
    course: course($axios)
  }

  inject('api', api)
}
