import Image from 'next/image'
import Link from 'next/link'

import AvatarPicture from '../../public/images/avatar.png'

import styles from '../../styles/modules/Sidebar/SidebarContentProfile.module.scss'

const {
  sidebarContentProfile,
  sidebarContentPorfile__avatar,
  sidebarContentProfileDetails,
  sidebarContentProfileDetails__initials,
  sidebarContentProfileDetailsSpecials,
  sidebarContentProfileDetailsSpecialsOff,
  sidebarContentProfileDetailsSpecialsOff__title,
  sidebarContentProfileDetailsSpecialsOff__value,
  sidebarContentProfileDetailsSpecialsBonuses,
  sidebarContentProfileDetailsSpecialsBonuses__title,
  sidebarContentProfileDetailsSpecialsBonuses__value,
} = styles

export const SidebarContentProfile = () => {
  return (
    <div className={sidebarContentProfile}>
      <Link href='/'>
        <a>
          <div className={sidebarContentPorfile__avatar}>
            <Image
              src={AvatarPicture.src}
              alt='avatar picture profile'
              width='45px'
              height='45px'
              layout='fixed'
            />
          </div>
          <div className={sidebarContentProfileDetails}>
            <div className={sidebarContentProfileDetails__initials}>
              Ada Wong
            </div>
            {/* <div className={sidebarContentProfileDetailsSpecials}>
              <div className={sidebarContentProfileDetailsSpecialsOff}>
                <div className={sidebarContentProfileDetailsSpecialsOff__title}>
                  Your personal customer discount:
                </div>
                <div className={sidebarContentProfileDetailsSpecialsOff__value}>
                  19%
                </div>
              </div>
              <div className={sidebarContentProfileDetailsSpecialsBonuses}>
                <div
                  className={sidebarContentProfileDetailsSpecialsBonuses__title}
                >
                  Your bonus points:
                </div>
                <div
                  className={sidebarContentProfileDetailsSpecialsBonuses__value}
                >
                  155
                </div>
              </div>
            </div> */}
          </div>
        </a>
      </Link>
    </div>
  )
}
