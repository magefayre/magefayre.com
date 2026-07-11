import { ContentContainer } from '@newhighsco/chipset'
import type PropTypes from 'prop-types'
import type { FC } from 'react'

import styles from './Section.module.scss'

type Props = PropTypes.InferProps<ContentContainer.propTypes>

const Section: FC<Props> = ({ size = 'desktopLarge', children, ...rest }) => (
  <ContentContainer theme={{ root: styles.root }} {...rest}>
    <ContentContainer gutter size={size} theme={{ content: styles.content }}>
      {children}
    </ContentContainer>
  </ContentContainer>
)

export default Section
