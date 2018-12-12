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
      <div class="header__fixed-site-name"><a href="/">Nuxt SiteFarm Demo</a></div>
      <div class="l-container">atoms-ucd-logo</div>
    </div>
    <div class="header__branding">
      <div class="l-container o-media">
        <div class="o-media__figure">atoms-site-logo</div>
        <div class="o-media__body">
          <h1 class="header__site-name">Nuxt SiteFarm Demo</h1>
          <div class="header__slogan">Decouple your SiteFarm for total control!</div>
        </div>
      </div>
    </div>
    <div class="l-navbar navbar menu--closed">
      <div class="l-container--navigation off-canvas off-canvas--left">
        <div class="off-canvas__container">
          <div class="l-search-popup">
            molecules-search-popup
          </div>
          molecules-primary-nav
          <div class="l-quick-links">
            molecules-quick-links
          </div>
        </div>
      </div>
    </div>
  </header>

</template>

<script>
  export default {
    name: 'TheHeader'
  }
</script>
