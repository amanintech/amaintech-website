import type * as types from 'lib/types'
import * as React from 'react'

import { PageHead } from './PageHead'

export function Contact({ site }: types.PageProps) {
  const title = site?.name || 'Connect'

  return (
    <>
      <PageHead site={site} title={title} />
      <div className='contact-container'>
        <main className='contact-main'>
          <iframe
            className='contact-iframe'
            title={title}
            frameBorder='0'
            height='100%'
            scrolling='auto'
            src='https://amansharma-amanin.zohobookings.in/portal-embed#/customer/-'
          >
            {' '}
          </iframe>
        </main>
      </div>
    </>
  )
}
