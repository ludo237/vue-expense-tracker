<template>
  <li>{{ transaction.id }} {{ transaction.name }} {{ transaction.amount }}</li>
</template>

<script>
export default {
  name: 'TransactionListItem',

  props: {
    transaction: {
      required: true,
      type: Object,
    }
  }
}
</script>
