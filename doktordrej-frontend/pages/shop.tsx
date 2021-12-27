import type { NextPage } from 'next'
import Articles from '../components/Articles'
import styles from '../styles/Shop.module.scss'
import Head from 'next/head'

const Shop: NextPage = () => {
    return (
        <>
        <Head>
            <title>Shop</title>
        </Head>
        <div>
            <div className="pageTitle"><span>Shop</span> <hr></hr> </div>
            <Articles/>
        </div>
        </>
    )
}

export default Shop