<template>
  <section class="latest-news">
    <VmTeaser
      v-for="n in count"
      :key="n"
      :category="{url: '/news?cat=1', title: 'Sample Category'}"
      title="I'm an interesting article"
      url="/news/sample-article"
      author="John Doe"
      date="June 30, 2015"
      image="https://picsum.photos/135/135?random"
    >
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
    </VmTeaser>

    <NavPager :count="4" />
  </section>
</template>

<script>
  import VmTeaser from '~/components/VmTeaser'
  import NavPager from '~/components/NavPager'

  export default {
    name: 'LatestNews',

    components: {
      VmTeaser,
      NavPager
    },

    props: {
      count: {
        type: Number,
        default: 3
      }
    }
  }
</script>
