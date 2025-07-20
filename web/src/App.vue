<template>
  <div>
    <!-- 欢迎部分 -->
    <div class="welcome">
      <a href="https://vite.dev" target="_blank">
        <img src="/vite.svg" class="logo" alt="Vite logo" />
      </a>
      <a href="https://vuejs.org/" target="_blank">
        <!-- 使用相对路径（直接指向 src/assets 目录，无需依赖 @ 别名） -->
        <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
      </a>
    </div>
    
    <!-- 导航菜单 -->
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
// 无需导入 SVG，直接在模板中使用相对路径
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

/* 导航样式 */
.navigation {
  margin: 2em 0;
  padding: 1em;
  background-color: #f8f9fa;
  border-radius: 8px;
}

.navigation router-link {
  margin-right: 1.5em;
  text-decoration: none;
  color: #333;
  font-weight: 500;
  padding: 0.5em 0;
  transition: color 0.2s;
}

.navigation router-link.router-link-exact-active {
  color: #42b883;
  border-bottom: 2px solid #42b883;
}

.navigation router-link:hover:not(.router-link-exact-active) {
  color: #646cff;
}
</style>