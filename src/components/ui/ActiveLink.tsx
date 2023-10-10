"use client";
import { type RouteType } from "next/dist/lib/load-custom-routes";
import Link, { type LinkProps } from "next/link";
import { usePathname } from "next/navigation";

type ActiveLinkProps = {
	exact?: boolean;
	activeClassName?: string;
} & LinkProps<RouteType>;

export const ActiveLink = ({
	children,
	href,
	exact = false,
	className,
	activeClassName,
}: ActiveLinkProps) => {
	const pathname = usePathname();

	const matchPath = (typeof href === "string" ? href : href.pathname) ?? null;
	const isActive =
		(matchPath && pathname && (exact ? pathname === matchPath : pathname.startsWith(matchPath))) ||
		false;
	return (
		<Link
			className={isActive ? activeClassName : className}
			href={href}
			role="link"
			aria-current={isActive ? isActive : undefined}
		>
			{children}
		</Link>
	);
};
