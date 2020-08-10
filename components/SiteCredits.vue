<template>
  <div class="site-credits">
    <div class="site-credits__logo">
      <SiteLogo />
    </div>
    <p>
      SiteFarm Website Builder<br />
      1234 Mrak Hall | One Shields Avenue<br />
      Davis, CA 95616<br />
      Phone: (530) 456-7890<br />
      Fax: (530) 123-4567<br />
    </p>
  </div>
</template>

<script>
import SiteLogo from '~/components/SiteLogo'

export default {
  name: 'SiteCredits',

  components: {
    SiteLogo,
  },
}
</script>
