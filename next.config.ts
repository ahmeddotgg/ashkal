import { withPayload } from "@payloadcms/next/withPayload";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	devIndicators: false,
	turbopack: {
		resolveAlias: {
			underscore: "lodash",
		},
		resolveExtensions: [".mdx", ".tsx", ".ts", ".jsx", ".js", ".json"],
	},
	allowedDevOrigins: [
		"local-origin.dev",
		"*.local-origin.dev",
		"192.168.207.100",
	],
};

export default withPayload(nextConfig);
