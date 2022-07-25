import { SidebarContentHead } from './SidebarContentHead'
import { SidebarContentProfile } from './SidebarContentProfile'
import { SidebarContentNav } from './SidebarContentNav'

import { useSidebarContext } from '../../context/Sidebar.context'

import { setDynamicClasses } from '../../lib/classes.lib'

import styles from '../../styles/modules/Sidebar/Sidebar.module.scss'

const {
  sidebar,
  sidebar__inner,
  sidebar__mask,
  sidebarContent,
  sidebarContent__inner,
  _isSidebarShow,
} = styles

const Sidebar = () => {
  const { isSidebarShow, closeSidebarHandler } = useSidebarContext()

  return (
    <aside
      className={setDynamicClasses({
        staticClasses: [sidebar],
        dynamicClasses: [[_isSidebarShow]],
        conditions: [isSidebarShow],
      })}
    >
      <div className={sidebar__inner}>
        <div className={sidebar__mask} onClick={closeSidebarHandler}></div>
        <div className={sidebarContent}>
          <div className={sidebarContent__inner}>
            <SidebarContentHead />
            <SidebarContentProfile />
            <SidebarContentNav />
          </div>
        </div>
      </div>
    </aside>
  )
}

export default Sidebar
