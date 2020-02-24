<template>
  <div class="w-full px-2 lg:w-1/3 lg:mx-auto lg:px-0">
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
