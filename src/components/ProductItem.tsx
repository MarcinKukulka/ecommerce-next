import Link from "next/link";
import { ProductImage } from "@/ui/ProductImage";
import { ProductDescription } from "@/ui/ProductDescription";
import { type ProductFragment } from "@/gql/graphql";

type ProductItemProps = {
	product: ProductFragment;
};

export const ProductListItem = ({ product }: ProductItemProps) => {
	const { categories, name, images, id, price, averageRating } = product;
	return (
		<li data-testid="products-list">
			<Link href={`/product/${id}`}>
				<article>
					<ProductImage src={images[0]?.url} alt={name} />
					<ProductDescription
						name={name}
						price={price}
						category={categories[0]?.name}
						rating={Number(averageRating)}
					/>
				</article>
			</Link>
		</li>
	);
};
