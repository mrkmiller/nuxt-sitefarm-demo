<template>
  <main class="l-main">

    <PageTitle title="News"/>

    <div class="l-container l-davis-flipped">
      <NavBreadcrumbs :links="breadcrumbs"/>

      <div class="l-content">
        <div class="panel o-box--large">
          <h2 class="panel__title">Latest News</h2>
          <LatestNews/>
        </div>
      </div>

      <div class="l-sidebar-second">
        <div class="panel o-box">
          <h2 class="panel__title">Top Stories</h2>
          <ArticleList/>
        </div>
        <div class="panel o-box">
          <h2 class="panel__title">Categories</h2>
          <CategoryFilter :links="categories" url="/news" />
        </div>
      </div>

    </div>
  </main>
</template>

<script>
  import PageTitle from '~/components/PageTitle'
  import NavBreadcrumbs from '~/components/NavBreadcrumbs'
  import LatestNews from '~/components/LatestNews'
  import ArticleList from '~/components/ArticleList'
  import CategoryFilter from '~/components/CategoryFilter'

  export default {
    components: {
      PageTitle,
      NavBreadcrumbs,
      LatestNews,
      ArticleList,
      CategoryFilter
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
            title: 'News'
          }
        ],

        categories: [
          {
            id: '1',
            title: 'Sample Category'
          },
          {
            id: '2',
            title: 'University'
          },
          {
            id: '3',
            title: 'General'
          }
        ]
      }
    },

    asyncData ({params}) {
      console.log(params)
    }
  }
</script>
