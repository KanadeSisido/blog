import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Menu } from "lucide-react";

import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
	navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

import {
	Sheet,
	SheetContent,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { roboto_mono_400 } from "@/lib/fonts";

const Header = () => {
	return (
		<div className='flex justify-between items-center px-10 h-30 bg-white/60 backdrop-blur-lg border-b-2 border-b-gray-100'>
			<div className='flex items-center gap-7'>
				<Link href='/'>
					<Image src='/icon.svg' alt='icon' width={50} height={50}></Image>
				</Link>
				<h1 className={cn("text-xl", roboto_mono_400.className)}>Blog</h1>
			</div>
			<NavMenu className='hidden md:block' />
			<SideMenu className='block md:hidden' />
		</div>
	);
};

export default Header;

const NavMenu = ({ className }: { className: string }) => {
	return (
		<NavigationMenu viewport={false} className={className}>
			<NavigationMenuList>
				<NavigationMenuItem>
					<NavigationMenuLink asChild>
						<Link
							href='/blog'
							className={cn(
								navigationMenuTriggerStyle(),
								"active:text-gray-700 active:underline"
							)}
						>
							Blog
						</Link>
					</NavigationMenuLink>
				</NavigationMenuItem>

				<NavigationMenuItem>
					<NavigationMenuLink asChild>
						<Link
							href='/recommend'
							className={cn(
								navigationMenuTriggerStyle(),
								"active:text-gray-700 active:underline"
							)}
						>
							Recommend
						</Link>
					</NavigationMenuLink>
				</NavigationMenuItem>

				<NavigationMenuItem>
					<NavigationMenuTrigger className='this'>Link</NavigationMenuTrigger>
					<NavigationMenuContent>
						<ul className='flex flex-col w-20'>
							<MenuItem
								title='HP'
								href='https://www.yzuemx.com'
								detail='ホームページ'
							/>
							<MenuItem
								title='Portfolio'
								href='https://works.yzuemx.com'
								detail='ポートフォリオ'
							/>
							<MenuItem
								title='GitHub'
								href='https://github.com/KanadeSisido'
								detail=''
							/>
						</ul>
					</NavigationMenuContent>
				</NavigationMenuItem>
			</NavigationMenuList>
		</NavigationMenu>
	);
};

const MenuItem: React.FC<{
	href: string;
	title: string;
	detail: string;
}> = ({ href, title, detail }) => {
	return (
		<li>
			<NavigationMenuLink asChild>
				<Link href={href}>
					<div className='text-sm leading-none font-medium'>{title}</div>
					<p className='text-muted-foreground line-clamp-2 text-xs leading-snug'>
						{detail}
					</p>
				</Link>
			</NavigationMenuLink>
		</li>
	);
};

const SideMenu = ({ className }: { className: string }) => {
	return (
		<div className={className}>
			<Sheet>
				<SheetTrigger>
					<div className='hover:bg-gray-100 rounded-full p-3'>
						<Menu className='text-gray-700' width={30} height={30} />
					</div>
				</SheetTrigger>
				<SheetContent className='p-3'>
					<SheetHeader>
						<SheetTitle className='flex items-center gap-4'>
							<Link href='/'>
								<Image
									src='/icon.svg'
									alt='icon'
									width={30}
									height={30}
								></Image>
							</Link>
							<p className={roboto_mono_400.className}>Blog</p>
						</SheetTitle>
					</SheetHeader>
					<ul className='flex flex-col gap-4'>
						<li>
							<Link
								href='/blog'
								className={cn(navigationMenuTriggerStyle(), "text-xl")}
							>
								Blog
							</Link>
						</li>
						<li>
							<Link
								href='/recommend'
								className={cn(navigationMenuTriggerStyle(), "text-xl")}
							>
								Recommend
							</Link>
						</li>
						<li>
							<div
								className={cn(
									navigationMenuTriggerStyle(),
									"hover:bg-white text-xl"
								)}
							>
								Link
							</div>
							<ul className='flex flex-col gap-2 pl-3 pt-2'>
								<li>
									<Link
										href='https://www.yzuemx.com'
										className={navigationMenuTriggerStyle()}
									>
										HP
									</Link>
								</li>
								<li>
									<Link
										href='https://works.yzuemx.com'
										className={navigationMenuTriggerStyle()}
									>
										Portfolio
									</Link>
								</li>
								<li>
									<Link
										href='https://github.com/KanadeSisido'
										className={navigationMenuTriggerStyle()}
									>
										GitHub
									</Link>
								</li>
							</ul>
						</li>
					</ul>
				</SheetContent>
			</Sheet>
		</div>
	);
};
