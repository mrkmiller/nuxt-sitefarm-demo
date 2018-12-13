<template>
  <a :href="url" class="marketing-highlight">
    <div class="marketing-highlight__image">
      <img :src="image" :alt="title">
    </div>
    <div class="marketing-highlight__body">
      <h3 v-if="label" class="marketing-highlight__type category-brand__text--knock-out"><span>{{ label }}</span></h3>
      <h3 class="marketing-highlight__title category-brand__text">{{ title }}</h3>
      <p>{{ description }}</p>
      <span v-if="cta" class="marketing-highlight__cta category-brand__arrow">{{ cta }}</span>
    </div>
  </a>
</template>

<script>
  export default {
    name: 'MarketingHighlight',

    props: {
      title: {
        type: String,
        required: true
      },
      url: {
        type: String,
        required: true
      },
      label: {
        type: String,
        default: ''
      },
      cta: {
        type: String,
        default: ''
      },
      description: {
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
