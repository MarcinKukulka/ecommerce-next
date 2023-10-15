import { notFound } from "next/navigation";
import { getProductsByCategorySlug } from "@/api/products";
import { Pagination } from "@/ui/Pagination";
import { ProductList } from "@/components/ProductList";
import { getCategoryBySlug } from "@/api/categories";

export async function generateMetadata({ params }: { params: { slug: string } }) {
	const category = await getCategoryBySlug(params.slug);

	return {
		title: category?.name,
		description: category?.description,
	};
}

export default async function Category({ params }: { params: { slug: string; page: string } }) {
	const products = await getProductsByCategorySlug(params.slug, Number(params.page));
	const category = await getCategoryBySlug(params.slug);

	if (!products) {
		notFound();
	}

	return (
		<>
			<h1>{category?.name}</h1>
			<ProductList products={products} />
			<Pagination
				pageNumber={Number(params.page)}
				className="mt-8"
				target={`categories/${params.slug}`}
			/>
		</>
	);
}
