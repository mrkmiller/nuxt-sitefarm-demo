<template>
  <footer class="l-footer footer" role="contentinfo">
    <div class="l-container">
      <div class="flex-footer">
        <div class="flex-footer__item">
          <SiteCredits />
        </div>
        <div class="flex-footer__item">
          <h2>Follow Us</h2>
          <SocialFollow />
        </div>
      </div>

      <div class="footer-spacer">
        <hr class="footer-spacer__hr hr-invert" />
        <div class="footer-spacer__logo">
          <UcdLogo />
        </div>
      </div>

      <InfoCopyright />
    </div>
  </footer>
</template>

<script>
import SiteCredits from '~/components/SiteCredits'
import InfoCopyright from '~/components/InfoCopyright'
import UcdLogo from '~/components/UcdLogo'
import SocialFollow from '~/components/SocialFollow'

export default {
  name: 'TheFooter',

  components: {
    SiteCredits,
    InfoCopyright,
    UcdLogo,
    SocialFollow,
  },
}
</script>
