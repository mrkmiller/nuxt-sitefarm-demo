<template>
  <nav id="primary-nav" class="primary-nav" aria-label="Main Menu">
    <ul class="menu">
      <li><a href="#">About Us<NavSubmenuToggle /></a>
        <ul class="menu">
          <li><a href="#">Our Story</a></li>
          <li><a href="#">Initiatives</a></li>
          <li><a href="#">Facts &amp; Rankings<NavSubmenuToggle /></a>
            <ul class="menu">
              <li><a href="#">Child Item</a></li>
              <li><a href="#">Child Item 2</a></li>
            </ul>
          </li>
          <li><a href="#">Locations &amp; Maps</a></li>
          <li><a href="#">Visit UC Davis</a></li>
          <li><a href="#">UC Davis Health</a></li>
          <li><a href="#">Administration</a></li>
        </ul>
      </li>
      <li><a href="#">Admissions</a></li>
      <li><a href="#">Academics</a></li>
      <li><a href="3">Research</a></li>
      <li><a href="#">Campus Life</a></li>
      <li><a href="#">News</a></li>
    </ul>
  </nav>
</template>

<script>
  import NavSubmenuToggle from '~/components/NavSubmenuToggle'

  export default {
    name: 'NavPrimary',

    components: {
      NavSubmenuToggle
    }
  }
</script>
