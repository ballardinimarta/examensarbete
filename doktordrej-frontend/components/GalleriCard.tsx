/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from 'react'
import styles from './../styles/Home.module.scss'
import Link from 'next/link'
import IPost from '../interfaces/Post'
function GalleriCard() {
    const [images, setImages] = useState<IPost[]>()

    useEffect(() => {
        fetch('https://graph.instagram.com/me/media?fields=id,caption,media_url,media_type,children&access_token='+process.env.accessToken)
        .then(response => response.json())
        .then(data => {
            let selectedimages = data.data.slice(0,5)
            setImages(selectedimages)
        });
    }, [])


    return (
        <div className={styles.galleriCardContainer}>
            <div className={styles.galleriCardWrapper}>
                <span className="title right">Galleri</span>
            </div>
            <div className={styles.horizontalImagesContainer}>
                <div className={styles.horizontalImagesWrapper}>
                    {
                        images?.map((image)=>{
                            return (
                                <div className={styles.imgContainer} key={image.id}>
                                    <img src={image.media_url} alt={image.caption} />
                                </div>
                            )
                            
                        })
                    }
                        
                        <div className={`${styles.imgContainer} ${styles.border}`}>
                                <a href="/galleri">Till Galleriet!</a>
                        </div>
                    </div>
            </div>
            

        </div>
    )
}

export default GalleriCard
