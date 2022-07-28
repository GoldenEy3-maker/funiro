import Image, { StaticImageData } from 'next/image'

import Link from 'next/link'

import { useRef, useState } from 'react'

import { v4 as uuidv4 } from 'uuid'

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
  introControlsArrows,
  introControlsArrows__btn,
  introInfo,
  introInfo__title,
  introInfo__text,
  introInfo__link,
  introSlider,
  introSlider__list,
  introSliderItem,
  introSlideInfo,
  introSlideInfoHead,
  introSlideInfoBody,
  introSlideInfoFooter,
  introSlideInfoFooter__price,
  introSlideInfoFooter__link,
  _activeDot,
} = styles

const Intro = () => {
  const slideWidthRef = useRef(934)
  const gapSlidesRef = useRef(32)
  const startPositionRef = useRef(320)
  const startPointSlideRef = useRef(
    startPositionRef.current + slideWidthRef.current + gapSlidesRef.current
  )

  const [activeSlideIndex, setActiveSlideIndex] = useState<number>(0)
  const [transformX, setTransformX] = useState<number | null>(null)

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

  const nextSlideHandler = () => {
    setActiveSlideIndex((prev) => prev + 1)

    if (activeSlideIndex === sliderDataRef.current.length - 1) {
      setTransformX(startPositionRef.current)

      setTimeout(() => {
        setTransformX(null)
      }, 0)

      setActiveSlideIndex(0)
    }
  }

  const prevSlideHandler = () => {
    setActiveSlideIndex((prev) => prev - 1)

    if (activeSlideIndex === 0) {
      setTransformX(
        startPointSlideRef.current +
          sliderDataRef.current.length *
            (slideWidthRef.current + gapSlidesRef.current)
      )

      setTimeout(() => {
        setTransformX(null)
      }, 0)

      setActiveSlideIndex(sliderDataRef.current.length - 1)
    }
  }

  const clickDotHandler = (id: string) => {
    setActiveSlideIndex(
      sliderDataRef.current.findIndex((slide) => slide.id === id)
    )
  }

  return (
    <div className={intro}>
      <div className={setStaticClasses([intro__inner, '_container'])}>
        <div className={introControls}>
          <div className={introControlsDots}>
            <ul className={introControlsDots__list}>
              {sliderDataRef.current &&
                sliderDataRef.current.length > 0 &&
                sliderDataRef.current.map((slide) => (
                  <li
                    key={slide.id}
                    className={setDynamicClasses({
                      staticClasses: [introControlsDotsItem],
                      dynamicClasses: [[_activeDot]],
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
          <div className={introControlsArrows}>
            <div className={introControlsArrows__btn}>
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
                    stroke='#000'
                    strokeWidth='1.8'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                </svg>
              </button>
            </div>
            <div className={introControlsArrows__btn}>
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
                    stroke='#000'
                    strokeWidth='1.8'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                </svg>
              </button>
            </div>
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
      <div className={introSlideInfo}>
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
      <div className={introSlider}>
        <ul
          className={introSlider__list}
          style={{
            transform: `translateX(-${
              transformX
                ? transformX
                : startPointSlideRef.current +
                  activeSlideIndex *
                    (slideWidthRef.current + gapSlidesRef.current)
            }px)`,
            transition: transformX ? undefined : 'transform .5s ease',
          }}
        >
          <li className={introSliderItem}>
            <Image
              src={
                sliderDataRef.current[sliderDataRef.current.length - 2].image
                  .src
              }
              alt=''
              width={
                sliderDataRef.current[sliderDataRef.current.length - 2].image
                  .width
              }
              height={
                sliderDataRef.current[sliderDataRef.current.length - 2].image
                  .height
              }
              layout='fixed'
            />
          </li>
          <li className={introSliderItem}>
            <Image
              src={
                sliderDataRef.current[sliderDataRef.current.length - 1].image
                  .src
              }
              alt=''
              width={
                sliderDataRef.current[sliderDataRef.current.length - 1].image
                  .width
              }
              height={
                sliderDataRef.current[sliderDataRef.current.length - 1].image
                  .height
              }
              layout='fixed'
            />
          </li>
          {sliderDataRef.current &&
            sliderDataRef.current.length > 0 &&
            sliderDataRef.current.map((slide) => (
              <li key={slide.id} className={introSliderItem}>
                <Image
                  src={slide.image.src}
                  alt=''
                  width={slide.image.width}
                  height={slide.image.height}
                  layout='fixed'
                />
              </li>
            ))}
          <li className={introSliderItem}>
            <Image
              src={sliderDataRef.current[0].image.src}
              alt=''
              width={sliderDataRef.current[0].image.width}
              height={sliderDataRef.current[0].image.height}
              layout='fixed'
            />
          </li>
          <li className={introSliderItem}>
            <Image
              src={sliderDataRef.current[1].image.src}
              alt=''
              width={sliderDataRef.current[1].image.width}
              height={sliderDataRef.current[1].image.height}
              layout='fixed'
            />
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Intro
