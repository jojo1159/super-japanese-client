export default axios => ({
  async signIn(params) {
    const response = await axios.post("/auth/sign_in", params);

    return response.data
  },
  async signOut() {
    const response = await axios.delete("/auth/sign_out");

    return response.data
  },
  async signUp(params) {
    const response = await axios.post("/auth", params);

    return response.data
  },
  async resetPassword(params) {
    const response = await axios.post("/auth/password", params);

    return response.data
  },
  async newPassword(params) {
    const response = await axios.put("/auth/password", params);

    return response
  }
})
