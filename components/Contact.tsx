import * as React from 'react'
import * as types from 'lib/types'
import { PageHead } from './PageHead'

export const Contact: React.FC<types.PageProps> = ({ site }) => {
  const title = site?.name || 'Connect'

  return (
    <>
      <PageHead site={site} title={title} />
<div className="contact-container">
        <main className="contact-main">

      <iframe className="contact-iframe" frameBorder="0"
              height="100%"
              scrolling="auto" src='https://amansharma-amanin.zohobookings.in/portal-embed#/customer/call'> </iframe>

  </main>
      </div>
    </>
  )
}
