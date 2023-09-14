// import { type ProductItemType } from "./types";
// import { ProductListItem } from "@/components/ProductItem";

// export const ProductList = ({ products }: { products: ProductItemType[] }) => {
// 	return (
// 		<ul
// 			data-testid="products-list"
// 			className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
// 		>
// 			{products.map((product) => {
// 				return <ProductListItem key={product.id} product={product} />;
// 			})}
// 		</ul>
// 	);
// };
import { type ProductItemType } from "./types";
import { ProductListItem } from "@/components/ProductItem";

type ProductListProps = {
	products: ProductItemType[];
	numOfProducts?: number;
};

export const ProductList = ({ products, numOfProducts }: ProductListProps) => {
	const productsToDisplay = numOfProducts ? products.slice(0, numOfProducts) : products;

	return (
		<ul
			data-testid="products-list"
			className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
		>
			{productsToDisplay.map((product) => {
				return <ProductListItem key={product.id} product={product} />;
			})}
		</ul>
	);
};
