import { ActiveLink } from "@/ui/ActiveLink";

const routes = [
	{ name: "Home", path: "/" },
	{ name: "All", path: "/products" },
];

export const Navigation = () => {
	return (
		<nav>
			<ul className="flex items-center justify-center gap-x-6 p-6">
				{routes.map(({ name, path }) => {
					return (
						<li key={name}>
							<ActiveLink exact activeClassName="border-b-2 border-black" href={{ pathname: path }}>
								{name}
							</ActiveLink>
						</li>
					);
				})}
			</ul>
		</nav>
	);
};
