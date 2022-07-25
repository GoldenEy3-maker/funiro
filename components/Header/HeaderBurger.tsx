import { useSidebarContext } from '../../context/Sidebar.context'

import styles from '../../styles/modules/Header/Header.module.scss'

const { headerBurger, headerBurger__btn } = styles

export const HeaderBurger = () => {
  const { openSidebarHandler } = useSidebarContext()

  return (
    <div className={headerBurger}>
      <button
        type='button'
        className={headerBurger__btn}
        onClick={openSidebarHandler}
      >
        <span></span>
      </button>
    </div>
  )
}
