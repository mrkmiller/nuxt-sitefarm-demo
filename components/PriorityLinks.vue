<template>
  <div class="priority-links">
    <div v-for="n in 6" :key="n" class="priority-links__item">
      <FocalLinkVertical
        url="https://sitefarm.ucdavis.edu"
        title="Link to SiteFarm"
        icon="fas fa-bolt"
      />
    </div>
  </div>
</template>

<script>
import FocalLinkVertical from '~/components/FocalLinkVertical'

export default {
  name: 'PriorityLinks',

  components: {
    FocalLinkVertical,
  },
}
</script>
