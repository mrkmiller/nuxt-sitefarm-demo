<template>
  <article class="o-media vm-teaser">
    <div
      v-if="image"
      class="o-media__figure vm-teaser__figure category-brand__thumbnail"
    >
      <nuxt-link :to="url">
        <img :src="image" :alt="title" />
      </nuxt-link>
    </div>

    <div class="o-media__body">
      <h3 class="vm-teaser__title">
        <nuxt-link :to="url">{{ title }}</nuxt-link>
      </h3>
      <ul class="vm-teaser__byline">
        <li>by {{ author }}</li>
        <li>{{ date }}</li>
      </ul>

      <ul class="vm-teaser__categories">
        <li>
          <nuxt-link :to="category.url">{{ category.title }}</nuxt-link>
        </li>
      </ul>

      <div class="vm-teaser__summary"><slot /></div>
    </div>
  </article>
</template>

<script>
export default {
  name: 'VmTeaser',

  props: {
    title: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
    date: {
      type: String,
      default: '',
    },
    author: {
      type: String,
      default: '',
    },
    category: {
      type: Object,
      default: () => {},
    },
    image: {
      type: String,
      required: true,
    },
  },
}
</script>
