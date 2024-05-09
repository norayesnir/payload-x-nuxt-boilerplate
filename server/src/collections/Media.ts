import { CollectionConfig } from "payload/types";
import path from "path";

export const Media: CollectionConfig = {
	slug: "media",
	upload: {
		staticURL: "/media",
		staticDir: path.resolve(__dirname, "../../client/public/media"),
		imageSizes: [
			{
				name: "thumbnail",
				width: 400,
				height: 300,
				position: "centre",
			},
			{
				name: "square",
				width: 600,
				height: 600,
				position: "centre",
			},
			{
				name: "landscape",
				width: 1200,
				height: 900,
				position: "centre",
			},
			{
				name: "portrait",
				width: 900,
				height: 1200,
				position: "centre",
			},
			{
				name: "video",
				width: 640,
				height: 360,
				position: "centre",
			},
		],
		adminThumbnail: "thumbnail",
		mimeTypes: ["image/*"],
	},
	fields: [
		{
			name: "alt",
			type: "text",
		},
	],
};
