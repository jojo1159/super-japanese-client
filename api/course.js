export default axios => ({
  async getList(params) {
    const response = await axios.get(`/courses?${params}`)

    return response.data
  },
  async getCourse(id) {
    const response = await axios.get(`/courses/${id}`)

    return response.data
  },
  async createCourse(params) {
    const response = await axios.post(`/courses/`, { course: params })

    return response.data
  },
  async deleteCourse(id) {
    const response = await axios.delete(`/courses/${id}`);

    return response.data;
  },
  async updateCourse(id, params) {
    const response = await axios.put(`/courses/${id}`, { course: params })

    return response.data
  },
})
