import type { FormEvent } from "react";
import SplitFlapText from "../../../components/SplitFlapText";
import { CONTACT } from "../../siteConfig";
import "./Home.css";

const inputClassName =
	"w-full rounded-lg border border-gray-300 bg-black/60 px-3 py-2 text-sm text-white shadow-sm outline-none placeholder:text-gray-400 focus:border-[#c73d7b] focus:ring-1 focus:ring-[#c73d7b]";

const Home = () => {
	// No backend yet: compose the message in the visitor's email app.
	const handleContactFormSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		const data = new FormData(event.currentTarget);
		const name = String(data.get("name") ?? "").trim();
		const company = String(data.get("company") ?? "").trim();
		const message = String(data.get("message") ?? "").trim();

		const subject = `Portfolio contact from ${name}${company ? ` (${company})` : ""}`;
		window.location.href = `mailto:${CONTACT.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;
	};

	return (
		<div id="home" tabIndex={-1} className="w-fit h-fit outline-none">
			<ul className="hero-tags flex gap-5 text-xl pixel text-[hsl(333,55%,51%)]">
				<li className="bg-black/60 outline-2 outline-black/60 px-2 py-1 rounded-lg">
					FullStack
				</li>
				<li className="bg-black/60 outline-2 outline-black/60 px-2 py-1 rounded-lg">
					Web
				</li>
				<li className="bg-black/60 outline-2 outline-black/60 px-2 py-1 rounded-lg">
					Developer
				</li>
			</ul>
			<h1 className="font-bold text-7xl xl:text-9xl text-white micro-5">
				Przemek Kaczmarski
			</h1>
			<div className="flex gap-5 md:flex-row flex-col">
				<p className="text-3xl pixel text-white">I build</p>
				<SplitFlapText
					words={[
						"websites",
						"applications",
						"systems",
						"experiences",
					]}
					flipDuration={0.12}
					stagger={0.06}
					cycleDelay={2400}
					charset="alphanumeric"
					flipsPerChar={6}
					tileColor="#111"
					textColor="#c73d7b"
					tileRadius={0}
					gap={3}
					fontSize={32}
					loop
					padTo={11}
				/>
			</div>
			<section className="flex flex-col pt-4 pixel text-gray-400 text-shadow-lg text-shadow-black max-w-4xl">
				<p className="text-lg">
					I'm a Full-stack developer focused on building polished web
					experiences and reliable backend systems. <br /> I work
					primarily with .NET and React to create on-prem and SaaS
					projects, but enjoy working across the stack-from UI and
					APIs to databases, messaging, and infrastructure.
				</p>
			</section>
			<section
				aria-labelledby="contact-heading"
				className="flex flex-col mt-16 pb-12 max-w-5xl"
			>
				<h2
					id="contact-heading"
					className="text-xl pixel text-white font-semibold"
				>
					Interested in reaching out?
				</h2>

				<p className="pixel text-gray-400">
					Tell me a little about yourself and what you're working on.
				</p>

				<form
					onSubmit={handleContactFormSubmit}
					className="flex flex-col gap-3 pt-5 items-start w-full"
				>
					<div className="flex flex-col md:flex-row gap-3 w-full md:w-3/4">
						<label htmlFor="name" className="sr-only">
							Your name
						</label>
						<input
							type="text"
							id="name"
							name="name"
							autoComplete="name"
							required
							className={inputClassName}
							placeholder="Your name"
						/>

						<label htmlFor="company" className="sr-only">
							Company (optional)
						</label>
						<input
							type="text"
							id="company"
							name="company"
							autoComplete="organization"
							className={inputClassName}
							placeholder="Company (optional)"
						/>
					</div>

					<label htmlFor="message" className="sr-only">
						Message
					</label>
					<textarea
						id="message"
						name="message"
						required
						className={`${inputClassName} md:w-3/4 min-h-32 resize-y`}
						placeholder="Write something..."
					/>

					<button
						type="submit"
						className="rounded-lg bg-[#c73d7b] px-5 py-2 text-white cursor-pointer transition hover:brightness-110 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
					>
						Send via email
					</button>
				</form>
			</section>
		</div>
	);
};
export default Home;
