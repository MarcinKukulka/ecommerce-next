import Image from "next/image";

type ProductImageProps = { src: string; alt: string };

export const ProductImage = ({ src, alt }: ProductImageProps) => {
	return (
		<div className="hove:bg-slate-100 aspect-square overflow-hidden rounded-md border bg-slate-50 ">
			<Image
				src={src}
				alt={alt}
				width={320}
				height={320}
				className="h-full w-full rounded-lg object-cover object-center p-4 transition-transform hover:scale-105"
			/>
		</div>
	);
};
