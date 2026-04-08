import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { schemaTypes } from "./schemaTypes";

export default defineConfig({
	name: "scripture-alive",
	title: "Scripture Alive",
	projectId: "vxczpihg",
	dataset: "production",
	basePath: "/studio",
	plugins: [structureTool()],
	schema: {
		types: schemaTypes,
	},
});
