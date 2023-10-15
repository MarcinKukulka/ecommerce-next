const withMDX = require("@next/mdx")();

/** @type {import('next').NextConfig} */
const nextConfig = {
	experimental: {
		pageExtensions: ["ts", "tsx", "mdx"],
		typedRoutes: true,
		mdxRs: true,
		serverActions: true,
	},
	redirects: async () => {
		return [
			{
				source: "/products",
				destination: "/products/1",
				permanent: true,
			},
			{
				source: "/categories/:slug",
				destination: "/categories/:slug/1",
				permanent: true,
			},
			{
				source: "/collections/:slug",
				destination: "/collections/:slug/1",
				permanent: true,
			},
		];
	},
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "media.graphassets.com",
			},
		],
	},
	
};

module.exports = withMDX(nextConfig);
