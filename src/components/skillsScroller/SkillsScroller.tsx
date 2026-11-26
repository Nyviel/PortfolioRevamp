import LogoLoop from "../../../components/LogoLoop";
import {
	SiDotnet,
	SiSharp,
	SiPostgresql,
	SiRabbitmq,
	SiReact,
	SiJavascript,
	SiTypescript,
	SiNodedotjs,
	SiNextdotjs,
	SiAngular,
	SiReactivex,
	SiRedux,
	SiGit,
	SiDocker,
	SiClaude,
	SiHtml5,
	SiCss,
} from "react-icons/si";

const techLogos = [
	{ node: <SiDotnet />, title: ".NET" },
	{ node: <SiSharp />, title: "C#" },
	{ node: <SiPostgresql />, title: "PostgreSQL" },
	{ node: <SiRabbitmq />, title: "RabbitMQ" },

	{ node: <SiReact />, title: "React" },
	{ node: <SiJavascript />, title: "JavaScript" },
	{ node: <SiTypescript />, title: "TypeScript" },
	{ node: <SiNodedotjs />, title: "Node.js" },
	{ node: <SiNextdotjs />, title: "Next.js" },
	{ node: <SiAngular />, title: "Angular" },
	{ node: <SiReactivex />, title: "RxJS" },
	{ node: <SiRedux />, title: "Redux" },

	{ node: <SiHtml5 />, title: "HTML5" },
	{ node: <SiCss />, title: "CSS3" },

	{ node: <SiGit />, title: "Git" },
	{ node: <SiDocker />, title: "Docker" },
	{ node: <SiClaude />, title: "Claude Code" },
];

const SkillsScroller = ({ className }: { className?: string }) => {
	return (
		<LogoLoop
			logos={techLogos}
			speed={90}
			direction="left"
			logoHeight={36}
			gap={48}
			hoverSpeed={0}
			scaleOnHover
			fadeOut
			fadeOutColor="#222"
			className={className}
			ariaLabel="Technology stack"
		/>
	);
};

export default SkillsScroller;
