<template>
  <div class="about">
    <h1>This is an about page</h1>
    <h1>{{ data }}</h1>
  </div>
</template>

<script>
import axios from '../tools/axios';

export default {
  data() {
    return {
      data: ""
    };
  },

  beforeMount() {
    this.getMsg();
  },
  
  methods: {
    async getMsg(){
      const res = await axios.get('/');
      console.log(res);
      const data = await res.data;
      this.data = data;
    }
  }
};
</script>
