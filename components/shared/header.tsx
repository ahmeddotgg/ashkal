"use client";

import { cn } from "@/lib/utils";
import { Menu } from "lucide-react";
import { Tiny5 } from "next/font/google";
import { Button } from "../ui/button";
import { ThemeSwitcher } from "./theme-switcher";
import { Wrapper } from "./wrapper";

const tiny5 = Tiny5({
	weight: "400",
	subsets: ["latin"],
});

export function Header() {
	return (
		<nav className="top-0 z-50 fixed backdrop-blur-md py-4 border-b-2 w-full">
			<Wrapper className="flex justify-between items-center">
				<p
					className={cn(
						"font-bold text-3xl uppercase text-primary tracking-wide",
						tiny5.className,
					)}
				>
					ashkal
				</p>
				<ul className="hidden md:flex gap-3">
					<ThemeSwitcher />
					<Button>Start selling</Button>
				</ul>
				<Button className="md:hidden" variant="outline">
					<Menu />
				</Button>
			</Wrapper>
		</nav>
	);
}
