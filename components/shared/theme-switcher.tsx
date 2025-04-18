"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "../ui/button";

export default function ThemeSwitcher() {
	const { setTheme, resolvedTheme } = useTheme();

	return (
		<Button
			variant="outline"
			onClick={() =>
				resolvedTheme === "dark" ? setTheme("light") : setTheme("dark")
			}
			aria-label="Toggle theme"
		>
			<Sun className="size-5 rotate-0 dark:-rotate-90 scale-100 dark:scale-0 !transition-all" />
			<Moon className="absolute size-5 rotate-90 dark:rotate-0 scale-0 dark:scale-100 !transition-all" />
		</Button>
	);
}
