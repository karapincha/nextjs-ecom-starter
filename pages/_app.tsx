import type { AppProps } from 'next/app'

import 'styles/globals.scss'

const MyApp = ({ Component, pageProps }: AppProps) => (
  <Component {...pageProps} />
)

export default MyApp
