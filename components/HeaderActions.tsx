import Link from 'next/link'
import Image from 'next/image'

import { setStaticClasses } from '../lib/classes.lib'

import styles from '../styles/modules/Header.module.scss'

import AvatarImage from '../public/images/avatar.png'
import { useHeaderMobileSearchContext } from '../context/headerMobileSearch.context'

const {
  headerActions,
  headerActions__list,
  headerActions__item,
  _search
} = styles

export const HeaderActions = () => {
  const { openHeaderMobileSearchHandler } = useHeaderMobileSearchContext()

  return (
    <div className={ headerActions }>
      <ul className={ headerActions__list }>
        <li className={ headerActions__item }>
          <Link href="#"><a>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M11.9996 21.0541C-8 10 5.99999 -2 11.9996 5.58806C18 -2 32 10 11.9996 21.0541Z" stroke="#262F56"
                    strokeWidth="1.8"/>
            </svg>
          </a></Link>
        </li>
        <li className={ headerActions__item }>
          <Link href="#"><a>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M1 2.50001H2.65424C3.13263 2.50001 3.37183 2.50001 3.56628 2.58675C3.73771 2.66322 3.88415 2.78639 3.98886 2.94217C4.10763 3.11889 4.14862 3.35455 4.23058 3.82586L4.6087 6.00001M4.6087 6.00001L5.49173 11.0774C5.67091 12.1077 5.7605 12.6229 6.02583 12.994C6.25945 13.3207 6.58606 13.5695 6.96311 13.7081C7.39133 13.8654 7.91176 13.815 8.95264 13.7143L18.614 12.7793C19.6298 12.681 20.1378 12.6318 20.5221 12.4033C20.8653 12.1993 21.1395 11.8972 21.3095 11.536C21.5 11.1314 21.5 10.6211 21.5 9.60051V9.60051C21.5 8.51583 21.5 7.97349 21.2922 7.55395C21.1068 7.17972 20.809 6.87291 20.4404 6.67655C20.0272 6.45641 19.4851 6.44036 18.4009 6.40827L4.6087 6.00001Z"
                stroke="#262F56" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
              <circle cx="8.5" cy="19" r="2" stroke="#262F56" strokeWidth="1.8"/>
              <circle cx="18" cy="19" r="2" stroke="#262F56" strokeWidth="1.8"/>
            </svg>
          </a></Link>
        </li>
        <li className={ headerActions__item }>
          <Link href="#"><a>
            <Image src={ AvatarImage.src } alt="User avatar picture" width={ AvatarImage.width }
                   height={ AvatarImage.height }
                   layout="fixed"/>
          </a></Link>
        </li>
        <li className={ setStaticClasses([headerActions__item, _search]) } tabIndex={ 0 }
            onClick={ openHeaderMobileSearchHandler }>
          <svg width="30" height="30" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M16.6667 16.6667L12.5802 12.5802M12.5802 12.5802C13.5604 11.5999 14.1667 10.2458 14.1667 8.75C14.1667 5.75846 11.7416 3.33334 8.75004 3.33334C5.7585 3.33334 3.33337 5.75846 3.33337 8.75C3.33337 11.7415 5.7585 14.1667 8.75004 14.1667C10.2458 14.1667 11.6 13.5604 12.5802 12.5802Z"
              stroke="#262F56" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>

        </li>
      </ul>
    </div>
  )
}