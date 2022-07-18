

## Intro

This repo is what I use to power my personal blog and portfolio site [amanin.tech](https://amanin.tech).

It uses Notion as a CMS, [react-notion-x](https://github.com/NotionX/react-notion-x), [Next.js](https://nextjs.org/), and [Vercel](https://vercel.com).


## Setup

**All config is defined in [site.config.ts](./site.config.ts).**

This project requires a recent version of Node.js (>= 14.17).

1. Fork / clone this repo
2. Change a few values in [site.config.ts](./site.config.ts)
3. `npm install`
4. `npm run dev` to test locally
5. `npm run deploy` to deploy to vercel 💪

I tried to make configuration as easy as possible — All you really need to do to get started is edit `rootNotionPageId`.

We recommend duplicating the [default page](https://notion.so/7875426197cf461698809def95960ebf) as a starting point, but you can use any public notion page you want.

Make sure your root Notion page is **public** and then copy the link to your clipboard. Extract the last part of the URL that looks like `7875426197cf461698809def95960ebf`, which is your page's Notion ID.

In order to find your Notion workspace ID (optional), just load any of your site's pages into your browser and open up the developer console. There will be a global variable that you can access called `block` which is the Notion data for the current page. If you enter `block.space_id`, it will print out your page's workspace ID.

I recommend setting up a collection on your home page that contains all of your articles / projects / content. There are no structural constraints on your Notion workspace, however, so feel free to add content as you normally would in Notion.

## URL Paths

The app defaults to slightly different URL paths in dev vs prod (though pasting any dev pathname into prod will work and vice-versa).

In development, it will use `/nextjs-notion-blog-d1b5dcf8b9ff425b8aef5ce6f0730202` which is a slugified version of the page's title suffixed with its Notion ID. I've found that it's really useful to always have the Notion Page ID front and center during local development.

In production, it will use `/nextjs-notion-blog` which is a bit nicer as it gets rid of the extra ID clutter.

The mapping of Notion ID to slugified page titles is done automatically as part of the build process. Just keep in mind that if you plan on changing page titles over time, you probably want to make sure old links will still work, and we don't currently provide a solution for detecting old links aside from Next.js's built-in [support for redirects](https://nextjs.org/docs/api-reference/next.config.js/redirects).

See [mapPageUrl](./lib/map-page-url.ts) and [getCanonicalPageId](https://github.com/NotionX/react-notion-x/blob/master/packages/notion-utils/src/get-canonical-page-id.ts) for more details.

You can override the default slug generation on a per-page basis by adding a `Slug` text property to your database. Any page which has a `Slug` property will use that as its slug.

NOTE: if you have multiple pages in your workspace with the same slugified name, the app will throw an error letting you know that there are duplicate URL pathnames.


