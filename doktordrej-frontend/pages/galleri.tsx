import type { NextPage } from 'next'
import Head from 'next/head'
import Nav from '../components/Nav'
import styles from './../styles/Galleri.module.scss'
const Galleri: NextPage = () => {
    return (
        <>
        <Head>
            <title>Galleri</title>
        </Head>
        <Nav dark={false}/>
        <div className={styles.galleriWrapper}>
            <div className={styles.pageTitle}>
                <span className={styles.galleriTitle}>Galleri</span> 
                <span className={styles.nameTitle}>Natalia Ballardini</span>
                <hr></hr>
            </div>
        </div>
        </>
    )
}

export default Galleri