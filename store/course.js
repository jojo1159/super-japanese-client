import Vue from 'vue'

export const state = () => ({
  courses: [],
  pagination: {
    currentPage: 1,
    nextPage: null,
    prevPage: null,
    totalPages: 0,
    totalCount: 0,
  },
  isLoading: false,
})

export const getters = {
  all (state) {
    return state.courses
  },
  pagination (state) {
    return state.pagination
  },
  isLoading (state) {
    return state.isLoading
  }
}

export const mutations = {
  setCourses (state, courses) {
    Vue.set(state, 'courses', courses)
  },
  setPagination (state, pagination) {
    Vue.set(state, 'pagination', pagination)
  },
  setIsLoading(state, isLoading) {
    state.isLoading = isLoading
  },
}

export const actions = {
  async getList ({ commit }, params = '') {
    commit('setIsLoading', true)

    try {

      const data = await this.$api.course.getList(params)
      commit('setCourses', data.data.courses)
      commit('setPagination', data.pagination)
    } catch (error) {
      console.error(error)
    } finally {
      commit('setIsLoading', false)
    }
  },
  async getCourse ({ commit }, courseId) {
    commit('setIsLoading', true)

    try {
      const data = await this.$api.courses.getCourse(courseId)

      return data.courses;
    } catch (error) {
      console.log(error)
    } finally {
      commit('setIsLoading', false)
    }
  },
  async createCourse(context, params ) {
    context.commit('setIsLoading', true);

    try {
      await this.$api.courses.createCourse(params);

    } catch (error) {
      console.error(error);
      throw error;
    } finally {
      context.commit('setIsLoading', false);
    }
  },
  async deleteCourse(context, courseId) {
    context.commit('setIsLoading', true);

    try {
      await this.$api.courses.deleteCourse(courseId);

    } catch (error) {
      console.log(error)
      throw error;
    } finally {
      context.commit('setIsLoading', false);
    }
  },
  async updateCourse(context, { params }) {
    context.commit('setIsLoading', true);

    try {
      await this.$api.coures.updateCourse(params.id, params);

    } catch (error) {
      console.error(error);
      throw error;
    } finally {
      context.commit('setIsLoading', false);
    }
  },
}
