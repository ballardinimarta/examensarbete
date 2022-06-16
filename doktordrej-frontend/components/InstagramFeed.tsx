/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from 'react';
import styles from './../styles/Galleri.module.scss';
import IPost from '../interfaces/Post';

interface IMedia {
	data: IPost[];
	paging: {
		cursors: any;
		next: string;
	};
}
function InstagramFeed() {
	const [user, setUser] = useState<IMedia>();
	useEffect(() => {
		fetch(
			'https://graph.instagram.com/me/media?fields=id,caption,media_url,media_type,children&access_token=' +
				process.env.accessToken
		)
			.then((response) => response.json())
			.then((data) => setUser(data));
	}, []);
	function showMore() {
		if (user) {
			fetch(user.paging.next)
				.then((response) => response.json())
				.then((data) => {
					data.data.map((post: IPost) => {
						user.data.push(post);
					});
					let allPosts = user.data;
					setUser({ data: allPosts, paging: data.paging });
				});
		}
	}

	return (
		<>
			<div className={styles.instagramFeed}>
				{user?.data.map((post) => {
					return post.media_type === 'VIDEO' ? (
						<div className={styles.instaImg} key={post.id}>
							<video src={post.media_url} width={'100%'} autoPlay={true} muted={true} />
							<div className={styles.overlay}>
								<span className={styles.overlayText}>
									<a
										href="https://www.instagram.com/doktor.drej/"
										className={styles.overlayTextAt}
										target="_blank"
										rel="noreferrer"
									>
										@Doktor.Drej
									</a>{' '}
									{post.caption}
								</span>
							</div>
						</div>
					) : (
						<div className={styles.instaImg} key={post.id}>
							<img src={post.media_url} alt={post.caption} />
							<div className={styles.overlay}>
								<span className={styles.overlayText}>
									<a
										href="https://www.instagram.com/doktor.drej/"
										className={styles.overlayTextAt}
										target="_blank"
										rel="noreferrer"
									>
										@Doktor.Drej
									</a>{' '}
									{post.caption}
								</span>
							</div>
						</div>
					);
				})}
			</div>
			<button className="blackButton" onClick={showMore}>
				Visa mer!
			</button>
		</>
	);
}

export default InstagramFeed;
