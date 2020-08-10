<template>
  <main class="l-main">
    <div class="panel">
      <HeroBanner image="https://picsum.photos/2000/770?image=1015">
        <template slot="title">Powered by SiteFarm and Nuxt.js</template>
        <template slot="summary"
          >This is a decoupled site using SiteFarm as the backend for data
        </template>
      </HeroBanner>
      <PriorityLinks />
    </div>

    <div class="l-container l-davis">
      <div class="l-content">
        <div class="panel">
          <VmSpotlight
            url="/"
            image="https://picsum.photos/600/450?image=976"
            title="Ways to keep your garden beautiful"
            callout="10"
          />
        </div>
        <div v-for="n in 2" :key="n" class="panel l-sibling-grid--half">
          <MarketingHighlight
            url="/"
            image="https://picsum.photos/640/480"
            title="Marketing Highlight"
            label="Look!"
            description="I'm here to add more info"
            cta="Click Me"
          />
        </div>
        <div class="panel">
          <YoutubeEmbed video-id="nZZDAzErkIU" />
        </div>
        <div class="panel panel--transparent panel--auxilary">
          <h2 class="panel__title">Follow Us</h2>
          <SocialFollow />
        </div>
      </div>

      <div class="l-sidebar-first">
        <div class="panel o-box panel--icon panel--icon-bullhorn">
          <h2 class="panel__title">Upcoming Events</h2>
          <EventList />
        </div>
        <div class="panel o-box panel--icon panel--icon-bulb">
          <h2 class="panel__title">Top Stories</h2>
          <ArticleList />
        </div>
        <div v-for="n in 3" :key="n" class="panel">
          <FocalLink
            url="https://sitefarm.ucdavis.edu"
            title="Link to SiteFarm"
            icon="fas fa-bolt"
          />
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import HeroBanner from '~/components/HeroBanner'
import PriorityLinks from '~/components/PriorityLinks'
import FocalLink from '~/components/FocalLink'
import SocialFollow from '~/components/SocialFollow'
import YoutubeEmbed from '~/components/YoutubeEmbed'
import VmSpotlight from '~/components/VmSpotlight'
import MarketingHighlight from '~/components/MarketingHighlight'
import ArticleList from '~/components/ArticleList'
import EventList from '~/components/EventList'

export default {
  components: {
    HeroBanner,
    PriorityLinks,
    FocalLink,
    SocialFollow,
    YoutubeEmbed,
    VmSpotlight,
    MarketingHighlight,
    ArticleList,
    EventList,
  },
}
</script>
