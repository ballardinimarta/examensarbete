import React from 'react'
import Image from 'next/image' 
import drej from './../public/drej.svg'

import styles from '../styles/Home.module.scss'


function Hero() {
    return (
        <div className={styles.hero}>
            {/* <div className={styles.heroImg}>                
            </div> */}
            <div className={styles.heroText}>
                <span>Natalia Ballardini</span>
                <span>Keramik, Åkerö</span>
                <a href="#aboutMe">
                    <button className="greenbutton">Lär känna mig!</button>
                </a>
            </div>
        </div>
    )
}

export default Hero
