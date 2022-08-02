import Image from 'next/image'
import Link from 'next/link'

import { MouseEvent, useRef } from 'react'

import { setDynamicClasses } from '../../lib/classes.lib'

import styles from '../../styles/modules/Products/Products.module.scss'

import { IProductsData } from './Products'

interface IProductItemProp {
  product: IProductsData
}

const {
  productsContentItem,
  productsContentItem__label,
  productsContentItem__picture,
  productsContentItemInfo,
  productsContentItemInfo__title,
  productsContentItemInfo__text,
  productsContentItemInfoPrice,
  productsContentItemInfoPrice__current,
  productsContentItemInfoPrice__previous,
  productsContentItemOverlay,
  productsContentItemOverlay__inner,
  productsContentItemOverlay__link,
  productsContentItemOverlayControls,
  productsContentItemOverlayControls__list,
  productsContentItemOverlayControlsItem,
  productsContentItemOverlayControlsItem__icon,
  productsContentItemOverlayControlsItem__text,
  _discount,
  _new,
  _isOverlayOpen
} = styles

export const ProductItem = ({ product }: IProductItemProp) => {
  const productItemRef = useRef<HTMLLIElement>(null)

  const clickProductItemPictureHandler = () => {
    if (productItemRef.current) {
      productItemRef.current.classList.add(_isOverlayOpen)
    }
  }

  const clickProductItemOverlayHandler = (event: MouseEvent) => {
    const target = event.target as HTMLDivElement

    if (
      target.closest(`.${ productsContentItemOverlay__link }`) ||
      target.closest(`.${ productsContentItemOverlayControls }`)
    )
      return

    if (productItemRef.current) {
      productItemRef.current.classList.remove(_isOverlayOpen)
    }
  }

  return (
    <li className={ productsContentItem } ref={ productItemRef }>
      <div
        className={ productsContentItemOverlay }
        onClick={ clickProductItemOverlayHandler }
      >
        <div className={ productsContentItemOverlay__inner }>
          <div className={ productsContentItemOverlay__link }>
            <Link href={ product.href }>
              <a>More Details</a>
            </Link>
          </div>
          <div className={ productsContentItemOverlayControls }>
            <ul className={ productsContentItemOverlayControls__list }>
              <li className={ productsContentItemOverlayControlsItem }>
                <button type="button">
                  <div className={ productsContentItemOverlayControlsItem__icon }>
                    <svg
                      width="18"
                      height="20"
                      viewBox="0 0 18 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M15 14C14.212 14 13.5 14.31 12.966 14.807L5.91 10.7C5.96 10.47 6 10.24 6 10C6 9.76 5.96 9.53 5.91 9.3L12.96 5.19C13.5 5.69 14.21 6 15 6C16.66 6 18 4.66 18 3C18 1.34 16.66 0 15 0C13.34 0 12 1.34 12 3C12 3.24 12.04 3.47 12.09 3.7L5.04 7.81C4.5 7.31 3.79 7 3 7C1.34 7 0 8.34 0 10C0 11.66 1.34 13 3 13C3.79 13 4.5 12.69 5.04 12.19L12.088 16.308C12.0317 16.5344 12.0022 16.7667 12 17C12 17.5933 12.1759 18.1734 12.5056 18.6667C12.8352 19.1601 13.3038 19.5446 13.8519 19.7716C14.4001 19.9987 15.0033 20.0581 15.5853 19.9424C16.1672 19.8266 16.7018 19.5409 17.1213 19.1213C17.5409 18.7018 17.8266 18.1672 17.9424 17.5853C18.0581 17.0033 17.9987 16.4001 17.7716 15.8519C17.5446 15.3038 17.1601 14.8352 16.6667 14.5056C16.1734 14.1759 15.5933 14 15 14Z"
                        fill="white"
                      />
                    </svg>
                  </div>
                  <div className={ productsContentItemOverlayControlsItem__text }>
                    Share
                  </div>
                </button>
              </li>
              <li className={ productsContentItemOverlayControlsItem }>
                <button type="button">
                  <div className={ productsContentItemOverlayControlsItem__icon }>
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M11.9996 21.0541C-8 10 5.99999 -2 11.9996 5.58806C18 -2 32 10 11.9996 21.0541Z"
                        stroke="white"
                        strokeWidth="1.8"
                      />
                    </svg>
                  </div>
                  <div className={ productsContentItemOverlayControlsItem__text }>
                    Like
                  </div>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
      { (product.discount !== '' || product.isNew) && (
        <div
          className={ setDynamicClasses({
            staticClasses: [productsContentItem__label],
            dynamicClasses: [[_discount], [_new]],
            conditions: [!product.isNew, product.isNew]
          }) }
        >
          { !product.isNew ? product.discount : 'New' }
        </div>
      ) }

      <div className={ productsContentItem__picture }>
        <button type="button" onClick={ clickProductItemPictureHandler }>
          <Image
            src={ product.picture.src }
            alt="product picture"
            width={ product.picture.width }
            height={ product.picture.height }
            objectFit="cover"
          />
        </button>
      </div>
      <div className={ productsContentItemInfo }>
        <div className={ productsContentItemInfo__title }>{ product.title }</div>
        <div className={ productsContentItemInfo__text }>{ product.text }</div>
        <div className={ productsContentItemInfoPrice }>
          <div className={ productsContentItemInfoPrice__current }>
            { product.price }
          </div>
          { product.prevPrice !== '' && (
            <div className={ productsContentItemInfoPrice__previous }>
              { product.prevPrice }
            </div>
          ) }
        </div>
      </div>
    </li>
  )
}
