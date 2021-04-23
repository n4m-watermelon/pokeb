const resource = '/api/tag'
export default ($axios) => ({
  all() {
    return $axios.get(`${resource}`)
  },

  show(id) {
    return $axios.get(`${resource}/${id}`)
  },

  create(payload) {
    return $axios.post(`${resource}`, payload)
  },

  update(id, payload) {
    return $axios.post(`${resource}/${id}`, payload)
  },

  delete(id) {
    return $axios.delete(`${resource}/${id}`)
  },
  updatePublished(id, payload) {
    return $axios.put(`${resource}/updateStatus/${id}`,payload)
  }
 
})