import Link from "next/link";
import { type Route } from "next";
import Image from "next/image";
import logo from "../../public/logo.jpg";
import { ActiveLink } from "@/ui/ActiveLink";
import { Search } from "@/components/ui/Search";

type RoutesProps = {
	name: string;
	path: Route;
};

const routes: RoutesProps[] = [
	{ name: "Home", path: "/" },
	{ name: "All", path: "/products" },
	{ name: "Categories", path: "/categories" },
	{ name: "Collections", path: "/collections" },
	{ name: "T-shirts", path: "/categories/t-shirts" as Route },
	{ name: "Hoodies", path: "/categories/hoodies" as Route },
	{ name: "Accessories", path: "/categories/accessories" as Route },
];

export const Navigation = () => {
	return (
		<nav className="fixed left-0 z-10 w-full border-b border-slate-400 bg-slate-700 bg-opacity-30 text-start text-black backdrop-blur-xl backdrop-filter">
			<div className="mx-auto flex max-w-6xl items-center justify-between">
				<Link href={"/"}>
					<Image src={logo} alt="logo" width={40} className="rounded-full" />
				</Link>
				<ul className="flex items-center justify-center gap-x-6 p-6">
					{routes.map(({ name, path }) => {
						const isProductPath =
							path === routes[1].path ||
							path === routes[4].path ||
							path === routes[5].path ||
							path === routes[6].path;
						return (
							<li key={name}>
								<ActiveLink
									exact={!isProductPath}
									activeClassName="border-b-2 border-black"
									href={path}
								>
									{name}
								</ActiveLink>
							</li>
						);
					})}
				</ul>
				<div className="flex gap-x-4">
					<Link href={"/"}>Sign in</Link>
				</div>
				<Search />
			</div>
		</nav>
	);
};
