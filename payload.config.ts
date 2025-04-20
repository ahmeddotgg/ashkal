import { mongooseAdapter } from "@payloadcms/db-mongodb";
import { buildConfig } from "payload";

export default buildConfig({
	secret: process.env.PAYLOAD_SECRET,
	db: mongooseAdapter({
		url: process.env.DATABASE_URI,
	}),
	collections: [
		{
			slug: "pages",
			fields: [
				{
					name: "title",
					type: "text",
				},
			],
		},
	],
});
