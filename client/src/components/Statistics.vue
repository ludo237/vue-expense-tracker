<template>
  <div class="grid grid-flow-row grid-rows-2 sm:grid-rows-1 grid-cols-1 sm:grid-cols-2 gap-3">
    <IncomeStatistic />
    <ExpenseStatistic />
  </div>
</template>

<script>
import IncomeStatistic from './IncomeStatistic';
import ExpenseStatistic from './ExpenseStatistic';

export default {
  name: 'Statistics',

  components: { IncomeStatistic, ExpenseStatistic }
}
</script>
