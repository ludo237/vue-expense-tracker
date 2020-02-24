<template>
  <div>{{ income }}</div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'InsomeStatistic',

  computed: mapGetters(['income'])
}
</script>
