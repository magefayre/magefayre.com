import type { NextPage } from 'next'

import PageContainer from '~components/PageContainer'

const meta = {
  title: 'Page not found',
  description: 'Sorry, this page could not be found',
  noindex: true,
  nofollow: true
}

const NotFoundPage: NextPage = () => <PageContainer meta={meta}></PageContainer>

export default NotFoundPage
