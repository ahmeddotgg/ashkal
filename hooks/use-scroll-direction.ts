import { useEffect, useState } from "react";

export function useScrollDirection(threshold = 100) {
	const [scrollDir, setScrollDir] = useState<"up" | "down">("up");
	const [scrolled, setScrolled] = useState(false);

	useEffect(() => {
		let lastScrollY = window.scrollY;
		let ticking = false;

		const updateScroll = () => {
			const currentScrollY = window.scrollY;

			// Only update `scrolled` if crossing threshold
			setScrolled(currentScrollY > threshold);

			if (Math.abs(currentScrollY - lastScrollY) < 5) {
				ticking = false;
				return;
			}

			setScrollDir(currentScrollY > lastScrollY ? "down" : "up");
			lastScrollY = currentScrollY > 0 ? currentScrollY : 0;
			ticking = false;
		};

		const onScroll = () => {
			if (!ticking) {
				window.requestAnimationFrame(updateScroll);
				ticking = true;
			}
		};

		window.addEventListener("scroll", onScroll);
		return () => window.removeEventListener("scroll", onScroll);
	}, [threshold]);

	return { scrollDir, scrolled };
}
