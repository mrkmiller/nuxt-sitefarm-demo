<template>
  <header class="l-header header" role="banner">
    <div class="header__bar">
      <a
        href="#primary-nav"
        class="nav-toggle js-nav-toggle"
        aria-controls="primary-nav"
        aria-expanded="false"
        aria-label="Toggle Main Menu">
        <span class="nav-toggle__icon nav-toggle__icon--menu">Menu</span>
      </a>
      <div class="header__fixed-site-name"><a href="/">Nuxt.js SiteFarm Demo</a></div>
      <div class="l-container">
        <UcdLogo />
      </div>
    </div>
    <div class="header__branding">
      <div class="l-container o-media">
        <div class="o-media__figure">
          <SiteLogo />
        </div>
        <div class="o-media__body">
          <h1 class="header__site-name">Nuxt.js SiteFarm Demo</h1>
          <div class="header__slogan">Decouple your SiteFarm for total control!</div>
        </div>
      </div>
    </div>
    <div class="l-navbar navbar menu--closed">
      <div class="l-container--navigation off-canvas off-canvas--left">
        <div class="off-canvas__container">
          <div class="l-search-popup">
            <SearchPopup />
          </div>
          <NavPrimary />
          <div class="l-quick-links">
            <QuickLinks />
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
  import SiteLogo from '~/components/SiteLogo'
  import UcdLogo from '~/components/UcdLogo'
  import QuickLinks from '~/components/QuickLinks'
  import NavPrimary from '~/components/NavPrimary'
  import SearchPopup from '~/components/SearchPopup'

  export default {
    name: 'TheHeader',

    components: {
      SiteLogo,
      UcdLogo,
      QuickLinks,
      NavPrimary,
      SearchPopup
    }
  }
</script>
