<template>
  <div class="container">
    <div>
      <h2 class="fw-bold mb-3 mb-lg-0 text-center">TOP PROJECTS</h2>
    </div>
    <div
      class="d-flex flex-column flex-lg-row gap-4 gap-lg-3 justify-content-center">
      <div
        v-for="project in ProjectsHighLight"
        :key="project.projectTitle"
        class="card shadow-sm">
        <div class="card-img-top">
          <img
            v-if="project.projectImg.data.length > 0"
            :src="
              `https://admin.neilc.me` +
              project.projectImg.data[0].attributes.url
            "
            :alt="project.projectTitle" />
        </div>
        <div class="card-body">
          <div class="d-flex justify-content-between">
            <h5 class="card-title">{{ project.projectTitle }}</h5>
            <small class="text-body-secondary">{{ project.projectDate }}</small>
          </div>
          <p class="card-text mb-5">{{ project.projectDescription }}</p>
          <div
            class="d-flex justify-content-end align-items-center position-absolute"
            style="right: 16px; bottom: 16px">
            <div class="btn-group">
              <a
                :href="project.projectLink"
                class="btn btn-sm btn-outline-secondary"
                target="_blank">
                View
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { defineProps } from 'vue'

// 定義 props
defineProps<{
  ProjectsHighLight: {
    projectTitle: string
    projectDescription: string | null
    projectLink: string
    projectDate: string
    projectHighLight: boolean
    projectSkill: string | null
    createdAt: string
    updatedAt: string
    publishedAt: string
    projectImg: {
      data: {
        id: number
        attributes: {
          url: string
          // 其他屬性可以根據需要添加
        }
      }[]
    }
  }[]
}>()
</script>

<style lang="scss">
#featured-projects {
  .container {
    .card {
      margin: 72px 0;
      margin-top: 36px;
      border-radius: 16px;
      box-shadow: 0px 8px 16px #0443171a;
      transition: all 0.3s ease;
      @media (max-width: 991px) {
        margin: 0;
      }
      &:hover {
        border: 1px solid #5e5e5e;
        box-shadow: 0px 8px 16px #5e5e5e;
        transition: all 0.3s ease;
      }
      .card-img-top img {
        width: 100%;
        aspect-ratio: 16 / 9;
        object-fit: cover;
        border-radius: 16px;
      }
    }
  }
}
</style>
