import type { IChildrenProps } from '../../typescript/interface'

import Head from 'next/head'

import Header from '../Header'

interface IMainLayoutProps extends IChildrenProps {
  title?: string
}

export const MainLayout = ({
                             children,
                             title = 'Funiro shop'
                           }: IMainLayoutProps) => {
  return (
    <>
      <Head>
        <title>{ title }</title>
      </Head>
      <div className="wrapper">
        <Header/>
        { children }
      </div>
    </>
  )
}
