<template>
  <div>
    <Header></Header>
    <!-- 路由组件出口的地方 -->
    <router-view></router-view>
    <!-- 在Home、Search显示，在登录、注册隐藏 -->
    <Footer v-show="$route.meta.show"></Footer>
  </div>
</template>

<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "",
  components: {
    Header,
    Footer,
  },
  mounted() {
    // 派发action
    this.$store.dispatch("categoryList");
  },
};
</script>

<style>
</style>
