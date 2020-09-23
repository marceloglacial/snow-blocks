import { registerBlockType } from "@wordpress/blocks";
import { __ } from "@wordpress/i18n";
import "./style.scss";
import Edit from "./edit";
import save from "./save";

registerBlockType("create-block/snow-blocks", {
	title: __("Snow Blocks", "snow-blocks"),
	description: __("Aweomse Custom Blocks.", "snow-blocks"),
	category: "widgets",
	icon: "smiley",
	supports: {
		html: false,
	},
	edit: Edit,
	save,
});
