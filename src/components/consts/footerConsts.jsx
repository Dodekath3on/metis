import { FaInstagram } from "react-icons/fa"
import { FaLinkedin } from "react-icons/fa"
import { FaXTwitter } from "react-icons/fa6"

export const footerConsts = [
  {
    icon: <FaInstagram className='text-lg' />,
    href: 'https://www.instagram.com/', // TODO: Create Instagram page for Metis/Dodekath3on
    altText: 'Instagram',
  },
  {
    icon: <FaLinkedin className='text-lg' />,
    href: 'https://www.linkedin.com/in/dodekath3on/', // TODO: Update to Company account
    altText: 'LinkedIn',
  },
  {
    icon: <FaXTwitter className='text-lg'/>,
    href: 'https://twitter.com/dodekath3on',
    altText: 'X (Twitter)',
  },
]



