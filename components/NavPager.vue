<template>
  <ul v-if="count" class="pager">
    <li
      v-for="index in count"
      :key="index"
      :class="{ 'pager__item--static pager__item--current': index === current }"
      class="pager__item"
    >
      <template v-if="index === current">{{ index }}</template>
      <nuxt-link v-else :to="'/news?page=' + index">{{ index }}</nuxt-link>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'NavPager',

  props: {
    count: {
      type: Number,
      default: 0,
    },
    current: {
      type: Number,
      default: 1,
    },
  },
}
</script>
