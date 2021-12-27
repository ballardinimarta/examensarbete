import type { NextPage } from 'next'
import About from '../components/About'
import Hero from '../components/Hero'
import Head from 'next/head';
import Footer from '../components/Footer'
import GalleriCard from '../components/GalleriCard';

const Home: NextPage = () => {  
  return (
    < >
    <Head>
      <title>Hem</title>
    </Head>
      <Hero/>
      <About/>
      <GalleriCard/>
      <Footer/>
    </>
  )
}

export default Home
