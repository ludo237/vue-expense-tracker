<template>
  <div class="shadow-sm bg-white p-3 rounded text-center">
    <h2 class="font-semibold uppercase">Expenses</h2>
    <Currency :amount="expenses" class="text-2xl justify-center text-red-600" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Currency from './Currency';

export default {
  name: 'ExpenseStatistic',

  components: { Currency },

  computed: mapGetters(['expenses']),
}
</script>
