import { getProductsByPage } from "@/api/products";
import { ProductList } from "@/components/ProductList";
import { Pagination } from "@/components/ui/Pagination";
import { Sort } from "@/components/ui/Sort";
import { type ProductOrderByInput } from "@/gql/graphql";

export default async function Products({
	params,
	searchParams,
}: {
	params: { page: string };
	searchParams: { [key: string]: string | string[] };
}) {
	const sortBy = searchParams.sortBy?.toString();
	const products = await getProductsByPage(
		Number(params.page),
		(sortBy as ProductOrderByInput) || "name_ASC",
	);
	return (
		<>
			<Sort />
			<ProductList products={products} />
			<Pagination pageNumber={Number(params.page)} className="mt-8" />
		</>
	);
}
