// /src/app/components/AboutEssentials.tsx
import Link from "next/link";
import { Compass, Scale, Lock } from "lucide-react";

type Principle = {
    icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
    title: string;
    body: string;
};

const PRINCIPLES: Principle[] = [
    {
        icon: Compass,
        title: "Clarity over complexity",
        body:
            "Markets are noisy. We translate signals into plain language and concrete next steps.",
    },
    {
        icon: Scale,
        title: "Evidence before intuition",
        body:
            "Time-series models and NLP are evaluated continuously—decisions reflect the data, not vibes.",
    },
    {
        icon: Lock,
        title: "Privacy by default",
        body:
            "Least-privilege access and transparent logs. Your portfolio data stays under your control.",
    },
];

function Pill({ icon: Icon, title, body }: Principle) {
    return (
        <li className="rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm">
            <div className="flex items-start gap-3">
        <span className="rounded-xl border border-neutral-200 p-2">
          <Icon className="h-5 w-5 text-neutral-800" aria-hidden />
        </span>
                <div>
                    <h3 className="font-semibold text-neutral-900">{title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-neutral-600">{body}</p>
                </div>
            </div>
        </li>
    );
}

export default function AboutCompany() {
    return (
        <section className="bg-white">
            <div className="mx-auto max-w-7xl px-6 py-16 md:py-20">
                {/* Intro */}
                <div className="max-w-3xl">
                    <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900">
                        A small team focused on explainable portfolio intelligence
                    </h1>
                    <p className="mt-3 text-neutral-700 leading-relaxed">
                        Fortis Capital is a research-driven studio building AI-native tooling for investors and platforms.
                        Our goal is simple: decisions that are <strong>usable, auditable, and trustworthy</strong>.
                    </p>

                    {/* CTAs */}
                    <div className="mt-6 flex flex-wrap gap-3">
                        <Link
                            href="#team"
                            className="inline-flex items-center justify-center rounded-xl bg-neutral-900 text-white px-4 py-2 text-sm font-semibold hover:bg-neutral-800"
                        >
                            Meet the team
                        </Link>
                        <Link
                            href="/products"
                            className="inline-flex items-center justify-center rounded-xl border border-neutral-300 bg-white px-4 py-2 text-sm font-medium text-neutral-900 hover:bg-neutral-100"
                        >
                            See products
                        </Link>
                    </div>
                </div>

                {/* Principles */}
                <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                    {PRINCIPLES.map((p) => (
                        <Pill key={p.title} {...p} />
                    ))}
                </ul>

                {/* Snapshot */}
                <div className="mt-12 grid gap-4 sm:grid-cols-3">
                    <div className="rounded-xl border border-neutral-200 bg-white p-4">
                        <div className="text-sm text-neutral-500">Status</div>
                        <div className="mt-1 font-semibold text-neutral-900">Private beta</div>
                    </div>
                    <div className="rounded-xl border border-neutral-200 bg-white p-4">
                        <div className="text-sm text-neutral-500">Focus</div>
                        <div className="mt-1 font-semibold text-neutral-900">Explainability & risk</div>
                    </div>
                    <div className="rounded-xl border border-neutral-200 bg-white p-4">
                        <div className="text-sm text-neutral-500">Mode</div>
                        <div className="mt-1 font-semibold text-neutral-900">Remote-first</div>
                    </div>
                </div>

                {/* Fine print */}
                <p className="mt-10 text-xs text-neutral-500">
                    Fortis Capital provides analytics and tooling. Nothing here is investment, legal, tax, or accounting advice. Past performance does not guarantee future results.
                </p>
            </div>
        </section>
    );
}
