import { ComponentIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const serviceItem = defineType({
	name: "serviceItem",
	title: "Service Items",
	type: "document",
	icon: ComponentIcon,
	fields: [
		defineField({
			name: "title",
			title: "Title",
			type: "string",
			validation: (rule) => rule.required(),
		}),
		defineField({
			name: "description",
			title: "Description",
			type: "text",
			rows: 5,
			validation: (rule) => rule.required(),
		}),
		defineField({
			name: "image",
			title: "Image",
			type: "image",
			options: { hotspot: true },
			fields: [
				{
					name: "alt",
					title: "Alt Text",
					type: "string",
				},
			],
		}),
		defineField({
			name: "imageUrl",
			title: "Image URL (legacy)",
			type: "url",
			description:
				"Fallback image URL — used only if no image is uploaded above. Upload an image above to replace this.",
		}),
		defineField({
			name: "category",
			title: "Category",
			type: "string",
			validation: (rule) => rule.required(),
			options: {
				list: [
					{ title: "Performances — Books", value: "performances-books" },
					{
						title: "Performances — Characters",
						value: "performances-characters",
					},
					{
						title: "Performances — Narratives",
						value: "performances-narratives",
					},
					{
						title: "Workshops — Foundations Track",
						value: "workshops-foundations",
					},
					{
						title: "Workshops — Discipleship Track",
						value: "workshops-discipleship",
					},
					{ title: "Workshops — Advanced Track", value: "workshops-advanced" },
					{
						title: "Speaking — Church & Events",
						value: "speaking-church-events",
					},
					{ title: "Speaking — Podcast & Radio", value: "speaking-podcast" },
					{
						title: "Speaking — Leadership Training",
						value: "speaking-leadership",
					},
					{ title: "Speaking — Coaching", value: "speaking-coaching" },
				],
			},
		}),
		defineField({
			name: "order",
			title: "Display Order",
			type: "number",
			description: "Lower numbers appear first",
			validation: (rule) => rule.required(),
		}),
	],
	preview: {
		select: {
			title: "title",
			category: "category",
			order: "order",
			media: "image",
		},
		prepare({ title, category, order, media }) {
			const categoryLabels: Record<string, string> = {
				"performances-books": "Perf / Books",
				"performances-characters": "Perf / Characters",
				"performances-narratives": "Perf / Narratives",
				"workshops-foundations": "Workshop / Foundations",
				"workshops-discipleship": "Workshop / Discipleship",
				"workshops-advanced": "Workshop / Advanced",
				"speaking-church-events": "Speaking / Church",
				"speaking-podcast": "Speaking / Podcast",
				"speaking-leadership": "Speaking / Leadership",
				"speaking-coaching": "Speaking / Coaching",
			};
			return {
				title: title || "Untitled",
				subtitle: `${categoryLabels[category] || category} · #${order}`,
				media,
			};
		},
	},
	orderings: [
		{
			title: "Category, then Order",
			name: "categoryOrder",
			by: [
				{ field: "category", direction: "asc" },
				{ field: "order", direction: "asc" },
			],
		},
	],
});
