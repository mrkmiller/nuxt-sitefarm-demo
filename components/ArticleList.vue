<template>
  <section class="article-list">
    <VmListing
      v-for="n in count"
      :key="n"
      title="I'm an interesting article"
      url="/"
      date="June 30, 2015"
      image="https://picsum.photos/65/65?random"
    />
    <a href="/news">View All &raquo;</a>
  </section>
</template>

<script>
  import VmListing from '~/components/VmListing'

  export default {
    name: 'ArticleList',

    components: {
      VmListing
    },

    props: {
      count: {
        type: Number,
        default: 3
      }
    }
  }
</script>
