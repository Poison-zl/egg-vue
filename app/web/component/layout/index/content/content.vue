<template>
  <div>
    <slot name='content'></slot>
  </div>
</template>
<style>
  @import 'content.css';
</style>
<script>
  export default {
    name:'v-content',
    data(){
      return {

      }
    },
    components: {},
    mounted() {

    }
  };
</script>
