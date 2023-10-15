import { formatPrice } from "../../../lib/utils";

type ProductDescriptionProps = {
	name: string;
	price: number;
	category?: string;
	rating?: number;
};

export const ProductDescription = ({ name, category, price, rating }: ProductDescriptionProps) => {
	return (
		<div className="mt-2 flex justify-between">
			<div>
				<h3 className="text-sm font-semibold text-gray-900">{name}</h3>
				<p className="text-sm text-gray-500">
					<span className="sr-only">Kategoria</span>
					{category}
				</p>
			</div>
			<p className="text-sm font-medium text-gray-900">
				<span className="sr-only">Cena</span>
				{formatPrice(price)}
			</p>
			<div data-testid="product-rating">{rating}</div>
		</div>
	);
};
