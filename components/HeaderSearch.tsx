import { EEndpointPath } from '../typescript/enum'
import { IProductsData } from '../typescript/interface'

import Link from 'next/link'

import { ChangeEventHandler, useCallback, useRef, useState } from 'react'

import { useHeaderMobileSearchContext } from '../context/headerMobileSearch.context'

import { useHttp } from '../hooks/http.hook'
import { useDebounceFunction } from '../hooks/debounce.hook'

import { setDynamicClasses, setStaticClasses } from '../lib/classes.lib'

import styles from '../styles/modules/Header.module.scss'

const {
  headerSearch,
  headerSearchForm,
  headerSearch__inner,
  headerSearchForm__icon,
  headerSearchForm__input,
  headerSearchResults,
  headerSearchResults__list,
  headerSearchResults__item,
  headerSearchForm__close,
  _isInputSearchFocused,
  _isInputSearchTyping,
  _isResultsListShow,
  _notFound,
  _errorMessage,
  _loader,
  submitBtn,
  returnBtn
} = styles

export const HeaderSearch = () => {
  const [searchValue, setSearchValue] = useState('')
  const [isInputFocused, setIsInputFocused] = useState(false)
  const [resultsData, setResultsData] = useState<IProductsData[] | null>(null)
  const [errorSearch, setErrorSearch] = useState<string | null>(null)

  const { closeHeaderMobileSearchHandler } = useHeaderMobileSearchContext()

  const headerSearchInputRef = useRef<HTMLInputElement>(null)

  const { request, isRequestInProcess } = useHttp()
  const [requestDebouncedSearch, requestDebouncedSearchClear] = useDebounceFunction()
  const [clearDebouncedResults] = useDebounceFunction()

  const clearData = useCallback(() => {
    if (resultsData) setResultsData(null)
    if (errorSearch) setErrorSearch(null)
  }, [resultsData, errorSearch])

  const resetSearchInput = useCallback(() => {
    setSearchValue('')
    setIsInputFocused(false)
    requestDebouncedSearchClear()
    clearData()
  }, [clearData, requestDebouncedSearchClear])

  const changeInputSearchHandler: ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    const value = event.target.value

    setSearchValue(value)

    if (value === '') {
      requestDebouncedSearchClear()
      clearDebouncedResults(() => clearData(), 300)
      return
    }

    requestDebouncedSearch(async () => {
      const response = await request(EEndpointPath.test, {
        method: 'POST',
        body: value
      })

      if (!response.success) {
        setErrorSearch(response.message)
        return
      }

      if (response.data) setResultsData(response.data)
    }, 450)
  }

  const focusInputSearchHandler = () => setIsInputFocused(true)

  const blurInputSearchHandler = () => setIsInputFocused(searchValue !== '')

  const clickHeaderSearchIconButtonHandler = () => {
    if (searchValue) return
    if (headerSearchInputRef.current) headerSearchInputRef.current.focus()
  }

  const clickReturnButtonHandler = useCallback(() => {
    resetSearchInput()
    closeHeaderMobileSearchHandler()
  }, [resetSearchInput, closeHeaderMobileSearchHandler])

  return (
    <div className={ headerSearch }>
      <div className={ headerSearch__inner }>
        <form
          className={ setDynamicClasses({
            staticClasses: [headerSearchForm],
            dynamicClasses: [[_isInputSearchTyping], [_isInputSearchFocused]],
            conditions: [searchValue !== '', isInputFocused]
          }) }
        >
          <div className={ headerSearchForm__icon }>
            <button type={ searchValue ? 'submit' : 'button' } className={ submitBtn }
                    onClick={ clickHeaderSearchIconButtonHandler }>
              <svg
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.6667 16.6667L12.5802 12.5802M12.5802 12.5802C13.5604 11.5999 14.1667 10.2458 14.1667 8.75C14.1667 5.75846 11.7416 3.33334 8.75004 3.33334C5.7585 3.33334 3.33337 5.75846 3.33337 8.75C3.33337 11.7415 5.7585 14.1667 8.75004 14.1667C10.2458 14.1667 11.6 13.5604 12.5802 12.5802Z"
                  stroke="#262F56"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <button type="button" className={ returnBtn } onClick={ clickReturnButtonHandler }>
              <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 0h48v48h-48z" fill="none"/>
                <path d="M40 22h-24.34l11.17-11.17-2.83-2.83-16 16 16 16 2.83-2.83-11.17-11.17h24.34v-4z"/>
              </svg>
            </button>
          </div>
          <div className={ headerSearchForm__input }>
            <label htmlFor="header-search">Search for minimalist chair</label>
            <input
              type="search"
              name="search"
              id="header-search"
              ref={ headerSearchInputRef }
              value={ searchValue }
              onChange={ changeInputSearchHandler }
              onFocus={ focusInputSearchHandler }
              onBlur={ blurInputSearchHandler }
            />
          </div>
          <div className={ headerSearchForm__close }>
            <button type="button" onClick={ resetSearchInput }>
              <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="#000"
                   strokeLinecap="round" strokeLinejoin="round" strokeWidth="2px">
                <title/>
                <g id="cross">
                  <line fill="none" stroke="#000"
                        strokeLinecap="round" strokeLinejoin="round" strokeWidth="2px" x1="7" x2="25" y1="7" y2="25"/>
                  <line fill="none" stroke="#000"
                        strokeLinecap="round" strokeLinejoin="round" strokeWidth="2px" x1="7" x2="25" y1="25" y2="7"/>
                </g>
              </svg>
            </button>
          </div>
        </form>
        <div
          className={ setDynamicClasses({
            staticClasses: [headerSearchResults],
            dynamicClasses: [[_isResultsListShow]],
            conditions: [searchValue !== '']
          }) }
        >
          <ul className={ headerSearchResults__list }>
            { (!errorSearch && (!resultsData || isRequestInProcess)) && (
              <li className={ setStaticClasses([headerSearchResults__item, _loader]) }>
                <svg className="feather feather-loader" fill="none" height="24" stroke="currentColor"
                     strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24"
                     xmlns="http://www.w3.org/2000/svg">
                  <line x1="12" x2="12" y1="2" y2="6"/>
                  <line x1="12" x2="12" y1="18" y2="22"/>
                  <line x1="4.93" x2="7.76" y1="4.93" y2="7.76"/>
                  <line x1="16.24" x2="19.07" y1="16.24" y2="19.07"/>
                  <line x1="2" x2="6" y1="12" y2="12"/>
                  <line x1="18" x2="22" y1="12" y2="12"/>
                  <line x1="4.93" x2="7.76" y1="19.07" y2="16.24"/>
                  <line x1="16.24" x2="19.07" y1="7.76" y2="4.93"/>
                </svg>
              </li>
            ) }
            { !isRequestInProcess && resultsData && resultsData.length === 0 && (
              <li className={ setStaticClasses([headerSearchResults__item, _notFound]) }>
                Nothing found!
              </li>
            ) }
            { !isRequestInProcess && errorSearch && (
              <li className={ setStaticClasses([headerSearchResults__item, _errorMessage]) }>
                <p>{ errorSearch }</p>
                <span><svg enableBackground="new 0 0 32 32" id="Stock_cut" version="1.1" viewBox="0 0 32 32"
                           xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg"
                           xmlnsXlink="http://www.w3.org/1999/xlink"><desc/><g><circle cx="16" cy="16" fill="none"
                                                                                       r="15" stroke="#000000"
                                                                                       strokeLinejoin="round"
                                                                                       strokeMiterlimit="10"
                                                                                       strokeWidth="2"/><line
                  fill="none" stroke="#000000" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="2" x1="16"
                  x2="16" y1="24" y2="26"/><line fill="none" stroke="#000000" strokeLinejoin="round"
                                                 strokeMiterlimit="10" strokeWidth="2" x1="16" x2="16" y1="22" y2="6"/></g></svg></span>
              </li>
            ) }
            { resultsData && !isRequestInProcess && resultsData.length > 0 && resultsData.map(product => (
              <li key={ product.id } className={ headerSearchResults__item }>
                <Link href="#">
                  <a>{ product.title }</a>
                </Link>
              </li>
            )) }
          </ul>
        </div>
      </div>
    </div>
  )
}
