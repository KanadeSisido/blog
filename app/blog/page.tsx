import PostCard from "@/components/PostCard";
import PostLayout from "@/components/PostLayout";
import { fetchAllBlog } from "@/lib/fetch";
import { noto_sans_jp_500 } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import { Post } from "@/types/types";
import React from "react";

const page = async () => {
	const blogs = await fetchAllBlog();
	return (
		<div className='w-full px-5 lg:px-20 py-10'>
			<div className='flex items-center gap-6 mb-10'>
				<h1 className={cn("text-3xl", noto_sans_jp_500.className)}>Blog</h1>
				<p
					className={cn(
						"text-sm text-gray-400 mt-2",
						noto_sans_jp_500.className
					)}
				>
					普通のブログです
				</p>
			</div>
			<PostLayout>
				{blogs.map((blog: Post, key: number) => (
					<PostCard href={`/blog/${blog.id}`} detail={blog} key={key} />
				))}
			</PostLayout>
		</div>
	);
};

export default page;
