<template>
  <main class="l-main">

    <PageTitle :title="title"/>

    <div class="l-container l-davis-flipped">
      <NavBreadcrumbs :links="breadcrumbs"/>

      <div class="l-content">
        <div class="panel o-box--large">
          <img :src="image" :alt="title" class="u-space-bottom--large">

          <div class="meta-info meta-info--pipe-seperated">
            <span class="meta-info__data">{{ author }}</span>
          </div>
          <div class="byline u-space-bottom">
            Story by {{ date }}
          </div>
          <div class="u-clearfix" v-html="text" />

          <h2 class="heading--auxiliary">Category</h2>
          <NavTags :links="articleCategories" />

          <h2 class="heading--auxiliary">Tags</h2>
          <NavTags :links="tags" />
        </div>
      </div>

      <div class="l-sidebar-second">
        <!--<div class="panel o-box">-->
        <!--<h2 class="panel__title">People</h2>-->
        <!--molecules-listing-->
        <!--</div>-->
        <div class="panel o-box">
          <h2 class="panel__title">Categories</h2>
          <CategoryFilter :links="categories" url="/news" />
        </div>
        <div class="panel o-box">
          <h2 class="panel__title">Related Articles</h2>
          <ArticleList />
        </div>
      </div>

    </div>
  </main>
</template>

<script>
  import PageTitle from '~/components/PageTitle'
  import NavBreadcrumbs from '~/components/NavBreadcrumbs'
  import ArticleList from '~/components/ArticleList'
  import CategoryFilter from '~/components/CategoryFilter'
  import NavTags from '~/components/NavTags'

  export default {
    components: {
      PageTitle,
      NavBreadcrumbs,
      ArticleList,
      CategoryFilter,
      NavTags
    },

    data () {
      return {
        title: 'Sample Article',
        date: 'November 21, 2016',
        author: 'John Doe',
        text: 'This is where the content goes.',
        image: 'https://picsum.photos/1280/720?random',
        tags: [
          {
            url: '/tags',
            title: 'Tag 1'
          },
          {
            url: '/tags',
            title: 'Tag 2'
          }
        ],
        articleCategories: [
          {
            url: '/news?cat=1',
            title: 'Sample Category'
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
        ],
        breadcrumbs: [
          {
            url: '/',
            title: 'Home'
          },
          {
            url: '/news',
            title: 'News'
          },
          {
            url: '',
            title: 'Sample Article'
          }
        ]
      }
    },

    asyncData ({params}) {
      console.log(params)
    }
  }
</script>
