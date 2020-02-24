<template>
  <ul>
    <TransactionListItem v-for="(transaction, index) in transactions" :key="index" :transaction="transaction" />
  </ul>
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
