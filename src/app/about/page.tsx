import TeamCard from "@/src/app/components/TeamCard";
import AboutCompany from "@/src/app/components/AboutCompany";
import Careers from "@/src/app/components/Careers";

export default function About() {
    return (
        <>
            <div style={{ width: '100%', height: '100vh' }} className="flex flex-col items-center justify-center bg-white">
            <AboutCompany/>
            </div>
            <div id="team" style={{ width: '100%', height: '80vh' }} className="flex flex-col items-center justify-center bg-white">
                <TeamCard />
            </div>
            <Careers/>
        </>
    );
}
