import { EQueryString } from '../typescript/enum'

import { useRouter } from 'next/router'

import { useEffect } from 'react'

import { HeaderSearch } from './HeaderSearch'

import { useHeaderMobileSearchContext } from '../context/headerMobileSearch.context'

import { setDynamicClasses } from '../lib/classes.lib'

import styles from '../styles/modules/Header.module.scss'

const { headerMobileSearch, headerMobileSearch__inner, _isHeaderMobileSearchShow } = styles

export const HeaderMobileSearch = () => {
  const router = useRouter()

  const { isHeaderMobileSearchShow, closeHeaderMobileSearchHandler } = useHeaderMobileSearchContext()

  useEffect(() => {
    const returnButtonHandler = () => {
      if (router.query[EQueryString.headerSearch]) {
        closeHeaderMobileSearchHandler()
      }
    }

    window.addEventListener('popstate', returnButtonHandler)

    return () => window.removeEventListener('popstate', returnButtonHandler)
  }, [router, closeHeaderMobileSearchHandler])

  return (
    <div className={ setDynamicClasses({
      staticClasses: [headerMobileSearch],
      dynamicClasses: [[_isHeaderMobileSearchShow]],
      conditions: [isHeaderMobileSearchShow]
    }) }>
      <div className={ headerMobileSearch__inner }>
        <HeaderSearch/>
      </div>
    </div>
  )
}