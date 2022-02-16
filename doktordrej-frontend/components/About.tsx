import React, { useEffect, useState } from 'react';
import styles from './../styles/Home.module.scss';
import natalia from './../public/natalia.png';
import åkerö from './../public/åkerö.png';
import Image from 'next/image';
import useFetch from '../hooks/useFetch';
import Loader from 'react-loader-spinner';
import StoryblokClient from 'storyblok-js-client';

function About() {
	const [richtextHtml, setRichTextHtml] = useState('<div></div>');
	let timestamp = 0;
	useEffect(() => {
		timestamp = Date.now();
	}, []);

	const { data, error, loading } = useFetch(
		`stories/aboutmetext?cv=${timestamp}&token=${process.env.token}&version=published`
	);
	const Storyblok = new StoryblokClient({ accessToken: process.env.token });
	useEffect(() => {
		setRichTextHtml(Storyblok.richTextResolver.render(data?.story.content.text));
	}, [data]);
	if (error) return <p>Sorry something went wrong :( try to reload the page</p>;
	return (
		<div className={styles.aboutMeSection} id="aboutMe">
			<div className={styles.aboutMeWrap}>
				<span className="title">Om mig</span>
				<div className={styles.aboutMeInfoContainer}>
					<div className={styles.aboutMeText}>
						{loading ? (
							<div className="loaderContainer">
								<Loader type="TailSpin" color="#1e1e24" height={80} width={80} />
							</div>
						) : null}
						{<div dangerouslySetInnerHTML={{ __html: richtextHtml }} />}
					</div>
					<div className={styles.aboutMeImages}>
						<Image src={natalia} alt="bild på natalia" />
						<Image src={åkerö} alt="bild på keramik utomhus" />
					</div>
				</div>
			</div>
		</div>
	);
}

export default About;
