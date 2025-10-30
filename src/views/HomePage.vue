<script setup lang="ts">
import { ref } from 'vue'

const currentTab = ref('社交电商')
const industryTab = ref('美妆护肤')

const tabs = ['电商', '新零售', '教育', '建站', '党分达']

const features = [
  {
    icon: 'https://ext.same-assets.com/2009060112/2794046965.png',
    title: '全渠道增长',
    desc: ''
  },
  {
    icon: 'https://ext.same-assets.com/2009060112/3516999504.png',
    title: '全场景营销',
    desc: ''
  },
  {
    icon: 'https://ext.same-assets.com/2009060112/1176025063.png',
    title: '多商户多门店',
    desc: ''
  },
  {
    icon: 'https://ext.same-assets.com/2009060112/1620948530.png',
    title: '全新裂变玩法',
    desc: ''
  }
]

const stats = [
  { number: '000', suffix: '万+', label: '服务品牌客户' },
  { number: '0', suffix: '亿+', label: '服务C端用户' },
  { number: '000', suffix: '亿+', label: '服务客户产值' },
  { number: '00', suffix: '年+', label: '系统稳定运行' }
]

const businessModels = [
  { icon: 'S2B2C', title: 'S2B2C商城', desc: '链合供应商+去中间化分销' },
  { icon: 'B2B2C', title: 'B2B2C商城', desc: '独立自营商城+快速搭建企业商城' },
  { icon: 'B2C', title: 'B2C商城', desc: '快速搭建商城+支持跨境商城' },
  { icon: '店', title: '单店商城', desc: '使用单独客户商+无需额外费' },
  { icon: '链', title: '连锁多门店', desc: '总部合并管理+使用门店独立经营' },
  { icon: 'O2O', title: 'O2O多商户', desc: '线上接单管理+大数据共同管理' },
  { icon: '社', title: '社区自提商城', desc: '线上下单自提+便捷社区管理' },
  { icon: '知', title: '知识付费', desc: '快速搭建多平台+实现付费转化' }
]

const platforms = [
  { name: '微信小程序', icon: 'WeChat', desc: '今晚开发+打卡赚积分等丰富+支持H5版商城打造' },
  { name: '微信公众号', icon: 'WeChat', desc: '打开公众号可进行购买+支持批量化投放+系统赋能门店经营' },
  { name: 'H5网页', icon: 'H5', desc: '网页自适应+H5商城支持私域化+支持B端门店独立投放' },
  { name: '百度小程序', icon: 'Baidu', desc: '链接百度生态+SEO优化可收录+技术支持+打造属于顾客的购买日+光速响应的B2C' },
  { name: '抖音小程序', icon: 'Douyin', desc: '短视频带货+支持商家分销+私域运营+支持第三方小程序' },
  { name: '视频号', icon: 'Video', desc: '直播+微信+抖音+快手+公域+私域流量+营销同步+一码打通线上线下' },
  { name: '小红书', icon: 'Xiaohongshu', desc: '今年中新零售全渠道+订单互联串联全网+一键引流运营全周期' },
  { name: '企业微信', icon: 'WeCom', desc: '打通企业微信引流场景+设计商品以及销售转化' }
]

const brands = [
  'https://ext.same-assets.com/2009060112/1573511846.png',
  'https://ext.same-assets.com/2009060112/2664952180.jpeg',
  'https://ext.same-assets.com/2009060112/2998222384.jpeg',
  'https://ext.same-assets.com/2009060112/3563848968.jpeg',
  'https://ext.same-assets.com/2009060112/2242100030.jpeg',
  'https://ext.same-assets.com/2009060112/1829958980.jpeg',
  'https://ext.same-assets.com/2009060112/1870047006.jpeg',
  'https://ext.same-assets.com/2009060112/2793425198.jpeg',
  'https://ext.same-assets.com/2009060112/106570758.png',
  'https://ext.same-assets.com/2009060112/1736391207.jpeg',
  'https://ext.same-assets.com/2009060112/3737752476.jpeg',
  'https://ext.same-assets.com/2009060112/3962223256.jpeg',
  'https://ext.same-assets.com/2009060112/2184761547.jpeg',
  'https://ext.same-assets.com/2009060112/3822493764.jpeg',
  'https://ext.same-assets.com/2009060112/1027406181.jpeg',
  'https://ext.same-assets.com/2009060112/2830600965.jpeg',
  'https://ext.same-assets.com/2009060112/1886627787.jpeg',
  'https://ext.same-assets.com/2009060112/3322723115.jpeg',
  'https://ext.same-assets.com/2009060112/863909421.jpeg',
  'https://ext.same-assets.com/2009060112/1432128423.png'
]

const advantages = [
  { icon: '00%', label: '品牌企业应用' },
  { icon: '000%', label: '系统安全稳定' },
  { icon: '000万', label: '每秒处理量' }
]
</script>

<template>
  <div class="min-h-screen bg-white">
    <!-- Hero 区块 -->
    <section class="relative overflow-hidden bg-gradient-to-br from-blue-600 via-blue-500 to-blue-700 text-white">
      <div class="max-w-7xl mx-auto px-4 py-20">
        <div class="grid md:grid-cols-2 gap-12 items-center">
          <div class="space-y-6">
            <!-- Tab 按钮 -->
            <div class="flex flex-wrap gap-3 mb-8">
              <button
                v-for="tab in tabs"
                :key="tab"
                :class="[
                  'px-6 py-2 rounded-full font-medium transition-all',
                  currentTab === tab
                    ? 'bg-white text-blue-600'
                    : 'bg-white/20 text-white hover:bg-white/30'
                ]"
                @click="currentTab = tab"
              >
                {{ tab }}
              </button>
            </div>

            <h1 class="text-5xl font-bold leading-tight">
              低成本启动社交电商<br>
              客户+业绩实现双轨增长
            </h1>
            <p class="text-xl text-blue-100">
              助力品牌数字化转型升级实现持续增长<br>
              为消费者提供全渠道全场景营销消费体验
            </p>
            <div class="pt-4">
              <button class="px-8 py-3 bg-white text-blue-600 rounded-lg font-medium hover:bg-blue-50 transition-colors">
                咨询客服
              </button>
            </div>
          </div>

          <!-- 手机展示区 -->
          <div class="relative">
            <div class="grid grid-cols-3 gap-4">
              <img src="https://ext.same-assets.com/2009060112/466294378.png" alt="手机展示" class="w-full rounded-2xl shadow-2xl">
              <img src="https://ext.same-assets.com/2009060112/255051752.png" alt="手机展示" class="w-full rounded-2xl shadow-2xl">
              <img src="https://ext.same-assets.com/2009060112/3167126364.png" alt="手机展示" class="w-full rounded-2xl shadow-2xl">
            </div>
          </div>
        </div>

        <!-- 底部标语 -->
        <div class="mt-16 text-center">
          <div class="text-2xl font-bold mb-4">
            <span class="text-yellow-300">生成专属独立小程序</span>
          </div>
          <p class="text-lg text-blue-100">
            门店+多商户+本地生活+社区团购+知识付费+直播系统+礼盒系统+私域系统
          </p>
        </div>
      </div>

      <!-- 波浪装饰 -->
      <div class="absolute bottom-0 left-0 w-full">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" class="w-full h-16">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" fill="#ffffff" />
          <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" fill="#ffffff" />
          <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" fill="#ffffff" />
        </svg>
      </div>
    </section>

    <!-- 特性卡片区 -->
    <section class="py-16 bg-white">
      <div class="max-w-7xl mx-auto px-4">
        <div class="grid md:grid-cols-4 gap-6">
          <div
            v-for="(feature, index) in features"
            :key="index"
            class="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-8 text-white hover:scale-105 transition-transform"
          >
            <div class="mb-6">
              <img :src="feature.icon" alt="" class="w-20 h-20">
            </div>
            <h3 class="text-xl font-bold">{{ feature.title }}</h3>
          </div>
        </div>
      </div>
    </section>

    <!-- 统计数据区 -->
    <section class="py-12 bg-gradient-to-r from-slate-900 to-slate-800">
      <div class="max-w-7xl mx-auto px-4">
        <div class="grid md:grid-cols-4 gap-8">
          <div v-for="(stat, index) in stats" :key="index" class="text-center">
            <div class="text-5xl font-bold text-blue-500 mb-2">
              {{ stat.number }}<span class="text-3xl">{{ stat.suffix }}</span>
            </div>
            <div class="text-gray-300">{{ stat.label }}</div>
          </div>
        </div>
      </div>
    </section>

    <!-- 数字化营销标题区 -->
    <section class="py-20 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 text-center">
        <h2 class="text-4xl font-bold mb-4">低成本数字化营销 多平台引流变现</h2>
        <p class="text-2xl text-blue-600 font-medium">把握新发展趋势 企业升级数字化营销</p>
      </div>
    </section>

    <!-- 商业模型区块 -->
    <section class="py-16 bg-white">
      <div class="max-w-7xl mx-auto px-4">
        <div class="text-center mb-12">
          <h2 class="text-4xl font-bold mb-4">多种全场景商业模型 助力数字化</h2>
          <p class="text-2xl text-blue-600 font-medium">分达集团多年研发实力 精通线上营销模式</p>
        </div>

        <div class="grid md:grid-cols-4 gap-6">
          <div
            v-for="(model, index) in businessModels"
            :key="index"
            class="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-gray-100"
          >
            <div class="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center text-white text-2xl font-bold mb-4">
              {{ model.icon }}
            </div>
            <h3 class="text-xl font-bold mb-2">{{ model.title }}</h3>
            <p class="text-gray-600 text-sm">{{ model.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 品牌合作展示区 -->
    <section class="py-20 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4">
        <div class="text-center mb-12">
          <h2 class="text-4xl font-bold mb-4">大家都选择与分达合作</h2>
          <p class="text-2xl text-blue-600 font-medium">客户的认可才是最佳严选</p>
        </div>

        <div class="grid grid-cols-5 md:grid-cols-10 gap-6">
          <div
            v-for="(brand, index) in brands"
            :key="index"
            class="bg-white rounded-lg p-4 flex items-center justify-center hover:shadow-lg transition-shadow"
          >
            <img :src="brand" alt="品牌Logo" class="max-w-full h-auto">
          </div>
        </div>

        <!-- 分类按钮 -->
        <div class="flex justify-center gap-4 mt-12">
          <button
            v-for="category in ['美妆护肤', '母婴用品', '家清食品', '家居衣物', '金融投资', '美业连锁']"
            :key="category"
            :class="[
              'px-6 py-2 rounded-lg font-medium transition-all',
              industryTab === category
                ? 'bg-blue-600 text-white'
                : 'bg-white text-gray-700 hover:bg-gray-100'
            ]"
            @click="industryTab = category"
          >
            {{ category }}
          </button>
        </div>
      </div>
    </section>

    <!-- 企业优势区 -->
    <section class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4">
        <div class="text-center mb-12">
          <h2 class="text-4xl font-bold mb-4">打造企业数字化营销第一选择</h2>
          <p class="text-2xl text-blue-600 font-medium">论实力和靠谱，你值得信赖</p>
        </div>

        <div class="grid md:grid-cols-3 gap-8">
          <div v-for="(adv, index) in advantages" :key="index" class="text-center">
            <div class="text-6xl font-bold text-blue-600 mb-4">{{ adv.icon }}</div>
            <div class="text-xl font-medium text-gray-700">{{ adv.label }}</div>
          </div>
        </div>
      </div>
    </section>

    <!-- 全渠道覆盖区 -->
    <section class="py-20 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4">
        <div class="text-center mb-12">
          <h2 class="text-4xl font-bold mb-4">
            <span class="text-blue-600">全渠道覆盖</span>
            <span class="text-gray-900">全网推广</span>
            <span class="text-purple-600">全网引流</span>
          </h2>
        </div>

        <div class="grid md:grid-cols-4 gap-6">
          <div
            v-for="(platform, index) in platforms.slice(0, 8)"
            :key="index"
            class="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow"
          >
            <div class="w-16 h-16 bg-gradient-to-br from-green-400 to-green-500 rounded-2xl flex items-center justify-center text-white text-xl font-bold mb-4">
              {{ platform.icon.substring(0, 2) }}
            </div>
            <h3 class="text-lg font-bold mb-2">{{ platform.name }}</h3>
            <p class="text-gray-600 text-sm leading-relaxed">{{ platform.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 底部区域 -->
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
            <h4 class="text-white font-bold mb-4">了解分达集团</h4>
            <ul class="space-y-2">
              <li><a href="#" class="hover:text-white transition-colors">关于我们</a></li>
              <li><a href="#" class="hover:text-white transition-colors">加入我们</a></li>
              <li><a href="#" class="hover:text-white transition-colors">品牌服务</a></li>
            </ul>
          </div>
        </div>

        <div class="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div class="flex items-center mb-4 md:mb-0">
            <img src="https://ext.same-assets.com/2009060112/3278705006.gif" alt="分达Logo" class="h-8 mr-4">
          </div>
          <div class="text-sm text-center md:text-right">
            <p>Copyright © 2025 广东分达技术有限公司 All Rights Reserved</p>
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
