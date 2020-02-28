<template>
  <font-awesome-icon :icon="icon" :size="size" :spin="spin" />
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
    spin: {
      required: false,
      type: Boolean,
    }
  },

  components: {
    FontAwesomeIcon
  }
}
</script>
