import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { formatDate } from "date-fns";
import Image from "next/image";
import { Badge } from "./ui/badge";
import { Post } from "@/types/types";
import { noto_sans_jp_400 } from "@/lib/fonts";

const PostCard: React.FC<{ href: string; detail: Post }> = ({
	href,
	detail,
}) => {
	const date = formatDate(detail.createdAt, "yyyy-MM-dd");
	return (
		<div className='w-full h-full'>
			<Link href={href}>
				<Card className='w-full pt-0 overflow-hidden'>
					{detail.img ? (
						<Image
							src={detail.img}
							alt='thumbNail'
							width={200}
							height={216}
							className='w-full h-54 object-cover'
						></Image>
					) : (
						<div className='dummy-image w-full h-54 bg-pink-600'></div>
					)}
					<CardHeader>
						<CardTitle className='text-2xl truncate'>{detail.title}</CardTitle>
						<div className='flex items-center'>
							{detail.tag && (
								<Badge variant='secondary' className='mr-2'>
									{detail.tag}
								</Badge>
							)}
							<p className='text-muted-foreground text-sm'>{date}</p>
						</div>
					</CardHeader>
					<CardContent className={noto_sans_jp_400.className}>
						<p className='text-sm truncate text-gray-400'>{detail.summary}</p>
					</CardContent>
				</Card>
			</Link>
		</div>
	);
};

export default PostCard;
