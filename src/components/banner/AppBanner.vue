<template>
<div class="banner">
  <h2 class="banner__heading">
    Новости
  </h2>
  <img class="banner__image" src="@/static/banner.png" alt="">
</div>
</template>
<script setup>
import { defineProps } from 'vue'

defineProps({
  image: String
})
</script>
<style lang="scss" scoped>
.banner {
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  width: 100%;
  min-height: 32rem;
  padding: 4.8rem 10rem;
  position: relative;

  &__image {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: 1;
  }

  &__heading {
    @include heading-H1;
    color: $grey-color-black-90;
    z-index: 2;
  }
}
</style>
