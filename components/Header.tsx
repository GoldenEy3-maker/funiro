import Link from 'next/link'

import { setStaticClasses } from '../lib/classes.lib'

import { HeaderNav } from './HeaderNav'
import { HeaderSearch } from './HeaderSearch'
import { HeaderActions } from './HeaderActions'
import { HeaderBurger } from './HeaderBurder'
import { HeaderMobileSearch } from './HeaderMobileSearch'

import styles from '../styles/modules/Header.module.scss'

const { header, header__inner, headerLogo } = styles

const Header = () => {
  return (
    <header className={ header }>
      <div className={ setStaticClasses([header__inner, '_container']) }>
        <HeaderBurger/>
        <div className={ headerLogo }><Link href="/"><a>Funiro.</a></Link></div>
        <HeaderNav/>
        <HeaderSearch/>
        <HeaderActions/>
        <HeaderMobileSearch/>
      </div>
    </header>
  )
}

export default Header