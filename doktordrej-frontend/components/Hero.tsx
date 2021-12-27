import React from 'react'
import styles from '../styles/Home.module.scss'

function Hero() {
    return (
        <div className={styles.hero}>
            <div className={styles.heroText}>
                <span>Natalia Ballardini</span>
                <span>Keramik, Åkerö</span>
                <a href="#aboutMe">
                    <button className="blackButton">Lär känna mig!</button>
                </a>
            </div>
        </div>
    )
}

export default Hero
