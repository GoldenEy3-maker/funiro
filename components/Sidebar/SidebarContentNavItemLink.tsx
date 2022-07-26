import Link from 'next/link'
import { useSidebarContext } from '../../context/Sidebar.context'

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
  const { closeSidebarHandler } = useSidebarContext()

  return (
    <li className={sidebarContentNavItem}>
      <Link href={href ? href : '/'}>
        <a onClick={closeSidebarHandler}>{title}</a>
      </Link>
    </li>
  )
}
