import '~styles/app.scss'

import { AppPage } from '@newhighsco/press-start'
import { type AppProps } from 'next/app'
import type { FC } from 'react'

import config from '~config'
import { default as fonts } from '~styles/font-faces.module.scss'
import theme from '~theme'

const meta = {
  additionalLinkTags: Object.values(fonts).map(fileName => {
    const type = fileName.split('.').at(-1)

    return {
      rel: 'preload',
      href: `/fonts/${fileName}`,
      as: 'font',
      type: `font/${type}`,
      crossOrigin: 'anonymous'
    }
  })
}

const App: FC<AppProps> = props => (
  <AppPage {...props} theme={theme} config={config} meta={meta} />
)

export default App
