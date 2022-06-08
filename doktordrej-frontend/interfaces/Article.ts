interface IArticle {
	id: Number;
	name: string;
	content: {
		buttonText: string;
		name: String;
		description: String;
		price: string;
		isSold: Boolean;
		displayImage: {
			id: number;
			filename: string;
		};
		images: [
			{
				id: number;
				filename: string;
			}
		];
		category: string[];
	};
	slug: string;
	full_slug: string;
}
export default IArticle;
