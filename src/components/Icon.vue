<template>
  <font-awesome-icon :icon="icon" :size="size" />
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

export default {
  name: 'Icon',

  props: {
    icon: {
      required: true,
      type: String,
    },
    size: {
      required: false,
      type: String,
      default: null,
    },
  },

  components: {
    FontAwesomeIcon
  }
}
</script>
