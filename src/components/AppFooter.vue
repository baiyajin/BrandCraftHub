<script setup lang="ts">
const baseUrl = import.meta.env.BASE_URL
</script>

<template>
  <footer class="bg-slate-900 text-gray-300 py-12">
    <div class="max-w-7xl mx-auto px-4">
      <div class="grid md:grid-cols-4 gap-8 mb-12">
        <div>
          <h4 class="text-white font-bold mb-4">电商解决方案</h4>
          <ul class="space-y-2">
            <li><a href="#" class="hover:text-white transition-colors">新零售</a></li>
            <li><a href="#" class="hover:text-white transition-colors">多商户</a></li>
            <li><a href="#" class="hover:text-white transition-colors">多门店</a></li>
            <li><a href="#" class="hover:text-white transition-colors">本地生活</a></li>
          </ul>
        </div>
        <div>
          <h4 class="text-white font-bold mb-4">教育解决方案</h4>
          <ul class="space-y-2">
            <li><a href="#" class="hover:text-white transition-colors">知识付费</a></li>
            <li><a href="#" class="hover:text-white transition-colors">在线教育</a></li>
            <li><a href="#" class="hover:text-white transition-colors">企业培训</a></li>
          </ul>
        </div>
        <div>
          <h4 class="text-white font-bold mb-4">营销解决方案</h4>
          <ul class="space-y-2">
            <li><a href="#" class="hover:text-white transition-colors">社交电商</a></li>
            <li><a href="#" class="hover:text-white transition-colors">视频号</a></li>
            <li><a href="#" class="hover:text-white transition-colors">小商店</a></li>
          </ul>
        </div>
        <div>
          <h4 class="text-white font-bold mb-4">了解healo</h4>
          <ul class="space-y-2">
            <li><a href="#" class="hover:text-white transition-colors">关于我们</a></li>
            <li><a href="#" class="hover:text-white transition-colors">加入我们</a></li>
            <li><a href="#" class="hover:text-white transition-colors">品牌服务</a></li>
          </ul>
        </div>
      </div>

      <div class="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center">
        <div class="flex items-center mb-4 md:mb-0">
          <img :src="baseUrl + 'e63a1282119cdd91afaa0e24c3fb335.png'" alt="healoLogo" class="h-10">
        </div>
        <div class="text-sm text-center md:text-right">
          <p>Copyright © 2025 昆明动悉科技有限公司 All Rights Reserved</p>
        </div>
      </div>
    </div>
  </footer>
</template>
