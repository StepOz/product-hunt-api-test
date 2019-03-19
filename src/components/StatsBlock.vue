<template>
  <section class="stats-block q-my-xl">
    <div class="row gutter-xl">
      <div
        class="stats-child text-left col-12 col-sm-6 col-md-3 flex flex-center"
        v-for="(st, stkey) in stats"
        :key="`stats-child-${st.label}-${stkey}`"
      >
        <div>
          <q-icon
            color="primary"
            size="1.8em"
            :name="st.icon"
            class="q-mb-sm"
          ></q-icon>
          <div class="q-display-1 stats-child_number">
            <q-spinner-dots v-if="!st.number"/>
            {{ st.number }}
          </div>
          <div class="q-caption stats-child_label uppercase">{{ st.label }}</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ComponentStatsBlock',
  props: ['stats']
}
</script>

<style>
</style>
