const withMDX = require("@next/mdx")();

/** @type {import('next').NextConfig} */
const nextConfig = {
	experimental: {
		pageExtensions: ["ts", "tsx", "mdx"],
		typedRoutes: true,
		mdxRs: true,
	},
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "naszsklep-api.vercel.app",
			},
		],
	},
};

module.exports = withMDX(nextConfig);
