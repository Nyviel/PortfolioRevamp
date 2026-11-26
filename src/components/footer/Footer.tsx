import { CONTACT } from "../../siteConfig";
import { scrollToTarget } from "../smoothScroll/scroll";

const linkClassName =
	"transition-colors hover:text-[#c73d7b] focus-visible:text-[#c73d7b]";

const Footer = () => {
	const backToTop = () => {
		scrollToTarget(0);
		// Move keyboard focus back to the top too, not just the viewport.
		document.getElementById("home")?.focus({ preventScroll: true });
	};

	return (
		<footer className="mt-24 border-t border-white/10 py-8 px-[5%] relative">
			<div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
				<div>
					<p className="pixel text-lg text-white">
						Przemek Kaczmarski
					</p>

					<p className="pixel mt-1 text-sm text-gray-400">
						FullStack / Web / Developer
					</p>

					<button
						type="button"
						onClick={backToTop}
						className="pixel text-sm text-[#c73d7b] transition-colors cursor-pointer hover:text-white"
					>
						<span aria-hidden="true">↑ </span>Back to top
					</button>
				</div>

				<nav
					aria-label="Social links"
					className="flex items-center gap-5 pixel text-lg text-gray-400"
				>
					<a
						href={CONTACT.github}
						target="_blank"
						rel="noreferrer noopener"
						className={linkClassName}
					>
						GitHub <span aria-hidden="true">↗</span>
					</a>

					<a
						href={CONTACT.linkedin}
						target="_blank"
						rel="noreferrer noopener"
						className={linkClassName}
					>
						LinkedIn <span aria-hidden="true">↗</span>
					</a>

					<a href={`mailto:${CONTACT.email}`} className={linkClassName}>
						Email <span aria-hidden="true">↗</span>
					</a>
				</nav>

				<span className="pixel text-lg text-[#c73d7b]">
					© {new Date().getFullYear()}
				</span>
			</div>
		</footer>
	);
};

export default Footer;
