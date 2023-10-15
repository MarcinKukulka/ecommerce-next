import { VariantOption } from "@/ui/VariantOption";
import { getColorSizeVariantsByProductId } from "@/api/products";

type ProductVariant = {
	id: string;
	name: string;
};

type ProductVariantPickerProps = {
	id: string;
};

export async function ProductVariantPicker({ id }: ProductVariantPickerProps) {
	const variants = await getColorSizeVariantsByProductId(id);

	console.log(variants);

	return (
		<fieldset className="mt-4 grid grid-cols-2 gap-4">
			<legend className="font-medium text-gray-900">Product Variant</legend>
			{variants.length <= 1 && Object.keys(variants[0] || {}).length === 0 ? (
				<p>No variants for this product</p>
			) : (
				(variants as ProductVariant[]).map((variant: ProductVariant) => (
					<VariantOption key={variant.id} name={variant.name} />
				))
			)}
		</fieldset>
	);
}
