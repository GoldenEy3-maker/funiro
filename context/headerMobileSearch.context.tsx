import { IChildrenProps } from '../typescript/interface'

import { createContext, useCallback, useContext, useState } from 'react'

interface IHeaderMobileSearchContext {
  isHeaderMobileSearchShow: boolean
  openHeaderMobileSearchHandler: () => void
  closeHeaderMobileSearchHandler: () => void
}

const HeaderMobileSearchContext = createContext<IHeaderMobileSearchContext | null>(null)

export const HeaderMobileSearchContextProvider = ({ children }: IChildrenProps) => {
  const [isHeaderMobileSearchShow, setIsHeaderMobileSearchShow] = useState(false)


  const openHeaderMobileSearchHandler = useCallback(() => {
    setIsHeaderMobileSearchShow(true)
  }, [])

  const closeHeaderMobileSearchHandler = useCallback(() => {
    setIsHeaderMobileSearchShow(false)
  }, [])

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