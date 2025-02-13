<template>
  <img :src="banner" alt="Banner" />
</template>

<script lang="ts" setup>
const bannerUrl = new URL('../../assets/img/banner.webp', import.meta.url).href
</script>
