<script setup lang="ts">
import {ref} from 'vue';

const noticeVisible = ref(true);
let pressTimer: any = null;

const handlePressStart = () => {
  pressTimer = setTimeout(() => {
    noticeVisible.value = false;
  }, 1000);
};

const handlePressEnd = () => {
  clearTimeout(pressTimer);
};

</script>

<template>
  <div
      v-if="noticeVisible"
      class="yzwb-notice-bar"
      style="word-break: break-all;"
      @mousedown="handlePressStart"
      @mouseup="handlePressEnd"
      @touchstart="handlePressStart"
      @touchend="handlePressEnd"
  >
    招生单位说明：<span
      contenteditable="true">标题2025年份单击可更改；单击这里，可更改内容；长按这里1秒，可隐藏单位说明；刷新页面恢复</span>
  </div>
</template>


<style scoped>

</style>
