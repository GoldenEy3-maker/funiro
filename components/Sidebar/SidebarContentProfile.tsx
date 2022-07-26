import Image from 'next/image'

import { useState } from 'react'
import { setDynamicClasses } from '../../lib/classes.lib'

import AvatarPicture from '../../public/images/avatar.png'

import styles from '../../styles/modules/Sidebar/SidebarContentProfile.module.scss'

const {
  sidebarContentProfile,
  sidebarContentProfile__inner,
  sidebarContentProfileUpper,
  sidebarContentPorfileUpper__avatar,
  sidebarContentProfileUpper__name,
  sidebarContentProfileDowned,
  sidebarContentProfileDownedSpecials,
  sidebarContentProfileDownedSpecials__list,
  sidebarContentProfileDownedSpecialsItem,
  sidebarContentProfileDownedSpecialsItem__title,
  sidebarContentProfileDownedSpecialsItem__value,
  sidebarContentProfileUpper__btn,
  _isSubmenuOpen,
} = styles

export const SidebarContentProfile = () => {
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false)

  const toggleSubmenuHandler = () => {
    setIsSubmenuOpen((prev) => !prev)
  }

  return (
    <div
      className={setDynamicClasses({
        staticClasses: [sidebarContentProfile],
        dynamicClasses: [[_isSubmenuOpen]],
        conditions: [isSubmenuOpen],
      })}
    >
      <div className={sidebarContentProfile__inner}>
        <div
          className={sidebarContentProfileUpper}
          onClick={toggleSubmenuHandler}
        >
          <div className={sidebarContentPorfileUpper__avatar}>
            <Image
              src={AvatarPicture.src}
              alt='avatar picture profile'
              width='45px'
              height='45px'
              layout='fixed'
            />
          </div>
          <div className={sidebarContentProfileUpper__name}>Ada Wong</div>
          <div className={sidebarContentProfileUpper__btn}>
            <button type='button'>
              <svg
                width='20'
                height='20'
                viewBox='0 0 20 20'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M15.8334 7.50006L10 13.3334L4.16671 7.50006'
                  stroke='#3A3A3A'
                  strokeWidth='1.8'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </svg>
            </button>
          </div>
        </div>
        <div className={sidebarContentProfileDowned}>
          <div className={sidebarContentProfileDownedSpecials}>
            <ul className={sidebarContentProfileDownedSpecials__list}>
              <li className={sidebarContentProfileDownedSpecialsItem}>
                <div className={sidebarContentProfileDownedSpecialsItem__title}>
                  Personal customer off:
                </div>
                <div className={sidebarContentProfileDownedSpecialsItem__value}>
                  19%
                </div>
              </li>
              <li className={sidebarContentProfileDownedSpecialsItem}>
                <div className={sidebarContentProfileDownedSpecialsItem__title}>
                  Bonus points:
                </div>
                <div className={sidebarContentProfileDownedSpecialsItem__value}>
                  155
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
