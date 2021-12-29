import type { NextPage } from 'next'
import About from '../components/About'
import Hero from '../components/Hero'
import Head from 'next/head';
import Footer from '../components/Footer'
import GalleriCard from '../components/GalleriCard';
import Nav from '../components/Nav';
import { useEffect, useState } from 'react';

const Home: NextPage = () => {  
  const [darkLogoColor, setDarkLogoColor] = useState(false)
  
  function scrollChangeColor() {
    let aboutme = document.querySelector('#aboutMe')!.getBoundingClientRect(); 
    console.log(aboutme)

    if (aboutme.top <= 0 ) {
          setDarkLogoColor(true);
        } else {
          setDarkLogoColor(false);
        } 
  }
  useEffect(() => {
    window.addEventListener('scroll', scrollChangeColor, true);
  })
  return (
    <>
    <Head>
      <title>Hem</title>
    </Head>
      <Nav dark={darkLogoColor}/>
      <Hero/>
      <About/>
      <GalleriCard/>
      <Footer/>
    </>
  )
}

export default Home
