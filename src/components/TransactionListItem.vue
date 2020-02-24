<template>
  <div class="shadow-sm bg-white p-3 rounded mb-3 flex border-r-8" :class="borderColor">
    <div class="flex-grow">{{ transaction.description }}</div>
    <Currency :amount="transaction.amount" />
  </div>
</template>

<script>
import Currency from './Currency';

export default {
  name: 'TransactionListItem',

  props: {
    transaction: {
      required: true,
      type: Object,
    }
  },

  components: { Currency },

  computed: {
    borderColor() {
      return this.transaction.amount > 0
        ? ['border-green-500']
        : ['border-red-500']
    }
  }
}
</script>
