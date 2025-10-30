<script setup lang="ts">
</script>

<template>
  <header class="bg-white shadow-sm sticky top-0 z-50">
    <div class="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
      <div class="flex items-center">
        <router-link to="/">
          <img src="https://ext.same-assets.com/2009060112/3278705006.gif" alt="分达Logo" class="h-10">
        </router-link>
      </div>
      <nav class="hidden md:flex items-center gap-8">
        <router-link to="/" class="text-gray-700 hover:text-blue-600 transition-colors">首页</router-link>
        <a href="#" class="text-gray-700 hover:text-blue-600 transition-colors">商城系统</a>
        <a href="#" class="text-gray-700 hover:text-blue-600 transition-colors">知识付费</a>
        <router-link to="/vip" class="text-gray-700 hover:text-blue-600 transition-colors">VIP</router-link>
        <a href="#" class="text-gray-700 hover:text-blue-600 transition-colors">收费标准</a>
        <a href="#" class="text-gray-700 hover:text-blue-600 transition-colors">品牌服务</a>
        <a href="#" class="text-gray-700 hover:text-blue-600 transition-colors">关于分达</a>
      </nav>
      <div class="flex items-center gap-4">
        <button class="px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors">
          立即咨询
        </button>
      </div>
    </div>
  </header>
</template>
