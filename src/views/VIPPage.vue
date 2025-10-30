<script setup lang="ts">
import { ref } from 'vue'

const currentPlatform = ref(0)

const coreApps = [
  { icon: '📊', title: '分销', desc: '1~3级分销返佣+支持内购' },
  { icon: '👑', title: '会员等级', desc: '付费购买+续费+三级返佣' },
  { icon: '📦', title: '批量下单', desc: '同时多个规格一起下单' },
  { icon: '🔧', title: '组合搭配', desc: '多商品组合一口价或折扣销售' }
]

const hotApps = [
  {
    title: '进销存',
    desc: '助力企业步入信息化、数字化快车道',
    price: 2880,
    originalPrice: 6000,
    gradient: 'from-cyan-400 to-cyan-500',
    icon: '📦'
  },
  {
    title: '多商户',
    desc: '打造自营+商户入驻的多元化平台模式',
    price: 1680,
    originalPrice: 2000,
    gradient: 'from-blue-400 to-blue-500',
    icon: '🛍️'
  },
  {
    title: '多门店',
    desc: '完美覆盖全行业的门店解决方案',
    price: 2680,
    originalPrice: 5600,
    gradient: 'from-indigo-500 to-indigo-600',
    icon: '🏪'
  },
  {
    title: '客服',
    desc: '让企业不错过任何一个商机',
    price: 1600,
    originalPrice: 3800,
    gradient: 'from-blue-600 to-blue-700',
    icon: '🎧'
  }
]

const platforms = [
  {
    name: '小程序',
    key: 'miniprogram',
    icon: '📱',
    desc: '小程序是一种的开放能力，开发者可以快速地开发一个小程序。支持（微信、支付宝、百度、头条/抖音、QQ、快手）。'
  },
  {
    name: 'APP',
    key: 'app',
    icon: '📲',
    desc: '移动互联网时代优先的利用户端+数据迅速聚拢，APP可以帮助企业快速进入移动互联网领域，扩大市场覆盖范围。在应用商店上架后，用户可以直接下载和使用APP，提升企业品牌知名度和曝光度。'
  },
  {
    name: 'H5',
    key: 'h5',
    icon: '🌐',
    desc: 'H5开发适用时序可以通过组件自由搭建。在网页无需手动下载升级。这样一来，在发布新版或线上线上维修结算时内，可以迅速地触达客户，提供更好的服务。'
  },
  {
    name: 'WEB端',
    key: 'web',
    icon: '💻',
    desc: 'PC+H5响应式、安全、稳定、离线装备企业级开发系统。应用商店独特UI属性+支付插件+主题资源库。高达99.99%电商行业运营率。'
  }
]

const pricingPlans = [
  {
    name: '免费',
    subtitle: '真正免费',
    price: 0,
    unit: '',
    buttonText: '免费下载',
    buttonClass: 'bg-blue-600 text-white hover:bg-blue-700',
    cardClass: 'bg-slate-800'
  },
  {
    name: '微免费',
    subtitle: '共享',
    price: 998,
    unit: '起',
    buttonText: '立即购买',
    buttonClass: 'bg-blue-600 text-white hover:bg-blue-700',
    cardClass: 'bg-slate-800'
  },
  {
    name: '标准',
    subtitle: '客户入门首选',
    price: 1980,
    unit: '起',
    buttonText: '立即购买',
    buttonClass: 'bg-blue-600 text-white hover:bg-blue-700',
    cardClass: 'bg-slate-800'
  },
  {
    name: '高级',
    subtitle: '专享1v1技术服务',
    price: 4600,
    unit: '起',
    buttonText: '立即购买',
    buttonClass: 'bg-blue-600 text-white hover:bg-blue-700',
    cardClass: 'bg-slate-800'
  },
  {
    name: '企业级',
    subtitle: '无限期免费，全尊服务',
    price: 36800,
    unit: '起',
    buttonText: '立即购买',
    buttonClass: 'bg-white text-blue-600 hover:bg-gray-100 border-2 border-white',
    cardClass: 'bg-gradient-to-br from-blue-600 to-blue-700',
    highlight: true
  }
]

const selectPlatform = (index: number) => {
  currentPlatform.value = index
}
</script>

<template>
  <div class="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
    <!-- 核心应用区块 -->
    <section class="py-16">
      <div class="max-w-7xl mx-auto px-4">
        <div class="flex justify-between items-center mb-12">
          <div>
            <h2 class="text-4xl font-bold mb-2">核心应用</h2>
            <p class="text-xl text-gray-600">满足多种场景使用</p>
          </div>
          <div class="flex items-center gap-2 text-blue-600 cursor-pointer hover:text-blue-700">
            <span class="text-3xl">📱</span>
            <span class="font-medium">应用中心</span>
            <span>→</span>
          </div>
        </div>

        <div class="grid md:grid-cols-4 gap-6 mb-16">
          <div
            v-for="(app, index) in coreApps"
            :key="index"
            class="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow"
          >
            <div class="text-5xl mb-4">{{ app.icon }}</div>
            <h3 class="text-xl font-bold mb-2">{{ app.title }}</h3>
            <p class="text-gray-600 text-sm">{{ app.desc }}</p>
          </div>
        </div>

        <!-- 热榜应用 -->
        <h2 class="text-3xl font-bold mb-8">热榜应用</h2>
        <div class="grid md:grid-cols-4 gap-6">
          <div
            v-for="(app, index) in hotApps"
            :key="index"
            class="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
          >
            <div :class="`p-12 text-white relative`">
              <div class="text-6xl mb-4">{{ app.icon }}</div>
              <div class="absolute inset-0 to-transparent" />
            </div>
            <div class="p-6">
              <h3 class="text-2xl font-bold mb-2">{{ app.title }}</h3>
              <p class="text-gray-600 text-sm mb-4">{{ app.desc }}</p>
              <div class="flex items-baseline gap-2">
                <span class="text-3xl font-bold text-blue-600">¥{{ app.price }}</span>
                <span class="text-lg text-gray-400 line-through">¥{{ app.originalPrice }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 全终端极致体验 -->
    <section class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4">
        <div class="text-center mb-16">
          <h2 class="text-4xl font-bold mb-4">全终端 极致体验</h2>
          <p class="text-xl text-gray-600">全终端应用管理、数据统一、用户同步，为用户提供流畅体验</p>
        </div>

        <div class="grid md:grid-cols-4 gap-0 max-w-6xl mx-auto">
          <div
            v-for="(platform, index) in platforms"
            :key="index"
            :class="[
              'relative cursor-pointer transition-all duration-300',
              currentPlatform === index
                ? 'bg-gradient-to-br from-blue-300 to-blue-500 text-white scale-105 z-10 shadow-2xl'
                : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
            ]"
            @click="selectPlatform(index)"
          >
            <div class="p-8 h-96 flex flex-col items-center justify-center text-center">
              <div class="text-6xl mb-6">{{ platform.icon }}</div>
              <h3 class="text-2xl font-bold mb-2">{{ platform.name }}</h3>
              <div v-if="currentPlatform === index" class="w-12 h-1 bg-white mb-4" />
              <p
                v-if="currentPlatform === index"
                class="text-sm leading-relaxed"
              >
                {{ platform.desc }}
              </p>
            </div>
          </div>
        </div>

        <!-- 平台切换指示器 -->
        <div class="flex justify-center gap-2 mt-8">
          <button
            v-for="(_, index) in platforms"
            :key="index"
            :class="[
              'w-3 h-3 rounded-full transition-all',
              currentPlatform === index ? 'bg-blue-600 w-8' : 'bg-gray-300'
            ]"
            @click="selectPlatform(index)"
          />
        </div>
      </div>
    </section>

    <!-- 价格套餐 -->
    <section class="py-20 bg-slate-900 text-white">
      <div class="max-w-7xl mx-auto px-4">
        <div class="text-center mb-16">
          <h2 class="text-4xl font-bold mb-4">选择适合您的套餐</h2>
          <p class="text-xl text-gray-400">灵活的定价方案，满足不同规模企业需求</p>
        </div>

        <div class="grid md:grid-cols-5 gap-6">
          <div
            v-for="(plan, index) in pricingPlans"
            :key="index"
            :class="[
              'rounded-3xl p-8 transition-transform hover:scale-105',
              plan.cardClass,
              plan.highlight ? 'ring-4 ring-blue-400' : ''
            ]"
          >
            <div class="text-center">
              <h3 class="text-2xl font-bold mb-2">{{ plan.name }}</h3>
              <p class="text-sm mb-8 opacity-80">{{ plan.subtitle }}</p>

              <div class="mb-8">
                <span class="text-5xl font-bold">¥{{ plan.price }}</span>
                <span class="text-2xl">{{ plan.unit }}</span>
              </div>

              <button
                :class="[
                  'w-full py-3 rounded-full font-medium transition-all',
                  plan.buttonClass
                ]"
              >
                {{ plan.buttonText }}
              </button>
            </div>
          </div>
        </div>

        <div class="flex justify-center gap-8 mt-12 text-gray-400">
          <a href="#" class="hover:text-white transition-colors flex items-center gap-2">
            了解详细信息 →
          </a>
          <a href="#" class="hover:text-white transition-colors flex items-center gap-2">
            联系我们 →
          </a>
        </div>
      </div>
    </section>

    <!-- 底部区域 -->
    <footer class="bg-slate-900 text-gray-300 py-12 border-t border-slate-800">
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
            <img src="/e63a1282119cdd91afaa0e24c3fb335.png" alt="healoLogo" class="h-8 mr-4">
          </div>
          <div class="text-sm text-center md:text-right">
            <p>Copyright © 2025 昆明动悉科技有限公司 All Rights Reserved</p>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<style scoped>
/* 自定义滚动条样式 */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: #f1f1f1;
}

::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: #555;
}
</style>
