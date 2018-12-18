<template>
  <div v-if="links">
    <nuxt-link
      v-for="link in links"
      :key="link.url"
      :to="link.url"
      class="tags__tag"
    >
      {{ link.title }}
    </nuxt-link>
  </div>
</template>

<script>
  export default {
    name: 'NavTags',

    props: {
      links: {
        type: Array,
        default: () => []
      }
    }
  }
</script>
