import { EQueryString } from '../typescript/enum'
import { IChildrenProps } from '../typescript/interface'

import { useRouter } from 'next/router'

import { createContext, useCallback, useContext, useState } from 'react'

interface IHeaderMobileSearchContext {
  isHeaderMobileSearchShow: boolean
  openHeaderMobileSearchHandler: () => void
  closeHeaderMobileSearchHandler: () => void
}

const HeaderMobileSearchContext = createContext<IHeaderMobileSearchContext | null>(null)

export const HeaderMobileSearchContextProvider = ({ children }: IChildrenProps) => {
  const [isHeaderMobileSearchShow, setIsHeaderMobileSearchShow] = useState(false)

  const router = useRouter()

  const openHeaderMobileSearchHandler = useCallback(() => {
    router.push(`?${ EQueryString.headerSearch }=true`).then(r => r)
    setIsHeaderMobileSearchShow(true)
  }, [router])

  const closeHeaderMobileSearchHandler = useCallback(() => {
    setIsHeaderMobileSearchShow(false)

    if (router.query[EQueryString.headerSearch]) router.back()
  }, [router])

  return (
    <HeaderMobileSearchContext.Provider value={ {
      isHeaderMobileSearchShow,
      openHeaderMobileSearchHandler,
      closeHeaderMobileSearchHandler
    } }>
      { children }
    </HeaderMobileSearchContext.Provider>
  )
}

export const useHeaderMobileSearchContext = () => {
  const context = useContext(HeaderMobileSearchContext)

  if (context === null) {
    throw new Error('useHeaderMobileSearchContext must be used within a HeaderMobileSearchContextProvider')
  }

  return context
}