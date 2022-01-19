import type { NextPage } from 'next'
import About from '../components/About'
import Hero from '../components/Hero'
import Footer from '../components/Footer'
import GalleriCard from '../components/GalleriCard';
import Nav from '../components/Nav';
import { useEffect, useState } from 'react';

const Home: NextPage = () => {  
  const [darkLogoColor, setDarkLogoColor] = useState(false)
  
  function scrollChangeColor() {
    if (document.querySelector('#aboutMe')) {
      let aboutme = document.querySelector('#aboutMe')!.getBoundingClientRect();   
      if (aboutme.top <= 0 ) {
            setDarkLogoColor(true);
          } else {
            setDarkLogoColor(false);
          } 
    }
    }
   
  useEffect(() => {
    window.addEventListener('scroll', scrollChangeColor, true);
  })
  return (
    <>
 
      <Nav dark={darkLogoColor} title='Hem'/>
      <Hero/>
      <About/>
      <GalleriCard/>
      <Footer/>
    </>
  )
}

export default Home
