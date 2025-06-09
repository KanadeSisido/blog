import DOMPurify from "isomorphic-dompurify";
import parse from "html-react-parser";
import { JSDOM } from "jsdom";

export function HtmlElement(rawhtml: string) {
	const sanitizedHtml = DOMPurify.sanitize(rawhtml);
	return parse(sanitizedHtml);
}

export function HtmlText(rawhtml: string) {
	const sanitizedHtml = DOMPurify.sanitize(rawhtml);

	const root = new JSDOM(sanitizedHtml);
	root.window.document
		.querySelectorAll("style, script")
		.forEach((elem: any) => elem.remove());
	return root.window.document.body.textContent ?? "";
}
