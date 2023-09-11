import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export const formatPrice = (amount: number) => {
	const options = {
		style: "currency",
		currency: "PLN",
		minimumFractionDigits: 2,
	};

	if (amount % 100 === 0) options.minimumFractionDigits = 0;

	const formatter = new Intl.NumberFormat("pl-PL", options);

	return formatter.format(amount / 100);
};

export const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs));
