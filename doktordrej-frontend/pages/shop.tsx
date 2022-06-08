import type { NextPage } from 'next';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import Articles from '../components/Articles';
import useFetch from '../hooks/useFetch';

const Shop: NextPage = () => {
	let { data } = useFetch('shop');
	return (
		<>
			<Nav dark={true} title="Shop" />
			<div>
				<div className="pageTitle">
					<span>{data?.story?.content.title}</span> <hr></hr>{' '}
					<p className="pageDescription">{data?.story?.content.description}</p>
				</div>

				<Articles />
			</div>
			<Footer />
		</>
	);
};

export default Shop;
