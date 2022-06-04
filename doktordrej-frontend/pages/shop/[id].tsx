import type { NextPage } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import Article from '../../components/Article';
import Footer from '../../components/Footer';
import Nav from '../../components/Nav';
import useFetch from '../../hooks/useFetch';

const Artikel: NextPage = () => {
	const router = useRouter();
	const { id } = router.query;
	let timestamp = 0;
	useEffect(() => {
		timestamp = Date.now();
	}, []);
	const { data, error, loading } = useFetch(
		`stories/shop/${id}?cv=${timestamp}&token=${process.env.token}`
	);
	return (
		<>
			<Nav dark={true} title={data?.story?.content.name} />
			<div>
				{data ? data.story ? <Article article={data.story} /> : null : null}
				{loading ? (
					<div className="loaderContainer">
						<p>Laddar...</p>
					</div>
				) : null}
			</div>
			<Footer />
		</>
	);
};

export default Artikel;
