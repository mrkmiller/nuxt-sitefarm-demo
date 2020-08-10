<template>
  <nuxt-link :to="url" class="vm-spotlight">
    <h3 class="vm-spotlight__body">
      <div class="vm-spotlight__callout category-brand__text--knock-out">
        {{ callout }}
      </div>
      <div class="vm-spotlight__title">{{ title }}</div>
    </h3>
    <div class="vm-spotlight__image">
      <div class="vm-spotlight__indicator category-brand__background" />
      <img :src="image" :alt="title" />
    </div>
  </nuxt-link>
</template>

<script>
export default {
  name: 'VmSpotlight',

  props: {
    title: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
    callout: {
      type: String,
      default: '',
    },
    image: {
      type: String,
      required: true,
    },
  },
}
</script>
