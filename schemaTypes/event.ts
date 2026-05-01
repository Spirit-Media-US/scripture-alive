import { CalendarIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const event = defineType({
	name: "event",
	title: "Event",
	type: "document",
	icon: CalendarIcon,
	fields: [
		defineField({
			name: "performance",
			title: "Performance / Program",
			type: "string",
			description: "What Jeremy will be performing at this event",
			validation: (rule) => rule.required(),
		}),
		defineField({
			name: "eventTypes",
			title: "Event Types",
			type: "array",
			of: [{ type: "string" }],
			options: {
				list: [
					{ title: "Performance", value: "performance" },
					{ title: "Workshop", value: "workshop" },
					{ title: "Speaking", value: "speaking" },
				],
				layout: "grid",
			},
			description: "Check all that apply — shown as the event type label",
			validation: (rule) => rule.min(1).error("Select at least one event type"),
		}),
		defineField({
			name: "venueName",
			title: "Venue Name",
			type: "string",
			validation: (rule) => rule.required(),
		}),
		defineField({
			name: "venueCity",
			title: "City",
			type: "string",
		}),
		defineField({
			name: "venueState",
			title: "State / Region",
			type: "string",
		}),
		defineField({
			name: "startDate",
			title: "Start Date",
			type: "datetime",
			validation: (rule) => rule.required(),
		}),
		defineField({
			name: "endDate",
			title: "End Date",
			type: "datetime",
			description: "Leave blank for single-day events",
		}),
		defineField({
			name: "eventSubtitle",
			title: "Event Occasion / Subtitle",
			type: "string",
			description: 'e.g. "Senior Adult Day", "Sunday Morning Service"',
		}),
		defineField({
			name: "tags",
			title: "Event Tags",
			type: "array",
			of: [{ type: "string" }],
			description:
				'e.g. "Senior Adult Day", "Passion of Christ", "Brownwood" — shown under the title in the popup',
			options: { layout: "tags" },
		}),
		defineField({
			name: "description",
			title: "Event Description",
			type: "text",
			rows: 4,
			description:
				"Full description shown in the event popup — unique per event",
		}),
		defineField({
			name: "venueAddress",
			title: "Venue Street Address",
			type: "string",
			description: 'e.g. "8025 FM2125, Brownwood, TX 76801"',
		}),
		defineField({
			name: "bookingUrl",
			title: "Event URL",
			type: "url",
			description: "Optional link for more info or registration",
		}),
	],
	preview: {
		select: {
			performance: "performance",
			venue: "venueName",
			city: "venueCity",
			date: "startDate",
		},
		prepare({ performance, venue, city, date }) {
			const d = date
				? new Date(date).toLocaleDateString("en-US", {
						month: "short",
						day: "numeric",
						year: "numeric",
					})
				: "No date";
			return {
				title: performance || "Untitled Event",
				subtitle: `${d} — ${venue || ""}, ${city || ""}`,
			};
		},
	},
	orderings: [
		{
			title: "Date (upcoming first)",
			name: "dateAsc",
			by: [{ field: "startDate", direction: "asc" }],
		},
	],
});
