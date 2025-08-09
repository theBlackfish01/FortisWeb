import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import { Brain, LineChart, FileText, Shield, PlugZap } from "lucide-react";

type Pillar = {
    icon: LucideIcon;
    title: string;
    body: string;
};

const PILLARS: Pillar[] = [
    {
        icon: Brain,
        title: "AI-native by design",
        body:
            "We build Large-Action Model workflows that turn forecasts, sentiment, and fundamentals into decisions you can actually take.",
    },
    {
        icon: LineChart,
        title: "Research-grade signals",
        body:
            "Time-series ML for price trajectories and NLP for event detection—continuously updated as markets move.",
    },
    {
        icon: FileText,
        title: "Explainability first",
        body:
            "Every recommendation is paired with a rationale and an audit-friendly trail. No black boxes.",
    },
    {
        icon: Shield,
        title: "Trust & security",
        body:
            "Least-privilege access, encryption in transit/at rest, and a clear compliance roadmap.",
    },
    {
        icon: PlugZap,
        title: "Built to integrate",
        body:
            "Web & mobile experiences now; broker plug-ins and API/white-label for platforms next.",
    },
];

function PillarCard({ icon: Icon, title, body }: Pillar) {
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

export default function CompanyOverview() {
    return (
        <section id="company" className="bg-white">
            <div className="mx-auto max-w-7xl px-6 py-16 md:py-24">
                {/* Intro */}
                <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-3 py-1 text-xs font-medium text-neutral-600">
            Fortis Capital
          </span>
                    <h2 className="mt-4 text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900">
                        Building the next generation of portfolio intelligence
                    </h2>
                    <p className="mt-3 text-neutral-700 leading-relaxed">
                        We’re a research-driven team focused on making market decisions{" "}
                        <strong>explainable, auditable, and actionable</strong>—for individuals and
                        financial platforms alike.
                    </p>

                    {/* CTAs */}
                    <div className="mt-6 flex flex-wrap gap-3">
                        <Link
                            href="/about"
                            className="inline-flex items-center justify-center rounded-xl bg-neutral-900 text-white px-4 py-2 text-sm font-semibold hover:bg-neutral-800"
                        >
                            Read our story
                        </Link>
                        <Link
                            href="/aegis"
                            className="inline-flex items-center justify-center rounded-xl border border-neutral-300 bg-white px-4 py-2 text-sm font-medium text-neutral-900 hover:bg-neutral-100"
                        >
                            Explore Aegis
                        </Link>
                        <Link
                            href="/products"
                            className="inline-flex items-center justify-center rounded-xl border border-neutral-300 bg-white px-4 py-2 text-sm font-medium text-neutral-900 hover:bg-neutral-100"
                        >
                            View all products
                        </Link>
                    </div>
                </div>

                {/* Pillars */}
                <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                    {PILLARS.map((p) => (
                        <PillarCard key={p.title} {...p} />
                    ))}
                </ul>

                {/* Small note */}
                <p className="mt-8 text-xs text-neutral-500">
                    Fortis Capital provides analytics and tooling. Nothing here is investment, legal,
                    tax, or accounting advice. Past performance does not guarantee future results.
                </p>
            </div>
        </section>
    );
}
