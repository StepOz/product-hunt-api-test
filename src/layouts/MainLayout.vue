<template>
  <q-layout view="lHh Lpr lFf">
    <q-layout-header>
      <q-toolbar color="tertiary">
        <div class="ph-container">
          <q-toolbar-title>
            <img src="/statics/producthunt-logo.png" height="35">
          </q-toolbar-title>
        </div>
      </q-toolbar>
    </q-layout-header>

    <q-page-container>
      <router-view />
      <q-ajax-bar color="primary" size="7px" position="bottom"/>
    </q-page-container>
  </q-layout>
</template>

<script>
import { openURL } from 'quasar'

export default {
  name: 'MyLayout',
  data () {
    return {
      leftDrawerOpen: this.$q.platform.is.desktop
    }
  },
  methods: {
    openURL
  }
}
</script>

<style>
</style>
