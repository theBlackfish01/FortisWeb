import Greet from "@/src/app/components/Greet";
import Threads from "@/src/app/components/Threads";
import CompanyOverview from "@/src/app/components/CompanyOverview";

export default function Home() {
  return (
      <main>
        <div style={{ width: '100%', height: '100vh', position: 'absolute' }}>
            <Threads
                amplitude={2}
                distance={1}
                enableMouseInteraction={true}
            />
        </div>
          <div style={{ width: '100%', height: '100vh' }} className="flex flex-col items-center justify-center bg-transparent"><Greet/></div>
        <CompanyOverview/>
      </main>
  );
}
