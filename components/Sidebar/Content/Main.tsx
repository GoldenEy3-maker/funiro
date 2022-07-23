import { SidebarContentHead as Head } from './Head'
import { SidebarContentProfile as Profile } from './Profile'

import styles from '../../../styles/modules/Sidebar/Main.module.scss'

const { sidebarContent, sidebarContent__inner } = styles

export const SidebarContent = () => {
  return (
    <div className={sidebarContent}>
      <div className={sidebarContent__inner}>
        <Head />
        <Profile />
      </div>
    </div>
  )
}
