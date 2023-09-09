import { type ProductItemType } from "./types";
import { ProductImage } from "@/ui/ProductImage";
import { ProductDescription } from "@/ui/ProductDescription";

type ProductItemProps = {
	product: ProductItemType;
};

export const ProductListItem = ({ product }: ProductItemProps) => {
	return (
		<li data-testid="products-list">
			<article>
				<ProductImage {...product.image} />
				<ProductDescription product={product} />
			</article>
		</li>
	);
};
