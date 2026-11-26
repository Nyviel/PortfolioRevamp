type ExperienceItem = {
	role: string;
	company: string;
	period: string;
	technologies: string[];
	highlights: string[];
};

const experiences: ExperienceItem[] = [
	{
		role: "Full-Stack Engineer",
		company: "Digica",
		period: "Aug 2025 — Present",
		technologies: [
			".NET",
			"C#",
			"ASP.NET",
			"React",
			"TypeScript",
			"RabbitMQ",
			"SignalR",
			"Docker",
			"MSSQL",
			"PostgreSQL",
			"EF",
		],
		highlights: [
			"Developed a novel full-stack on-premises LTE and 5G frequency scanning application.",
			"Improved scanning workflow speed by over 250% by implementing a gRPC client.",
			"Created complex backend state machines for managing various scanning states.",
			"Developed licensing and security systems to ensure application security.",
			"Maintained and enhanced production projects.",
			"Optimized and performed operations on production databases.",
			"Leveraged RabbitMQ for fast and reliable communication between backend microservices.",
		],
	},
	{
		role: "Junior Front-End Developer",
		company: "Comarch SA",
		period: "Jun 2021 — Dec 2021",
		technologies: [
			"Angular",
			"RxJS",
			"JavaScript",
			"TypeScript",
			"HTML5",
			"CSS3",
			"Docker",
			"PostgreSQL",
		],
		highlights: [
			"Developed a completely new user interface for a government project, improving visual quality and accessibility.",
			"Spearheaded the front-end development of Geo-integrator, a 2.5D GIS mapping tool.",
			"Optimized high-contrast designs to meet accessibility standards.",
			"Collaborated with designers to transform mockups into functional Angular views.",
			"Maintained legacy code and implemented bug fixes for the Central Office of Measures project.",
			"Developed and consumed REST APIs within Dockerized environments.",
			"Gained exposure to backend development with Spring Boot and DevOps workflows.",
			"Collaborated in Agile workflows including code reviews, debugging sessions, and daily stand-ups.",
		],
	},
];

const Experience = () => {
	return (
		<section id="experience" className="mt-24 max-w-5xl">
			<div className="mb-10">
				<h2 className="pixel text-5xl font-semibold text-white">
					Experience
				</h2>

				<p className="pixel mt-1 text-lg text-gray-400">
					Building software across the stack.
				</p>
			</div>

			<div className="flex flex-col gap-8">
				{experiences.map((experience) => (
					<article
						key={`${experience.company}-${experience.role}`}
						className="group relative border-l border-[#c73d7b]/40 bg-black/30 p-6 rounded-lg"
					>
						<div aria-hidden="true" className="absolute -left-1.25 top-1.5 h-2.5 w-2.5 rounded-full bg-[#c73d7b] shadow-[0_0_10px_#c73d7b]" />

						<div className="flex flex-col gap-5">
							<header>
								<div className="flex flex-col gap-1 md:flex-row md:items-baseline md:justify-between">
									<div>
										<h3 className="micro-5 text-4xl font-semibold text-white">
											{experience.role}
										</h3>

										<p className="pixel text-[#c73d7b]">
											{experience.company}
										</p>
									</div>

									<span className="pixel text-sm text-gray-400">
										{experience.period}
									</span>
								</div>
							</header>

							<div className="flex flex-wrap gap-2">
								{experience.technologies.map((technology) => (
									<span
										key={technology}
										className="pixel border border-[#c73d7b]/30 bg-white/3 px-2 py-1 text-xs text-gray-400 transition-colors group-hover:border-[#c73d7b] group-hover:text-gray-300"
									>
										{technology}
									</span>
								))}
							</div>

							<ul className="flex flex-col gap-2">
								{experience.highlights.map((highlight) => (
									<li
										key={highlight}
										className="pixel relative pl-4 text-sm leading-relaxed text-gray-300"
									>
										<span aria-hidden="true" className="absolute left-0 text-[#c73d7b]">
											›
										</span>
										{highlight}
									</li>
								))}
							</ul>
						</div>
					</article>
				))}
			</div>
		</section>
	);
};

export default Experience;
