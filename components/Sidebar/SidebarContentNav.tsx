import { useRef } from 'react'

import { getSidebarNavData } from '../../data/SidebarNav.data'

import { SidebarContentNavItemSubmenu } from './SidebarContentNavItemSubmenu'
import { SidebarContentNavItemLink } from './SidebarContentNavItemLink'

import styles from '../../styles/modules/Sidebar/Sidebar.module.scss'

const { sidebarContentNav, sidebarContentNav__list } = styles

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
      </ul>
    </div>
  )
}
