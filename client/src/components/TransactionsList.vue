<template>
  <div>
    <h2 class="font-semibold text-2xl border-b mb-4">History</h2>

    <TransactionListItem v-for="(transaction, index) in transactions" :key="index" :transaction="transaction" />
  </div>
</template>

<script>
import { mapState } from 'vuex';
import TransactionListItem from './TransactionListItem';

export default {
  name: 'TransactionsList',

  components: { TransactionListItem },

  computed: mapState({
    transactions: ({ transactions }) => transactions,
  }),
}
</script>
