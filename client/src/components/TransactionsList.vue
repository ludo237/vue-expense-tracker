<template>
  <div>
    <h2 class="font-semibold text-2xl border-b mb-4">History</h2>

    <template v-if="isLoading">Loading transactions...</template>

    <template v-else>
      <div v-if="transactions.length === 0">No transactions</div>
      <TransactionListItem v-for="(transaction, index) in transactions" :key="index" :transaction="transaction" v-else />
    </template>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import TransactionListItem from './TransactionListItem';

export default {
  name: 'TransactionsList',

  components: { TransactionListItem },

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
