import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { format, formatDate } from "date-fns";
import { Badge } from "./ui/badge";
import { Post } from "@/types/types";
import { noto_sans_jp_400 } from "@/lib/fonts";

const TipsCard: React.FC<{ detail: Post }> = ({ detail }) => {
	const date = formatDate(detail.createdAt, "yyyy-MM-dd");

	return (
		<div className={"w-full "}>
			<Card className='w-full overflow-hidden py-6 '>
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
		</div>
	);
};

export default TipsCard;
