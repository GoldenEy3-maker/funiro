import type { NextPage } from 'next'

import { MainLayout } from '../components/layout/Main'

import Intro from '../components/Intro/Intro'

const HomePage: NextPage = () => {
  return (
    <MainLayout>
      <Intro />
    </MainLayout>
  )
}

export default HomePage
