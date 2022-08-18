import Image from 'next/image'

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

const {
  gallery,
  gallery__inner,
  gallery__subtitle,
  gallery__title,
  gallery__list,
  galleryLayout,
  galleryLayout__top,
  galleryLayout__bottom,
  _multi
} = styles

const Gallery = () => {
  return (
    <section className={ gallery }>
      <div className={ gallery__inner }>
        <h3 className={ gallery__subtitle }>Share your setup with</h3>
        <h1 className={ setStaticClasses([gallery__title, '_section-title']) }>#FuniroFurniture</h1>
        <ul className={ gallery__list }>
          <li className={ setStaticClasses([galleryLayout, _multi]) }>
            <div className={ galleryLayout__top }>
              <Image src={ Picture1.src } alt="gallery picture" width={ Picture1.width } height={ Picture1.height }
                     objectFit="cover" layout='fixed'/>
              <Image src={ Picture2.src } alt="gallery picture" width={ Picture2.width } height={ Picture2.height }
                     objectFit="cover" layout='fixed'/>
            </div>
            <div className={ galleryLayout__bottom }>
              <Image src={ Picture3.src } alt="gallery picture" width={ Picture3.width } height={ Picture3.height }
                     objectFit="cover" layout='fixed'/>
              <Image src={ Picture4.src } alt="gallery picture" width={ Picture4.width } height={ Picture4.height }
                     objectFit="cover" layout='fixed'/>
            </div>
          </li>
          <li className={ galleryLayout }>
            <Image src={ Picture5.src } alt="gallery picture" width={ Picture5.width } height={ Picture5.height }
                   objectFit="cover" layout='fixed'/>
          </li>
          <li className={ setStaticClasses([galleryLayout, _multi]) }>
            <div className={ galleryLayout__top }>
              <Image src={ Picture6.src } alt="gallery picture" width={ Picture6.width } height={ Picture6.height }
                     objectFit="cover" layout='fixed'/>
              <Image src={ Picture7.src } alt="gallery picture" width={ Picture7.width } height={ Picture7.height }
                     objectFit="cover" layout='fixed'/>
            </div>
            <div className={ galleryLayout__bottom }>
              <Image src={ Picture8.src } alt="gallery picture" width={ Picture8.width } height={ Picture8.height }
                     objectFit="cover" layout='fixed'/>
              <Image src={ Picture9.src } alt="gallery picture" width={ Picture9.width } height={ Picture9.height }
                     objectFit="cover" layout='fixed'/>
            </div>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default Gallery