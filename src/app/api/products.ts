import {
	ProductsGetListDocument,
	ProductGetByPageDocument,
	ProductGetByIdDocument,
	ProductsGetByCategorySlugDocument,
	ProductsGetByCollectionSlugDocument,
	ProductGetColorSizeVariantsByIdDocument,
	ProductGetByNameDocument,
	type ProductOrderByInput,
	type TypedDocumentString,
} from "@/gql/graphql";

export const executeGraphql = async <TResult, TVariables>({
	query,
	variables,
	next,
	cache,
}: {
	query: TypedDocumentString<TResult, TVariables>;
	variables: TVariables;
	next?: NextFetchRequestConfig;
	cache?: RequestCache;
}): Promise<TResult> => {
	if (!process.env.GRAPHQL_URL) {
		throw TypeError("GRAPHQL_URL is not defined");
	}

	const res = await fetch(process.env.GRAPHQL_URL, {
		method: "POST",
		cache,
		next,
		headers: {
			"Content-Type": "application/json",
			Authorization: `Bearer ${process.env.GRAPHQL_TOKEN}`,
		},
		body: JSON.stringify({ query, variables }),
	});

	type GraphQLResponse<T> =
		| { data: T; errors: undefined }
		| { data?: undefined; errors: { message: string }[] };

	const graphqlResponse = (await res.json()) as GraphQLResponse<TResult>;

	if (graphqlResponse.errors) {
		console.log(graphqlResponse);
		throw TypeError(`GraphQL Error`, { cause: graphqlResponse.errors });
	}

	return graphqlResponse.data;
};

const productsPerPage = 4;

export const getProductsList = async () => {
	const graphqlResponse = await executeGraphql({
		cache: "no-cache",
		next: {
			tags: ["product"],
		},
		query: ProductsGetListDocument,
		variables: {},
	});

	return graphqlResponse.products;
};

export const getProduct = async (id: string) => {
	const graphqlResponse = await executeGraphql({
		cache: "no-cache",
		next: {
			tags: ["product"],
		},
		query: ProductGetByIdDocument,
		variables: {
			id,
		},
	});

	return graphqlResponse.product;
};

export const getProductsByPage = async (
	page: number,
	orderBy = "name_ASC" as ProductOrderByInput,
) => {
	const offset = (page - 1) * productsPerPage;

	const graphqlResponse = await executeGraphql({
		cache: "no-cache",
		next: {
			tags: ["product"],
		},
		query: ProductGetByPageDocument,
		variables: {
			skip: offset,
			first: productsPerPage,
			orderBy: orderBy,
		},
	});

	return graphqlResponse.products;
};

export const getProductsByCategorySlug = async (category: string, page: number) => {
	const offset = (page - 1) * productsPerPage;
	const graphqlResponse = await executeGraphql({
		cache: "no-cache",
		next: {
			tags: ["product"],
		},
		query: ProductsGetByCategorySlugDocument,
		variables: {
			slug: category,
			skip: offset,
			first: productsPerPage,
		},
	});

	return graphqlResponse.categories[0]?.products;
};

export const getProductsByCollectionSlug = async (collection: string, page: number) => {
	const offset = (page - 1) * productsPerPage;
	const graphqlResponse = await executeGraphql({
		cache: "no-cache",
		next: {
			tags: ["product"],
		},
		query: ProductsGetByCollectionSlugDocument,
		variables: {
			slug: collection,
			skip: offset,
			first: productsPerPage,
		},
	});

	return graphqlResponse.collections[0]?.products;
};

export const getColorSizeVariantsByProductId = async (id: string) => {
	const graphqlResponse = await executeGraphql({
		cache: "no-cache",
		next: {
			tags: ["product"],
		},
		query: ProductGetColorSizeVariantsByIdDocument,
		variables: {
			id,
		},
	});

	return graphqlResponse.product?.variants || [];
};

export const getProductsListByName = async (name: string) => {
	const graphqlResponse = await executeGraphql({
		cache: "no-cache",
		next: {
			tags: ["product"],
		},
		query: ProductGetByNameDocument,
		variables: {
			name,
		},
	});

	return graphqlResponse.products;
};
