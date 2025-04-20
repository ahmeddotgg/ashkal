<<<<<<< HEAD
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
=======
import withPayload from "@payloadcms/next/withPayload";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	/* config options here */
>>>>>>> 80520a05d9b7d0ad5a74341d6f121a796f7fd8d4
};

export default withPayload(nextConfig);
