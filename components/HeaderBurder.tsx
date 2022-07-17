import styles from '../styles/modules/Header.module.scss'

const { headerBurger, headerBurger__btn } = styles

export const HeaderBurger = () => {
  return (
    <div className={ headerBurger }>
      <button type="button" className={ headerBurger__btn }>
        <span></span>
      </button>
    </div>
  )
}