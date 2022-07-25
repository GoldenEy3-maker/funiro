import Link from 'next/link'

import styles from '../../styles/modules/Header/Header.module.scss'

const { headerLogo } = styles

export const HeaderLogo = () => {
  return (
    <div className={headerLogo}>
      <Link href='/'>
        <a>Funiro.</a>
      </Link>
    </div>
  )
}
