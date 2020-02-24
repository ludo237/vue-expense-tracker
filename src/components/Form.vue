<template>
  <div>
    <h2 class="font-semibold text-2xl border-b mb-4">Add Transaction</h2>

    <form @submit.prevent="queueTransaction()" role="form">
      <fieldset class="my-2">
        <label class="block" for="name">
          <span class="text-gray-700">Description</span>
          <input
            type="text"
            class="border border-gray-400 focus:border-blue-500 bg-white text-gray-900 appearance-none inline-block w-full text-gray-900 border rounded py-3 px-4 focus:outline-none"
            v-model="name"
            placeholder="Add a description to it..."
            required
          />
        </label>
      </fieldset>

      <fieldset class="my-2">
        <label class="block" for="amount">
          <span class="text-gray-700">Amount (negative or positive)</span>
          <input
            type="number"
            class="border border-gray-400 focus:border-blue-500 bg-white text-gray-900 appearance-none inline-block w-full text-gray-900 border rounded py-3 px-4 focus:outline-none"
            v-model="amount"
            placeholder="0"
            required
          />
        </label>
      </fieldset>

      <div class="flex justify-end my-4">
        <button type="submit" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full">Add</button>
      </div>
    </form>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'Form',

  data: () => ({
    name: '',
    amount: 0,
  }),

  methods: {
    ...mapActions(['addTransaction']),

    queueTransaction() {
      this.addTransaction({ name: this.name, amount: this.amount });

      this.name = '';
      this.amount = 0;
    }
  }
}
</script>
