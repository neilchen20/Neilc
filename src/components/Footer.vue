<template>
  <footer
    class="d-flex flex-wrap justify-content-center align-items-center py-3 mt-5 mb-4 border-top">
    <div class="col-md-4 d-flex flex-column align-items-center">
      <a href="mailto:its@neilc.me">its@neilc.me</a>
      <span class="mb-3 mb-md-0 text-body-secondary"
        >© {{ currentYear }} Neil Chen</span
      >
    </div>
  </footer>
</template>
<script lang="ts" setup>
const currentYear = new Date().getFullYear()
</script>
