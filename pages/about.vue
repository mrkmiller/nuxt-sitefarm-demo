<template>
  <main class="l-main">

    <PageTitle title="About Us" />

    <div class="l-container l-davis-flipped">
      <NavBreadcrumbs :links="breadcrumbs" />

      <div class="l-content">
        <div class="panel o-box--large">
          <p>This is where all the content will go.</p>
        </div>
      </div>

      <div class="l-sidebar-second">
        <div class="panel">
          <NavSubmenu :links="subnav" />
        </div>
        <div class="panel panel--transparent panel--auxilary">
          <h2 class="panel__title">Follow Us</h2>
          <SocialFollow />
        </div>
      </div>

    </div>
  </main>
</template>

<script>
  import PageTitle from '~/components/PageTitle'
  import NavBreadcrumbs from '~/components/NavBreadcrumbs'
  import NavSubmenu from '~/components/NavSubmenu'
  import SocialFollow from '~/components/SocialFollow'

  export default {
    components: {
      PageTitle,
      NavBreadcrumbs,
      NavSubmenu,
      SocialFollow,
    },

    data () {
      return {
        breadcrumbs: [
          {
            url: '/',
            title: 'Home'
          },
          {
            url: '',
            title: 'About'
          }
        ],
        subnav: [
          {
            url: '/',
            title: 'Home'
          },
          {
            url: '',
            title: 'About',
            current: true
          },
          {
            url: '/news',
            title: 'News'
          }
        ]
      }
    }
  }
</script>
