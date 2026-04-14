import { CogIcon } from "@sanity/icons";
import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { schemaTypes } from "./schemaTypes";

export default defineConfig({
	name: "scripture-alive",
	title: "Scripture Alive",
	projectId: "vxczpihg",
	dataset: "production",
	basePath: "/studio",
	plugins: [
		structureTool({
			structure: (S) =>
				S.list()
					.title("Content")
					.items([
						// Site Settings as a singleton at the top
						S.listItem()
							.title("Site Settings")
							.icon(CogIcon)
							.child(
								S.document()
									.schemaType("siteSettings")
									.documentId("siteSettings"),
							),
						S.divider(),
						// All other document types
						...S.documentTypeListItems().filter(
							(item) => item.getId() !== "siteSettings",
						),
					]),
		}),
	],
	schema: {
		types: schemaTypes,
	},
});
