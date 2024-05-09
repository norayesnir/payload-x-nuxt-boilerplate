import { CollectionConfig } from "payload/types";

export const ContentMedia: CollectionConfig = {
	slug: "content-media",
	admin: {
		useAsTitle: "title",
		description:
			"With this block you can create all kinds of blocks with rich text and media.",
	},
	fields: [
		{
			type: "tabs",
			tabs: [
				{
					label: "Content",
					description: "Content for the content media",
					fields: [
						{
							label: "Content",
							type: "collapsible",
							fields: [
								{
									name: "title",
									label: "Title",
									type: "text",
									required: true,
								},
								{
									name: "content",
									label: "Content",
									type: "richText",
								},
								{
									name: "media",
									label: "Media",
									type: "upload",
									relationTo: "media",
								},
							],
						},
					],
				},
				{
					label: "Settings",
					description: "Settings for the content media",
					fields: [
						{
							name: "media_big",
							label: "Media Big",
							type: "checkbox",
						},
					],
				},
			],
		},
	],
};
