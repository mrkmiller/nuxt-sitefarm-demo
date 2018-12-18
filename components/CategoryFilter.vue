<template>
  <ul v-if="links" class="category-filter">
    <li
      v-for="link in links"
      :key="link.title"
      :class="{'category-filter__list-item--active': link.url === current}"
      class="category-filter__list-item"
    >
      <nuxt-link :to="link.url" class="category-filter__link category-brand__circle-icon"><span>{{ link.title }}</span></nuxt-link>
    </li>
  </ul>
</template>

<script>
  export default {
    name: 'CategoryFilter',

    props: {
      links: {
        type: Array,
        default: () => []
      }
    },

    computed: {
      current () {
        return this.$route.fullPath
      }
    }
  }
</script>
