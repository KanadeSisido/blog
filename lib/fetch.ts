import { dbPostToPost } from "@/app/dto/post";
import { dbPost, resPost } from "@/types/types";
import { notFound } from "next/navigation";
import { cache } from "react";

async function fetchApi(path: string) {
	const data = await fetch(path, {
		headers: {
			"Content-Type": "application/json",
			"X-API-KEY": process.env.MICRO_CMS_APIKEY!,
		},

		next: {
			revalidate: 3600,
		},
	});

	return data;
}

export const fetchAllBlog = cache(async () => {
	const data = await fetchApi(`${process.env.MICRO_CMS_URL}/blog`);
	const json: resPost | null = await data.json();

	if (!json) {
		notFound();
	}

	return json.contents.map((blog) => dbPostToPost(blog));
});

export const fetchBlogById = cache(async (id: string) => {
	const data = await fetchApi(`${process.env.MICRO_CMS_URL}/blog/${id}`);

	if (!data || !data.ok) {
		notFound();
	}

	const json: dbPost | null = await data.json();

	if (!json) {
		notFound();
	}
	const blog = dbPostToPost(json);

	return blog;
});

export const fetchAllRecommend = cache(async () => {
	const data = await fetchApi(`${process.env.MICRO_CMS_URL}/recommend`);
	const json: resPost | null = await data.json();

	if (!json) {
		notFound();
	}

	return json.contents.map((recommend) => dbPostToPost(recommend));
});
