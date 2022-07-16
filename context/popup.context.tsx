import { EPopupName } from '../typescript/enum'
import { IChildrenProps } from '../typescript/interface'

import { createContext, useContext, useState } from 'react'

import { useLockScroll } from '../hooks/scroll.hook'

type TPopupState = {
  [key in EPopupName]: boolean
}

interface IPopupContext {
  popupState: TPopupState
  openPopup: (popupName: string) => void
  closePopup: (popupName: string) => void
}

const PopupContext = createContext<IPopupContext | null>(null)

export const PopupContextProvider = ({ children }: IChildrenProps) => {
  const [popupState, setPopupState] = useState<TPopupState>({})

  const { lockScroll, unlockScroll } = useLockScroll(200)

  const openPopup = (popupName: string) => {
    setPopupState((prevState) => ({ ...prevState, [popupName]: true }))
    lockScroll()
  }

  const closePopup = (popupName: string) => {
    setPopupState((prevState) => ({ ...prevState, [popupName]: false }))
    unlockScroll()
  }

  return (
    <PopupContext.Provider value={ { popupState, openPopup, closePopup } }>
      { children }
    </PopupContext.Provider>
  )
}

export const usePopupContext = () => {
  const context = useContext(PopupContext)

  if (context === null) {
    throw new Error(
      'usePopupContext must be used within a PopupContextProvider'
    )
  }

  return context
}
