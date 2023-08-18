<template>
  <div class="news-item">
    <div v-if="props.item.image" class="news-item__header">
      <img class="news-item__image" :src="props.item.image" alt="">
    </div>
    <div class="news-item__body">
      <div class="news-item__date">
        <p class="news-item__date-day">
          {{ timeConverter(props.item.date).day }}
        </p>
        <div class="news-item__month-wrapper">
          <p class="news-item__date-month">
            {{ timeConverter(props.item.date).month }}
          </p>
          <p class="news-item__date-year">
            {{ timeConverter(props.item.date).year }}
          </p>
        </div>
      </div>
      <p class="news-item__heading">
        <a class="news-item__link" :href="props.item.link" target="_blank" rel="noopener noreferrer">
          {{ props.item.name }}
        </a>
      </p>
      <p class="news-item__preview">
        {{ textCut(props.item.previewText, 110)  }}
      </p>
    </div>
    <div class="news-item__footer">
        <Tag>
          {{ props.item.type.value }}
        </Tag>
    </div>
  </div>
</template>
<script lang="ts" setup>
import Tag from '@/components/tag/AppTag.vue'
import { NewsItemI } from '@/interfaces/NewsI'
import { defineProps } from 'vue'
import { timeConverter } from '@/hooks/useTimeConverter'
import { textCut } from '@/hooks/useTextCutting'

const props = defineProps<{
    item: NewsItemI
  }>()
</script>
<style lang="scss" scoped>
.news-item {
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 536px;
  height: 58rem;
  padding: 0 0 6rem 0;
  position: relative;
  background-color: $white;
  border-radius: 16px;
  border: 1px solid $brend-primary;
  overflow: hidden;

  @media screen and (min-width: $bp-tablet) {
    &:hover {
      .news-item__image {
        height: 0;
      }
    }
  }

  @media screen and (max-width: $bp-tablet) {
    height: 48rem;
  }

  @media screen and (max-width: 768px) {
    max-width: 100%;
    height: auto;
  }

  &__image {
    width: 100%;
  }

  &__body {
    padding: 3.2rem 3.2rem 4rem 3.2rem;
    transition: all .5s ease-in-out;
  }

  &__date {
    display: flex;
    flex-wrap: nowrap;
    gap: 0.4rem;
  }

  &__date-day,
  &__date-month,
  &__date-year {
    color: $grey-color-black-30;
  }
  &__date-day {
    @include text(3.6rem, 100%, 400);

    @media screen and (max-width: $bp-tablet) {
      @include text(2.6rem, 100%, 400);
    }
  }
  &__date-month,
  &__date-year {
    @include text(1.5rem, 110%, 700);
    letter-spacing: -0.15px;

    @media screen and (max-width: $bp-tablet) {
      @include text(1.2rem, 110%, 400);
    }
  }

  &__preview {
    @include text(2rem, 130%, 400);
    letter-spacing: -0.2px;

    @media screen and (max-width: $bp-tablet) {
      @include text(1.5rem, 130%, 400);
    }
  }

  &__heading {
    margin: 1.6rem 0;
  }

  &__link {
    @include text(2.2rem, 120%, 400);
    color: $link-color-default;
    cursor: pointer;

    @media screen and (max-width: $bp-tablet) {
      @include text(1.5rem, 120%, 400);
    }
  }

  &__footer {
    display: flex;
    position: absolute;
    bottom: 0;
    padding: 0 3.2rem 2.8rem 3.2rem;
  }
}
</style>
