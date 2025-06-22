import Features from "@/src/app/components/Features";
import Greet from "@/src/app/components/Greet";
import Threads from "@/src/app/components/Threads";

export default function Home() {
  return (
      <main>
        <div style={{ width: '100%', height: '480px', position: 'absolute' }}>
            <Threads
                amplitude={2}
                distance={1}
                enableMouseInteraction={true}
            />
        </div>
        <Greet/>
        <Features/>
      </main>
  );
}
