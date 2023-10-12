"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { type Route } from "next";
import { type ReactNode } from "react";

type ActiveLinkProps<T extends string> = {
	exact?: boolean;
	activeClassName?: string;
	href: Route<T>;
	className?: string;
	children: ReactNode;
};

export const ActiveLink = <T extends string>({
	children,
	href,
	exact = false,
	className,
	activeClassName,
}: ActiveLinkProps<T>) => {
	const pathname = usePathname();

	// const matchPath = (typeof href === "string" ? href : href.pathname) ?? null;
	// const isActive =
	// 	(matchPath && pathname && (exact ? pathname === matchPath : pathname.startsWith(matchPath))) ||
	// 	false;
	const isActive = exact
		? pathname === href
		: pathname.startsWith(href) &&
		  (pathname[href.length] === "/" || pathname.length === href.length);

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
