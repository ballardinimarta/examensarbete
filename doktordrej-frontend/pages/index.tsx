import type { NextPage } from 'next'
import Link from 'next/link'
import styles from '../styles/Home.module.scss'

const Home: NextPage = () => {
  return (
    <div >
      Hem
      <Link href="http://localhost:3001/admin">Admin</Link>
    </div>
  )
}

export default Home
