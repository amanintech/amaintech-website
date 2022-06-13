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
  description: '24 Y.O. Product builder, Public speaker and mentor.', 
  
  // social usernames (optional)
  twitter: 'amanintech',
  github: 'amanintech',
  linkedin: 'amanintech',
  newsletter: 'https://amanintech.substack.com/', // optional newsletter URL
  // youtube: '#', // optional youtube channel name or `channel/UCGbXXXXXXXXXXXXXXXXXXXXXX`

  // default notion icon and cover images for site-wide consistency (optional)
  // page-specific values will override these site-wide defaults
  defaultPageIcon: 'https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F50b08723-06fe-4b85-b629-dcd79ad2f003%2F1638644413393.jpg?table=block&id=919c6b7b-02bf-45bb-80e4-714e27143848&cache=v2',
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
  //navigationStyle: 'default'
   navigationStyle: 'custom',
   navigationLinks: [
    {
       title: 'About',
       pageId: '2c5ddf687f8547e3af8955120604e3e3'
     },
{
       title: 'Expore',
       pageId: 'c28c43ee60264f008a0247c3ccd82d4e'
     }]
     
})
