import React from 'react'
import styles from './../styles/Home.module.scss'
import natalia from './../public/natalia.png'
import åkerö from './../public/åkerö.png'
import Image from 'next/image'
import useFetch from '../hooks/useFetch'
import Loader from 'react-loader-spinner'
function About() {
    const {data, error, loading} = useFetch('/api/about-me-text')
    return (
        <div className={styles.aboutMeSection} id="aboutMe">
            <div className={styles.aboutMeWrap}>
                <span className="title">Om mig</span>
                <div className={styles.aboutMeInfoContainer}>
                    <div className={styles.aboutMeText}>
                    {loading ? 
                        <div className="loaderContainer"><Loader type="TailSpin" color="#1e1e24" height={80} width={80} /></div>: null}
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
