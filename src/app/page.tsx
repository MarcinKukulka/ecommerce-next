import { ProductList } from "@/components/ProductList";
import { getProductsByPage } from "@/api/products";

export default async function Home() {
	const products = await getProductsByPage(1);
	return (
		<div className="mx-auto max-w-md p-12 sm:max-w-2xl sm:py-16 md:max-w-4xl lg:max-w-7xl ">
			<h1 className="pb-8 text-center text-3xl">Ecommerce</h1>

			<ProductList products={products} numOfProducts={4} />
		</div>
	);
}
