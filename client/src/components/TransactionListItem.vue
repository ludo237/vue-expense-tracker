<template>
  <div class="relative">
    <a class="absolute bg-red-600 text-white px-1 rounded cursor-pointer" style="left: -1rem;" @click.prevent="removeTransaction(transaction._id)">
      <Icon icon="trash-alt" />
    </a>
    <div class="shadow-sm bg-white p-3 rounded mb-3 flex border-r-8" :class="borderColor">
      <div class="flex-grow">{{ transaction.description }}</div>
      <Currency :amount="transaction.amount" />
    </div>
  </div>
</template>

<script>
import Currency from './Currency';
import Icon from './Icon';
import { mapActions } from 'vuex';

export default {
  name: 'TransactionListItem',

  props: {
    transaction: {
      required: true,
      type: Object,
    }
  },

  components: { Icon, Currency },

  methods: mapActions(['removeTransaction']),

  computed: {
    borderColor() {
      return this.transaction.amount > 0
        ? ['border-green-500']
        : ['border-red-500']
    }
  }
}
</script>
