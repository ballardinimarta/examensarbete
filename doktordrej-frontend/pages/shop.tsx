import type { NextPage } from 'next'
import Articles from '../components/Articles'
import styles from '../styles/Shop.module.scss'
import Head from 'next/head'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

const Shop: NextPage = () => {
    return (
        <>
        <Head>
            <title>Shop</title>
        </Head>
        <Nav dark={true}/>
        <div>
            <div className="pageTitle"><span>Shop</span> <hr></hr> </div>
            <Articles/>
        </div>
        <Footer/>

        </>
    )
}

export default Shop