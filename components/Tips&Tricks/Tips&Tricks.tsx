import Image, { StaticImageData } from 'next/image'

import { useEffect, useRef, useState } from 'react'

import { v4 as uuidv4 } from 'uuid'

import { formatDate } from '../../lib/date.lib'
import { setDynamicClasses, setStaticClasses } from '../../lib/classes.lib'

import { useWindow } from '../../hooks/window.hook'

import Slide1 from '../../public/images/TipsTricksSlide1.jpg'
import Slide2 from '../../public/images/TipsTricksSlide2.jpg'
import Slide3 from '../../public/images/TipsTricksSlide3.jpg'

import styles from '../../styles/modules/TipsTricks/TipsTricks.module.scss'

interface ITipsTricksSliderData {
  id: string
  image: StaticImageData
  title: string
  date: string
}

const {
  tipsTricks,
  tipsTricks__inner,
  tipsTricks__title,
  tipsTricksSlider,
  tipsTricksSlider__list,
  tipsTricksSliderItem,
  tipsTricksSliderItem__picture,
  tipsTricksSliderItemInfo,
  tipsTricksSliderItemInfo__title,
  tipsTricksSliderItemInfo__date,
  tipsTricksSliderDots,
  tipsTricksSliderDots__list,
  tipsTricksSliderDots__item,
  tipsTricksArrow,
  _prevArrow,
  _nextArrow,
  _activeSlide,
} = styles

const TipsTricks = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  const [forceTransformX, setForceTransformX] = useState<number | null>(null)
  const [slideWidth, setSlideWidth] = useState(391)
  const [tresholdSlideValue, setTresholdSlideValue] = useState(0)
  const [gapSlidesValue, setGapSlidesValue] = useState(32)

  const tipsTricksSliderDataRef = useRef<ITipsTricksSliderData[]>([
    {
      id: uuidv4(),
      image: Slide1,
      title: 'How to create a living room to love',
      date: '2020-06-20',
    },
    {
      id: uuidv4(),
      image: Slide2,
      title: 'Solution for clean look working space',
      date: '2020-06-10',
    },
    {
      id: uuidv4(),
      image: Slide3,
      title: 'Make your cooking activity more fun with good setup',
      date: '2020-06-20',
    },
    {
      id: uuidv4(),
      image: Slide2,
      title: 'Make your cooking activity more fun with good setup',
      date: '2020-12-30',
    },
  ])

  const { adaptiveValue, windowWidth } = useWindow()

  const prevSlideHandler = () => {
    setActiveIndex((prev) => prev - 1)

    if (activeIndex === 0) {
      setForceTransformX(
        slideWidth +
          gapSlidesValue +
          tresholdSlideValue +
          tipsTricksSliderDataRef.current.length * (slideWidth + gapSlidesValue)
      )

      setTimeout(() => {
        setForceTransformX(null)
      }, 0)

      setActiveIndex(tipsTricksSliderDataRef.current.length - 1)
    }
  }

  const nextSlideHandler = () => {
    setActiveIndex((prev) => prev + 1)

    if (activeIndex === tipsTricksSliderDataRef.current.length - 1) {
      setForceTransformX(tresholdSlideValue < 0 ? 0 : tresholdSlideValue)

      setTimeout(() => {
        setForceTransformX(null)
      }, 0)

      setActiveIndex(0)
    }
  }

  const clickDotHandler = (id: string) => {
    setActiveIndex(
      tipsTricksSliderDataRef.current.findIndex((slide) => slide.id === id)
    )
  }

  useEffect(() => {
    setSlideWidth(adaptiveValue(290, 391))
    setGapSlidesValue(adaptiveValue(15, 32))
  }, [adaptiveValue])

  useEffect(() => {
    if (windowWidth >= 1200) {
      setTresholdSlideValue(adaptiveValue(-40, 0, 1200))
    } else if (windowWidth >= 991.98 && windowWidth <= 1200) {
      setTresholdSlideValue(adaptiveValue(50, -40, 991.98, 1200))
    } else if (windowWidth >= 675 && windowWidth <= 991.98) {
      setTresholdSlideValue(adaptiveValue(180, 50, 675, 991.98))
    } else if (windowWidth >= 320 && windowWidth <= 675) {
      setTresholdSlideValue(
        adaptiveValue(slideWidth + gapSlidesValue, 180, 320, 675)
      )
    }
  }, [adaptiveValue, windowWidth, slideWidth, gapSlidesValue])

  return (
    <section className={tipsTricks}>
      <div className={setStaticClasses([tipsTricks__inner, '_container'])}>
        <h1 className={setStaticClasses([tipsTricks__title, '_section-title'])}>
          Tips & Tricks
        </h1>
        <div className={setStaticClasses([tipsTricksArrow, _prevArrow])}>
          <button type='button' onClick={prevSlideHandler}>
            <svg
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M14.9999 4.99999L7.99988 12L14.9999 19'
                stroke='#E89F71'
                strokeWidth='1.8'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </svg>
          </button>
        </div>
        <div className={tipsTricksSlider}>
          <ul
            className={tipsTricksSlider__list}
            style={{
              transform: `translateX(-${
                forceTransformX !== null
                  ? forceTransformX
                  : slideWidth +
                    gapSlidesValue +
                    tresholdSlideValue +
                    activeIndex * (slideWidth + gapSlidesValue)
              }px)`,
              transition:
                forceTransformX !== null ? undefined : 'transform .4s ease',
            }}
          >
            <li className={tipsTricksSliderItem}>
              <div className={tipsTricksSliderItem__picture}>
                <Image
                  src={
                    tipsTricksSliderDataRef.current[
                      tipsTricksSliderDataRef.current.length - 2
                    ].image.src
                  }
                  alt='slide picture'
                  width={adaptiveValue(
                    290,
                    tipsTricksSliderDataRef.current[
                      tipsTricksSliderDataRef.current.length - 2
                    ].image.width
                  )}
                  height={adaptiveValue(
                    200,
                    tipsTricksSliderDataRef.current[
                      tipsTricksSliderDataRef.current.length - 2
                    ].image.height
                  )}
                  objectFit='cover'
                  layout='fixed'
                />
              </div>
              <div className={tipsTricksSliderItemInfo}>
                <h2 className={tipsTricksSliderItemInfo__title}>
                  {
                    tipsTricksSliderDataRef.current[
                      tipsTricksSliderDataRef.current.length - 2
                    ].title
                  }
                </h2>
                <time
                  className={tipsTricksSliderItemInfo__date}
                  dateTime={
                    tipsTricksSliderDataRef.current[
                      tipsTricksSliderDataRef.current.length - 2
                    ].date
                  }
                >
                  {formatDate(
                    tipsTricksSliderDataRef.current[
                      tipsTricksSliderDataRef.current.length - 2
                    ].date
                  )}
                </time>
              </div>
            </li>
            <li className={tipsTricksSliderItem}>
              <div className={tipsTricksSliderItem__picture}>
                <Image
                  src={
                    tipsTricksSliderDataRef.current[
                      tipsTricksSliderDataRef.current.length - 1
                    ].image.src
                  }
                  alt='slide picture'
                  width={adaptiveValue(
                    290,
                    tipsTricksSliderDataRef.current[
                      tipsTricksSliderDataRef.current.length - 1
                    ].image.width
                  )}
                  height={adaptiveValue(
                    200,
                    tipsTricksSliderDataRef.current[
                      tipsTricksSliderDataRef.current.length - 1
                    ].image.height
                  )}
                  objectFit='cover'
                  layout='fixed'
                />
              </div>
              <div className={tipsTricksSliderItemInfo}>
                <h2 className={tipsTricksSliderItemInfo__title}>
                  {
                    tipsTricksSliderDataRef.current[
                      tipsTricksSliderDataRef.current.length - 1
                    ].title
                  }
                </h2>
                <time
                  className={tipsTricksSliderItemInfo__date}
                  dateTime={
                    tipsTricksSliderDataRef.current[
                      tipsTricksSliderDataRef.current.length - 1
                    ].date
                  }
                >
                  {formatDate(
                    tipsTricksSliderDataRef.current[
                      tipsTricksSliderDataRef.current.length - 1
                    ].date
                  )}
                </time>
              </div>
            </li>
            {tipsTricksSliderDataRef.current.length > 0 &&
              tipsTricksSliderDataRef.current.map((slide) => (
                <li
                  key={slide.id}
                  className={setDynamicClasses({
                    staticClasses: [tipsTricksSliderItem],
                    dynamicClasses: [[_activeSlide]],
                    conditions: [
                      slide.id ===
                        tipsTricksSliderDataRef.current[activeIndex].id,
                    ],
                  })}
                >
                  <div className={tipsTricksSliderItem__picture}>
                    <Image
                      src={slide.image.src}
                      alt='slide picture'
                      width={adaptiveValue(290, slide.image.width)}
                      height={adaptiveValue(200, slide.image.height)}
                      objectFit='cover'
                      layout='fixed'
                    />
                  </div>
                  <div className={tipsTricksSliderItemInfo}>
                    <h2 className={tipsTricksSliderItemInfo__title}>
                      {slide.title}
                    </h2>
                    <time
                      className={tipsTricksSliderItemInfo__date}
                      dateTime={slide.date}
                    >
                      {formatDate(slide.date)}
                    </time>
                  </div>
                </li>
              ))}
            <li className={tipsTricksSliderItem}>
              <div className={tipsTricksSliderItem__picture}>
                <Image
                  src={tipsTricksSliderDataRef.current[0].image.src}
                  alt='slide picture'
                  width={adaptiveValue(
                    290,
                    tipsTricksSliderDataRef.current[0].image.width
                  )}
                  height={adaptiveValue(
                    200,
                    tipsTricksSliderDataRef.current[0].image.height
                  )}
                  objectFit='cover'
                  layout='fixed'
                />
              </div>
              <div className={tipsTricksSliderItemInfo}>
                <h2 className={tipsTricksSliderItemInfo__title}>
                  {tipsTricksSliderDataRef.current[0].title}
                </h2>
                <time
                  className={tipsTricksSliderItemInfo__date}
                  dateTime={tipsTricksSliderDataRef.current[0].date}
                >
                  {formatDate(tipsTricksSliderDataRef.current[0].date)}
                </time>
              </div>
            </li>
            <li className={tipsTricksSliderItem}>
              <div className={tipsTricksSliderItem__picture}>
                <Image
                  src={tipsTricksSliderDataRef.current[1].image.src}
                  alt='slide picture'
                  width={adaptiveValue(
                    290,
                    tipsTricksSliderDataRef.current[1].image.width
                  )}
                  height={adaptiveValue(
                    200,
                    tipsTricksSliderDataRef.current[1].image.height
                  )}
                  objectFit='cover'
                  layout='fixed'
                />
              </div>
              <div className={tipsTricksSliderItemInfo}>
                <h2 className={tipsTricksSliderItemInfo__title}>
                  {tipsTricksSliderDataRef.current[1].title}
                </h2>
                <time
                  className={tipsTricksSliderItemInfo__date}
                  dateTime={tipsTricksSliderDataRef.current[1].date}
                >
                  {formatDate(tipsTricksSliderDataRef.current[1].date)}
                </time>
              </div>
            </li>
          </ul>
        </div>
        <div className={setStaticClasses([tipsTricksArrow, _nextArrow])}>
          <button type='button' onClick={nextSlideHandler}>
            <svg
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M9.00012 4.99999L16.0001 12L9.00012 19'
                stroke='#E89F71'
                strokeWidth='1.8'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </svg>
          </button>
        </div>
        <div
          className={setStaticClasses([tipsTricksSliderDots, '_sliderDots'])}
        >
          <ul
            className={setStaticClasses([
              tipsTricksSliderDots__list,
              '_sliderDots__list',
            ])}
          >
            {tipsTricksSliderDataRef.current.length > 0 &&
              tipsTricksSliderDataRef.current.map((slide) => (
                <li
                  key={slide.id}
                  className={setDynamicClasses({
                    staticClasses: [
                      tipsTricksSliderDots__item,
                      '_sliderDots__item',
                    ],
                    dynamicClasses: [['_activeDot']],
                    conditions: [
                      slide.id ===
                        tipsTricksSliderDataRef.current[activeIndex].id,
                    ],
                  })}
                >
                  <button
                    type='button'
                    onClick={clickDotHandler.bind(null, slide.id)}
                  >
                    <span></span>
                  </button>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default TipsTricks
