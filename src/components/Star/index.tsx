import { Icon } from '@newhighsco/chipset'

import { ReactComponent as StarSvg } from '~images/logo.svg'

import styles from './Star.module.scss'

const Star = () => (
  <Icon className={styles.root}>
    <StarSvg />
  </Icon>
)

export default Star
