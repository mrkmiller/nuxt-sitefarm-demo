<template>
  <div class="responsive-iframe responsive-iframe--16x9">
    <iframe
      :src="'https://www.youtube.com/embed/' + videoId"
      width="560"
      height="315"
      class="video__iframe"
      frameborder="0"
      allow="autoplay; encrypted-media"
      allowfullscreen
    />
  </div>
</template>

<script>
export default {
  name: 'YoutubeEmbed',

  props: {
    videoId: {
      type: String,
      required: true,
    },
  },
}
</script>
