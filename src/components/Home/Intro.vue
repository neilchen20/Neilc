<template>
  <div id="intro">
    <h5 v-html="Intro"></h5>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'

const Intro = ref('')

onMounted(async () => {
  try {
    const response = await axios.get(
      'https://admin.neilc.me/api/home-pages?populate=hometitle'
    )
    const data = response.data.data[0].attributes
    Intro.value = data.HomeTitle
  } catch (error) {
    console.error('Error fetching data:', error)
    Intro.value =
      'Hi，我是Neil Chen，來自台北市，畢業於德明財經科技大學資訊管理學系，曾在三商電腦股份有限公司擔任實習工程師，主要負責前端開發，曾參與開發消防署和消防單位的網頁儀表板，並受到相關人員的肯定。目前在科技公司擔任前端工程師，我的技術主要包括Vue.js、Bootstrap、Element Plus、Three.js、DataTables，目前正在自學部署Strapi、Three.js等技術，並透過實作將現在的網頁內容與部署的Strapi CMS串接，可在Strapi編輯後顯示在'
  }
})
</script>

<style lang="scss" scoped>
#intro {
  h5 {
    line-height: 2.5;
  }
}
</style>
