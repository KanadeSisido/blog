import { Button } from "@/components/ui/button";
import { noto_sans_jp_300, noto_sans_jp_500 } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

const Notfound = () => {
	return (
		<div
			className={cn(
				noto_sans_jp_500.className,
				"h-[80vh] flex justify-center items-center"
			)}
		>
			<div className='flex flex-col items-center'>
				<h1 className='text-5xl tracking-wider mb-4'>404 Not Found</h1>
				<p className={cn(noto_sans_jp_300.className, "mb-7 tracking-wider")}>
					お探しのページは見つかりませんでした
				</p>
				<Button>
					<Link href='/'>トップへ</Link>
				</Button>
			</div>
		</div>
	);
};

export default Notfound;
