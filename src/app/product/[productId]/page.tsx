/* eslint-disable @typescript-eslint/no-misused-promises */
import { type Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { revalidateTag } from "next/cache";
import { getProduct } from "@/app/api/products";
import { ProductImage } from "@/ui/ProductImage";
import { ProductDescription } from "@/ui/ProductDescription";
import { SuggestedProducts } from "@/components/SuggestedProducts";
import { ProductVariantPicker } from "@/components/ProductVariant";
import { SkeletonLoading } from "@/components/ui/Skeleton";
import { ReviewForm } from "@/components/ui/ReviewForm";
import { addToCart, getOrCreateCart } from "@/app/api/cart";
import { AddToCartButton } from "@/components/ui/AddToCartButton";

export async function generateMetadata({
	params,
}: {
	params: { productId: string };
}): Promise<Metadata> {
	const product = await getProduct(params.productId);
	if (!product) {
		notFound();
	}
	return {
		title: product.name,
		description: product.description,
		twitter: {
			title: product.name,
			description: product.description,
			images: [{ url: product.images[0].url }],
		},
		openGraph: {
			title: product.name,
			description: product.description,
			images: [
				{
					url: product.images[0].url,
					width: 800,
					height: 600,
					alt: product.name,
				},
			],
		},
	};
}

export default async function SingleProductPage({ params }: { params: { productId: string } }) {
	const product = await getProduct(params.productId);
	if (!product) {
		notFound();
	}

	async function addProductToCartAction(_formData: FormData) {
		"use server";

		const cart = await getOrCreateCart();
		await addToCart(cart.id, params.productId);

		revalidateTag("cart");
	}
	return (
		<div className="mx-auto mt-20   flex max-w-2xl flex-col gap-y-6">
			<div className="flex flex-col md:flex-row md:justify-between ">
				<ProductImage src={product.images[0].url} alt={product.name} />
				<div className="ml-6 flex basis-1/2 flex-col gap-y-4">
					<h1 className="self-center text-3xl">{product.name}</h1>
					<ProductDescription
						name={product.name}
						price={product.price}
						category={product.categories[0]?.name}
						rating={product.averageRating as number}
					/>
					<p>{product.description}</p>
					<ProductVariantPicker id={product.id} />
					<form action={addProductToCartAction}>
						<input type="hidden" name="productId" value={product.id} />
						<AddToCartButton />
					</form>
				</div>
			</div>
			<Link
				className="mt-10 self-center rounded-lg bg-slate-800 p-4 text-white hover:bg-slate-700"
				href="/products"
			>
				Back to products
			</Link>
			<ReviewForm />
			<Suspense fallback={<SkeletonLoading />}>
				<SuggestedProducts />
			</Suspense>
		</div>
	);
}
