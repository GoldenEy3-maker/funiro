import { IChildrenProps } from '../typescript/interface'

import { createContext, useCallback, useContext, useState } from 'react'

import { useLockScroll } from '../hooks/scroll.hook'

interface ISidebarContext {
  isSidebarShow: boolean
  openSidebarHandler: () => void
  closeSidebarHandler: () => void
}

const SidebarContext = createContext<ISidebarContext | null>(null)

export const SidebarContextProvider = ({ children }: IChildrenProps) => {
  const [isSidebarShow, setIsSidebarShow] = useState(false)
  const { unlockScroll, lockScroll } = useLockScroll(200)

  const openSidebarHandler = useCallback(() => {
    lockScroll()
    setIsSidebarShow(true)
  }, [lockScroll])

  const closeSidebarHandler = useCallback(() => {
    unlockScroll()
    setIsSidebarShow(false)
  }, [unlockScroll])

  return (
    <SidebarContext.Provider
      value={{ isSidebarShow, openSidebarHandler, closeSidebarHandler }}
    >
      {children}
    </SidebarContext.Provider>
  )
}

export const useSidebarContext = () => {
  const context = useContext(SidebarContext)

  if (context === null)
    throw new Error(
      'useSidebarContext must be used within a SidebarContextProvider'
    )

  return context
}
