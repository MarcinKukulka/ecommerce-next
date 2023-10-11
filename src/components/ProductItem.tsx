import Link from "next/link";
import { ProductImage } from "@/ui/ProductImage";
import { ProductDescription } from "@/ui/ProductDescription";
import { type ProductFragment } from "@/gql/graphql";

type ProductItemProps = {
	product: ProductFragment;
};

export const ProductListItem = ({ product }: ProductItemProps) => {
	return (
		<li data-testid="products-list">
			<Link href={`/product/${product.id}`}>
				<article>
					<ProductImage src={product.images[0]?.url} alt={product.name} />
					<ProductDescription product={product} />
				</article>
			</Link>
		</li>
	);
};
