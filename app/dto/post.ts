import { HtmlText } from "@/lib/htmlParse";
import { dbPost, Post } from "@/types/types";

export function dbPostToPost(respost: dbPost) {
	const post: Post = {
		id: respost.id,
		createdAt: new Date(respost.createdAt),
		title: respost.title,
		contents: respost.contents,
		summary: HtmlText(respost.contents),
	};

	if (respost.cover_img && respost.cover_img.url) {
		post.img = respost.cover_img.url;
	}

	if (respost.tag) {
		post.tag = respost.tag;
	}

	return post;
}
