<template>
  <div class="w-full px-2 lg:w-1/3 lg:mx-auto lg:px-0">
    <Header />
    <Statistics class="mb-5" />
    <Form class="mb-5" />
    <TransactionsList />
  </div>
</template>

<script>
import Header from './components/Header';
import Statistics from './components/Statistics';
import TransactionsList from './components/TransactionsList';
import Form from './components/Form';

export default {
  name: 'App',

  components: { Header, Statistics, TransactionsList, Form }
};
</script>
