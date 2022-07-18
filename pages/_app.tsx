import type { AppProps } from 'next/app'

import { HeaderMobileSearchContextProvider } from '../context/headerMobileSearch.context'

import '../styles/global.scss'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <HeaderMobileSearchContextProvider>
      <Component { ...pageProps } />
    </HeaderMobileSearchContextProvider>
  )
}

export default MyApp
