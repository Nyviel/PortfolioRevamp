import { useEffect, useRef, useState } from "react";
import OptionWheel from "../../../components/OptionWheel";
import { scrollToTarget } from "../smoothScroll/scroll";

const SECTIONS = ["Home", "Skills", "Experience", "Projects"];
const PANEL_ID = "section-wheel";
// Wait for the wheel to settle before scrolling, so spinning past several
// sections triggers one scroll instead of one per step.
const NAVIGATE_DELAY_MS = 250;

/** Index of the last section whose top has passed the upper third of the viewport. */
const getCurrentSectionIndex = () => {
	const probe = window.innerHeight / 3;
	let current = 0;
	SECTIONS.forEach((section, index) => {
		const element = document.getElementById(section.toLowerCase());
		if (element && element.getBoundingClientRect().top <= probe) {
			current = index;
		}
	});
	return current;
};

export default function OptionWheelButton() {
	const [open, setOpen] = useState(false);
	const [initialIndex, setInitialIndex] = useState(0);
	// Remounting the wheel on open makes it start at the section in view.
	const [wheelKey, setWheelKey] = useState(0);
	const navigateTimerRef = useRef<ReturnType<typeof setTimeout> | null>(
		null,
	);
	const toggleRef = useRef<HTMLButtonElement>(null);

	useEffect(
		() => () => {
			if (navigateTimerRef.current) clearTimeout(navigateTimerRef.current);
		},
		[],
	);

	const toggle = () => {
		if (!open) {
			setInitialIndex(getCurrentSectionIndex());
			setWheelKey((key) => key + 1);
		}
		setOpen((prev) => !prev);
	};

	const onOptionChange = (_: number, item: string) => {
		if (navigateTimerRef.current) clearTimeout(navigateTimerRef.current);
		navigateTimerRef.current = setTimeout(() => {
			const element = document.getElementById(item.toLowerCase());
			if (element) scrollToTarget(element);
		}, NAVIGATE_DELAY_MS);
	};

	const onPanelKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
		if (event.key === "Escape") {
			setOpen(false);
			toggleRef.current?.focus();
		}
	};

	return (
		<>
			<button
				ref={toggleRef}
				type="button"
				onClick={toggle}
				aria-label={
					open ? "Close section navigation" : "Open section navigation"
				}
				aria-expanded={open}
				aria-controls={PANEL_ID}
				className="
					fixed bottom-4 right-4 z-50
					md:bottom-auto md:right-10 md:top-1/2 md:-translate-y-1/2
					flex h-12 w-12
					items-center justify-center
					rounded-full
					border border-white
					bg-black/40
					text-pink-500
					backdrop-blur-sm
					transition-all duration-200
					hover:bg-white/10
					hover:text-white
					active:scale-95
					"
			>
				<span aria-hidden="true" className="text-lg leading-none">
					{open ? ">" : "<"}
				</span>
			</button>

			<div
				id={PANEL_ID}
				data-lenis-prevent
				// Hidden + inert while closed so the off-screen panel can't catch
				// wheel events at the screen edge or receive keyboard focus.
				inert={!open}
				onKeyDown={onPanelKeyDown}
				className={`
					fixed right-4 top-1/2 z-40
					md:right-10
					h-[min(37.5rem,80vh)] w-[min(26.25rem,calc(100vw-2rem))]
					-translate-y-1/2
					transition-[translate,visibility] duration-500 ease-out
					${open ? "visible translate-x-0" : "invisible translate-x-full"}
				`}
			>
				<OptionWheel
					key={wheelKey}
					items={SECTIONS}
					defaultSelected={initialIndex}
					ariaLabel="Jump to section"
					textColor="#c73d7b"
					activeColor="#fff"
					side="right"
					fontSize={3}
					spacing={1.5}
					curve={1}
					tilt={6}
					blur={2}
					fade={0.25}
					smoothing={200}
					inset={80}
					loop={false}
					soundUrl="/sounds/click-soft.mp3"
					onChange={onOptionChange}
					soundVolume={1}
					draggable
				/>
			</div>
		</>
	);
}
