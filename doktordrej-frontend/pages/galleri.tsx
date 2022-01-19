import type { NextPage } from 'next'
import Nav from '../components/Nav'
import styles from './../styles/Galleri.module.scss'
import InstagramFeed from '../components/InstagramFeed'
const Galleri: NextPage = () => {
    return (
        <>
        <Nav dark={false} title='Galleri'/>
        <div className={styles.galleriWrapper}>
            <div className={styles.pageTitle}>
                <span className={styles.galleriTitle}>Galleri</span> 
                <span className={styles.nameTitle}>Natalia Ballardini</span>
                <hr></hr>
            </div>
            <div className={styles.imageContainer}>
                    <InstagramFeed/>
            </div>
        </div>
        </>
    )
}

export default Galleri