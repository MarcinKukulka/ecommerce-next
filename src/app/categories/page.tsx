import Link from "next/link";
import { type Route } from "next";
import { getCategoriesList } from "@/api/categories";

export default async function CategoriesList() {
	const categories = await getCategoriesList();
	return (
		<div className="flex flex-col items-center">
			<h1 className="py-8 text-3xl font-bold">List</h1>
			<ul className="flex flex-col gap-y-4">
				{categories.map((category) => {
					return (
						<li className="text-xl hover:text-blue-700" key={category.name}>
							<Link href={`/categories/${category.slug}` as Route}>{category.name}</Link>
						</li>
					);
				})}
			</ul>
		</div>
	);
}
