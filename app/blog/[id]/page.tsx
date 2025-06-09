import React from "react";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { formatDate } from "date-fns";
import Image from "next/image";
import { noto_sans_jp_400, noto_sans_jp_500 } from "@/lib/fonts";
import { HtmlElement } from "@/lib/htmlParse";
import { fetchBlogById } from "@/lib/fetch";
import { PageProps } from "@/.next/types/app/page";

const page = async ({ params }: PageProps) => {
	// Nextjs: dynamic params is asynchronos
	// https://nextjs.org/docs/messages/sync-dynamic-apis

	const { id } = await params;

	const blog = await fetchBlogById(id);

	const element = HtmlElement(blog.contents);
	const createdAt = formatDate(blog.createdAt, "yyyy-MM-dd");

	return (
		<div className='flex flex-col p-10 items-center w-full min-h-[80svh]'>
			<div className='w-full max-w-[1000px]'>
				<div className='flex flex-col gap-4'>
					{blog.img && (
						<Image
							alt='thumbnail'
							width={720}
							height={480}
							src={blog.img}
							className='w-full h-[300px] object-cover'
						></Image>
					)}
					<div>
						<h1 className={cn("text-4xl mt-4", noto_sans_jp_500.className)}>
							{blog.title}
						</h1>
					</div>
					<div className='flex items-center gap-4'>
						<Badge variant='secondary' className='mt-1'>
							{blog.tag}
						</Badge>
						<p
							className={cn(
								"text-md text-gray-400",
								noto_sans_jp_400.className
							)}
						>
							{createdAt}
						</p>
					</div>
					<Separator />
				</div>
				<div
					className={cn(
						noto_sans_jp_400.className,
						"py-10 px-3 prose w-full max-w-full"
					)}
				>
					{element}
				</div>
			</div>
		</div>
	);
};

export default page;
