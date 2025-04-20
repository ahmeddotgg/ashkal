"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "../ui/button";

export function ThemeSwitcher() {
	const { setTheme, resolvedTheme } = useTheme();

	return (
		<Button
			variant="outline"
			onClick={() =>
				resolvedTheme === "dark" ? setTheme("light") : setTheme("dark")
			}
			aria-label="Toggle theme"
			className="rounded-sm"
		>
			<Sun className="rotate-0 dark:-rotate-90 scale-100 dark:scale-0 !transition-all" />
			<Moon className="absolute rotate-90 dark:rotate-0 scale-0 dark:scale-100 !transition-all" />
		</Button>
	);
}
