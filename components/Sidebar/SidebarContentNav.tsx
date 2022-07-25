import { useEffect, useState } from 'react'

import { getSidebarNavData, ISidebarNavData } from '../../data/SidebarNav.data'

import { SidebarContentNavItemSubmenu } from './SidebarContentNavItemSubmenu'
import { SidebarContentNavItemLink } from './SidebarContentNavItemLink'

import styles from '../../styles/modules/Sidebar/Sidebar.module.scss'

const { sidebarContentNav, sidebarContentNav__list } = styles

export const SidebarContentNav = () => {
  const [navData, setNavData] = useState<ISidebarNavData[] | null>(null)

  useEffect(() => {
    const data = getSidebarNavData()
    setNavData(data)
  }, [])

  return (
    <div className={sidebarContentNav}>
      <ul className={sidebarContentNav__list}>
        {navData &&
          navData.length > 0 &&
          navData.map((nav) =>
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
