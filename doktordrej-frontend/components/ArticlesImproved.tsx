import React, { useEffect, useState } from 'react';
import useFetch from '../hooks/useFetch';
import IArticle from '../interfaces/Article';
import ArticleCard from './ArticleCard';
import styles from '../styles/Shop.module.scss';
import { FaAngleDown, FaAngleUp } from 'react-icons/fa';
import { GrClose } from 'react-icons/gr';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

interface ICategory {
	uuid: string;
	content: {
		name: string;
	};
}

function ArticlesImproved() {
	let timestamp;
	useEffect(() => {
		timestamp = Date.now();
	}, []);
	const [articles, setArticles] = useState<IArticle[]>();
	const [dropdown, setDropdown] = useState(false);
	const [category, setCategory] = useState('Alla');
	const { data, error, loading } = useFetch(
		`stories?starts_with=shop&cv=${timestamp}&token=${process.env.token}`
	);

	const categories = useFetch(
		`stories?starts_with=categories&cv=${timestamp}&token=${process.env.token}`
	);
	if (error) return <p>Sorry something went wrong :( try to reload the page</p>;
	useEffect(() => {
		setArticles(data?.stories);
	}, [data]);

	return (
		<>
			<div className={styles.optionsBar}>
				<div
					className={styles.categoryButton}
					onClick={() => {
						setDropdown(!dropdown);
					}}
				>
					<span>
						Kategori: {category}
						{dropdown ? <FaAngleUp /> : <FaAngleDown />}
					</span>
				</div>
				{dropdown ? (
					<div className={styles.dropdown}>
						<ul>
							<li
								key="0"
								onClick={() => {
									setArticles(data?.stories);
									setCategory('Alla');
								}}
							>
								Alla
							</li>
							{categories.data.stories.map((category: ICategory) => {
								return (
									<li
										key={category.uuid}
										onClick={() => {
											setArticles(
												data?.stories.filter((article: IArticle) =>
													article.content.category.includes(category.uuid)
												)
											);
											setCategory(category.content.name);
										}}
									>
										{category.content.name}
									</li>
								);
							})}
						</ul>
					</div>
				) : null}
			</div>

			{loading ? (
				<div className="loaderContainer">
					<p>Laddar...</p>
				</div>
			) : null}
			<div className={styles.articlesWrapper}>
				<div className={styles.articlesContainer}>
					{articles?.map((article: IArticle) => {
						return <ArticleCard key={article.id.toString()} article={article} />;
					})}
				</div>
			</div>
		</>
	);
}

export default ArticlesImproved;
