<template>
  <div class="home">
    <Header />
    <Banner />
    <NewsList />
    <Footer />
  </div>
</template>

<script setup>
import Header from '@/components/header/AppHeader.vue'
import Footer from '@/components/footer/AppFooter.vue'
import Banner from '@/components/banner/AppBanner.vue'
import NewsList from '@/components/news/NewsList.vue'
</script>
