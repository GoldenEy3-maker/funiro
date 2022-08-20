import Image from 'next/image'

import React, { useEffect, useState, useRef } from 'react'

import { setStaticClasses } from '../../lib/classes.lib'

import { useWindow } from '../../hooks/window.hook'

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

type TReactEventHandlers = React.MouseEvent | React.TouchEvent

type TEventHandlers = MouseEvent | TouchEvent | TReactEventHandlers

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
  const [isListMoreThenWindow, setIsListMoreThenWindow] = useState(false)
  const [translateX, setTranslateX] = useState(0)
  const [isPressed, setIsPressed] = useState(false)

  const galleryContentRef = useRef<HTMLDivElement>(null)
  const galleryListRef = useRef<HTMLUListElement>(null)

  const startTranslateXRef = useRef(0)
  const startScrollPageYRef = useRef(0)
  const currentTranslateXRef = useRef(0)
  const multipleSwipeSpeedRef = useRef(1.5)
  const maxTranslateXRef = useRef<number | undefined>(undefined)
  const minTranslateXRef = useRef<number | undefined>(undefined)
  const gapElementsRef = useRef(15)

  const { windowWidth } = useWindow()

  const isEventTouch = (event: TEventHandlers) => event.type.includes('touch')

  const getCurrentEvent = (event: TEventHandlers) => {
    if (isEventTouch(event)) {
      const evt = event as TouchEvent
      return evt.changedTouches[0]
    }

    return event as React.MouseEvent<HTMLDivElement>
  }

  const swipeActionHandler = (event: MouseEvent | TouchEvent) => {
    if (isEventTouch(event) && (startScrollPageYRef.current > window.scrollY || startScrollPageYRef.current < window.scrollY)) return

    const evt = getCurrentEvent(event)

    setTranslateX(prev =>
      (currentTranslateXRef.current - (startTranslateXRef.current - evt.clientX) * multipleSwipeSpeedRef.current)
    )
  }

  const swipeEndHandler = () => {
    setIsPressed(false)

    setTranslateX(prev => {
      if (maxTranslateXRef.current && prev <= maxTranslateXRef.current) return maxTranslateXRef.current
      if (minTranslateXRef.current && prev >= minTranslateXRef.current) return minTranslateXRef.current

      return prev
    })

    document.removeEventListener('mousemove', swipeActionHandler)
    document.removeEventListener('mouseup', swipeEndHandler)
    document.removeEventListener('touchmove', swipeActionHandler)
    document.removeEventListener('touchend', swipeEndHandler)
  }

  const swipeStartHandler = (event: TReactEventHandlers) => {
    if (isListMoreThenWindow) return

    const evt = getCurrentEvent(event)

    setIsPressed(true)

    startTranslateXRef.current = evt.clientX
    currentTranslateXRef.current = translateX

    if (isEventTouch(event)) {
      startScrollPageYRef.current = window.scrollY
    }

    document.addEventListener('mousemove', swipeActionHandler)
    document.addEventListener('mouseup', swipeEndHandler)
    document.addEventListener('touchmove', swipeActionHandler)
    document.addEventListener('touchend', swipeEndHandler)
  }

  useEffect(() => {
    if (galleryListRef.current) setIsListMoreThenWindow(galleryListRef.current.clientWidth < windowWidth)
  }, [windowWidth])

  useEffect(() => {
    if (isListMoreThenWindow) {
      setTranslateX(0)
      return
    }

    if (galleryListRef.current) {
      const { clientWidth: ListClientWidth, offsetLeft: ListOffsetLeft } = galleryListRef.current

      maxTranslateXRef.current = -((ListClientWidth + ListOffsetLeft) + gapElementsRef.current) + windowWidth
      minTranslateXRef.current = ((ListClientWidth + ListOffsetLeft) + gapElementsRef.current) - windowWidth
    }
  }, [windowWidth, isListMoreThenWindow])

  return (
    <section className={ gallery }>
      <div className={ gallery__inner }>
        <h3 className={ gallery__subtitle }>Share your setup with</h3>
        <h1 className={ setStaticClasses([gallery__title, '_section-title']) }>#FuniroFurniture</h1>
        <div className={ gallery__content } ref={ galleryContentRef } onMouseDown={ swipeStartHandler }
             onTouchStart={ swipeStartHandler }
        >
          <ul className={ gallery__list } ref={ galleryListRef }
              style={ {
                transform: `translateX(${ translateX }px)`,
                transition: !isPressed ? 'transform 500ms ease' : undefined
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