import { SidebarContent as Content } from './Content/Main'

import { useSidebarContext } from '../../context/Sidebar.context'

import { setDynamicClasses } from '../../lib/classes.lib'

import styles from '../../styles/modules/Sidebar/Main.module.scss'

const { sidebar, sidebar__inner, sidebar__mask, _isSidebarShow } = styles

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
        <Content />
      </div>
    </aside>
  )
}

export default Sidebar
