<template>
  <footer class="footer">
    <section class="footer__block-logo">
      <img class="footer__logo" :src="logo" alt="">
      <p class="footer__copyright">© alpha, 2023</p>
    </section>
  </footer>
</template>
<script setup>
import logo from '@/assets/svg/logo.svg'
</script>
<style lang="scss" scoped>
.footer {
  display: flex;
  padding: 6.4rem 10rem;
  background-color: $background-ultra-light-blue;

  &__block-logo {
    display: flex;
    flex-direction: column;
  }

  &__logo {
    width: 100%;
    max-width: 11.4rem;
    margin: 0 0 1.6rem 0;
  }

  &__copyright {
    @include text(1.6rem, 140%, 400);
    color: $grey-color-black-40;
  }
}
</style>
