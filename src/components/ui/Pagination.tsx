import { ActiveLink } from "@/ui/ActiveLink";

export const Pagination = ({ pageNumber }: { pageNumber: number }) => {
    const pages = Array.from({ length: pageNumber }, (_, i) => i + 1)

    return (
        <div aria-label="pagination" className="flex items-center justify-center gap-4">
            {pages.map((page) => (
                <ActiveLink
                    activeClassName="border-b-2 border-black"
                    href={{ pathname: `/products/${page}` }}
                    key={page}
                >
                    {page}
                </ActiveLink>
            ))}
        </div>
    );
};

