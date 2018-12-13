<template>
  <div class="sub-nav">
    <h2 v-if="parent" class="sub-nav__title">{{ parent }}</h2>
    <ul class="menu">
      <li v-for="link in links" :key="link.title">
        <nuxt-link :to="link.url" :class="{'sub-nav--active': link.current}">{{ link.title }}</nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'NavSubmenu',

    props: {
      parent: {
        type: String,
        default: ''
      },
      links: {
        type: Array,
        default: () => []
      }
    }
  }
</script>
