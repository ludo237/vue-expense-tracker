<template>
  <div>
    <h2 class="font-semibold text-2xl border-b mb-4">History</h2>

    <loader v-if="isLoading" />

    <template v-else>
      <EmptyTransactionList v-if="transactions.length === 0" />
      <TransactionListItem v-for="(transaction, index) in transactions" :key="index" :transaction="transaction" v-else />
    </template>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import Loader from './Loader';

export default {
  name: 'TransactionsList',

  components: {
    Loader,
    EmptyTransactionList: () => import('./EmptyTransactionList'),
    TransactionListItem: () => import('./TransactionListItem')
  },

  data: () => ({
    isLoading: true,
  }),

  mounted() {
    this
      .fetch()
      .finally(() => this.isLoading = false);
  },

  methods: mapActions(['fetch']),

  computed: mapState({
    transactions: ({ transactions }) => transactions,
  }),
}
</script>
