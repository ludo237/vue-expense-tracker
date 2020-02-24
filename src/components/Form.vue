<template>
  <div>
    <h2 class="font-semibold text-2xl border-b mb-4">Add Transaction</h2>

    <ValidationObserver ref="form" slim v-slot="{ passes, invalid }">
      <form @submit.prevent="passes(queueTransaction())" role="form">
        <fieldset class="my-2">
          <label class="block" for="description">
            <span class="text-gray-700">Description</span>

            <ValidationProvider rules="required" vid="description" name="Description" mode="eager" v-slot="{ classes, errors }">
              <input
                type="text"
                class="border border-gray-400 focus:border-blue-500 bg-white text-gray-900 appearance-none inline-block w-full text-gray-900 border rounded py-3 px-4 focus:outline-none"
                :class="classes"
                v-model="description"
                placeholder="Add a description to it..."
                required
              />

              <span class="text-red-700">{{ errors[0] }}</span>
            </ValidationProvider>
          </label>
        </fieldset>

        <fieldset class="my-2">
          <label class="block" for="amount">
            <span class="text-gray-700">Amount (negative or positive)</span>
            <ValidationProvider rules="required|is_not:0" vid="amount" name="Amount" mode="eager" v-slot="{ classes, errors }">
              <input
                type="number"
                class="border border-gray-400 focus:border-blue-500 bg-white text-gray-900 appearance-none inline-block w-full text-gray-900 border rounded py-3 px-4 focus:outline-none"
                :class="classes"
                v-model="amount"
                placeholder="Add the amount"
                required
              />
              <span class="text-red-700">{{ errors[0] }}</span>
            </ValidationProvider>
          </label>
        </fieldset>

        <div class="flex justify-end my-4">
          <button type="submit" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full" :disabled="invalid">Add</button>
        </div>
      </form>
    </ValidationObserver>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import { extend, ValidationObserver, ValidationProvider } from 'vee-validate';
import { required, is_not, numeric } from 'vee-validate/dist/rules';

extend('required', required);
extend('is_not', is_not);
extend('numeric', numeric);

export default {
  name: 'Form',

  components: {
    ValidationObserver,
    ValidationProvider
  },

  data: () => ({
    description: '',
    amount: 0,
  }),

  methods: {
    ...mapActions(['addTransaction']),

    queueTransaction() {
      this.addTransaction({ description: this.description, amount: this.amount });

      this.$refs.form.reset();
    }
  }
}
</script>
