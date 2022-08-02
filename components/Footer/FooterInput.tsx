import { EEndpointPath } from '../../typescript/enum'
import { IResponseData } from '../../typescript/interface'
import { TIntervalTimer } from '../../typescript/type'

import { ChangeEventHandler, FormEventHandler, useRef, useState } from 'react'

import { useHttp } from '../../hooks/http.hook'

import { setDynamicClasses } from '../../lib/classes.lib'

import styles from '../../styles/modules/Footer/Footer.module.scss'

const {
  footerItemForm,
  footerItemForm__input,
  footerItemForm__btn,
  footerItemFormResponseMessage,
  footerItemFormResponseMessage__inner,
  _typing,
  _success,
  _error,
  _loading
} = styles

export const FooterInput = () => {
  const [inputValue, setInputValue] = useState('')
  const [responseData, setResponseData] = useState<IResponseData | null>(null)

  const timeoutIDRef = useRef<TIntervalTimer>()

  const { request, isRequestInProcess } = useHttp()

  const changeInputHandler: ChangeEventHandler<HTMLInputElement> = (event) => {
    setInputValue(event.target.value)
  }

  const submitFormHandler: FormEventHandler = async (event) => {
    event.preventDefault()

    setResponseData(null)

    if (timeoutIDRef.current) {
      clearTimeout(timeoutIDRef.current)
      timeoutIDRef.current = null
    }

    if (inputValue !== '') {
      const res = await request(EEndpointPath.subscribe)
      setResponseData(res)

      if (res.success) {
        setInputValue('')
      }

      timeoutIDRef.current = setTimeout(() => {
        setResponseData(null)
      }, 5000)
    }
  }

  const clickResponseMessage = () => {
    setResponseData(null)

    if (timeoutIDRef.current) {
      clearTimeout(timeoutIDRef.current)
      timeoutIDRef.current = null
    }
  }

  return (
    <form className={ footerItemForm } onSubmit={ submitFormHandler }>
      <div
        className={ setDynamicClasses({
          staticClasses: [footerItemForm__input],
          dynamicClasses: [[_typing]],
          conditions: [inputValue !== '']
        }) }
      >
        <label htmlFor="email">Enter your email</label>
        <input
          type="email"
          name="email"
          id="email"
          value={ inputValue }
          onChange={ changeInputHandler }
        />
      </div>
      <div className={ setDynamicClasses({
        staticClasses: [footerItemForm__btn],
        dynamicClasses: [[_loading]],
        conditions: [isRequestInProcess]
      }) }>
        <button type="submit">
          {
            isRequestInProcess ? (
              <svg fill="none" height="18" stroke="white" strokeLinecap="round" strokeLinejoin="round"
                   strokeWidth="2" viewBox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
                <line x1="12" x2="12" y1="2" y2="6"/>
                <line x1="12" x2="12" y1="18" y2="22"/>
                <line x1="4.93" x2="7.76" y1="4.93" y2="7.76"/>
                <line x1="16.24" x2="19.07" y1="16.24" y2="19.07"/>
                <line x1="2" x2="6" y1="12" y2="12"/>
                <line x1="18" x2="22" y1="12" y2="12"/>
                <line x1="4.93" x2="7.76" y1="19.07" y2="16.24"/>
                <line x1="16.24" x2="19.07" y1="7.76" y2="4.93"/>
              </svg>
            ) : (
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.7825 0.217449C17.6813 0.116704 17.5534 0.046952 17.4139 0.0163941C17.2744 -0.0141638 17.1291 -0.00425714 16.995 0.0449493L0.495001 6.04495C0.352702 6.09892 0.230191 6.19491 0.143739 6.32016C0.0572872 6.44542 0.0109863 6.59401 0.0109863 6.7462C0.0109863 6.89839 0.0572872 7.04698 0.143739 7.17223C0.230191 7.29749 0.352702 7.39348 0.495001 7.44745L6.9375 10.0199L11.6925 5.24995L12.75 6.30745L7.9725 11.0849L10.5525 17.5275C10.6081 17.667 10.7043 17.7866 10.8286 17.8709C10.953 17.9551 11.0998 18.0001 11.25 17.9999C11.4016 17.9968 11.5486 17.9479 11.6718 17.8595C11.795 17.7711 11.8885 17.6475 11.94 17.5049L17.94 1.00495C17.9911 0.872257 18.0034 0.727772 17.9755 0.588342C17.9477 0.448912 17.8807 0.320282 17.7825 0.217449Z"
                  fill="white"
                />
              </svg>
            )
          }
        </button>
      </div>
      <div className={ setDynamicClasses({
        staticClasses: [footerItemFormResponseMessage],
        dynamicClasses: [[_success], [_error]],
        conditions: [responseData !== null && responseData.success, responseData !== null && !responseData.success]
      }) } onClick={ clickResponseMessage }>
        <div className={ footerItemFormResponseMessage__inner }>
          { responseData && responseData.message }
        </div>
      </div>
    </form>
  )
}
