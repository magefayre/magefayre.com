import { classNames, Icon } from '@newhighsco/chipset'
import type { FC } from 'react'

import config from '~config'
import { ReactComponent as LogoSvg } from '~images/logo-lockup.svg'

import styles from './LogoLockup.module.scss'

const { name } = config

type Props = { className?: string }

const LogoLockup: FC<Props> = ({ className, ...rest }) => (
  <div className={classNames(styles.root, className)}>
    <Icon alt={name} theme={{ root: styles.icon }} {...rest}>
      <LogoSvg />
    </Icon>
  </div>
)

export default LogoLockup
