import { setStaticClasses } from '../lib/classes.lib'

import styles from '../styles/modules/Header.module.scss'

const { headerBurger, headerBurger__btn } = styles

export const HeaderBurger = () => {
  return (
    <div className={ headerBurger }>
      <button type="button" className={ setStaticClasses([headerBurger__btn, '_activeButtonHighlight']) }>
        <div className="_activeButtonHighlightElement"></div>
        <span></span>
      </button>
    </div>
  )
}