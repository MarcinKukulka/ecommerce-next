import { type ProductFromResponse, type ProductItemType } from "@/components/types";

const API_URL = "https://naszsklep-api.vercel.app/api/products";

export const getProductsList = async () => {
	const res = await fetch(API_URL);
	const productsResponse = (await res.json()) as ProductFromResponse[];
	const products = productsResponse.map((product): ProductItemType => {
		return {
			id: product.id,
			name: product.title,
			price: product.price,
			description: product.description,
			category: product.category,
			image: {
				src: product.image,
				alt: product.title,
			},
		};
	});

	return products;
};

export const getProductById = async (id: string) => {
	const res = await fetch(`${API_URL}/${id}`);
	const productResponse = (await res.json()) as ProductFromResponse;
	const product: ProductItemType = {
		id: productResponse.id,
		name: productResponse.title,
		price: productResponse.price,
		description: productResponse.description,
		category: productResponse.category,
		image: {
			src: productResponse.image,
			alt: productResponse.title,
		},
	};

	return product;
};

export const getPaginatedProducts = async (pageNumber: number) => {
	const res = await fetch(
		`${API_URL}?take=20&offset=${20 * pageNumber}`,
	);
	const productsResponse = (await res.json()) as ProductFromResponse[];
	console.log(productsResponse.length);
	const products = productsResponse.map((product): ProductItemType => {
		return {
			id: product.id,
			name: product.title,
			price: product.price,
			description: product.description,
			category: product.category,
			image: {
				src: product.image,
				alt: product.title,
			},
		};
	});

	return products;
};
