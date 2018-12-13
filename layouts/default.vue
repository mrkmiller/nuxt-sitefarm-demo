<template>
  <div class="page">
    <TheHeader />
    <nuxt/>
    <TheFooter />
  </div>
</template>

<script>
  import TheHeader from '~/components/TheHeader'
  const TheFooter = () => import('~/components/TheFooter')

  export default {
    components: {
      TheHeader,
      TheFooter,
    }
  }
</script>
