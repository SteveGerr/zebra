<template>
  <div class="news-list">
    <div class="news-list__body">
      <NewsItem v-for="(item, i) in store.newsList" :key="i" :item="item" />
    </div>
    <div  class="news-list__footer">
      <AppButton
        v-if="store.navigation.total > store.navigation.current"
        @on-click="getNews(String(store.navigation.current + 1))"
      >
        Загрузить ещё
      </AppButton>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { useNewsStore } from '../../store/news'
import NewsItem from './NewsItem.vue'
import AppButton from '@/components/button/AppButton.vue'

const store = useNewsStore()

const getNews = async (page = '') => {
  await store.getNews(page)
}

getNews()
</script>
<style lang="scss" scoped>
  .news-list {
    display: flex;
    flex-direction: column;
    padding: 6.4rem 10rem 7.2rem 10rem;

    @media screen and (max-width: $bp-tablet) {
      padding: 34px 30px 32px 30px;
    }

    &__body {
      display: grid;
      grid-template-columns: auto auto auto;
      row-gap: 6.4rem;
      column-gap: 4.8rem;

      @media screen and (max-width: $bp-tablet) {
        grid-template-columns: auto auto;
        row-gap: 3.4rem;
        column-gap: 1.8rem;
      }

      @media screen and (max-width: 768px) {
        grid-template-columns: auto;
        row-gap: 3.4rem;
        column-gap: 1.8rem;
      }
    }

    &__footer {
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 7.2rem 0;

      @media screen and (max-width: $bp-tablet) {
        margin: 35px;
      }
    }
  }
</style>
