<template>
  <ol v-if="links" class="breadcrumbs">
    <li v-for="link in links" :key="link.title">
      <template v-if="!link.url">{{ link.title }}</template>
      <nuxt-link v-else :to="link.url">{{ link.title }}</nuxt-link>
    </li>
  </ol>
</template>

<script>
  export default {
    name: 'NavBreadcrumbs',

    props: {
      links: {
        type: Array,
        default: () => []
      }
    }
  }
</script>
