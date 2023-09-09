import { type StaticImageData } from "next/image";

export type ProductItemType = {
	id: string;
	name: string;
	category: string;
	price: number;
	image: { alt: string; src: StaticImageData };
};
