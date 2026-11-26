import Home from "../home/Home";
import Projects from "../projects/Projects";
// import PixelSnow from "../../../components/PixelSnow";
import Topography from "../../../components/Topography";
import "./App.css";
import SmoothScroll from "../smoothScroll/SmoothScroll";
import OptionWheelButton from "../optionWheel/OptionWheelButton";
import SkillsScroller from "../skillsScroller/SkillsScroller";
import Experience from "../experience/Experience";
import Skills from "../skills/Skills";
import Footer from "../footer/Footer";

function App() {
	return (
		<>
			<SmoothScroll />

			<div className="relative min-h-screen bg-mist-900">
				<Topography
					lowColor="#5227FF"
					midColor="#c73d7b"
					highColor="#3f000f"
					speed={0.091}
					morphAmount={3.1}
					morphSpeed={0.03}
					bands={1.3}
					thickness={0.03}
					scale={2.25}
					pixelSize={5}
					glow={1.5}
					colorMode="alternating"
					contrast={2.75}
					brightness={0.35}
					fillBands
					opacity={1}
					grain
					grainIntensity={0.06}
					mouseInteraction
					mouseRadius={0.3}
					mouseStrength={0.5}
				/>
				<OptionWheelButton />
				<main className="relative p-[5%]">
					<Home />
					<SkillsScroller className=" text-gray-400" />
					<Skills />
					<Experience />
					<Projects />
				</main>
				<Footer />
			</div>
		</>
	);
}

export default App;
