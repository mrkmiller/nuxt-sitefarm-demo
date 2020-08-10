<template>
  <section class="event-list">
    <VmListing
      v-for="n in count"
      :key="n"
      title="You should come see this"
      url="/"
      date="April 3, 2020"
      image="https://picsum.photos/65/65?random"
    />
    <a href="/">View All &raquo;</a>
  </section>
</template>

<script>
import VmListing from '~/components/VmListing'

export default {
  name: 'EventList',

  components: {
    VmListing,
  },

  props: {
    count: {
      type: Number,
      default: 3,
    },
  },
}
</script>
