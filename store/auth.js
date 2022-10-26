export const state = () => ({
  accessToken: null,
  tokenType: null,
  client: null,
  uid: null,
  user: null,
  isLoading: false,
})

export const getters = {
  accessToken (state) {
    return state.accessToken
  },
  tokenType (state) {
    return state.tokenType
  },
  isLoading (state) {
    return state.isLoading
  },
  client (state) {
    return state.client
  },
  uid (state) {
    return state.uid
  },
  user (state) {
    return state.user
  },
  isAdmin (state) {
    return !!state.user?.isAdmin
  }
}

export const mutations = {
  setAccessToken(state, accessToken) {
    state.accessToken = accessToken
  },
  setTokenType(state, tokenType) {
    state.tokenType = tokenType
  },
  setClient(state, client) {
    state.client = client
  },
  setUid(state, uid) {
    state.uid = uid
  },
  setUser(state, user) {
    state.user = user
  },
  setIsLoading(state, isLoading) {
    state.isLoading = isLoading
  }, 
}

export const actions = {
  async signIn(context, params, success, failure) {
    context.commit('setIsLoading', true);
    try {
      const res = await this.$api.auth.signIn(params);
      context.commit('setUser', res);
      context.commit('setIsLoading', false);
      return res
    } catch (err) {
      context.commit('setIsLoading', false);
      throw err
    }

  },
  setAuthHeaders(context, headers) {
    context.commit('setAccessToken', headers['access-token']);
    context.commit('setTokenType', headers['token-type']);
    context.commit('setClient', headers.client);
    context.commit('setUid', headers.uid);
  },
  async signOut(context) {

  },
  async resetPassword(context, params) {

  },
  async newPassword(context, params) {

  },
  async signUp(context, params) {
    context.commit('setIsLoading', true);
    try {
      const res = await this.$api.auth.signUp(params);
      context.commit('setUser', res);
      context.commit('setIsLoading', false);
      return res
    } catch (err) {
      context.commit('setIsLoading', false);
      throw err
    }
  },
}
