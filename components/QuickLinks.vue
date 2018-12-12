<template>
  <div>
    <h2>
      <a
        href="#"
        class="quick-links__title"
        aria-controls="quick-links"
        aria-expanded="false"
        aria-label="Toggle Quick Links Menu">
        Quick Links<NavSubmenuToggle />
      </a>
    </h2>
    <nav
      id="quick-links"
      class="quick-links u-hidden--visually quick-links--home-site quick-links--two-columns"
      aria-label="Quick Links Menu">
      <ul class="menu" data-menu-name="menu-quick-links">
        <li><a href="">myucdavis</a></li>
        <li><a href="">myadmissions</a></li>
        <li><a href="">Make a Gift to UC Davis</a></li>
        <li><a href="">Calendar</a></li>
        <li><a href="">Campus Map</a></li>
        <li><a href="">Locations &amp; Parking</a></li>
        <li><a href="">Visit</a></li>
        <li><a href="">Apply</a></li>
        <li><a href="">Jobs</a></li>
        <li><a href="">Athletics</a></li>
        <li><a href="">Academic Dates</a></li>
        <li><a href="">SmartSite</a></li>
        <li><a href="">Course Catalog</a></li>
        <li><a href="">Schedule Builder</a></li>
        <li><a href="">Student Health</a></li>
        <li><a href="">Alumni</a></li>
        <li><a href="">UC Davis Stores</a></li>
      </ul>
    </nav>
  </div>
</template>

<script>
  import NavSubmenuToggle from '~/components/NavSubmenuToggle'

  export default {
    name: 'QuickLinks',

    components: {
      NavSubmenuToggle
    }
  }
</script>
