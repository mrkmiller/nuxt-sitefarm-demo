<template>
  <div class="page">
    <TheHeader />
    <nuxt/>
    <TheFooter />
  </div>
</template>

<script>
  import TheHeader from '~/components/TheHeader'
  import TheFooter from '~/components/TheFooter'

  export default {
    components: {
      TheHeader,
      TheFooter,
    }
  }
</script>
