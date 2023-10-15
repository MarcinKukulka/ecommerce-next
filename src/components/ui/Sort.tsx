"use client";

import { type Route } from "next";
import { useRouter, usePathname } from "next/navigation";

export const Sort = () => {
	const router = useRouter();
	const pathname = usePathname();

	const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
		router.push(`${pathname}?sortBy=${event.target.value}` as Route);
	};
	return (
		<div className="mb-4">
			<label htmlFor="sortBy" className="block text-sm font-medium text-gray-900">
				Sorting
			</label>

			<select
				onChange={handleChange}
				name="sortBy"
				id="sortBy"
				className="mt-1.5 rounded-lg border-gray-700 p-1 text-gray-700 sm:text-sm"
			>
				<option className="p-2" value="name_ASC">
					Name A-Z
				</option>
				<option className="p-2" value="name_DESC">
					Name Z-A
				</option>
				<option className="p-2" data-testid="sort-by-price" value="price_ASC">
					Price low to high
				</option>
				<option className="p-2" data-testid="sort-by-price" value="price_DESC">
					Price high to low
				</option>
				<option className="p-2" data-testid="sort-by-rating" value="averageRating_ASC">
					Rating low to high
				</option>
				<option className="p-2" data-testid="sort-by-rating" value="averageRating_DESC">
					Rating high to low
				</option>
			</select>
		</div>
	);
};
