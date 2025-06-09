import { noto_sans_jp_300, noto_sans_jp_500 } from "@/lib/fonts";
import { cn } from "@/lib/utils";

// app/blog/loading.tsx
export default function Loading() {
	return (
		<div
			className={cn(
				noto_sans_jp_500.className,
				"h-[80vh] flex justify-center items-center"
			)}
		>
			<div className='flex flex-col items-center'>
				<h1 className='text-5xl tracking-wider mb-4 text-gray-400'>
					Loading ...
				</h1>
				<p
					className={cn(
						noto_sans_jp_300.className,
						"mb-7 tracking-wider text-gray-300"
					)}
				>
					読み込み中 ...
				</p>
			</div>
		</div>
	);
}
