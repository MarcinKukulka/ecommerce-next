import { formatPrice } from "../../../lib/utils";
import { type ProductFragment } from "@/gql/graphql";

type ProductDescriptionProps = {
	product: ProductFragment;
};

export const ProductDescription = ({
	product: { name, categories, price },
}: ProductDescriptionProps) => {
	return (
		<div className="mt-2 flex justify-between">
			<div>
				<h3 className="text-sm font-semibold text-gray-900">{name}</h3>
				<p className="text-sm text-gray-500">
					<span className="sr-only">Kategoria</span>
					{categories[0]?.name}
				</p>
			</div>
			<p className="text-sm font-medium text-gray-900">
				<span className="sr-only">Cena</span>
				{formatPrice(price)}
			</p>
		</div>
	);
};
