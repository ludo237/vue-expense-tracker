<template>
  <div class="font-semibold flex items-center justify-center">
    <span class="mr-1" v-text="amount" />
    <Icon icon="euro-sign" size="xs" />
  </div>
</template>

<script>
import Icon from './Icon';

export default {
  name: 'Currency',

  props: {
    amount: {
      required: true,
    }
  },

  components: { Icon }
}
</script>
