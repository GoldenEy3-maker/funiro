import type { NextPage } from 'next'

import { MainLayout } from '../components/layout/Main'


const HomePage: NextPage = () => {
  return <MainLayout>
    <div className="intro">
      <div className="intro__inner _container">
        Home Page
      </div>
    </div>
  </MainLayout>
}

export default HomePage
