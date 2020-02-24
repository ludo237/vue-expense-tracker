<template>
  <div>
    <h1 class="font-bold text-4xl mb-5 text-left">Expense Tracker</h1>

    <div class="font-semibold text-2xl">Your Balance</div>
    <div class="w-32">
      <Currency :amount="balance" class="text-3xl" />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import Currency from './Currency';

export default {
  name: 'Header',

  components: { Currency },

  computed: mapGetters(['balance']),
}
</script>
