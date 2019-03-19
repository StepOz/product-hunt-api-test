<template>
  <section class="products-block q-my-xl">

    <div class="row gutter-sm"  v-if="products.length <= 0">
      <div
        class="col-12 col-md-6 col-lg-4"
        v-for="n in 10"
        :key="`product-child-${n}`"
      >
        <q-card class="product-child q-my-md">
          <q-card-main style="min-height: 250px;" class="flex flex-center">
            <q-spinner-dots/>
          </q-card-main>
        </q-card>
      </div>
    </div>

    <div class="row gutter-sm">
      <div class="col-12 col-md-6 col-lg-4"
        v-for="(p, pkey) in products"
        :key="`product-child-${pkey}`"
      >
        <q-card class="product-child q-my-md">
          <q-card-media>
            <img :src="p.screenshot_url['300px']">
          </q-card-media>
          <q-card-title>
            <q-item multiline class="q-px-none">
              <q-item-main>
                <q-item-tile
                  label
                  lines="1"
                  text-color="primary"
                  :title="p.name"
                  class="q-title text-weight-bold"
                  style="width: 85%;"
                >
                  {{ p.name }}
                </q-item-tile>
                <q-item-tile sublabel> {{ `${p.votes_count} upvotes` }} </q-item-tile>
              </q-item-main>
            </q-item>
          </q-card-title>
          <q-card-main style="min-height: 50px;">
            {{ p.tagline }}
          </q-card-main>
        </q-card>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ComponentProductsBlock',
  props: ['products']
}
</script>

<style>
</style>
