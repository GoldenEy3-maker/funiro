import { setStaticClasses } from '../../lib/classes.lib'

import { HeaderBurger } from './HeaderBurger'
import { HeaderLogo } from './HeaderLogo'
import { HeaderNav } from './HeaderNav'
import { HeaderSearch } from './HeaderSearch'
import { HeaderActions } from './HeaderActions'
import { HeaderMobileSearch } from './HeaderMobileSearch'

import styles from '../../styles/modules/Header/Header.module.scss'

const { header, header__inner } = styles

const Header = () => {
  return (
    <header className={header}>
      <div className={setStaticClasses([header__inner, '_container'])}>
        <HeaderBurger />
        <HeaderLogo />
        <HeaderNav />
        <HeaderSearch />
        <HeaderActions />
        <HeaderMobileSearch />
      </div>
    </header>
  )
}

export default Header
