import { Button, Card, Prose } from '@newhighsco/chipset'
import type { NextPage } from 'next'
import { LogoJsonLd, SocialProfileJsonLd } from 'next-seo'
import urlJoin from 'url-join'

import PageContainer from '~components/PageContainer'
import config from '~config'

const { name, title, logo, socialLinks, url } = config
const meta = { canonical: urlJoin(url, '/'), customTitle: true, title }

const HomePage: NextPage = () => (
  <PageContainer meta={meta}>
    <SocialProfileJsonLd
      type="Organization"
      name={name}
      url={url}
      sameAs={Object.values(socialLinks)}
    />
    {logo?.bitmap && <LogoJsonLd url={url} logo={urlJoin(url, logo.bitmap)} />}

    <Prose>
      <h1>Delightful homebrew content for D&D 5e</h1>
      <h2>Delightful homebrew content for D&D 5e</h2>
      <Button>Spells</Button>
    </Prose>

    <div
      style={{
        padding: '10em 0',
        // backgroundImage: 'linear-gradient(#222, #000)',
        background: '#031413',
        margin: '5em 0 0'
      }}
    >
      <div style={{ display: 'flex', gap: 60, justifyContent: 'center' }}>
        <Card
          href="/"
          heading="Magefayre"
          image={{
            src: 'https://static.showit.co/450/easE-IIqQKWeRPJr8rsTvw/227814/101.png',
            ratio: '40:29',
            fill: true
          }}
        >
          Content
        </Card>
        <Card
          href="https://druidcraft.magefayre.com/"
          heading="Druidcraft"
          image={{
            src: 'https://images.unsplash.com/photo-1605343215901-1242b8c2a55c',
            ratio: '40:29',
            fill: true
          }}
        >
          Never struggle with choosing a Wild Shape again
        </Card>
        <Card
          href="/"
          heading="Heading"
          image={{
            src: 'https://static.showit.co/450/easE-IIqQKWeRPJr8rsTvw/227814/101.png',
            ratio: '40:29',
            fill: true
          }}
        >
          Content
        </Card>
      </div>
    </div>
  </PageContainer>
)

export default HomePage
