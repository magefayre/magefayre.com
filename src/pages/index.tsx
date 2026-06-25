import { Button, Card, Grid, Prose } from '@newhighsco/chipset'
import type { NextPage } from 'next'
import { LogoJsonLd, SocialProfileJsonLd } from 'next-seo'

import PageContainer from '~components/PageContainer'
import Section from '~components/Section'
import config from '~config'
import { canonicalUrl } from '~utils/urls'

const { name, title, logo, socialLinks, url } = config
const meta = { canonical: canonicalUrl(), customTitle: true, title }

const HomePage: NextPage = () => (
  <PageContainer meta={meta}>
    <SocialProfileJsonLd
      type="Organization"
      name={name}
      url={url}
      sameAs={Object.values(socialLinks)}
    />
    {logo?.bitmap && <LogoJsonLd url={url} logo={canonicalUrl(logo.bitmap)} />}
    <Section align="center" size="tabletLandscape">
      <Prose>
        <h1>Delightful homebrew content for D&D&nbsp;5e</h1>
        <h2>Delightful homebrew content for D&D&nbsp;5e</h2>
        <Button>Button</Button>
      </Prose>
    </Section>
    <Section align="center">
      <Grid
        flex
        gutterless
        style={{ alignItems: 'end', gap: 60, justifyContent: 'center' }}
      >
        <Card
          href="/"
          heading="Magefayre"
          image={{
            src: 'https://static.showit.co/450/easE-IIqQKWeRPJr8rsTvw/227814/101.png',
            ratio: '40:29',
            fill: true,
            sizes: '33vw'
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
            fill: true,
            sizes: '33vw'
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
            fill: true,
            sizes: '33vw'
          }}
        >
          Content
        </Card>
      </Grid>
      <Button>Button</Button>
    </Section>
  </PageContainer>
)

export default HomePage
