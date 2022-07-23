import { getSidebarNavData } from '../../../../data/SidebarNav.data'

import { SidebarContentNavItem as Item } from './Item'

import styles from '../../../../styles/modules/Sidebar/Main.module.scss'

const { sidebarContentNav, sidebarContentNav__list } = styles

export const SidebarContentNav = () => {
  const navData = getSidebarNavData()

  return (
    <div className={sidebarContentNav}>
      <ul className={sidebarContentNav__list}>
        {navData.length > 0 &&
          navData.map((nav) => (
            <Item
              key={nav.id}
              title={nav.title}
              href={nav.href}
              submenu={nav.submenu}
              isSubmenu={nav.isSubmenu}
            />
          ))}
      </ul>
    </div>
  )
}
