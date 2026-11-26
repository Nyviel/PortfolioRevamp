import type Lenis from "lenis";

let lenisInstance: Lenis | null = null;

export const setLenis = (instance: Lenis | null) => {
	lenisInstance = instance;
};

export const prefersReducedMotion = () =>
	typeof window !== "undefined" &&
	window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/**
 * Scrolls through Lenis when it is running, so programmatic scrolls don't fight
 * its smoothing. Falls back to native scrolling (instant if reduced motion).
 */
export function scrollToTarget(target: HTMLElement | number) {
	if (lenisInstance) {
		lenisInstance.scrollTo(target);
		return;
	}

	const behavior: ScrollBehavior = prefersReducedMotion() ? "auto" : "smooth";
	if (typeof target === "number") {
		window.scrollTo({ top: target, behavior });
	} else {
		target.scrollIntoView({ behavior });
	}
}
