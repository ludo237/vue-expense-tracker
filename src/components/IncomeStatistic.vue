<template>
  <div class="shadow-sm bg-white p-3 rounded text-center">
    <h2 class="font-semibold uppercase">Income</h2>
    <Currency :amount="income" class="text-2xl text-green-600" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import Currency from './Currency';

export default {
  name: 'InsomeStatistic',

  components: { Currency },

  computed: mapGetters(['income'])
}
</script>
