import logoBitmap from '~images/logo.png'
import logoVector from '~images/logo.svg'
import openGraphImage from '~images/sharing.jpg'
import colors from '~styles/colors.module.scss'

const config = {
  url: process.env.NEXT_PUBLIC_SITE_URL,
  name: 'Magefayre',
  shortName: null,
  title: 'Magefayre - Delightful homebrew content for D&D 5e',
  description: 'Delightful homebrew content for D&D 5e',
  logo: { bitmap: logoBitmap.src, vector: logoVector },
  openGraphImage: openGraphImage.src,
  themeColor: colors.black,
  twitterHandle: 'magefayre',
  socialLinks: {
    GithHub: 'https://github.com/newhighsco/press-start',
    X: 'https://x.com/newhighsco'
  }
}

export default config
