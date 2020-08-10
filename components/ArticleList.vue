<template>
  <section class="article-list">
    <VmListing
      v-for="n in count"
      :key="n"
      title="I'm an interesting article"
      url="/news/sample-article"
      date="June 30, 2015"
      image="https://picsum.photos/65/65?random"
    />
    <nuxt-link to="/news">View All &raquo;</nuxt-link>
  </section>
</template>

<script>
import VmListing from '~/components/VmListing'

export default {
  name: 'ArticleList',

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
