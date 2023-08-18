<template>
  <div class="tag"><slot></slot></div>
</template>
<script setup>
</script>
<style lang="scss" scoped>
  .tag {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: .4rem 1.6rem;
    @include text(1.4rem, 140%, 400);
    color: $link-dark-default;
    border-radius: $tag-border-radius;
    background-color: $background-ultra-light-blue;
  }
</style>
