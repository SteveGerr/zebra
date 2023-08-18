<template>
  <footer class="header">
    <section class="header__logo">
      <img class="header__logo-image" :src="logo" alt="">
    </section>
  </footer>
</template>
<script setup>
import logo from '@/assets/svg/logo.svg'
</script>
<style lang="scss" scoped>
.header {
  display: flex;
  padding: 4rem 10rem;
  background-color: $white;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
}
</style>
