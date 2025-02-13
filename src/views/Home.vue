<template>
  <div class="container-fluid p-0" id="home">
    <div class="row">
      <div class="col-12 position-relative">
        <Banner />
        <Avatar />
      </div>
      <div class="col-10 col-lg-8">
        <Intro />
      </div>
    </div>
  </div>
  <div class="container-fluid" id="featured-projects">
    <FeaturedProjects :ProjectsHighLight="ProjectsHighLight" />
  </div>
  <div class="container-fluid" id="projects">
    <Projects :ProjectsData="ProjectsData" />
  </div>
</template>

<script lang="ts" setup>
import Projects from '../components/Projects/Projects.vue'
import Banner from '../components/Home/Banner.vue'
import Avatar from '../components/Home/Avatar.vue'
import Intro from '../components/Home/Intro.vue'
import FeaturedProjects from '../components/Projects/FeaturedProjects.vue'
import { ref, onMounted } from 'vue'
import axios from 'axios'

interface Project {
  projectTitle: string
  projectDescription: string | null
  projectLink: string
  projectDate: string
  projectHighLight: boolean
  projectSkill: string | null
  projectImg: {
    data: {
      id: number
      attributes: {
        url: string
      }
    }[]
  }
  createdAt: string
  updatedAt: string
  publishedAt: string
}
const ProjectsData = ref<{ id: number; attributes: Project }[]>([]) // 初始化為數組
const ProjectsHighLight = ref<Project[]>([]) // 用於存儲高亮項目
// const ProjectTitle = ref('')
// const ProjectDescription = ref('')
// const ProjectImg = ref('')
// const ProjectLink = ref('')
// const ProjectHighLight = ref('')

onMounted(async () => {
  try {
    const response = await axios.get(
      'https://admin.neilc.me/api/projects?populate=*'
    )
    const data = response.data.data

    ProjectsData.value = data // 假設這是原始數據
    console.log('ProjectsData', ProjectsData.value)

    // 過濾出 ProjectHighLight 為 true 的項目
    const highlightedProjects = ProjectsData.value.filter(
      (project) => project.attributes.projectHighLight
    )

    if (highlightedProjects.length > 0) {
      ProjectsHighLight.value = highlightedProjects.map(
        (project) => project.attributes
      ) // 提取 attributes
    } else {
      console.log('No highlighted projects found')
    }

    // 如果 ProjectsHighLight 不滿三個，補上最新的兩個項目
    if (ProjectsHighLight.value.length < 3) {
      const additionalProjects = ProjectsData.value
        .filter((project) => !project.attributes.projectHighLight) // 過濾掉已經高亮的項目
        .sort(
          (a, b) =>
            new Date(b.attributes.createdAt).getTime() -
            new Date(a.attributes.createdAt).getTime()
        ) // 按創建時間排序
        .slice(0, 2) // 取最新的兩個項目

      // 提取 attributes 並添加到 ProjectsHighLight
      ProjectsHighLight.value.push(
        ...additionalProjects.map((project) => project.attributes)
      )
    }

    console.log('Final ProjectsHighLight', ProjectsHighLight.value)
  } catch (error) {
    console.error('Error fetching data:', error)
  }
})
</script>

<style lang="scss" scoped>
#home {
  .row {
    gap: 90px;
    justify-content: center;
    @media (max-width: 991px) {
      gap: 72px;
    }
  }
}
#featured-projects {
  margin-top: 120px;
  min-height: 30vh;
  @media (max-width: 991px) {
    margin-top: 44px;
    padding: 64px 20px;
  }
}
</style>
