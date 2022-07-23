import { setStaticClasses } from '../../lib/classes.lib'

import { HeaderLogo as Logo } from './Logo'
import { HeaderNav as Navigation } from './Nav'
import { HeaderSearch as Search } from './Search'
import { HeaderActions as Actions } from './Actions'
import { HeaderBurger as Burger } from './Burger'
import { HeaderMobileSearch as MobileSearch } from './MobileSearch'

import styles from '../../styles/modules/Header/Main.module.scss'

const { header, header__inner } = styles

const Header = () => {
  return (
    <header className={header}>
      <div className={setStaticClasses([header__inner, '_container'])}>
        <Burger />
        <Logo />
        <Navigation />
        <Search />
        <Actions />
        <MobileSearch />
      </div>
    </header>
  )
}

export default Header
