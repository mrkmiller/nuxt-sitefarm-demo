<template>
  <section class="hero-banner">
    <div class="hero-banner__image">
      <img :src="image" alt="Hero Banner Image" />
    </div>

    <div class="hero-banner__body">
      <div class="hero-banner__title">
        <slot name="title" />
      </div>

      <div class="hero-banner__summary">
        <p><slot name="summary" /></p>
      </div>

      <div class="hero-banner__button-group">
        <a
          v-if="btnVideo"
          href="#"
          class="hero-banner__button hero-banner__video-play"
          >Play Video</a
        >
        <a href="" class="hero-banner__button">{{ btnText }}</a>
      </div>
    </div>

    <div v-if="btnVideo" class="hero-banner__video-popup u-hidden">
      <iframe
        :src="videoUrl"
        width="560"
        height="315"
        frameborder="0"
        allowfullscreen
      />
    </div>
  </section>
</template>

<script>
export default {
  name: 'InfoCopyright',

  props: {
    image: {
      type: String,
      required: true,
    },
    btnText: {
      type: String,
      default: 'Click Here',
    },
    btnVideo: {
      type: Boolean,
      default: false,
    },
    videoUrl: {
      type: String,
      default: '',
    },
  },

  // data () {
  //   return {
  //     image: 'http://placehold.it/2000x770',
  //     title: 'Powered by SiteFarm and Nuxt.js',
  //     summary: 'This is a decoupled site using SiteFarm as the backend for data',
  //     btnText: 'click here',
  //     btnVideo: false,
  //     videoUrl: 'https://www.youtube.com/embed/PAwB_t_iM7U'
  //   }
  // }
}
</script>
