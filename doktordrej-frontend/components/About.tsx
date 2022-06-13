import React, { useEffect, useState } from 'react';
import styles from './../styles/Home.module.scss';
import natalia from './../public/natalia.png';
import åkerö from './../public/åkerö.png';
import Image from 'next/image';
import useFetch from '../hooks/useFetch';
import StoryblokClient from 'storyblok-js-client';
interface IImage {
	filename: string;
}
function About() {
	const [richtextHtml, setRichTextHtml] = useState('<div></div>');
	let timestamp = 0;
	useEffect(() => {
		timestamp = Date.now();
	}, []);

	const { data, error, loading } = useFetch(`aboutme`);
	const Storyblok = new StoryblokClient({ accessToken: process.env.token });
	useEffect(() => {
		setRichTextHtml(Storyblok.richTextResolver.render(data?.story?.content.text));
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
								<p>Laddar...</p>
							</div>
						) : null}
						{<div dangerouslySetInnerHTML={{ __html: richtextHtml }} />}
					</div>
					<div className={styles.aboutMeImages}>
						{data?.story?.content.images.map((img: IImage, index: number) => (
							<Image
								src={img.filename}
								alt="bild på natalia"
								width={250}
								height={250}
								key={index}
							/>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}

export default About;
