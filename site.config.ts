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
    BlueSky: 'https://bsky.app/profile/magefayre.com',
    Facebook: 'https://www.facebook.com/magefayredotcom',
    GithHub: 'https://github.com/magefayre',
    Instagram: 'https://www.instagram.com/magefayre/',
    Patreon: 'https://patreon.magefayre.com/',
    TikTok: 'https://www.tiktok.com/@magefayre',
    Twitch: 'https://www.twitch.tv/magefayre',
    YouTube: 'https://www.youtube.com/@magefayre',
    X: 'https://x.com/magefayre'
  }
}

export default config
