<template>
  <div class="container">
    <h2 class="text-center mb-5 fw-bold">All Projects</h2>
    <ul class="timeline">
      <li
        v-for="project in sortedProjects"
        :key="project.id"
        class="event"
        :data-date="project.attributes.projectDate">
        <img
          v-if="project.attributes.projectImg.data.length > 0"
          :src="
            `https://admin.neilc.me` +
            project.attributes.projectImg.data[0].attributes.url
          "
          :alt="project.attributes.projectTitle" />
        <h4 class="mb-3">{{ project.attributes.projectTitle }}</h4>
        <p>{{ project.attributes.projectDescription }}</p>
        <ul v-if="project.attributes.projectSkill">
          <li v-html="project.attributes.projectSkill"></li>
        </ul>
        <div class="w-100 text-end mt-3">
          <a
            :href="project.attributes.projectLink"
            target="_blank"
            class="btn btn-sm btn-outline-secondary"
            >View</a
          >
        </div>
      </li>
      <!-- <li class="event" data-date="March 15, 2023">
        <h3 class="mb-3">Version 1.5 Released</h3>
        <p>Minor update focusing on bug fixes and stability:</p>
        <ul>
          <li>Fixed login issues on mobile devices</li>
          <li>Improved error handling and reporting</li>
          <li>Updated third-party dependencies</li>
        </ul>
      </li>
      <li class="event" data-date="January 1, 2023">
        <h3 class="mb-3">Version 1.0 Released</h3>
        <p>Initial release of our product with core features:</p>
        <ul>
          <li>User authentication and account management</li>
          <li>Basic data visualization tools</li>
          <li>Integration with popular third-party services</li>
        </ul>
      </li> -->
    </ul>
  </div>
</template>

<script lang="ts" setup>
import { computed, defineProps } from 'vue'

// 定義 props
const props = defineProps<{
  ProjectsData: {
    id: number // 確保 id 屬性存在
    attributes: {
      projectTitle: string
      projectDescription: string | null
      projectLink: string
      projectDate: string
      projectSkill: string | null
      projectHighLight: boolean
      createdAt: string
      updatedAt: string
      publishedAt: string
      projectImg: {
        data: {
          id: number
          attributes: {
            url: string
          }
        }[]
      }
    }
  }[]
}>()

// 計算屬性，根據 projectDate 進行遞減排序
const sortedProjects = computed(() => {
  return props.ProjectsData.sort((a, b) => {
    return (
      new Date(b.attributes.projectDate).getTime() -
      new Date(a.attributes.projectDate).getTime()
    )
  })
})
</script>

<style lang="scss">
#projects {
  @media (max-width: 991px) {
    padding: 0 20px;
  }
  .container {
    margin-top: 120px;
    min-height: 30vh;
    @media (max-width: 991px) {
      margin-top: 44px;
      padding: 64px 0px;
    }
    .timeline {
      border-left: 3px solid #494949;
      border-bottom-right-radius: 4px;
      border-top-right-radius: 4px;
      margin: 0 auto;
      position: relative;
      padding: 50px;
      list-style: none;
      text-align: left;
      max-width: 50%;
      @media (max-width: 991px) {
        max-width: 98%;
        padding: 24px;
        padding-right: 0;
        padding-left: 26px;
      }
      .event {
        border-bottom: 1px dashed #e8ebf1;
        padding-bottom: 25px;
        margin-bottom: 25px;
        position: relative;
        &:last-of-type {
          padding-bottom: 0;
          margin-bottom: 0;
          border: none;
        }
        &:before,
        &:after {
          position: absolute;
          display: block;
          top: 0;
        }
        &:before {
          left: -207px;
          content: attr(data-date);
          text-align: right;
          font-weight: 100;
          font-size: 0.9em;
          min-width: 120px;
        }
        &:after {
          box-shadow: 0 0 0 3px #494949;
          left: -55.8px;
          background: #fff;
          border-radius: 50%;
          height: 9px;
          width: 9px;
          content: '';
          top: 5px;
        }
        @media (max-width: 991px) {
          padding-top: 30px;
          &:before {
            left: 0px;
            text-align: left;
          }
          &:after {
            left: -31.8px;
          }
        }
      }
      img {
        margin-bottom: 12px;
        width: 100%;
        border: 1px solid #0443171a;
        box-shadow: 0px 8px 16px #0443171a;
        border-radius: 16px;
      }
    }
  }
}
</style>
