import Image from 'next/image'

import { MouseEvent, TouchEvent, useState } from 'react'

import { setStaticClasses } from '../../lib/classes.lib'

import styles from '../../styles/modules/Gallery/Gallery.module.scss'

import Picture1 from '../../public/images/gallery1.jpg'
import Picture2 from '../../public/images/gallery2.jpg'
import Picture3 from '../../public/images/gallery3.jpg'
import Picture4 from '../../public/images/gallery4.jpg'
import Picture5 from '../../public/images/gallery5.jpg'
import Picture6 from '../../public/images/gallery6.jpg'
import Picture7 from '../../public/images/gallery7.jpg'
import Picture8 from '../../public/images/gallery8.jpg'
import Picture9 from '../../public/images/gallery9.jpg'
import { useRef } from 'react'

const {
  gallery,
  gallery__inner,
  gallery__subtitle,
  gallery__title,
  gallery__list,
  galleryLayout,
  galleryLayout__top,
  galleryLayout__bottom,
  gallery__content
} = styles

const Gallery = () => {
  const [translateX, setTranslateX] = useState(0)
  const [isPressed, setIsPressed] = useState(false)

  const galleryContentRef = useRef<HTMLDivElement>(null)
  const galleryListRef = useRef<HTMLUListElement>(null)

  const startTranslateXRef = useRef(0)
  const startScrollPageYRef = useRef(0)
  const currentTranslateXRef = useRef(0)

  const mouseDownHandler = (event: MouseEvent<HTMLDivElement>) => {
    setIsPressed(true)

    startTranslateXRef.current = event.clientX
    currentTranslateXRef.current = translateX
  }
  const mouseMoveHandler = (event: MouseEvent<HTMLDivElement>) => {
    if (!isPressed) return

    setTranslateX(prev =>
      currentTranslateXRef.current - (startTranslateXRef.current - event.clientX)
    )
  }
  const mouseUpHandler = (event: MouseEvent<HTMLDivElement>) => {
    setIsPressed(false)

    if (galleryListRef.current) {
      const maxTranslateX = -(galleryListRef.current.offsetWidth + 15) / 4
      const minTranslateX = (galleryListRef.current.offsetWidth + 15) / 4

      setTranslateX(prev => {
        if (prev <= maxTranslateX) return maxTranslateX
        if (prev >= minTranslateX) return minTranslateX

        return prev
      })
    }
  }

  const touchStartHandler = (event: TouchEvent<HTMLDivElement>) => {
    setIsPressed(true)

    startTranslateXRef.current = event.changedTouches[0].clientX
    startScrollPageYRef.current = window.scrollY
    currentTranslateXRef.current = translateX
  }
  const touchMoveHandler = (event: TouchEvent<HTMLDivElement>) => {
    if (startScrollPageYRef.current > window.scrollY || startScrollPageYRef.current < window.scrollY) return
    if (!isPressed) return
    setTranslateX(prev => currentTranslateXRef.current - (startTranslateXRef.current - event.changedTouches[0].clientX))
  }
  const touchEndHandler = (event: TouchEvent<HTMLDivElement>) => {
    setIsPressed(false)

    if (galleryListRef.current) {
      const maxTranslateX = -(galleryListRef.current.offsetWidth + 15) / 4
      const minTranslateX = (galleryListRef.current.offsetWidth + 15) / 4

      setTranslateX(prev => {
        if (prev <= maxTranslateX) return maxTranslateX
        if (prev >= minTranslateX) return minTranslateX

        return prev
      })
    }
  }

  return (
    <section className={ gallery }>
      <div className={ gallery__inner }>
        <h3 className={ gallery__subtitle }>Share your setup with</h3>
        <h1 className={ setStaticClasses([gallery__title, '_section-title']) }>#FuniroFurniture</h1>
        <div className={ gallery__content } ref={ galleryContentRef } onMouseDown={ mouseDownHandler }
             onMouseMove={ mouseMoveHandler } onMouseUp={ mouseUpHandler } onTouchStart={ touchStartHandler }
             onTouchMove={ touchMoveHandler } onTouchEnd={ touchEndHandler }>
          <ul className={ gallery__list } ref={ galleryListRef }
              style={ {
                transform: `translateX(${ translateX }px)`,
                transition: !isPressed ? 'transform .3s ease' : undefined
              } }>
            <li className={ galleryLayout }>
              <div className={ galleryLayout__top }>
                <Image src={ Picture1.src } alt="gallery picture" width={ Picture1.width } height={ Picture1.height }
                       objectFit="cover" layout="fixed" draggable={ false }/>
                <Image src={ Picture2.src } alt="gallery picture" width={ Picture2.width } height={ Picture2.height }
                       objectFit="cover" layout="fixed" draggable={ false }/>
              </div>
              <div className={ galleryLayout__bottom }>
                <Image src={ Picture3.src } alt="gallery picture" width={ Picture3.width } height={ Picture3.height }
                       objectFit="cover" layout="fixed" draggable={ false }/>
                <Image src={ Picture4.src } alt="gallery picture" width={ Picture4.width } height={ Picture4.height }
                       objectFit="cover" layout="fixed" draggable={ false }/>
              </div>
            </li>
            <li className={ galleryLayout }>
              <Image src={ Picture5.src } alt="gallery picture" width={ Picture5.width } height={ Picture5.height }
                     objectFit="cover" layout="fixed" draggable={ false }/>
            </li>
            <li className={ galleryLayout }>
              <div className={ galleryLayout__top }>
                <Image src={ Picture6.src } alt="gallery picture" width={ Picture6.width } height={ Picture6.height }
                       objectFit="cover" layout="fixed" draggable={ false }/>
                <Image src={ Picture7.src } alt="gallery picture" width={ Picture7.width } height={ Picture7.height }
                       objectFit="cover" layout="fixed" draggable={ false }/>
              </div>
              <div className={ galleryLayout__bottom }>
                <Image src={ Picture8.src } alt="gallery picture" width={ Picture8.width } height={ Picture8.height }
                       objectFit="cover" layout="fixed" draggable={ false }/>
                <Image src={ Picture9.src } alt="gallery picture" width={ Picture9.width } height={ Picture9.height }
                       objectFit="cover" layout="fixed" draggable={ false }/>
              </div>
            </li>
          </ul>
        </div>

      </div>
    </section>
  )
}

export default Gallery