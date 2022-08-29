// See example: https://vercel.com/guides/can-i-redirect-from-a-subdomain-to-a-subpath
const rewrites = async () => {
	return {
		beforeFiles: [
			// if the host is `getpaid.vercel.mitchkeenan.com`,
			// this rewrite will be applied
			{
				source: "/:path*",
				has: [
					{
						type: "host",
						value: "getpaid.vercel.mitchkeenan.com",
					},
				],
				destination: "/payroll/:path*",
			},
			{
				source: "/payroll/_next/static/:path*",
				destination: "/_next/static/:path*",
			},
			{
				source: "/payroll/public/:path*",
				destination: "/public/:path*",
			},
			{
				source: "/payroll/:favicon(favicon.*)",
				destination: "/:favicon*",
			},
		],
	};
};

/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	rewrites,
};

module.exports = nextConfig;
