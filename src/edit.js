import { __ } from "@wordpress/i18n";
import "./editor.scss";

export default function Edit({ className }) {
	return (
		<p className={className}>
			{__("Snow Blocks – hello from the editor!", "snow-blocks")}
		</p>
	);
}
