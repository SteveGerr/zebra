import API from './API'

const url = 'http://flems.github.io/test/api'

export default {
  getAllNews (page = '') {
    const concatUrl = page ? `news/${page}/` : 'news'
    return API(url).get(concatUrl)
  }
}
