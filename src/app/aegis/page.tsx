import Image from 'next/image';
import AegisLogo from '@/public/AegisLogo.png';
import Newsletter from '@/src/app/components/Newsletter';
import Features from '@/src/app/components/Features';
import Pricing from '@/src/app/components/Pricing';

export const metadata = {
    title: 'Fortis Aegis — Portfolio Command Center',
    description:
        'An AI-native portfolio command center that turns forecasts, sentiment, and fundamentals into explainable, actionable moves.',
};

export default function AegisPage() {
    return (
        <main className="bg-white text-black">
            {/* Hero */}
            <section className="relative mx-auto max-w-7xl px-6 py-16 md:py-24">
                <div className="grid md:grid-cols-2 gap-10 items-center">
                    <div>
                        <div className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-3 py-1 text-xs font-medium">
                            <span className="inline-block h-2 w-2 rounded-full bg-emerald-500" />
                            Private beta
                        </div>
                        <h1 className="mt-4 text-4xl sm:text-5xl font-bold tracking-tight">
                            Fortis Aegis
                            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-sky-500 to-emerald-500">
                Your portfolio command center
              </span>
                        </h1>
                        <p className="mt-4 text-neutral-700 leading-relaxed">
                            Fuse forecasts, real-time sentiment, and fundamentals into clear,
                            explainable actions—what to do, why, and how much.
                        </p>

                        <div id="waitlist" className="mt-8">
                            <Newsletter />
                            <p className="mt-3 text-xs text-neutral-500">
                                Join the waitlist for early access and updates.
                            </p>
                        </div>
                    </div>

                    <div className="relative">
                        <div className="absolute -inset-4 -z-10 rounded-3xl bg-gradient-to-tr from-indigo-200 via-sky-200 to-emerald-200 blur-2xl opacity-60" />
                        <Image
                            src={AegisLogo}
                            alt="Fortis Aegis"
                            className="w-full h-auto rounded-2xl border border-neutral-200 shadow-md"
                            priority
                        />
                    </div>
                </div>
            </section>

            <Features />

            <Pricing />
        </main>
    );
}
