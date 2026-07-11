import {
  FooterContainer,
  Grid,
  Icon,
  Navigation,
  SmartLink
} from '@newhighsco/chipset'
import type { FC } from 'react'

import config from '~config'
import footer from '~data/footer.json'

import styles from './Footer.module.scss'

const { name, socialLinks } = config
const iconLinks = { Instragram: { icon: 'simple-icons:instagram' } }
const year = new Date().getFullYear()

const Footer: FC = () => (
  <FooterContainer
    gutter
    theme={{ root: styles.root, content: styles.content }}
  >
    <Grid flex valign="middle">
      <Grid.Item className={styles.links}>
        <Navigation
          links={[
            ...footer.links,
            {
              children: (
                <>
                  &copy; {year} {name}. All rights reserved
                </>
              ),
              href: '/'
            }
          ]}
          theme={{ link: styles.link }}
          inline
        />
      </Grid.Item>
      <Grid.Item className={styles.iconLinks}>
        <Navigation
          inline
          links={Object.values(iconLinks)}
          renderLink={(
            {
              href,
              icon,
              verb = 'Follow',
              preposition = 'on',
              children,
              ...rest
            },
            index
          ) => {
            const key = Object.keys(iconLinks).at(index)

            return (
              <SmartLink
                href={href ?? socialLinks[key]}
                target="_blank"
                {...rest}
              >
                <Icon
                  name={icon}
                  theme={{ root: styles.icon }}
                  alt={[verb, name, preposition, key].join(' ').trim()}
                >
                  {children}
                </Icon>
              </SmartLink>
            )
          }}
          theme={{ link: styles.iconLink }}
        />
      </Grid.Item>
    </Grid>
  </FooterContainer>
)

export default Footer
