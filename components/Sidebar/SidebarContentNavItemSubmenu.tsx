import Link from 'next/link'

import { useEffect, useRef, useState, MouseEvent, CSSProperties } from 'react'

import { useSidebarContext } from '../../context/Sidebar.context'

import { ISidebarNavSubmenuData } from '../../data/SidebarNav.data'

import { setDynamicClasses } from '../../lib/classes.lib'

import styles from '../../styles/modules/Sidebar/Sidebar.module.scss'

interface ISidebarContentNavItemSubmenuProps {
  title: string
  submenu: ISidebarNavSubmenuData[] | undefined
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
  _ready
} = styles

export const SidebarContentNavItemSubmenu = ({
                                               title,
                                               submenu
                                             }: ISidebarContentNavItemSubmenuProps) => {
  const { closeSidebarHandler } = useSidebarContext()

  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false)
  const [submenuHeight, setSubmenuHeight] = useState<number | null>(null)

  const submenuRef = useRef<HTMLDivElement>(null)

  const toggleSubmenuHandler = (event: MouseEvent<HTMLButtonElement>) =>
    setIsSubmenuOpen((prev) => !prev)


  useEffect(() => {
    if (submenuRef.current) {
      const currentSubmenu = submenuRef.current
      const currentSubmenuHeight = currentSubmenu.offsetHeight

      setSubmenuHeight(currentSubmenuHeight)

      if (submenuHeight) {
        currentSubmenu.classList.add(_ready)
      }
    }
  }, [submenuHeight])

  return (
    <li
      className={ setDynamicClasses({
        staticClasses: [sidebarContentNavItem, _submenu],
        dynamicClasses: [[_isSubmenuShow]],
        conditions: [isSubmenuOpen]
      }) }
    >
      <div className={ sidebarContentNavItemHead }>
        <button type="button" onClick={ toggleSubmenuHandler }>
          <div className={ sidebarContentNavItemHead__title }>{ title }</div>
          <div className={ sidebarContentNavItemHead__icon }>
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.8334 7.50006L10 13.3334L4.16671 7.50006"
                stroke="#3A3A3A"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </button>
      </div>
      <div className={ sidebarContentNavItemSubmenu } ref={ submenuRef }
           style={ { '--submenu-height': submenuHeight + 'px' } as CSSProperties }>
        <ul className={ sidebarContentNavItemSubmenu__list }>
          { submenu &&
            submenu.length > 0 &&
            submenu.map((navSubmenu) => (
              <li
                key={ navSubmenu.id }
                className={ sidebarContentNavItemSubmenuItem }
              >
                <Link href={ navSubmenu.href }>
                  <a onClick={ closeSidebarHandler }>{ navSubmenu.title }</a>
                </Link>
              </li>
            )) }
        </ul>
      </div>
    </li>
  )
}
