import Link from 'next/link'
import Image, { StaticImageData } from 'next/image'

import { useRef } from 'react'

import { v4 as uuidv4 } from 'uuid'

import { setStaticClasses } from '../../lib/classes.lib'

import { ProductItem } from './ProductItem'

import styles from '../../styles/modules/Products/Products.module.scss'

import Product1 from '../../public/images/product1.jpg'
import Product2 from '../../public/images/product2.jpg'
import Product3 from '../../public/images/product3.jpg'
import Product4 from '../../public/images/product4.jpg'
import Product5 from '../../public/images/product5.jpg'
import Product6 from '../../public/images/product6.jpg'
import Product7 from '../../public/images/product7.jpg'
import Product8 from '../../public/images/product8.jpg'

export interface IProductsData {
  id: string
  picture: StaticImageData
  title: string
  text: string
  price: string
  prevPrice: string
  discount: string
  isNew: boolean
  href: string
}

const {
  products,
  products__inner,
  products__title,
  productsContent,
  productsContent__list,

  products__link,
} = styles

const Products = () => {
  const productDataRef = useRef<IProductsData[]>([
    {
      id: uuidv4(),
      picture: Product1,
      title: 'Syltherine',
      text: 'Stylish cafe chair',
      price: 'Rp 2.500.000',
      prevPrice: 'Rp 3.500.000',
      discount: '-30%',
      isNew: false,
      href: '/',
    },
    {
      id: uuidv4(),
      picture: Product2,
      title: 'Leviosa',
      text: 'Stylish cafe chair',
      price: 'Rp 2.500.000',
      prevPrice: '',
      discount: '-30%',
      isNew: false,
      href: '/',
    },
    {
      id: uuidv4(),
      picture: Product3,
      title: 'Lolito',
      text: 'Luxury big sofa',
      price: 'Rp 7.000.000',
      prevPrice: 'Rp 14.000.000',
      discount: '-50%',
      isNew: false,
      href: '/',
    },
    {
      id: uuidv4(),
      picture: Product4,
      title: 'Respira',
      text: 'Minimalist fan',
      price: 'Rp 500.000',
      prevPrice: '',
      discount: '',
      isNew: true,
      href: '/',
    },
    {
      id: uuidv4(),
      picture: Product5,
      title: 'Grifo',
      text: 'Night lamp',
      price: 'Rp 1.500.000',
      prevPrice: '',
      discount: '',
      isNew: false,
      href: '/',
    },
    {
      id: uuidv4(),
      picture: Product6,
      title: 'Muggo',
      text: 'Small mug',
      price: 'Rp 150.000',
      prevPrice: '',
      discount: '',
      isNew: true,
      href: '/',
    },
    {
      id: uuidv4(),
      picture: Product7,
      title: 'Pingky',
      text: 'Cute bed set',
      price: 'Rp 7.000.000',
      prevPrice: 'Rp 14.000.000',
      discount: '-50%',
      isNew: false,
      href: '/',
    },
    {
      id: uuidv4(),
      picture: Product8,
      title: 'Potty',
      text: 'Minimalist flower pot',
      price: 'Rp 500.000',
      prevPrice: '',
      discount: '',
      isNew: true,
      href: '/',
    },
  ])
  return (
    <section className={products}>
      <div className={setStaticClasses([products__inner, '_container'])}>
        <h1 className={setStaticClasses([products__title, '_section-title'])}>
          Our Products
        </h1>
        <div className={productsContent}>
          <ul className={productsContent__list}>
            {productDataRef.current.length > 0 &&
              productDataRef.current.map((product) => (
                <ProductItem key={product.id} product={product} />
              ))}
          </ul>
        </div>
        <div className={products__link}>
          <Link href='/'>
            <a>Show More</a>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Products
