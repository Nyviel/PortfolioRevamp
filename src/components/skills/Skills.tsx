import BorderGlow from "../../../components/BorderGlow";
type Skill = {
	number: string;
	title: string;
	description: string;
	technologies: string[];
};

const skills: Skill[] = [
	{
		number: "01",
		title: "Architecture",
		description:
			"Designing maintainable full-stack systems with clear boundaries, sensible abstractions, and architecture that can evolve with the product.",
		technologies: [
			".NET",
			"Microservices",
			"State Machines",
			"gRPC",
			"RabbitMQ",
		],
	},
	{
		number: "02",
		title: "Backend Engineering",
		description:
			"Building reliable APIs and backend services with complex business logic, asynchronous communication, real-time systems, and persistent data.",
		technologies: ["C#", "ASP.NET", "EF", "SignalR", "MediatR"],
	},
	{
		number: "03",
		title: "Frontend Engineering",
		description:
			"Creating responsive, accessible interfaces with a focus on component architecture, maintainability, and a polished user experience.",
		technologies: ["React", "TypeScript", "Next.js", "Angular", "RxJS"],
	},
	{
		number: "04",
		title: "Security",
		description:
			"Treating security as part of the application architecture through authentication, authorization, licensing, and secure API design.",
		technologies: [
			"Authentication",
			"Authorization",
			"Licensing",
			"API Security",
		],
	},
	{
		number: "05",
		title: "Databases",
		description:
			"Working with relational databases from application-level data access to optimization and operations in production environments.",
		technologies: ["MSSQL", "PostgreSQL", "Entity Framework", "SQL"],
	},
	{
		number: "06",
		title: "Testing & Reliability",
		description:
			"Writing tests around critical functionality and using automated testing to make systems safer to change and easier to maintain.",
		technologies: ["NUnit", "Jest", "Unit Testing", "Integration Testing"],
	},
];

const SkillTile = ({ skill }: { skill: Skill }) => {
	return (
		<BorderGlow
			edgeSensitivity={30}
			glowColor="40 80 80"
			backgroundColor="#120F17"
			borderRadius={25}
			glowRadius={40}
			glowIntensity={1}
			coneSpread={25}
			animated={false}
			colors={["#c084fc", "#f472b6", "#38bdf8"]}
		>
			<article className="group relative rounded-2xl border border-white/10 bg-white/1.5 p-6 transition-colors duration-300 hover:border-[#c73d7b]/40 hover:bg-[#c73d7b]/2.5">
				<div className="flex items-start justify-between gap-4">
					<span className="pixel text-sm text-[#c73d7b]">
						{skill.number}
					</span>

					<span aria-hidden="true" className="pixel text-xs text-gray-700 transition-colors duration-300 group-hover:text-[#c73d7b]/60">
						+
					</span>
				</div>

				<h3 className="pixel mt-6 text-xl font-semibold text-white">
					{skill.title}
				</h3>

				<p className="pixel mt-3 text-base leading-6 text-gray-400">
					{skill.description}
				</p>

				<div className="mt-6 flex flex-wrap gap-x-3 gap-y-2 border-t border-white/10 pt-4">
					{skill.technologies.map((technology) => (
						<span
							key={technology}
							className="pixel text-xs text-gray-400 transition-colors group-hover:text-gray-300"
						>
							{technology}
						</span>
					))}
				</div>
			</article>
		</BorderGlow>
	);
};

const Skills = () => {
	return (
		<section id="skills" className="mt-24 max-w-full">
			<div className="mb-10">
				<h2 className="pixel text-5xl font-semibold text-white">
					Skills
				</h2>

				<p className="pixel mt-1 max-w-2xl text-gray-400">
					My approach to building software.
				</p>
			</div>

			<div className="grid gap-10 overflow-hidden md:grid-cols-3">
				{skills.map((skill) => (
					<SkillTile key={skill.number} skill={skill} />
				))}
			</div>
		</section>
	);
};

export default Skills;
