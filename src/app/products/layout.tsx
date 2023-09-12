import { getProductsList } from "@/app/api/products";
import { Pagination } from "@/ui/Pagination";

export default async function ProductsPageLayout({ children }: { children: React.ReactNode }) {
	const products = await getProductsList();
	const pageNumber = Number(Math.ceil(products.length / 20));

	return (
		<>
			{children}
			<Pagination pageNumber={pageNumber} />
		</>
	);
}
