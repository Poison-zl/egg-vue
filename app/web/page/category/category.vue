<template>
  <layout description='vue server side render' keywords='egg, vue, webpack, server side render'>
     <div class='container' title="123123">
        <h2>{{ message }}</h2>
     </div>
  </layout>
</template>
<style>
  @import 'category.css';
</style>
<script>
  
  export default {
    components: {

    },
    data(){
      return {
      }
    },
    computed: {
      
    },
    methods: {
      
    },
    mounted() {
      if('serviceWorker' in navigator) {
        navigator.serviceWorker.register('/public/sw-category.js');
      }
    }
  }
</script>

