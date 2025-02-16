<script setup lang="ts">

</script>

<template>
  <div class="wap-nav-bar wap-nav-bar-border">
    <!-- 点击这里打开对话框 -->
    <div class="wap-nav-bar__left">
      <a>
        <img
            src="../assets/logo.png"
            alt="研招网"
            class="logo"
        />
      </a>
    </div>

    <div class="wap-nav-bar__right">
      <img
          src="../assets/nav-user.svg"
          style="width: 0.533rem; margin-right: 0.24rem;"
      />


      <img
          src="../assets/nav-menu.svg"
          alt=""
          style="width: 0.533rem; display: block;"
      />

    </div>
  </div>
</template>


<style scoped>
.wap-nav-bar {
  position: relative;
  z-index: 1;
  height: 1.173rem;
  display: flex;
  align-items: center;
  background: #fff;
}

.wap-nav-bar-border:after {
  position: absolute;
  box-sizing: border-box;
  content: " ";
  pointer-events: none;
  top: -50%;
  right: -50%;
  bottom: -50%;
  left: -50%;
  border-bottom: 1px solid #d5d5d5;
  transform: scale(.5);
}

.wap-nav-bar .wap-nav-bar__left {
  position: absolute;
  left: 0;
  display: flex;
  align-items: center;
  padding: 0 0.427rem;
}

.wap-nav-bar .logo {
  display: block;
  width: 2.87rem;
}

.wap-nav-bar .wap-nav-bar__right {
  position: absolute;
  right: 0;
  display: flex;
  align-items: center;
  padding: 0 0.427rem;
  line-height: 1;
}

.logo-text a {
  color: #13161b;
}

</style>
