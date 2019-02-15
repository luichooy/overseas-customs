export default {
  data() {
    return {
      project: null
    };
  },
  created() {
    this.project = localStorage.getItem('project');
  }
};
