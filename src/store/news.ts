/* eslint-disable comma-dangle */
/* eslint-disable no-return-assign */
/* eslint-disable implicit-arrow-linebreak */
import { defineStore } from 'pinia'
import { ref, Ref } from 'vue'
import NewsApi from '../api/NewsApi'
import { NewsListI, NavI } from '@/interfaces/NewsI'

export const useNewsStore = defineStore('news', () => {
  const newsList: Ref<NewsListI[]> = ref([])
  const navigation: Ref<NavI> = ref({} as NavI)

  const getNews = async (page = '') => {
    try {
      await NewsApi.getAllNews(page).then((res) => {
        const { data } = res
        const { items } = data
        const { nav } = data
        navigation.value = nav
        newsList.value = [...newsList.value, ...items]
      })
    } catch (error) {
      console.log(error)
    }
  }

  return {
    navigation,
    newsList,
    getNews
  }
})
