import React from 'react';
import Link from 'next/link';
import { FaInstagram, FaPinterest } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { GrUserAdmin } from 'react-icons/gr';
function Footer() {
	const baseUrl = 'https://doktordrej-backend.herokuapp.com';

	return (
		<div className="footer">
			<ul>
				<li>
					<Link href="https://instagram.com/doktor.drej" passHref>
						<div>
							<FaInstagram />
						</div>
					</Link>
				</li>
				<li>
					<Link href="https://pinterest.com/doktor.drej" passHref>
						<div>
							<FaPinterest />
						</div>
					</Link>
				</li>
				<li>
					<Link href="mailto:natalia.ballardini@gmail.com" passHref>
						<div>
							<HiOutlineMail />
						</div>
					</Link>
				</li>
				<li>
					<Link href={'http://app.storyblok.com/'} passHref>
						<div>
							<GrUserAdmin />
						</div>
					</Link>
				</li>
			</ul>
		</div>
	);
}

export default Footer;
