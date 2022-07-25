import Link from 'next/link'

import styles from '../../styles/modules/Sidebar/SidebarContentNav.module.scss'

interface ISidebarContentNavItemLinkProps {
  href: string | undefined
  title: string
}

const { sidebarContentNavItem } = styles

export const SidebarContentNavItemLink = ({
  href,
  title,
}: ISidebarContentNavItemLinkProps) => {
  return (
    <li className={sidebarContentNavItem}>
      <Link href={href ? href : '/'}>
        <a>{title}</a>
      </Link>
    </li>
  )
}
