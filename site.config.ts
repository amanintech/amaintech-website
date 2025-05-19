import { siteConfig } from './lib/site-config'

export default siteConfig({
  // the site's root Notion page (required)
  rootNotionPageId: 'e43926dc27ec4c4895fe222e8e8a2325',
  // if you want to restrict pages to a single notion workspace (optional)
  // (this should be a Notion ID; see the docs for how to extract this)
  rootNotionSpaceId: null,

  // basic site info (required)
  name: 'Aman Sharma',
  domain: process.env.NEXT_PUBLIC_DOMAIN || 'amanin.tech',
  author: 'Aman Sharma',
  // open graph metadata (optional)
  description: '🚀 SaaS builder, Tech speaker and Entrepreneur',

  // social usernames (optional)
  twitter: 'amanintech',
  github: 'amanintech',
  linkedin: 'amanintech',
  newsletter: 'https://buildandscale.amanin.tech/', // optional newsletter URL
  // youtube: '#', // optional youtube channel name or `channel/UCGbXXXXXXXXXXXXXXXXXXXXXX`

  // default notion icon and cover images for site-wide consistency (optional)
  // page-specific values will override these site-wide defaults
  defaultPageIcon: null,
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
   pageUrlOverrides: {
     '/call': 'a13f0d8b3898412a947a24c08d7f5139',
  //   '/bar': '0be6efce9daf42688f65c76b89f8eb27'
   },
  //pageUrlOverrides: null,

  // whether to use the default notion navigation style or a custom one with links to
  // important pages
  //navigationStyle: 'default'
   navigationStyle: 'custom',
   navigationLinks: [
    {
       title: '🛠 Projects',
       pageId: 'b4a0d2616e1c47468203aea9638a702c'
     },
{
       title: '🧭 Interest',
       pageId: 'a04f53e1ed404e60b44d60c3a52d8f2e'
     },
{
       title: '🗓️ Meet',
       pageId: 'a13f0d8b3898412a947a24c08d7f5139'
     }]

})
