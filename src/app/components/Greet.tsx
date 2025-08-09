import GradientText from "@/src/app/components/GradientText";

export default function Greet() {
    return (
        <section className="flex flex-col-reverse items-center justify-between gap-8 px-6 py-12 mx-auto md:flex-row max-w-7xl height-[600px]">
            <div className="flex-1 space-y-6">
                <p className="hidden text-6xl text-white uppercase md:block">
                    YOUR PORTFOLIO
                </p>
                <GradientText
                    colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
                    animationSpeed={3}
                    showBorder={false}
                    className="custom-class text-8xl"
                >
                    REIMAGINED
                </GradientText>
            </div>
        </section>
    )
}