<template>
    <layout description='vue server side render' keywords='egg, vue, webpack, server side render'>
        <div class="container" @click="hahaha">
            {{message}}
        </div>

        <div style="text-align:center" v-if="isLoading">
            <img src="../../asset/images/loading.gif">
        </div>
    </layout>
</template>
<style>
  @import "index.css";
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
      lists(){
        return this.list;
      }
    },
    methods: {
        hahaha (){
            console.log(1111)
        }
    },
    mounted() {
      window.addEventListener('scroll', ()=>{
        this.loadPage();
      }, false);
    }
  }
</script>

