import type { NextPage } from 'next'

import { MainLayout } from '../components/layout/Main'

import Intro from '../components/Intro/Intro'
import Feature from '../components/Feature/Feature'
import Products from '../components/Products/Products'

const HomePage: NextPage = () => {
  return (
    <MainLayout>
      <Intro />
      <Feature />
      <Products />
    </MainLayout>
  )
}

export default HomePage
