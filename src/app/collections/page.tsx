import Link from "next/link";
import { type Route } from "next";
import { getCollectionsList } from "@/api/collections";

export default async function CollectionsList() {
	const collections = await getCollectionsList();
	return (
		<div className="flex flex-col items-center">
			<h1 className="py-8 text-3xl font-bold">List</h1>
			<ul className="flex flex-col gap-y-4">
				{collections.map((collection) => {
					return (
						<li className="text-xl hover:text-blue-700" key={collection.name}>
							<Link href={`/collections/${collection.slug}` as Route}>{collection.name}</Link>
						</li>
					);
				})}
			</ul>
		</div>
	);
}
