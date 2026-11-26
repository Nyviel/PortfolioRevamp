import { useEffect } from "react";
import Lenis from "lenis";
import { prefersReducedMotion, setLenis } from "./scroll";

export default function SmoothScroll() {
	useEffect(() => {
		// Respect the OS setting: no scroll smoothing for reduced-motion users.
		if (prefersReducedMotion()) return;

		const lenis = new Lenis({
			duration: 1.5,
			smoothWheel: true,
			syncTouch: true,
			// Lenis owns the rAF loop, so destroy() reliably stops it.
			autoRaf: true,
		});
		setLenis(lenis);

		return () => {
			setLenis(null);
			lenis.destroy();
		};
	}, []);

	return null;
}
