import { useRef } from 'react'

import { getSidebarNavData } from '../../data/SidebarNav.data'

import { SidebarContentNavItemSubmenu } from './SidebarContentNavItemSubmenu'
import { SidebarContentNavItemLink } from './SidebarContentNavItemLink'

import styles from '../../styles/modules/Sidebar/Sidebar.module.scss'
import Link from 'next/link'
import { setStaticClasses } from '../../lib/classes.lib'

const {
  sidebarContentNav,
  sidebarContentNav__list,
  sidebarContentNavItem,
  _exitLink,
} = styles

export const SidebarContentNav = () => {
  const navDataRef = useRef(getSidebarNavData())

  return (
    <div className={sidebarContentNav}>
      <ul className={sidebarContentNav__list}>
        {navDataRef.current &&
          navDataRef.current.length > 0 &&
          navDataRef.current.map((nav) =>
            nav.isSubmenu ? (
              <SidebarContentNavItemSubmenu
                key={nav.id}
                title={nav.title}
                submenu={nav.submenu}
              />
            ) : (
              <SidebarContentNavItemLink
                key={nav.id}
                title={nav.title}
                href={nav.href}
              />
            )
          )}
        <li className={setStaticClasses([sidebarContentNavItem, _exitLink])}>
          <Link href='/'>
            <a>Get Out</a>
          </Link>
        </li>
      </ul>
    </div>
  )
}
