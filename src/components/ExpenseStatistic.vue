<template>
  <div>{{ expenses }}</div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'ExpenseStatistic',

  computed: mapGetters(['expenses'])
}
</script>
