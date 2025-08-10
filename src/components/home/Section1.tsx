import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Column from "@/components/core/Column";
import ConstrainedBox from "@/components/core/constrained-box";
import ResponsiveBox from "@/components/core/ResponsiveBox";
import Row from "@/components/core/Row";
import { FlipWords } from "@/components/common/FlipWords";
import socialLinks from "@/data/socialLinks";
import TalkButton from "./ui/TalkButton";
import ResumeButton from "./ui/ResumeButton";

const HomeSection1 = ({ id }: Readonly<{ id: string }>) => {
  return (
    <ResponsiveBox
      // classNames="dark:bg-[var(--bgColor)] bg-[var(--bgColor)] dark:bg-grid-white/[0.1] bg-grid-white/[0.1] min-h-screen items-center justify-center relative overflow-hidden rounded-md"
      classNames="min-h-screen items-center justify-center relative overflow-hidden rounded-md"
      id={id}
    >
      <ConstrainedBox classNames="px-4 py-8 pt-16 z-20 items-center justify-center">
        <Row classNames="w-full flex-col-reverse lg:flex-row items-center lg:items-start justify-between gap-10 max-w-[1300px] m-auto">
          {/* Left Side - Text */}
          <Column classNames="flex-1 items-center lg:items-start justify-center">
            {/* Greeting */}
            <p className="text-lg sm:text-xl md:text-2xl dark:text-[var(--textColorLight)] text-[var(--textColorLight)]">
              Hello, I’m
            </p>

            {/* Name */}
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[var(--textColor)] dark:text-[var(--textColor)] mt-2">
              Hussain Zaidi
            </h1>

            {/* Roles with flip animation */}
            <FlipWords
              words={[
                "Full Stack Developer",
                "PHP Developer",
                "Software Developer",
                "Problem Solver"
              ]}
              className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-[var(--primaryColor)] dark:text-[var(--primaryColor)] mt-4"
            />

            {/* Short tagline */}
            <p className="text-sm md:text-base text-center lg:text-left max-w-xl mt-3 text-[var(--textColorLight)] dark:text-[var(--textColorLight)]">
              I design and build scalable, high-performance web applications
              using Laravel, React.js, Next.js, and Node.js.
            </p>

            {/* Buttons */}
            <div className="gap-4 mt-10 flex flex-col md:flex-row">
              <TalkButton />
              <ResumeButton />
            </div>
          </Column>

          {/* Right Side - Profile Photo */}
          <div className="flex-1 flex justify-center lg:justify-end">
            <div className="w-48 h-48 sm:w-60 sm:h-60 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-[var(--primaryColor)] shadow-lg">
              <img
                src="/profile.jpeg" // <-- Replace with your actual image path in public/
                alt="Hussain Zaidi"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </Row>
      </ConstrainedBox>
    </ResponsiveBox>
  );
};

export default HomeSection1;
