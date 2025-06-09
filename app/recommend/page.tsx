import PostLayout from "@/components/PostLayout";
import { cn } from "@/lib/utils";
import { Post } from "@/types/types";
import React from "react";
import TipsCard from "@/components/TipsCard";
import { noto_sans_jp_500 } from "@/lib/fonts";
import { fetchAllRecommend } from "@/lib/fetch";

const page = async () => {
	const recommends = await fetchAllRecommend();

	return (
		<div className='w-full px-5 lg:px-20 py-10'>
			<div className='flex items-center gap-6 mb-10'>
				<h1 className={cn("text-3xl", noto_sans_jp_500.className)}>
					Recommend
				</h1>
				<p
					className={cn(
						"text-sm text-gray-400 mt-2",
						noto_sans_jp_500.className
					)}
				>
					よかったものを紹介します
				</p>
			</div>
			<PostLayout>
				{recommends.map((recommend: Post, key: number) => (
					<TipsCard detail={recommend} key={key} />
				))}
			</PostLayout>
		</div>
	);
};

export default page;
