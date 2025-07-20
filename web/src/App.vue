<template>
  <div>
    <!-- 保留原来的欢迎部分 -->
    <div class="welcome">
      <a href="https://vite.dev" target="_blank">
        <img src="/vite.svg" class="logo" alt="Vite logo" />
      </a>
      <a href="https://vuejs.org/" target="_blank">
        <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
      </a>
    </div>
    
    <!-- 合并路由导航部分 -->
    <div class="navigation">
      <router-link to="/fields">Fields</router-link>
      <router-link to="/predict">Predict</router-link>
      <router-link to="/logistics">Logistics</router-link>
      <router-link to="/alert">Alert</router-link>
    </div>
    
    <!-- 路由视图 -->
    <router-view />
  </div>
</template>

<script setup lang="ts">
// 相关逻辑（如果有需要添加的）
</script>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}

/* 新增导航样式 */
.navigation {
  margin: 2em 0;
}

.navigation router-link {
  margin-right: 1em;
  text-decoration: none;
  color: #333;
  font-weight: 500;
}

.navigation router-link.router-link-exact-active {
  color: #42b883;
  border-bottom: 2px solid #42b883;
}
</style>