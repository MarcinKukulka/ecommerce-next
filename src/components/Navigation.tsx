import Link from "next/link";
import { ActiveLink } from "@/ui/ActiveLink";

const routes = [
	{ name: "Home", path: "/" },
	{ name: "All", path: "/products" },
];

export const Navigation = () => {
	return (
		<nav className="fixed left-0 z-10 w-full border-b border-slate-400 bg-slate-700 bg-opacity-30 text-lg text-black backdrop-blur-xl backdrop-filter">
			<div className="mx-auto flex max-w-6xl items-center justify-between">
				<Link href={"/"}>Logo</Link>
				<ul className="flex items-center justify-center gap-x-6 p-6">
					{routes.map(({ name, path }) => {
						return (
							<li key={name}>
								<ActiveLink
									exact
									activeClassName="border-b-2 border-black"
									href={{ pathname: path }}
								>
									{name}
								</ActiveLink>
							</li>
						);
					})}
				</ul>
				<div className="flex gap-x-4">
					<Link href={"/"}>Logowanie</Link>
					<Link href={"/"}>Rejestracja</Link>
				</div>
			</div>
		</nav>
	);
};
