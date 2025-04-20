<<<<<<< HEAD
import path from "node:path";
import { fileURLToPath } from "node:url";
// storage-adapter-import-placeholder
import { mongooseAdapter } from "@payloadcms/db-mongodb";
import { payloadCloudPlugin } from "@payloadcms/payload-cloud";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import { buildConfig } from "payload";
import sharp from "sharp";

import { Media } from "./collections/Media";
import { Users } from "./collections/Users";

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

export default buildConfig({
	admin: {
		user: Users.slug,
		importMap: {
			baseDir: path.resolve(dirname),
		},
	},
	collections: [Users, Media],
	editor: lexicalEditor(),
	secret: process.env.PAYLOAD_SECRET || "",
	typescript: {
		outputFile: path.resolve(dirname, "payload-types.ts"),
	},
	db: mongooseAdapter({
		url: process.env.DATABASE_URI || "",
	}),
	sharp,
	plugins: [
		payloadCloudPlugin(),
		// storage-adapter-placeholder
=======
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
>>>>>>> 80520a05d9b7d0ad5a74341d6f121a796f7fd8d4
	],
});
