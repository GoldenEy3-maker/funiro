import Link from 'next/link'

import { setStaticClasses } from '../lib/classes.lib'

import styles from '../styles/modules/Header.module.scss'

const {
  headerNav,
  headerNav__list,
  headerNavItem,
  headerNavItemHead,
  headerNavItemHead__title,
  headerNavItemHead__icon,
  headerNavItemSubmenu,
  headerNavItemSubmenu__list,
  headerNavItemSubmenu__item,
  _submenu
} = styles

export const HeaderNav = () => {
  return (
    <nav className={ headerNav }>
      <ul className={ headerNav__list }>
        <li
          className={ setStaticClasses([headerNavItem, _submenu]) }
          tabIndex={ 0 }
        >
          <div className={ headerNavItemHead }>
            <div className={ headerNavItemHead__title }>Products</div>
            <div className={ headerNavItemHead__icon }>
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
          </div>
          <div className={ headerNavItemSubmenu }>
            <ul className={ headerNavItemSubmenu__list }>
              <li className={ headerNavItemSubmenu__item }>
                <Link href="#">
                  <a>Product 1</a>
                </Link>
              </li>
              <li className={ headerNavItemSubmenu__item }>
                <Link href="#">
                  <a>Product 2</a>
                </Link>
              </li>
              <li className={ headerNavItemSubmenu__item }>
                <Link href="#">
                  <a>Product 3</a>
                </Link>
              </li>
              <li className={ headerNavItemSubmenu__item }>
                <Link href="#">
                  <a>Product 4</a>
                </Link>
              </li>
            </ul>
          </div>
        </li>
        <li
          className={ setStaticClasses([headerNavItem, _submenu]) }
          tabIndex={ 0 }
        >
          <div className={ headerNavItemHead }>
            <div className={ headerNavItemHead__title }>Rooms</div>
            <div className={ headerNavItemHead__icon }>
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
          </div>
          <div className={ headerNavItemSubmenu }>
            <ul className={ headerNavItemSubmenu__list }>
              <li className={ headerNavItemSubmenu__item }>
                <Link href="#">
                  <a>Room 1</a>
                </Link>
              </li>
              <li className={ headerNavItemSubmenu__item }>
                <Link href="#">
                  <a>Room 2</a>
                </Link>
              </li>
              <li className={ headerNavItemSubmenu__item }>
                <Link href="#">
                  <a>Room 3</a>
                </Link>
              </li>
              <li className={ headerNavItemSubmenu__item }>
                <Link href="#">
                  <a>Room 4</a>
                </Link>
              </li>
            </ul>
          </div>
        </li>
        <li className={ headerNavItem }>
          <div className={ headerNavItemHead }>
            <div className={ headerNavItemHead__title }>
              <Link href="#">
                <a>Inspirations</a>
              </Link>
            </div>
          </div>
        </li>
      </ul>
    </nav>
  )
}
