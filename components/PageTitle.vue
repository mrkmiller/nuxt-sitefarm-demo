<template>
  <div>
    <div v-if="!image" class="page-title">
      <h1 class="page-title__title category-brand__text--knock-out">{{ title }}</h1>
    </div>

    <div v-else class="page-title page-title--banner">
      <div class="page-title__title--nested">
        <h1 class="page-title__title category-brand__text--knock-out">{{ title }}</h1>
      </div>
      <img :src="image" :alt="title">
    </div>
  </div>
</template>

<script>
  export default {
    name: 'PageTitle',

    props: {
      title: {
        type: String,
        required: true
      },
      image: {
        type: String,
        default: ''
      }
    }
  }
</script>
