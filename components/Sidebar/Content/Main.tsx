import { SidebarContentHead as Head } from './Head'
import { SidebarContentProfile as Profile } from './Profile'
import { SidebarContentNav as Nav } from './Nav/Main'

import styles from '../../../styles/modules/Sidebar/Main.module.scss'

const { sidebarContent, sidebarContent__inner } = styles

export const SidebarContent = () => {
  return (
    <div className={sidebarContent}>
      <div className={sidebarContent__inner}>
        <Head />
        <Profile />
        <Nav />
      </div>
    </div>
  )
}
