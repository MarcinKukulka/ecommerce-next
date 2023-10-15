"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { type ChangeEvent, type FormEvent, useState, useEffect } from "react";
import { SearchIcon, X } from "lucide-react";

export const Search = () => {
	const router = useRouter();
	const searchParams = useSearchParams();
	const query = searchParams.get("query");
	const [searchQuery, setSearchQuery] = useState(query || "");

	const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
		setSearchQuery(event.target.value);
	};

	const handleOnSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		router.push(`/search?query=${searchQuery}`);
	};

	const clearSearch = () => {
		setSearchQuery("");
	};

	useEffect(() => {
		if (searchQuery) {
			const latency = setTimeout(() => {
				router.push(`/search?query=${searchQuery}`);
			}, 500);

			return () => {
				clearTimeout(latency);
			};
		}
	}, [searchQuery, router]);

	return (
		<form onSubmit={handleOnSubmit}>
			<div className="relative">
				<label htmlFor="Search" className="sr-only">
					Search
				</label>

				<input
					role="searchbox"
					type="text"
					id="Search"
					placeholder="Search..."
					className="w-full rounded-lg border-gray-100 p-2 pe-10 shadow-sm outline-none sm:text-sm"
					value={searchQuery}
					onChange={handleOnChange}
				/>

				<span className="absolute inset-y-2 end-0 grid w-10 grid-cols-2 place-content-center">
					{searchQuery.length > 0 && (
						<button type="submit" onClick={() => clearSearch()} className="hover:text-blue-700">
							<span className="sr-only">Search</span>
							<X size={16} />
						</button>
					)}
					<button type="submit" className="hover:text-blue-700">
						<span className="sr-only">Search</span>
						<SearchIcon size={16} />
					</button>
				</span>
			</div>
		</form>
	);
};
