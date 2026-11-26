type Project = {
	title: string;
	type: string;
	description: string;
	technologies: string[];
	highlights: string[];
	stats?: {
		value: string;
		label: string;
	}[];
	links?: {
		label: string;
		href: string;
	}[];
};

const projects: Project[] = [
	{
		title: "PropertyHaven",
		type: "Personal Project",
		description:
			"A full-stack real estate platform for discovering, posting, and managing property listings.",
		technologies: ["Next.js", "React", "Tailwind", "MongoDB", "NextAuth"],
		highlights: [
			"Property listing, search, and management",
			"Email/password and Google authentication",
			"REST APIs and cloud image storage",
		],
		links: [],
	},
	{
		title: "Fabrik",
		type: "Personal Project",
		description:
			"A full-stack e-commerce platform with product management, payments, orders, and an administrative dashboard.",
		technologies: [
			"Next.js",
			"React",
			"PostgreSQL",
			"Prisma",
			"Shadcn/UI",
			"Jest",
		],
		highlights: [
			"Product, cart, and order management",
			"Stripe, PayPal, and cash-on-delivery payments",
			"Admin dashboard and automated testing",
		],
		links: [],
	},
	{
		title: "LTE / 5G Frequency Scanner",
		type: "Professional Project · Digica",
		description:
			"A full-stack on-premises application for LTE and 5G frequency scanning and analysis. Details are limited due to the proprietary nature of the project.",
		technologies: [
			".NET",
			"C#",
			"React",
			"TypeScript",
			"RabbitMQ",
			"SignalR",
			"gRPC",
			"Docker",
			"MSSQL",
			"PostgreSQL",
			"EF",
		],
		highlights: [
			"Developed complex backend state machines for managing scanning states.",
			"Implemented a gRPC client that improved scanning workflow speed by over 250%.",
			"Built licensing and security systems for the application.",
			"Leveraged RabbitMQ for communication between backend microservices.",
			"Optimized and operated production databases.",
		],
		stats: [
			{
				value: "+250%",
				label: "workflow speed",
			},
		],
	},
];

const PersonalProject = ({ project }: { project: Project }) => {
	const links = project.links ?? [];

	return (
		<article className="group relative flex h-full flex-col border border-[#c73d7b]/30 bg-black/25 p-6">
			<div className="mb-5 flex items-center justify-between">
				<span className="pixel text-sm uppercase tracking-widest text-[#fa2f8b]">
					{project.type}
				</span>

				{links.length > 0 && (
					<span
						aria-hidden="true"
						className="text-gray-400 transition-colors group-hover:text-[#c73d7b]"
					>
						↗
					</span>
				)}
			</div>

			<h3 className="pixel text-3xl font-bold text-white transition-colors group-hover:text-[#c73d7b]">
				{project.title}
			</h3>

			<p className="pixel mt-3 text-base leading-relaxed text-gray-300">
				{project.description}
			</p>

			<div className="mt-5 flex flex-wrap gap-x-3 gap-y-2">
				{project.technologies.map((technology) => (
					<span
						key={technology}
						className="pixel text-sm text-gray-400"
					>
						{technology}
					</span>
				))}
			</div>

			<ul className="mt-5 flex flex-col gap-2 border-t border-white/10 pt-5">
				{project.highlights.map((highlight) => (
					<li
						key={highlight}
						className="pixel relative pl-4 text-sm leading-relaxed text-gray-300"
					>
						<span
							aria-hidden="true"
							className="absolute left-0 text-[#c73d7b]"
						>
							›
						</span>
						{highlight}
					</li>
				))}
			</ul>

			{/* Only show links that exist — no dead "View project" affordance. */}
			{links.length > 0 && (
				<div className="mt-auto flex flex-wrap gap-x-5 gap-y-2 pt-6">
					{links.map((link) => (
						<a
							key={link.href}
							href={link.href}
							target="_blank"
							rel="noreferrer noopener"
							className="pixel text-sm text-gray-400 transition-colors hover:text-[#c73d7b] focus-visible:text-[#c73d7b]"
						>
							{link.label} <span aria-hidden="true">→</span>
							<span className="sr-only">
								{" "}
								({project.title}, opens in a new tab)
							</span>
						</a>
					))}
				</div>
			)}
		</article>
	);
};

const ProfessionalProject = ({ project }: { project: Project }) => {
	return (
		<article className="relative overflow-hidden rounded-xl border border-[#c73d7b]/30 bg-[#c73d7b]/10 p-6 md:p-8">
			<div className="absolute right-0 top-0 h-32 w-32 translate-x-1/3 -translate-y-1/3 rounded-full bg-[#c73d7b]/10 blur-3xl" />

			<div className="relative grid gap-8 md:grid-cols-[1fr_auto]">
				<div>
					<div className="mb-3 flex flex-wrap items-center gap-3">
						<span className="pixel text-sm uppercase tracking-widest text-[#fa2f8b]">
							{project.type}
						</span>

						<span className="pixel text-sm text-gray-400">
							Confidential
						</span>
					</div>

					<h3 className="pixel text-3xl font-bold text-white md:text-3xl">
						{project.title}
					</h3>

					<p className="pixel mt-3 max-w-3xl text-lg leading-relaxed text-gray-300">
						{project.description}
					</p>

					<div className="mt-5 flex flex-wrap gap-2">
						{project.technologies.map((technology) => (
							<span
								key={technology}
								className="pixel border border-white/10 bg-black/20 px-2 py-1 text-sm text-gray-300"
							>
								{technology}
							</span>
						))}
					</div>
				</div>

				{project.stats?.map((stat) => (
					<div
						key={stat.label}
						className="flex flex-col justify-center border-l border-[#c73d7b]/20 pl-8 md:min-w-32"
					>
						<span className="pixel text-4xl font-bold text-[#c73d7b]">
							{stat.value}
						</span>

						<span className="pixel mt-1 text-sm uppercase tracking-wider text-gray-400">
							{stat.label}
						</span>
					</div>
				))}
			</div>

			<ul className="relative mt-7 grid gap-3 border-t border-white/10 pt-6 md:grid-cols-2">
				{project.highlights.map((highlight) => (
					<li
						key={highlight}
						className="pixel flex gap-3 text-sm leading-relaxed text-gray-300"
					>
						<span aria-hidden="true" className="text-[#c73d7b]">
							›
						</span>
						{highlight}
					</li>
				))}
			</ul>
		</article>
	);
};

const Projects = () => {
	const personalProjects = projects.filter(
		(project) => project.type === "Personal Project",
	);

	const professionalProject = projects.find((project) =>
		project.type.includes("Professional"),
	);

	return (
		<section id="projects" className="mt-24 w-full">
			<div className="mb-10">
				<h2 className="pixel text-5xl font-semibold text-white">
					Projects
				</h2>

				<p className="pixel mt-1 text-lg text-gray-400">
					Things I've built across the stack.
				</p>
			</div>

			{/* Personal projects */}
			<div className="w-full lg:w-3/4 mx-auto">
				<div className="grid gap-x-12 gap-y-8 md:grid-cols-2">
					{personalProjects.map((project) => (
						<PersonalProject
							key={project.title}
							project={project}
						/>
					))}
				</div>

				{/* Professional project */}
				{professionalProject && (
					<div className="relative mt-8 flex justify-center">
						<div className="w-full md:w-[72%]">
							<ProfessionalProject
								project={professionalProject}
							/>
						</div>
					</div>
				)}
			</div>
		</section>
	);
};

export default Projects;
