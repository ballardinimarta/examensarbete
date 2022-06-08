import React, { useEffect, useState } from 'react';
import useFetch from '../hooks/useFetch';
import IArticle from '../interfaces/Article';
import ArticleCard from './ArticleCard';
import styles from '../styles/Shop.module.scss';
import { FaAngleDown, FaAngleUp } from 'react-icons/fa';
interface ICategory {
	uuid: string;
	content: {
		name: string;
	};
}

function Articles() {
	const [articles, setArticles] = useState<IArticle[]>();
	const [dropdown, setDropdown] = useState(false);
	const [category, setCategory] = useState('Alla');
	const { data, error, loading } = useFetch(`?starts_with=shop&is_startpage=0`);

	const categories = useFetch(`?starts_with=categories`);

	useEffect(() => {
		setArticles(data?.stories);
	}, [data]);

	if (error) return <p>Sorry something went wrong :( try to reload the page</p>;
	console.log(articles);
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
							{categories.data.stories.map(({ content, uuid }: ICategory) => {
								return (
									<li
										key={uuid}
										onClick={() => {
											setArticles(
												data?.stories.filter((article: IArticle) =>
													article.content.category.includes(uuid)
												)
											);
											setCategory(content.name);
										}}
									>
										{content.name}
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

export default Articles;
