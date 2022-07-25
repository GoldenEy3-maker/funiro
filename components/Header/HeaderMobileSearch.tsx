import { HeaderSearch } from './HeaderSearch'

import { useHeaderMobileSearchContext } from '../../context/headerMobileSearch.context'

import { setDynamicClasses, setStaticClasses } from '../../lib/classes.lib'

import styles from '../../styles/modules/Header/Header.module.scss'

const {
  headerMobileSearch,
  headerMobileSearch__inner,
  _isHeaderMobileSearchShow,
} = styles

export const HeaderMobileSearch = () => {
  const { isHeaderMobileSearchShow } = useHeaderMobileSearchContext()

  return (
    <div
      className={setDynamicClasses({
        staticClasses: [headerMobileSearch],
        dynamicClasses: [[_isHeaderMobileSearchShow]],
        conditions: [isHeaderMobileSearchShow],
      })}
    >
      <div className={setStaticClasses([headerMobileSearch__inner])}>
        <HeaderSearch />
      </div>
    </div>
  )
}
