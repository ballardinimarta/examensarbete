import React from 'react'
import styles from './../styles/Home.module.scss'
import natalia from './../public/natalia.png'
import åkerö from './../public/åkerö.png'
import Image from 'next/image'
function About() {
    return (
        <div className={styles.aboutMeSection} id="aboutMe">
            <div className={styles.aboutMeWrap}>
                <span className="title">Om mig</span>
                <div className={styles.aboutMeInfoContainer}>
                    <div className={styles.aboutMeText}>
                        <p>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Aliquam a arcu odio. Mauris malesuada lectus at lectus finibus interdum. Donec vitae suscipit nisl, non varius dolor. Nulla vitae odio et eros dapibus tristique. Pellentesque non pellentesque diam. Fusce eros justo, aliquet at arcu vitae, bibendum tincidunt ligula.</p>
                        <p>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Aliquam a arcu odio. Mauris malesuada lectus at lectus finibus interdum. Donec vitae suscipit nisl, non varius dolor. Nulla vitae odio et eros dapibus tristique. Pellentesque non pellentesque diam. Fusce eros justo, aliquet at arcu vitae, bibendum tincidunt ligula.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ac fringilla nulla, ac viverra dolor. Nam at urna ac massa ullamcorper pharetra et eget ex. Pellentesque eu bibendum purus, venenatis molestie lacus. Mauris tincidunt nisi at nibh condimentum bibendum. Praesent nec laoreet nulla. Cras in placerat nulla. Nulla at mauris sit amet orci consectetur dapibus eu ut justo. Vestibulum vitae lacinia nisl. Sed ex quam, congue a ultrices eget, facilisis et dui. Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>
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
