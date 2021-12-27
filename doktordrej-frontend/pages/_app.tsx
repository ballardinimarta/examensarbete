import '../styles/globals.scss'
import Layout from '../components/Layout'
import Head from 'next/head';
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
 
  return (
    <>
    <Head>
      <link rel="icon" href="/images/favicon.ico" type="image/x-icon"/>
      <link rel="shortcut icon" href="/images/favicon.ico" type="image/x-icon"/>   
    </Head>
    <Layout>
      <Component {...pageProps} />
    </Layout>
    </>
    )
}

export default MyApp
