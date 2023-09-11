export type ProductItemType = {
	id: string;
	name: string;
	category: string;
	price: number;
	description: string;
	image: {
		alt: string;
		src: string;
	};
};

export type ProductFromResponse = {
	id: string;
	title: string;
	price: number;
	description: string;
	category: string;
	image: string;
	longDescription: string;
	rating: {
		rate: number;
		count: number;
	};
};
