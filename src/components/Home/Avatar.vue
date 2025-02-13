<template>
  <div id="img-container">
    <img :src="avatarUrl" alt="Avatar" id="avatar" />
  </div>
</template>
<script setup lang="ts">
const avatarUrl = new URL('../../assets/img/avatar.webp', import.meta.url).href
</script>
<style lang="scss" scoped>
#img-container {
  display: flex;
  justify-content: start;
  position: absolute;
  width: 100%;
  left: 25%;
  bottom: -62px;
  @media (max-width: 991px) {
    justify-content: center;
    left: 0;
    bottom: -42px;
  }
  #avatar {
    max-width: 124px;
    max-height: 124px;
    border-radius: 50%;
    border: 4px solid #4868f8;
    @media (max-width: 991px) {
      max-width: 84px;
      max-height: 84px;
    }
  }
}
</style>
