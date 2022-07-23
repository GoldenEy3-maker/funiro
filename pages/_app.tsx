import type { AppProps } from 'next/app'

import { HeaderMobileSearchContextProvider } from '../context/headerMobileSearch.context'
import { SidebarContextProvider } from '../context/Sidebar.context'

import '../styles/global.scss'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SidebarContextProvider>
      <HeaderMobileSearchContextProvider>
        <Component {...pageProps} />
      </HeaderMobileSearchContextProvider>
    </SidebarContextProvider>
  )
}

export default MyApp
