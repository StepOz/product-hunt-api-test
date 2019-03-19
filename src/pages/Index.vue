<template>
  <q-page class="q-py-sm">
    <div class="ph-container">
      <h1 class="q-display-2 text-left">The best new products, every day</h1>

      <section id="filter-search" class="flex justify-start">
        <q-select
          class="q-mr-sm"
          inverted
          color="primary"
          v-model="select"
          float-label="Hunt the products for"
          radio
          :options="selectOptions"
        />
      </section>

      <stats-block :stats="stats"></stats-block>

      <products-block :products="products"></products-block>
    </div>
  </q-page>
</template>

<style>
</style>

<script>
import StatsBlock from '../components/StatsBlock'
import ProductsBlock from '../components/ProductsBlock'
import Options from '../assets/data/options'

export default {
  name: 'PageIndex',
  components: {
    'stats-block': StatsBlock,
    'products-block': ProductsBlock
  },
  data () {
    return {
      search: '',
      select: 0,
      selectOptions: Options.selectDay
    }
  },
  watch: {
    select (val) {
      let query = this.selectOptions.find(item => {
        return item.value === val
      })
      this.$router.replace(`/?day=${query.label}`)
      this.$store.dispatch('product/getAllProducts', val)
    }
  },
  created () {
    let query = this.$route.query.day
    if (query) {
      let index = this.selectOptions.findIndex(item => {
        return item.label.toLowerCase() === query.toLowerCase().replace(/_/gi, ' ')
      })
      this.select = index > -1 ? index : 0
    }
    this.$store.dispatch('product/getAllProducts')
  },
  computed: {
    products () {
      return this.$store.getters['product/products']
    },
    stats () {
      let st = this.$store.getters['product/stats']

      return [
        {
          label: 'Posts',
          icon: 'important_devices',
          number: st.postsN
        },
        {
          label: 'Votes',
          icon: 'how_to_vote',
          number: st.votesN
        },
        {
          label: 'Comments',
          icon: 'chat',
          number: st.commentsN
        },
        {
          label: 'Markers',
          icon: 'stars',
          number: st.makersN
        }
      ]
    }
  }
}
</script>

<style>
#filter-search {
  position: sticky;
  top: 60px;
  z-index: 9;
}
</style>
