<template>
  <footer
    class="d-flex flex-wrap justify-content-center align-items-center py-3 mt-5 mb-4 border-top">
    <div class="col-md-4 d-flex flex-column align-items-center">
      <a href="mailto:its@neilc.me">its@neilc.me</a>
      <span class="mb-3 mb-md-0 text-body-secondary"
        >© {{ currentYear }} Neil Chen</span
      >
      <img
        style="filter: drop-shadow(2px 4px 6px #5e5e5e); margin-top: 4px"
        src="https://www.f-counter.net/j/63/1708486094/"
        alt="計數器" />
    </div>
  </footer>
</template>
<script lang="ts" setup>
const currentYear = new Date().getFullYear()
</script>
