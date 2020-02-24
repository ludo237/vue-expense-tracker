<template>
  <div class="flex">
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
