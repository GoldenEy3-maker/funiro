import type { NextPage } from 'next'

import { MainLayout } from '../components/layout/Main'

import Feature from '../components/Feature/Feature'
import Footer from '../components/Footer/Footer'
import Intro from '../components/Intro/Intro'
import Products from '../components/Products/Products'
import TipsTricks from '../components/Tips&Tricks/Tips&Tricks'
import Gallery from '../components/Gallery/Gallery'

const HomePage: NextPage = () => {
  return (
    <MainLayout>
      <Intro/>
      <Feature/>
      <Products/>
      <TipsTricks/>
      <Gallery />
      <Footer/>
    </MainLayout>
  )
}

export default HomePage
