import { CogIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const siteSettings = defineType({
	name: "siteSettings",
	title: "Site Settings",
	type: "document",
	icon: CogIcon,
	fields: [
		defineField({
			name: "title",
			title: "Internal Label",
			type: "string",
			initialValue: "Site Settings",
			hidden: true,
		}),

		// ── Home Page ────────────────────────────────────────────
		defineField({
			name: "homePerformancesImage",
			title: "Home — Performances Tile Image",
			type: "image",
			options: { hotspot: true },
			fields: [{ name: "alt", title: "Alt Text", type: "string" }],
			group: "home",
		}),
		defineField({
			name: "homeWorkshopsImage",
			title: "Home — Workshops Tile Image",
			type: "image",
			options: { hotspot: true },
			fields: [{ name: "alt", title: "Alt Text", type: "string" }],
			group: "home",
		}),
		defineField({
			name: "homeSpeakingImage",
			title: "Home — Speaking Tile Image",
			type: "image",
			options: { hotspot: true },
			fields: [{ name: "alt", title: "Alt Text", type: "string" }],
			group: "home",
		}),

		// ── About Page ───────────────────────────────────────────
		defineField({
			name: "aboutHeadshot",
			title: "About — Jeremy Headshot",
			type: "image",
			options: { hotspot: true },
			fields: [{ name: "alt", title: "Alt Text", type: "string" }],
			group: "about",
		}),

		// ── Interviews Page ──────────────────────────────────────
		defineField({
			name: "interviewsBioPhoto",
			title: "Interviews — Bio Photo (top of page)",
			type: "image",
			options: { hotspot: true },
			fields: [{ name: "alt", title: "Alt Text", type: "string" }],
			group: "interviews",
		}),
		defineField({
			name: "interviewsGenericThumb",
			title: "Interviews — Default Thumbnail (for non-YouTube interviews)",
			type: "image",
			options: { hotspot: true },
			fields: [{ name: "alt", title: "Alt Text", type: "string" }],
			group: "interviews",
		}),
	],
	groups: [
		{ name: "home", title: "Home Page" },
		{ name: "about", title: "About Page" },
		{ name: "interviews", title: "Interviews Page" },
	],
	preview: {
		prepare() {
			return { title: "Site Settings" };
		},
	},
});
