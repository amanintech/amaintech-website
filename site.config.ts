import { siteConfig } from './lib/site-config'

export default siteConfig({
  // the site's root Notion page (required)
  rootNotionPageId: 'd8f34c3e01814a809c6a036c500a6d3b',

  // if you want to restrict pages to a single notion workspace (optional)
  // (this should be a Notion ID; see the docs for how to extract this)
  rootNotionSpaceId: null,

  // basic site info (required)
  name: 'Lamatic.ai | Fully managed GenAI stack to build reliable apps with LLM',
  domain: 'Lamatic.ai',
  author: '',

  // open graph metadata (optional)
  description: 'Fully managed GenAI stack to build reliable apps with LLM',

  // social usernames (optional)
  twitter: '',
  github: '',
  linkedin: '',
  // newsletter: '#', // optional newsletter URL
  // youtube: '#', // optional youtube channel name or `channel/UCGbXXXXXXXXXXXXXXXXXXXXXX`

  // default notion icon and cover images for site-wide consistency (optional)
  // page-specific values will override these site-wide defaults
  defaultPageIcon: 'https://lamatic.ai/assets/images/favicon.png?v=21ed87d4',
  defaultPageCover: null,
  defaultPageCoverPosition: 0.5,

  // whether or not to enable support for LQIP preview images (optional)
  isPreviewImageSupportEnabled: true,

  // whether or not redis is enabled for caching generated preview images (optional)
  // NOTE: if you enable redis, you need to set the `REDIS_HOST` and `REDIS_PASSWORD`
  // environment variables. see the readme for more info
  isRedisEnabled: false,

  // map of notion page IDs to URL paths (optional)
  // any pages defined here will override their default URL paths
  // example:
  //
  // pageUrlOverrides: {
  //   '/foo': '067dd719a912471ea9a3ac10710e7fdf',
  //   '/bar': '0be6efce9daf42688f65c76b89f8eb27'
  // }
  pageUrlOverrides: null,

  // whether to use the default notion navigation style or a custom one with links to
  // important pages
  navigationStyle: 'custom',
   navigationLinks: [
    {
    title: '🎯 Goal',
    pageId: 'd7496259ebde4828963558c4106a1b3d'
  },
    {
       title: '🏗 Project',
       pageId: 'b46bf64bdd9b4ff3a1eca47f80e714aa'
     },

     {
            title: '🤝 Join',
            pageId: 'c79115a4816047469198048605b65e27'
          }]

})

