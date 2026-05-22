import { FooterContainer } from '@newhighsco/chipset'
import React, { type FC } from 'react'

import config from '~config'

import styles from './Footer.module.scss'

const { name } = config
const year = new Date().getFullYear()

const Footer: FC = () => (
  <FooterContainer gutter theme={{ root: styles.root }}>
    &copy; {year} {name}. All rights reserved
  </FooterContainer>
)

export default Footer
