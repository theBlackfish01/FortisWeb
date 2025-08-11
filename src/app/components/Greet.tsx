import GradientText from "@/src/app/components/GradientText";
import { Orbitron } from "next/font/google";

const orbitron = Orbitron({
    subsets: ["latin"],
    weight: ["400", "700", "900"],
});

export default function Greet() {
    return (
        <section className="flex flex-col-reverse md:flex-row items-center md:items-start justify-between md:justify-start gap-8 px-6 py-12 mx-auto max-w-9xl md:h-[600px]">
            <div className="flex-1 w-full space-y-4">
                <p className={`block uppercase text-white ${orbitron.className} tracking-[0.2em] text-2xl sm:text-3xl md:text-6xl`}>
                    YOUR PORTFOLIO
                </p>

                <GradientText
                    colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
                    animationSpeed={5}
                    showBorder={false}
                    className={`${orbitron.className} custom-class w-full text-left leading-none tracking-tight
                      text-5xl sm:text-7xl md:text-9xl xl:text-[11rem]`}
                >
                    REIMAGINED
                </GradientText>
            </div>
        </section>
    );
}
