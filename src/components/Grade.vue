<script setup lang="ts">
import { ref, onMounted, watch } from 'vue';

// 使用 Record<string, string> 来声明 exam 的类型
const exam = ref<Record<string, string>>({
  realName: '张三',
  bmh: '100199999',
  zkzh: '1234567890',
  zf: '500',
  km1: '(101)思想政治理论：100',
  km2: '(201)英语（一）：100',
  km3: '(301)数学（一）：150',
  km4: '(408)计算机科学专业基础：150',
  bz: '无',
});

// fields 数组
const fields = [
  { label: '姓名', model: 'realName' },
  { label: '报名号', model: 'bmh' },
  { label: '准考证号', model: 'zkzh' },
  { label: '总分', model: 'zf' },
  { label: '第一门', model: 'km1' },
  { label: '第二门', model: 'km2' },
  { label: '第三门', model: 'km3' },
  { label: '第四门', model: 'km4' },
  { label: '备注', model: 'bz' },
];

// 提取科目成绩的函数
function extractScore(subject: string): number {
  const match = subject.match(/：(\d+)/);
  return match ? parseInt(match[1], 10) : 0;
}

// 页面加载时从 localStorage 获取 exam 数据
onMounted(() => {
  const savedExam = localStorage.getItem('exam');
  if (savedExam) {
    exam.value = JSON.parse(savedExam);
  }
});

// 监听 exam 变化并保存到 localStorage
watch(exam, (newExam) => {
  // 自动求和科目成绩
  const totalScore = ['km1', 'km2', 'km3', 'km4'].reduce((sum, key) => {
    return sum + extractScore(newExam[key]);
  }, 0);

  // 更新总分
  newExam.zf = totalScore.toString();

  // 保存到 localStorage
  localStorage.setItem('exam', JSON.stringify(newExam));
}, { deep: true });
</script>

<template>
  <div class="van-cell-group van-hairline--top-bottom van-panel">
    <div class="van-cell van-hairline van-panel__header"></div>
    <div class="van-panel__content">
      <div v-for="field in fields" :key="field.model" class="van-cell van-hairline van-field">
        <div class="van-cell__title"><span>{{ field.label }}</span></div>
        <div class="van-cell__value">
          <div class="van-field__body">
            <textarea
                rows="1"
                v-model="exam[field.model]"
                class="van-field__control"
                style="height: 24px; color: #666666"
            ></textarea>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* 样式内容 */
</style>
