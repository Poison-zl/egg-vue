<template>
<div>
    <div style="width:100%; background: #f4f4f4;height: 50px">
        node + vue 实现多页面服务端渲染
    </div>
</div>
</template>
<script>
import "./header.css";
export default {
  components: {},
  data() {
    return {
      collapsed: false
    };
  },
  computed: {},
  methods: {
    menuBtn() {
      this.collapsed = !this.collapsed;
    }
  },
  mounted() {}
};
</script>
