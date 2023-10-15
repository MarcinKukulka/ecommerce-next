import { ProductListItem } from "@/components/ProductItem";

import { getProductsByPage } from "@/api/products";

export const SuggestedProducts = async () => {
	const getRandomNumber = (): number => {
		return Math.floor(Math.random() * 4) + 1;
	};
	const products = await getProductsByPage(getRandomNumber());
	return (
		<>
			<h2 className="title-font mb-1 text-2xl font-medium text-gray-900">
				Other related products:
			</h2>
			<ul
				className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4"
				data-testid="related-products"
			>
				{products.map((product) => (
					<ProductListItem key={product.id} product={product} />
				))}
			</ul>
		</>
	);
};
