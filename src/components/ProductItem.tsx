import Link from "next/link";
import { type ProductItemType } from "@/components/types";
import { ProductImage } from "@/ui/ProductImage";
import { ProductDescription } from "@/ui/ProductDescription";

type ProductItemProps = {
	product: ProductItemType;
};

export const ProductListItem = ({ product }: ProductItemProps) => {
	return (
		<li data-testid="products-list">
			<Link href={`/product/${product.id}`}>
				<article>
					<ProductImage {...product.image} />
					<ProductDescription product={product} />
				</article>
			</Link>
		</li>
	);
};
