import origami from '../../../public/origami.jpeg';
import butterfly from "../../../public/butterfly.jpeg";
import sailboat from "../../../public/sailboat.jpeg";
import eye from "../../../public/eye.jpeg";
import { type ProductItemType } from "@/components/types";
import { ProductList } from "@/components/ProductList";

const products: ProductItemType[] = [
	{
		id: "1",
		category: "Accessories",
		name: "Wayfarer Classic",
		price: 95,
		image: {
			alt: "",
			src: origami,
		},
	},
	{
		id: "2",
		category: "Accessories",
		name: "Wayfarer Classic",
		price: 95,
		image: {
			alt: "",
			src: butterfly,
		},
	},
	{
		id: "3",
		category: "Accessories",
		name: "Wayfarer Classic",
		price: 95,
		image: {
			alt: "",
			src: eye,
		},
	},
	{
		id: "4",
		category: "Accessories",
		name: "Wayfarer Classic",
		price: 195,
		image: {
			alt: "",
			src: sailboat,
		},
	},
];

export default function Products() {
	return (
		<div className="mx-auto max-w-md p-12 sm:max-w-2xl sm:py-16 md:max-w-4xl lg:max-w-7xl ">
			<ProductList
				products={products}
			/>
		</div>
	);
}
