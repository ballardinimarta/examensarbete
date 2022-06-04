import LayoutStyles from './../styles/Layout.module.scss';
import React, { FC } from 'react';

const Layout: FC = ({ children }) => {
	return (
		<>
			<div className={LayoutStyles.container}>
				<main>{children}</main>
			</div>
		</>
	);
};

export default Layout;
