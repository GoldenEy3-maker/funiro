import type { NextPage } from 'next'

import { MainLayout } from '../components/layout/Main'

import Intro from '../components/Intro/Intro'
import Feature from '../components/Feature/Feature'
import Products from '../components/Products/Products'
import Footer from '../components/Footer/Footer'

const HomePage: NextPage = () => {
  return (
    <MainLayout>
      <Intro />
      <Feature />
      <Products />
      <Footer />
    </MainLayout>
  )
}

export default HomePage
