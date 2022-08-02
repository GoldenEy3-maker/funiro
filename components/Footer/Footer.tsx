import Link from 'next/link'

import { setStaticClasses } from '../../lib/classes.lib'

import { FooterInput } from './FooterInput'

import styles from '../../styles/modules/Footer/Footer.module.scss'

const {
  footer,
  footer__inner,
  footer__list,
  footerItem,
  footerItem__title,
  footerItem__list,
  footerItemLink,
  footerItemLink__icon,
} = styles

const Footer = () => {
  return (
    <footer className={footer}>
      <div className={setStaticClasses([footer__inner, '_container'])}>
        <ul className={footer__list}>
          <li className={footerItem}>
            <h2 className={footerItem__title}>Funiro.</h2>
            <ul className={footerItem__list}>
              <li className={footerItemLink}>
                <p>
                  Worldwide furniture store since 2020. We sell over 1000+
                  branded products on our website
                </p>
              </li>
              <li className={footerItemLink}>
                <Link href='/'>
                  <a>
                    <div className={footerItemLink__icon}>
                      <svg
                        width='16'
                        height='19'
                        viewBox='0 0 16 19'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          fillRule='evenodd'
                          clipRule='evenodd'
                          d='M8.97402 18.5415C11.0897 17.0979 15.9166 13.3051 15.9166 8.75016C15.9166 4.37791 12.3722 0.833496 7.99998 0.833496C3.62773 0.833496 0.083313 4.37791 0.083313 8.75016C0.083313 13.3051 4.91023 17.0979 7.02594 18.5415C7.61757 18.9452 8.38239 18.9452 8.97402 18.5415ZM7.99998 11.2502C9.38069 11.2502 10.5 10.1309 10.5 8.75016C10.5 7.36945 9.38069 6.25016 7.99998 6.25016C6.61927 6.25016 5.49998 7.36945 5.49998 8.75016C5.49998 10.1309 6.61927 11.2502 7.99998 11.2502Z'
                          fill='#898989'
                        />
                      </svg>
                    </div>
                    <span>Sawojajar Malang, Indonesia</span>
                  </a>
                </Link>
              </li>
              <li className={footerItemLink}>
                <Link href='/'>
                  <a>
                    <div className={footerItemLink__icon}>
                      <svg
                        width='16'
                        height='16'
                        viewBox='0 0 16 16'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          d='M11.4307 11.0671L10.9152 11.8403C10.8123 11.9947 10.6762 12.1264 10.4969 12.1738C9.90944 12.329 8.34988 12.3991 5.97548 10.0247C3.60109 7.65029 3.67117 6.0907 3.82639 5.50326C3.87377 5.32393 4.00547 5.18784 4.15981 5.08495L4.93306 4.56945C5.50876 4.18565 5.66433 3.40782 5.28053 2.83212L3.82012 0.641504C3.48512 0.139007 2.83931 -0.0529745 2.28421 0.184924L1.62542 0.467265C1.12496 0.681747 0.716721 1.06668 0.47322 1.55368C0.269783 1.96055 0.112105 2.38901 0.0907411 2.84341C0.0234153 4.27539 0.337412 7.80336 4.26711 11.7331C8.1968 15.6628 11.7247 15.9767 13.1567 15.9094C13.6111 15.888 14.0396 15.7304 14.4465 15.5269C14.9335 15.2834 15.3184 14.8752 15.5329 14.3747L15.8152 13.7159C16.0531 13.1608 15.8611 12.515 15.3586 12.18L13.168 10.7196C12.5923 10.3358 11.8145 10.4914 11.4307 11.0671Z'
                          fill='#898989'
                        />
                      </svg>
                    </div>
                    <span>Sawojajar Malang, Indonesia</span>
                  </a>
                </Link>
              </li>
              <li className={footerItemLink}>
                <Link href='/'>
                  <a>www.funiro.com</a>
                </Link>
              </li>
            </ul>
          </li>
          <li className={footerItem}>
            <h2 className={footerItem__title}>Menu</h2>
            <ul className={footerItem__list}>
              <li className={footerItemLink}>
                <Link href='/'>
                  <a>Products</a>
                </Link>
              </li>
              <li className={footerItemLink}>
                <Link href='/'>
                  <a>Rooms</a>
                </Link>
              </li>
              <li className={footerItemLink}>
                <Link href='/'>
                  <a>Inspirations</a>
                </Link>
              </li>
              <li className={footerItemLink}>
                <Link href='/'>
                  <a>About Us</a>
                </Link>
              </li>
              <li className={footerItemLink}>
                <Link href='/'>
                  <a>Terms & Policy</a>
                </Link>
              </li>
            </ul>
          </li>
          <li className={footerItem}>
            <h2 className={footerItem__title}>Account</h2>
            <ul className={footerItem__list}>
              <li className={footerItemLink}>
                <Link href='/'>
                  <a>My Account</a>
                </Link>
              </li>
              <li className={footerItemLink}>
                <Link href='/'>
                  <a>Checkout</a>
                </Link>
              </li>
              <li className={footerItemLink}>
                <Link href='/'>
                  <a>My Cart</a>
                </Link>
              </li>
              <li className={footerItemLink}>
                <Link href='/'>
                  <a>My catalog</a>
                </Link>
              </li>
            </ul>
          </li>
          <li className={footerItem}>
            <h2 className={footerItem__title}>Stay Connected</h2>
            <ul className={footerItem__list}>
              <li className={footerItemLink}>
                <Link href='/'>
                  <a>Facebook</a>
                </Link>
              </li>
              <li className={footerItemLink}>
                <Link href='/'>
                  <a>Instagram</a>
                </Link>
              </li>
              <li className={footerItemLink}>
                <Link href='/'>
                  <a>Twitter</a>
                </Link>
              </li>
            </ul>
          </li>
          <li className={footerItem}>
            <h2 className={footerItem__title}>Stay Updated</h2>
            <FooterInput />
          </li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer
