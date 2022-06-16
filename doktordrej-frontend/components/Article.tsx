import styles from './../styles/Article.module.scss';
import React from 'react';
import IArticle from '../interfaces/Article';
import Carousel from './Carousel';
import Link from 'next/link';

interface IArticleProps {
	article: IArticle;
}

function Article(props: IArticleProps) {
	let imagelist = props.article.content.images;
	if (!imagelist.includes(props.article.content.displayImage)) {
		imagelist.unshift(props.article.content.displayImage);
	}
	return (
		<>
			<Link href={'/shop'}>
				<button className={styles.backButton}> &#60; tillbaka </button>
			</Link>
			<div className={styles.articleWrapper}>
				<div className={styles.articleContainer}>
					<div className={styles.carouselContainer}>
						<Carousel imageList={imagelist} />
					</div>

					<div className={styles.articleInfoContainer}>
						<span className={styles.articleTitle}>{props.article.content.name}</span>
						<span className={styles.articlePrice}>{props.article.content.price} kr</span>
						<p className={styles.articleDescription}>{props.article.content.description}</p>
						{props.article.content.isSold ? (
							<span className={styles.articlePrice}>Slutsåld</span>
						) : (
							<Link
								href={`mailto:natalia.ballardini@gmail.com?subject=Beställning av artikelnr: ${props.article.id}&body=Hej jag skulle vilja beställa ${props.article.content.name}, ${props.article.content.price} kr. Går denna att beställa till mig? Min adress är (FYLL I DIN ADRESSS HÄR)`}
								passHref
							>
								<button disabled className={styles.shopButton}>
									{props.article.content.buttonText}
								</button>
							</Link>
						)}
					</div>
				</div>
			</div>
		</>
	);
}

export default Article;
