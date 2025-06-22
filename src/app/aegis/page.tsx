import Image from "next/image";
import AegisLogo from "@/public/AegisLogo.png";
export default function AegisPage() {
    return (
        <div className="relative mx-auto flex items-center justify-center px-6 py-3">
            <Image src={AegisLogo} alt="Dashboard" width={1000} height={1000}/>
        </div>
    );
}
