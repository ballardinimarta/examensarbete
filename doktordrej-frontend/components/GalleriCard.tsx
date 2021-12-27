import React from 'react'
import styles from './../styles/Home.module.scss'
import Link from 'next/link'
function GalleriCard() {
    return (
        <div className={styles.galleriCardContainer}>
            <div className={styles.galleriCardWrapper}>
                <span className="title right">Galleri</span>
            </div>
            <div className={styles.horizontalImagesContainer}>
                <div className={styles.horizontalImagesWrapper}>
                        <div className={styles.testdiv}>
                            hej
                        </div>
                        <div className={styles.testdiv}>
                            hej
                        </div>
                        <div className={styles.testdiv}>
                            hej
                        </div>
                        <div className={styles.testdiv}>
                            hej
                        </div>
                        <div className={styles.testdiv}>
                            hej
                        </div>
                        <div className={styles.testdiv}>
                            <Link href="/galleri" passHref><button className="blackButton">Galleri</button></Link>
                        </div>
                    </div>
            </div>
            

        </div>
    )
}

export default GalleriCard
