import { notFound } from "next/navigation";
import { getProductsByCollectionSlug } from "@/api/products";
import { Pagination } from "@/components/ui/Pagination";
import { ProductList } from "@/components/ProductList";
import { getCollectionBySlug } from "@/api/collections";

export async function generateMetadata({ params }: { params: { slug: string } }) {
	const collection = await getCollectionBySlug(params.slug);

	return {
		title: collection?.name,
		description: collection?.description,
	};
}

export default async function Collection({ params }: { params: { slug: string; page: string } }) {
	const products = await getProductsByCollectionSlug(params.slug, Number(params.page));
	const collection = await getCollectionBySlug(params.slug);

	if (!products) {
		notFound();
	}

	return (
		<>
			<h1 className="my-10 text-3xl">{collection?.name}</h1>
			<ProductList products={products} />
			<Pagination
				pageNumber={Number(params.page)}
				className="mt-4"
				target={`categories/${params.slug}`}
			/>
		</>
	);
}
