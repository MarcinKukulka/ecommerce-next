import { getProductsByPage, getProductsList } from "@/api/products";
import { ProductList } from "@/components/ProductList";

export async function generateStaticParams() {
	const products = await getProductsList();
	const pageNumber = Math.ceil(products.length / 20);
	const pages = Array.from({ length: pageNumber }, (_, i) => i + 1);
	return pages.map((page) => ({ params: { page: page.toString() } }));
}

export default async function ProductsPage({ params }: { params: { page: string } }) {
	const products = await getProductsByPage(Number(params.page));

	return <ProductList products={products} />;
}
