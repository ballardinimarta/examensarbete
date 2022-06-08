import React, { useEffect, useState } from 'react';
import useFetch from '../hooks/useFetch';
import IArticle from '../interfaces/Article';
import ArticleCard from './ArticleCard';
import styles from '../styles/Shop.module.scss';
import { FaAngleDown, FaAngleUp } from 'react-icons/fa';
import { GrClose } from 'react-icons/gr';

interface ICategory {
	uuid: string;
	content: {
		name: string;
	};
}

function ArticlesOld() {
	const [searchTerm, setSearchTerm] = useState('');

	useEffect(() => {
		const delayDebounceFn = setTimeout(() => {
			setCategory('Alla');
			setEndpoint(
				`stories?filter_query[name][like]=*${searchTerm}*&per_page=${pageSize}&page=1&starts_with=shop&cv=${timestamp}&token=${process.env.token}&sort_by=content.isSold:asc`
			);
			setSearchLoad(false);
		}, 1500);

		return () => clearTimeout(delayDebounceFn);
	}, [searchTerm]);

	let timestamp = 0;
	useEffect(() => {
		timestamp = Date.now();
	}, []);

	const [pageSize, setPageSize] = useState('8');
	const [dropdown, setDropdown] = useState(false);
	const [dropdownSearch, setDropdownSearch] = useState(false);
	const [endpoint, setEndpoint] = useState(
		`stories?per_page=${pageSize}&page=1&starts_with=shop&cv=${timestamp}&token=${process.env.token}&sort_by=content.isSold:asc`
	);
	const [category, setCategory] = useState('Alla');
	const [searchLoad, setSearchLoad] = useState(false);
	const allArticles = useFetch(
		`stories?starts_with=articles&cv=${timestamp}&token=${process.env.token}`
	);
	const categories = useFetch(
		`stories?starts_with=categories&cv=${timestamp}&token=${process.env.token}`
	);
	const { data, error, loading } = useFetch(endpoint);
	if (error) return <p>Sorry something went wrong :( try to reload the page</p>;
	console.log(data);

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
									setPageSize('8');
									setEndpoint(
										`stories?per_page=${pageSize}&page=1&starts_with=articles&cv=${timestamp}&token=${process.env.token}&sort_by=content.isSold:asc`
									);
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
											setPageSize('8');
											setEndpoint(
												`stories?filter_query[category][in_array]=${category.uuid}&per_page=${pageSize}&page=1&starts_with=articles&cv=${timestamp}&token=${process.env.token}&sort_by=content.isSold:asc`
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
				<div
					className={styles.searchButton}
					onClick={() => {
						setDropdownSearch(!dropdownSearch);
					}}
				>
					<span>
						Sök
						{dropdownSearch ? <FaAngleUp /> : <FaAngleDown />}
					</span>
				</div>
				{dropdownSearch ? (
					<div className={styles.searchBar}>
						<input
							type="text"
							onChange={(e) => {
								setSearchTerm(e.target.value);
							}}
							value={searchTerm}
						/>
						<GrClose
							onClick={() => {
								setSearchLoad(true);
								setSearchTerm('');
								setDropdownSearch(false);
							}}
						/>
					</div>
				) : null}
			</div>

			{loading || searchLoad ? (
				<div className="loaderContainer">
					<p>Laddar...</p>
				</div>
			) : null}
			<div className={styles.articlesWrapper}>
				<div className={styles.articlesContainer}>
					{data?.stories.map((article: IArticle) => {
						return <ArticleCard key={article.id.toString()} article={article} />;
					})}
				</div>
			</div>

			<div className={styles.pagContainer}>
				{Number(pageSize) >= allArticles.data?.stories?.length ? (
					<p></p>
				) : (
					<button
						className="blackButton"
						onClick={() => {
							let page = (Number(pageSize) + 8).toString();
							setPageSize(page);
							setEndpoint(
								`stories?per_page=${page}&page=1&starts_with=articles&cv=${timestamp}&token=${process.env.token}&sort_by=content.isSold:asc`
							);
						}}
					>
						Visa mer!
					</button>
				)}
			</div>
		</>
	);
}

export default ArticlesOld;
