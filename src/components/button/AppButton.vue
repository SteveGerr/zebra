<template>
  <button class="app-button" @click="clickEmitting">
    <slot></slot>
  </button>
</template>
<script setup>
import { defineEmits } from 'vue'

const emit = defineEmits(['onClick'])

const clickEmitting = () => {
  emit('onClick')
}
</script>
<style lang="scss" scoped>
  .app-button {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1.6rem 3.2rem;
    background-color: transparent;
    border-radius: 0.8rem;
    border: 1px solid $button-bordered-default;
    color: $button-bordered-default;
    outline: none;
    @include text(2rem, 120%, 600);
    letter-spacing: -0.2px;

    @media screen and (min-width: $bp-tablet) {
      &:hover {
        background-color: $button-bordered-default;
        color: $white;
        cursor: pointer;
      }
    }
  }
</style>
