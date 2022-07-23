import Link from 'next/link'

import { useEffect, useRef, useState } from 'react'

import { ISidebarNavSubmenuData } from '../../../../data/SidebarNav.data'

import {
  setDynamicClasses,
  setStaticClasses,
} from '../../../../lib/classes.lib'

import styles from '../../../../styles/modules/Sidebar/Main.module.scss'

interface ISidebarContentNavItemProps {
  title: string
  isSubmenu: boolean
  submenu?: ISidebarNavSubmenuData[]
  href?: string
}

const {
  sidebarContentNavItem,
  sidebarContentNavItemHead,
  sidebarContentNavItemHead__title,
  sidebarContentNavItemHead__icon,
  sidebarContentNavItemSubmenu,
  sidebarContentNavItemSubmenu__list,
  sidebarContentNavItemSubmenuItem,
  _submenu,
  _isSubmenuShow,
} = styles

export const SidebarContentNavItem = ({
  title,
  isSubmenu,
  submenu,
  href,
}: ISidebarContentNavItemProps) => {
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false)

  const submenuRef = useRef<HTMLDivElement>(null)

  const toggleSubmenuHandler = () => setIsSubmenuOpen((prev) => !prev)

  useEffect(() => {
    if (submenuRef.current) {
      const currentSubmenu = submenuRef.current
      const submenuHeight = currentSubmenu.offsetHeight

      currentSubmenu.style.setProperty('--submenu-height', submenuHeight + 'px')

      setTimeout(() => {
        currentSubmenu.style.position = 'static'
        currentSubmenu.style.height = '0px'
      }, 0)
    }
  }, [])

  return isSubmenu ? (
    <li
      className={setDynamicClasses({
        staticClasses: [sidebarContentNavItem, _submenu],
        dynamicClasses: [[_isSubmenuShow]],
        conditions: [isSubmenuOpen],
      })}
    >
      <div className={sidebarContentNavItemHead}>
        <button type='button' onClick={toggleSubmenuHandler}>
          <div className={sidebarContentNavItemHead__title}>{title}</div>
          <div className={sidebarContentNavItemHead__icon}>
            <svg
              width='20'
              height='20'
              viewBox='0 0 20 20'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M15.8334 7.50006L10 13.3334L4.16671 7.50006'
                stroke='#3A3A3A'
                strokeWidth='1.8'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </svg>
          </div>
        </button>
      </div>
      <div className={sidebarContentNavItemSubmenu} ref={submenuRef}>
        <ul className={sidebarContentNavItemSubmenu__list}>
          {submenu &&
            submenu.length > 0 &&
            submenu.map((navSubmenu) => (
              <li
                key={navSubmenu.id}
                className={sidebarContentNavItemSubmenuItem}
              >
                <Link href={navSubmenu.href}>
                  <a>{navSubmenu.title}</a>
                </Link>
              </li>
            ))}
        </ul>
      </div>
    </li>
  ) : (
    <li className={sidebarContentNavItem}>
      <Link href={href ? href : '/'}>
        <a>{title}</a>
      </Link>
    </li>
  )
}
