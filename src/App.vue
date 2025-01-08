<script setup lang="ts">
import NavBar from "./components/NavBar.vue";
import Title from "./components/Title.vue";
import NoticeBar from "./components/NoticeBar.vue";
import GradeBottom from "./components/GradeBottom.vue";
import Footer from "./components/Footer.vue";
import Grade from "./components/Grade.vue";

</script>

<template>

  <div class="yzwb-ksxx">
    <NavBar/>

    <Title/>

    <NoticeBar/>

    <Grade/>

    <GradeBottom/>
  </div>

  <Footer/>

</template>

<style>
@import "assets/style/app.css";
@import "assets/style/iconfont.css";
@import "assets/style/wap-common.css";

.yzwb-ksxx {
  min-height: calc(100vh - 3.14rem);
  padding-bottom: 0;
}
</style>
