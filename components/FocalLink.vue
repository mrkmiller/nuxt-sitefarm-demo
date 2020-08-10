<template>
  <a :href="url" class="focal-link">
    <div
      v-if="icon"
      class="focal-link__figure category-brand__background focal-link__icon"
    >
      <i :class="icon" class="fa-2x" />
    </div>
    <div v-else class="focal-link__figure">
      <img :src="image" :alt="title" />
    </div>

    <div class="focal-link__body">
      <strong>{{ title }}</strong>
    </div>
  </a>
</template>

<script>
export default {
  name: 'FocalLink',

  props: {
    title: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
    icon: {
      type: String,
      default: '',
    },
    image: {
      type: String,
      default: '',
    },
  },
}
</script>
