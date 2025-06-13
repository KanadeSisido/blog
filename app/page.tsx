import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
} from "@/components/ui/carousel";
import { Post } from "@/types/types";
import TipsCard from "@/components/TipsCard";
import PostCard from "@/components/PostCard";
import { noto_sans_jp_300, noto_sans_jp_500 } from "@/lib/fonts";
import { fetchAllBlog, fetchAllRecommend } from "@/lib/fetch";

export default async function Home() {
	const blogs = await fetchAllBlog();
	const recommends = await fetchAllRecommend();

	return (
		<div className='flex flex-col px-7 lg:px-32 gap-4'>
			<div className='w-full flex flex-col items-center gap-4 py-24'>
				<h1
					className={cn(
						noto_sans_jp_500.className,
						"text-4xl",
						"tracking-wide"
					)}
				>
					適当情報科学生のBlog
				</h1>
				<p
					className={cn(
						noto_sans_jp_300.className,
						"text-sm",
						"tracking-wider"
					)}
				>
					日常の話メインです．たまに技術の話もしたいと思ってます
				</p>
				<Button>
					<Link href='/blog'>ブログへ</Link>
				</Button>
			</div>
			<Separator />
			<div className='w-full flex flex-col'>
				<div className='px-3'>
					<div className='flex items-center gap-5'>
						<Link
							href='/blog'
							className={cn(
								noto_sans_jp_500.className,
								"text-2xl active:text-gray-700 active:underline"
							)}
						>
							Blog
						</Link>
						<p
							className={cn(
								noto_sans_jp_300.className,
								"text-xs mt-1 text-gray-400"
							)}
						>
							普通のブログです
						</p>
					</div>
					<div className='lg:px-12 py-12'>
						<Carousel
							opts={{
								align: "start",
							}}
						>
							<CarouselContent className=''>
								{blogs.map((blog: Post, key: number) => (
									<CarouselItem
										key={key}
										className='basis-[calc(100vw-96px)] lg:basis-[450px] mr-4'
									>
										<div>
											<PostCard href={`/blog/${blog.id}`} detail={blog} />
										</div>
									</CarouselItem>
								))}
							</CarouselContent>
						</Carousel>
					</div>
				</div>
				<div className='px-3'>
					<div className='flex items-center gap-5'>
						<Link
							href='/recommend'
							className={cn(
								noto_sans_jp_500.className,
								"text-2xl active:text-gray-700 active:underline"
							)}
						>
							Recommend
						</Link>
						<p
							className={cn(
								noto_sans_jp_300.className,
								"text-xs mt-1 text-gray-400"
							)}
						>
							やってよかったこと
						</p>
					</div>
					<div className='lg:px-12 py-12'>
						<Carousel
							opts={{
								align: "start",
							}}
						>
							<CarouselContent className=''>
								{recommends.map((recommend: Post, key: number) => (
									<CarouselItem
										key={key}
										className='basis-[calc(100vw-96px)] lg:basis-[450px] mr-4'
									>
										<div>
											<TipsCard detail={recommend} key={key} />
										</div>
									</CarouselItem>
								))}
							</CarouselContent>
						</Carousel>
					</div>
				</div>
			</div>
		</div>
	);
}
