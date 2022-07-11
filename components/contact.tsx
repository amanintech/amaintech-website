import * as React from 'react'
import * as types from 'lib/types'
import { PageHead } from './PageHead'

import styles from './styles.module.css'

export const Page404: React.FC<types.PageProps> = ({ site, pageId, error }) => {
  const title = site?.name || 'Notion Page Not Found'

  return (
    <>
      <PageHead site={site} title={title} />

      <iframe width='100%' height='750px' src='https://call.amanin.tech/portal-embed#/customer/call' frameborder='0' allowfullscreen='' > </iframe>
    </>
  )
}
