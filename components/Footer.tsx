import React from "react";
import { cn } from "@/lib/utils";
import { roboto_mono_400 } from "@/lib/fonts";

const Footer = () => {
	return (
		<div
			className={cn(
				roboto_mono_400.className,
				"w-full h-24 mt-24 flex justify-center items-center bg-gray-900 text-gray-200 text-sm"
			)}
		>
			Kanade Blog - Kanade Sisido 2025
		</div>
	);
};

export default Footer;
