import type { NextPage } from 'next'
import Link from 'next/link'
import About from '../components/About'
import Hero from '../components/Hero'
import useFetch from '../hooks/useFetch'
import styles from '../styles/Home.module.scss'

const Home: NextPage = () => {
  const {data , error, loading} = useFetch('/api/blogposts')

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error :(</p>
  console.log(data);
  
  return (
    < >
      <Hero/>
      <About/>
      <Link href="http://localhost:3001/admin">Admin</Link>
    </>
  )
}

export default Home
