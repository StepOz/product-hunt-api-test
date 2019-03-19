import axios from 'axios'

let headers = {
  'Accept': 'application/json',
  'Content-Type': 'application/json',
  'Authorization': `Bearer ${process.env.DEV ? 'd5c0c0a62d2c67211b043ed39bf70a5930821905aa7ec812dc4a1d9f0792aca7' : process.env.PH_TOKEN}`
}

export function getAllProducts ({ commit, rootState }, payload) {
  commit('SET_PRODUCTS', [])
  commit('SET_STATS', {})
  let queryDaysAgo = payload ? `days_ago=${payload}` : ''
  let url = `/v1/posts?${queryDaysAgo}`
  axios({
    baseURL: 'https://api.producthunt.com',
    method: 'GET',
    url: url,
    headers: headers
  }).then((response) => {
    if (response.data && response.status === 200) {
      let allProducts = response.data.posts
      commit('SET_PRODUCTS', allProducts)
      let stats = {
        postsN: allProducts.length,
        commentsN: allProducts.reduce((ac, cur) => ac + cur.comments_count, 0),
        votesN: allProducts.reduce((ac, cur) => ac + cur.votes_count, 0),
        makersN: allProducts.reduce((ac, cur) => ac + cur.makers.length, 0)
      }
      commit('SET_STATS', stats)
    }
  })
}
