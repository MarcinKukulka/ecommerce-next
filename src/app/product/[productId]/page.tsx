import { type Metadata } from "next";
import Link from "next/link";
import { getProductById } from "@/app/api/products";
import { ProductImage } from "@/ui/ProductImage";
import { ProductDescription } from "@/ui/ProductDescription";

export async function generateMetadata({
	params,
}: {
	params: { productId: string };
}): Promise<Metadata> {
	const product = await getProductById(params.productId);

	return {
		title: product.name,
		description: product.description,
		openGraph: {
			title: product.name,
			description: product.description,
			images: [product.image.src],
		},
	};
}

export default async function SingleProductPage({ params }: { params: { productId: string } }) {
	const product = await getProductById(params.productId);
	return (
		<div className="mx-auto flex max-w-2xl flex-col gap-y-6">
			<div className="flex flex-col md:flex-row md:justify-between ">
				<ProductImage {...product.image} />
				<div className="ml-6 flex basis-1/2 flex-col gap-y-4">
					<h1 className="self-center text-3xl">{product.name}</h1>
					<ProductDescription
						product={{
							...product,
						}}
					/>
					<p>{product.description}</p>
				</div>
			</div>
			<Link
				className="mt-10 self-center rounded-lg bg-slate-800 p-4 text-white hover:bg-slate-700"
				href="/products"
			>
				Back to products
			</Link>
		</div>
	);
}
