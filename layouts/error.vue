<template>
  <div class="nuxt-error-page">
    <div class="nuxt-error-page__error">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="90"
        height="90"
        fill="#b10124"
        viewBox="0 0 48 48">
        <path
          d="M22 30h4v4h-4zm0-16h4v12h-4zm1.99-10C12.94 4 4 12.95 4 24s8.94 20 19.99 20S44 35.05 44 24 35.04 4 23.99 4zM24 40c-8.84 0-16-7.16-16-16S15.16 8 24 8s16 7.16 16 16-7.16 16-16 16z"/>
      </svg>

      <h3>{{ message }}</h3>
      <p v-if="statusCode === 404">
        <nuxt-link class="btn btn--primary" to="/">Return to Home Page</nuxt-link>
      </p>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'NuxtError',
    props: {
      error: {
        type: Object,
        default: null
      }
    },
    head () {
      return {
        title: this.message,
        meta: [
          {
            name: 'viewport',
            content: 'width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no'
          }
        ]
      }
    },
    computed: {
      statusCode () {
        return (this.error && this.error.statusCode) || 500
      },
      message () {
        return this.error.message
      }
    }
  }
</script>

<style>
  .nuxt-error-page {
    display: flex;
    justify-content: center;
    align-content: center;
    text-align: center;
    padding: 5em 0;
  }

  .nuxt-error-page__error {
    max-width: 450px;
  }

  .nuxt-error-page__error-link {
    text-decoration: none;
    color: #b10124;
  }
</style>
