import React from 'react'
import styles from './../styles/Home.module.scss'
import natalia from './../public/natalia.png'
import åkerö from './../public/åkerö.png'
import Image from 'next/image'
import useFetch from '../hooks/useFetch'
function About() {
    const {data, error, loading} = useFetch('/api/about-me-text')
    console.log(data)
    return (
        <div className={styles.aboutMeSection} id="aboutMe">
            <div className={styles.aboutMeWrap}>
                <span className="title">Om mig</span>
                <div className={styles.aboutMeInfoContainer}>
                    <div className={styles.aboutMeText}>
                        {data ? <span>{data.data.attributes.text}</span> :null}
                           </div>
                    <div className={styles.aboutMeImages}>
                        <Image src={natalia} alt="bild på natalia" />
                        <Image src={åkerö} alt="bild på keramik utomhus" />

                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
