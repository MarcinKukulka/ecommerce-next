import { ActiveLink } from "@/ui/ActiveLink";

type PaginationProps = {
	pageNumber: number;
	className?: string;
	target?: "products" | `categories/${string}`;
};

export const Pagination = ({ pageNumber, className, target = "products" }: PaginationProps) => {
	const pageNumbers = Array.from({ length: 10 }, (_, i) => pageNumber - 5 + i);

	return (
		<ol
			className={`flex justify-center gap-1 text-xs font-medium ${className}`}
			aria-label="Pagination"
		>
			<li>
				<ActiveLink
					href={`/${target}/${pageNumber - 1}`}
					className="inline-flex h-8 w-8 items-center justify-center rounded border border-gray-100 bg-white text-gray-900 hover:bg-slate-200"
					activeClassName="inline-flex h-8 w-8 items-center justify-center rounded border border-gray-100 bg-white text-gray-900 hover:bg-slate-200"
				>
					<span className="sr-only">Previous Page</span>
					<span>&lt;</span>
				</ActiveLink>
			</li>

			{pageNumbers.map(
				(pageNumber) =>
					pageNumber > 0 && (
						<li key={pageNumber}>
							<ActiveLink
								href={`/${target}/${pageNumber}`}
								className=" flex h-8 w-8 items-center justify-center rounded border border-gray-100   text-gray-900"
								activeClassName="flex h-8 w-8 items-center justify-center rounded border bg-slate-200   text-gray-900"
							>
								{pageNumber}
							</ActiveLink>
						</li>
					),
			)}
			<li>
				<ActiveLink
					href={`/${target}/${pageNumber + 1}`}
					className="inline-flex h-8 w-8 items-center justify-center rounded border border-gray-100 bg-white text-gray-900 hover:bg-slate-200"
					activeClassName="inline-flex h-8 w-8 items-center justify-center rounded border border-gray-100 bg-white text-gray-900 hover:bg-slate-200"
				>
					<span className="sr-only">Next Page</span>
					<span>&gt;</span>
				</ActiveLink>
			</li>
		</ol>
	);
};
