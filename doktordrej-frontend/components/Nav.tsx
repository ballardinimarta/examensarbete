import NavStyles from './../styles/Nav.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import logo from './../public/logo.svg';
import { useRouter } from 'next/router';
import Head from 'next/head';
import useFetch from '../hooks/useFetch';

interface INavProps {
	dark: boolean;
	title: string;
}
function Nav(props: INavProps) {
	const [toggle, setToggle] = useState(false);
	const router = useRouter();
	let { data } = useFetch('shop');

	useEffect(() => {
		setToggle(false);
	}, [router.asPath]);
	return (
		<>
			<Head>
				<title>{props.title}</title>
			</Head>
			<div className={NavStyles.navBar}>
				<div
					className={
						toggle ? NavStyles.close : props.dark ? NavStyles.logoDark : NavStyles.logoLight
					}
					onClick={() => {
						setToggle(!toggle);
					}}
				></div>
			</div>
			{toggle ? (
				<div className={NavStyles.navContainer}>
					<ul>
						<li>
							<div className={NavStyles.logo}>
								<Image src={logo} alt="" />
							</div>
						</li>
						<li>
							<Link href="/">Hem</Link>
						</li>
						<li>
							<Link href="/galleri">Galleri</Link>
						</li>
						<li>
							<Link href="/shop">{data?.story.content.title}</Link>
						</li>
					</ul>
				</div>
			) : (
				<p></p>
			)}
		</>
	);
}

export default Nav;
