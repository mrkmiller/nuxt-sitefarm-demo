<template>
  <div class="vm-listing o-media">
    <div v-if="image" class="o-media__figure">
      <nuxt-link :to="url" class="category-brand__thumbnail">
        <img :src="image" :alt="title">
      </nuxt-link>
    </div>
    <div class="o-media__body">
      <h3 class="vm-listing__title"><nuxt-link :to="url">{{ title }}</nuxt-link></h3>
      <div v-if="date" class="vm-listing__submitted">{{ date }}</div>
      {{ text }}
    </div>
  </div>
</template>

<script>
  export default {
    name: 'VmListing',

    props: {
      title: {
        type: String,
        required: true
      },
      url: {
        type: String,
        required: true
      },
      date: {
        type: String,
        default: ''
      },
      text: {
        type: String,
        default: ''
      },
      image: {
        type: String,
        required: true
      }
    }
  }
</script>
