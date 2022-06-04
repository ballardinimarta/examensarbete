import type { NextPage } from 'next';
import Articles from '../components/Articles';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import ArticlesImproved from '../components/ArticlesImproved';

const Shop: NextPage = () => {
	return (
		<>
			<Nav dark={true} title="Shop" />
			<div>
				<div className="pageTitle">
					<span>Shop</span> <hr></hr>{' '}
				</div>
				<ArticlesImproved />
			</div>
			<Footer />
		</>
	);
};

export default Shop;
