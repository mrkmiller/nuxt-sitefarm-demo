<template>
  <a :href="url" class="vertical-link">
    <div :class="{'vertical-link--circle': icon}">
      <div class="vertical-link__figure">
        <i v-if="icon" :class="icon" class="vertical-link__image fa-3x" />
        <img v-else :src="image" :alt="title">
      </div>

      <div class="vertical-link__title">
        {{ title }}
      </div>
    </div>
  </a>
</template>

<script>
  export default {
    name: 'VerticalLink',

    props: {
      title: {
        type: String,
        required: true
      },
      url: {
        type: String,
        required: true
      },
      icon: {
        type: String,
        default: ''
      },
      image: {
        type: String,
        default: ''
      }
    }
  }
</script>
