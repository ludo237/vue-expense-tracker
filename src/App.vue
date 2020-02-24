<template>
  <div class="w-1/3">
    <Header />
    <Statistics />
    <TransactionsList />
  </div>
</template>

<script>
import Header from './components/Header';
import Statistics from './components/Statistics';
import TransactionsList from './components/TransactionsList';

export default {
  name: 'App',

  components: { Header, Statistics, TransactionsList }
};
</script>
