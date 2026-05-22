import { HeaderContainer, SmartLink } from '@newhighsco/chipset'
import React, { type FC } from 'react'

import LogoLockup from '~components/LogoLockup'
import Star from '~components/Star'

import styles from './Header.module.scss'

const Header: FC = () => (
  <HeaderContainer
    gutter
    theme={{ root: styles.root, content: styles.content }}
  >
    <Star />
    <SmartLink href="/">
      <LogoLockup />
    </SmartLink>
    <Star />
  </HeaderContainer>
)

export default Header
