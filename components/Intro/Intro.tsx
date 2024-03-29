import { TIntervalTimer } from '../../typescript/type'

import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'

import { useEffect, useRef, useState } from 'react'

import { v4 as uuidv4 } from 'uuid'

import { useWindow } from '../../hooks/window.hook'

import { setDynamicClasses, setStaticClasses } from '../../lib/classes.lib'

import styles from '../../styles/modules/Intro/Intro.module.scss'

import Slide1 from '../../public/images/slide1.jpg'

interface IIntroSliderData {
  id: string
  image: StaticImageData
  title: string
  description: string
  price: string
  href: string
}

const {
  intro,
  intro__inner,
  introControls,
  introControlsDots,
  introControlsDots__list,
  introControlsDotsItem,
  introControlsArrow,
  introInfo,
  introInfo__title,
  introInfo__text,
  introInfo__link,
  introSlider,
  introSlider__list,
  introSliderItem,
  introSlideInfo,
  introSlideInfo__inner,
  introSlideInfoHead,
  introSlideInfoBody,
  introSlideInfoFooter,
  introSlideInfoFooter__price,
  introSlideInfoFooter__link,
  _isAnimate,
} = styles

const Intro = () => {
  const [activeSlideIndex, setActiveSlideIndex] = useState<number>(0)
  const [transformX, setTransformX] = useState<number | null>(null)
  const [slideWidth, setSlideWidth] = useState(934)
  const [gapSlides, setGapSlides] = useState(32)
  const [startPosition, setStartPosition] = useState(
    (slideWidth + gapSlides) / 3
  )
  const [isDisabledButtons, setIsDisabledButtons] = useState(false)

  const sliderDataRef = useRef<IIntroSliderData[]>([
    {
      id: uuidv4(),
      image: Slide1,
      title: 'Bohauss 1',
      description: 'Luxury big sofa 2-seat',
      price: 'Rp 17.000.000',
      href: '/',
    },
    {
      id: uuidv4(),
      image: Slide1,
      title: 'Bohauss 2',
      description: 'Luxury big sofa 2-seat',
      price: 'Rp 17.000.000',
      href: '/',
    },
    {
      id: uuidv4(),
      image: Slide1,
      title: 'Bohauss 3',
      description: 'Luxury big sofa 2-seat',
      price: 'Rp 17.000.000',
      href: '/',
    },
    {
      id: uuidv4(),
      image: Slide1,
      title: 'Bohauss 4',
      description: 'Luxury big sofa 2-seat',
      price: 'Rp 17.000.000',
      href: '/',
    },
    {
      id: uuidv4(),
      image: Slide1,
      title: 'Bohauss 5',
      description: 'Luxury big sofa 2-seat',
      price: 'Rp 17.000.000',
      href: '/',
    },
  ])
  const introSlideInfoRef = useRef<HTMLDivElement>(null)
  const animTimeoutIDRef = useRef<TIntervalTimer>()
  const transitionDurationRef = useRef(500)

  const { adaptiveValue } = useWindow()

  const animateSlideInfoHandler = () => {
    if (introSlideInfoRef.current) {
      introSlideInfoRef.current.classList.add(_isAnimate)

      if (animTimeoutIDRef.current) {
        clearTimeout(animTimeoutIDRef.current)
        animTimeoutIDRef.current = undefined
      }

      animTimeoutIDRef.current = setTimeout(() => {
        introSlideInfoRef.current?.classList.remove(_isAnimate)
      }, transitionDurationRef.current + 100)
    }
  }

  const nextSlideHandler = () => {
    setIsDisabledButtons(true)
    setActiveSlideIndex((prev) => prev + 1)
    animateSlideInfoHandler()

    if (activeSlideIndex === sliderDataRef.current.length - 1) {
      setTransformX(startPosition)

      setTimeout(() => {
        setTransformX(null)
      }, 0)

      setActiveSlideIndex(0)
    }

    setTimeout(() => {
      setIsDisabledButtons(false)
    }, transitionDurationRef.current)
  }

  const prevSlideHandler = () => {
    setIsDisabledButtons(true)
    setActiveSlideIndex((prev) => prev - 1)
    animateSlideInfoHandler()

    if (activeSlideIndex === 0) {
      setTransformX(
        startPosition +
          (slideWidth + gapSlides) +
          sliderDataRef.current.length * (slideWidth + gapSlides)
      )

      setTimeout(() => {
        setTransformX(null)
      }, 0)

      setActiveSlideIndex(sliderDataRef.current.length - 1)
    }

    setTimeout(() => {
      setIsDisabledButtons(false)
    }, transitionDurationRef.current)
  }

  const clickDotHandler = (id: string) => {
    setActiveSlideIndex(
      sliderDataRef.current.findIndex((slide) => slide.id === id)
    )
    animateSlideInfoHandler()
  }

  useEffect(() => {
    setSlideWidth(adaptiveValue(305, 934))
    setGapSlides(adaptiveValue(24, 32))
  }, [adaptiveValue])

  return (
    <section className={intro}>
      <div className={setStaticClasses([intro__inner, '_container'])}>
        <div className={introControls}>
          <div className={introControlsArrow}>
            <button
              type='button'
              onClick={prevSlideHandler}
              disabled={isDisabledButtons}
            >
              <svg
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M14.9999 4.99999L7.99988 12L14.9999 19'
                  stroke='#000'
                  strokeWidth='1.8'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </svg>
            </button>
          </div>
          <div className={setStaticClasses([introControlsDots, '_sliderDots'])}>
            <ul
              className={setStaticClasses([
                introControlsDots__list,
                '_sliderDots__list',
              ])}
            >
              {sliderDataRef.current &&
                sliderDataRef.current.length > 0 &&
                sliderDataRef.current.map((slide) => (
                  <li
                    key={slide.id}
                    className={setDynamicClasses({
                      staticClasses: [
                        introControlsDotsItem,
                        '_sliderDots__item',
                      ],
                      dynamicClasses: [['_activeDot']],
                      conditions: [
                        slide.id === sliderDataRef.current[activeSlideIndex].id,
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
          <div className={introControlsArrow}>
            <button
              type='button'
              onClick={nextSlideHandler}
              disabled={isDisabledButtons}
            >
              <svg
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M9.00012 4.99999L16.0001 12L9.00012 19'
                  stroke='#000'
                  strokeWidth='1.8'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </svg>
            </button>
          </div>
        </div>
        <div className={introInfo}>
          <div className={introInfo__title}>
            High-Quality Furniture Just For You
          </div>
          <div className={introInfo__text}>
            Our furniture is made from selected and best quality materials that
            are suitable for your dream home
          </div>
          <div className={setStaticClasses([introInfo__link, '_primary-link'])}>
            <Link href='/'>
              <a>Shop Now</a>
            </Link>
          </div>
        </div>
      </div>
      <div className={introSlideInfo} ref={introSlideInfoRef}>
        <div className={introSlideInfo__inner}>
          <div className={introSlideInfoHead}>
            {sliderDataRef.current[activeSlideIndex].title}
          </div>
          <div className={introSlideInfoBody}>
            {sliderDataRef.current[activeSlideIndex].description}
          </div>
          <div className={introSlideInfoFooter}>
            <div className={introSlideInfoFooter__price}>
              {sliderDataRef.current[activeSlideIndex].price}
            </div>
            <div className={introSlideInfoFooter__link}>
              <Link href={sliderDataRef.current[activeSlideIndex].href}>
                <a>
                  <svg
                    width='16'
                    height='12'
                    viewBox='0 0 16 12'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M15.3652 6.56003L10.3852 11.56C10.2252 11.72 10.0251 11.8 9.82515 11.8C9.62515 11.8 9.42515 11.72 9.26515 11.56C8.94515 11.24 8.94515 10.74 9.26515 10.42L12.8852 6.78003H1.20515C0.765151 6.78003 0.405151 6.42003 0.405151 5.98003C0.405151 5.54003 0.765151 5.18003 1.20515 5.18003H12.8852L9.26515 1.54004C8.94515 1.22004 8.94515 0.720034 9.26515 0.400034C9.58515 0.0800342 10.0852 0.0800342 10.4052 0.400034L15.3852 5.40003C15.6852 5.74003 15.6852 6.26003 15.3652 6.56003Z'
                      fill='black'
                    />
                  </svg>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className={introSlider}>
        <ul
          className={introSlider__list}
          style={{
            transform: `translateX(-${
              transformX
                ? transformX
                : startPosition +
                  (slideWidth + gapSlides) +
                  activeSlideIndex * (slideWidth + gapSlides)
            }px)`,
            transition: transformX
              ? undefined
              : `transform ${transitionDurationRef.current}ms ease`,
          }}
        >
          <li className={introSliderItem}>
            <Image
              src={
                sliderDataRef.current[sliderDataRef.current.length - 2].image
                  .src
              }
              alt=''
              width={adaptiveValue(
                305,
                sliderDataRef.current[sliderDataRef.current.length - 2].image
                  .width
              )}
              height={adaptiveValue(
                305,
                sliderDataRef.current[sliderDataRef.current.length - 2].image
                  .height
              )}
              layout='fixed'
              objectFit='cover'
            />
          </li>
          <li className={introSliderItem}>
            <Image
              src={
                sliderDataRef.current[sliderDataRef.current.length - 1].image
                  .src
              }
              alt=''
              width={adaptiveValue(
                305,
                sliderDataRef.current[sliderDataRef.current.length - 1].image
                  .width
              )}
              height={adaptiveValue(
                305,
                sliderDataRef.current[sliderDataRef.current.length - 1].image
                  .height
              )}
              layout='fixed'
              objectFit='cover'
            />
          </li>
          {sliderDataRef.current &&
            sliderDataRef.current.length > 0 &&
            sliderDataRef.current.map((slide) => (
              <li key={slide.id} className={introSliderItem}>
                <Image
                  src={slide.image.src}
                  alt=''
                  width={adaptiveValue(305, slide.image.width)}
                  height={adaptiveValue(305, slide.image.height)}
                  layout='fixed'
                  objectFit='cover'
                />
              </li>
            ))}
          <li className={introSliderItem}>
            <Image
              src={sliderDataRef.current[0].image.src}
              alt=''
              width={adaptiveValue(305, sliderDataRef.current[0].image.width)}
              height={adaptiveValue(305, sliderDataRef.current[0].image.height)}
              layout='fixed'
              objectFit='cover'
            />
          </li>
          <li className={introSliderItem}>
            <Image
              src={sliderDataRef.current[1].image.src}
              alt=''
              width={adaptiveValue(305, sliderDataRef.current[1].image.width)}
              height={adaptiveValue(305, sliderDataRef.current[1].image.height)}
              layout='fixed'
              objectFit='cover'
            />
          </li>
        </ul>
      </div>
    </section>
  )
}

export default Intro
