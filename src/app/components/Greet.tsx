import Link from "next/link";
import Image from "next/image";
import HomeImage from "@/public/temp.jpg";

export default function Greet() {
    return (
        <section className="flex flex-col-reverse items-center justify-between gap-8 px-6 py-12 mx-auto md:flex-row max-w-7xl ">
            <div className="flex-1 space-y-6">
                <p className="hidden text-sm text-gray-600 uppercase md:block">
                    Your go-to platform for Portfolio Management
                </p>
                <h1 className="text-4xl font-bold md:text-5xl">
                    Discover what&#39;s possible with ML based trading
                </h1>
                <p className="text-lg text-gray-600">
                    Join our community of investors and explore a vast
                    library of features and tools to help you make the right decisions.
                </p>

                <div className="flex gap-4">
                    <Link
                        href="/about"
                        className="px-6 py-3 bg-white text-black border-2 border-black transition duration-100 hover:bg-black hover:text-white"
                    >
                        Contact Us
                    </Link>
                </div>
            </div>

            <div className="flex-1">
                <Image
                    src={HomeImage}
                    alt="FC preview"
                    width={HomeImage.width}
                    height={HomeImage.height}
                    className="w-[550px] h-auto rounded-lg"
                    priority
                />
            </div>
        </section>
    )
}