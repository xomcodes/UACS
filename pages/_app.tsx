import { MantineProvider } from '@mantine/core'
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { PortalProvider } from '@ibnlanre/portal'

export default function App({ Component, pageProps }: AppProps) {
  return (

    <PortalProvider>
       <MantineProvider withGlobalStyles withNormalizeCSS>
      <Component {...pageProps} />
    </MantineProvider>
    </PortalProvider>
   
  )
}
