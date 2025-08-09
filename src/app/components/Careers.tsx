// /src/app/components/CareersSection.tsx
import Link from "next/link";
import { Briefcase, Mail, Code2, LineChart, Palette } from "lucide-react";

function Dept({
                  title,
                  tags = [],
              }: {
    title: string;
    tags?: string[];
}) {
    return (
        <div className="rounded-2xl border border-dashed border-neutral-200 bg-white p-5">
            <div className="flex items-center justify-between">
                <h4 className="font-semibold text-neutral-900">{title}</h4>
                <span className="text-xs rounded-full bg-neutral-100 px-2 py-0.5 text-neutral-600">
          0 openings
        </span>
            </div>
            {tags.length > 0 && (
                <div className="mt-3 flex flex-wrap gap-2">
                    {tags.map((t) => (
                        <span
                            key={t}
                            className="text-xs rounded-md border border-neutral-200 bg-white px-2 py-1 text-neutral-600"
                        >
              {t}
            </span>
                    ))}
                </div>
            )}
        </div>
    );
}

export default function Careers() {
    return (
        <section className="bg-white">
            <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
                {/* HERO */}
                <div className="mx-auto max-w-3xl text-center">
                    <div className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-3 py-1 text-xs font-medium text-neutral-600">
                        <Briefcase className="h-4 w-4" aria-hidden />
                        Careers at Fortis Capital
                    </div>
                    <h1 className="mt-4 text-4xl sm:text-5xl font-bold tracking-tight text-neutral-900">
                        No openings right now
                    </h1>
                    <p className="mt-4 text-base sm:text-lg text-neutral-600">
                        We’re a small team in private beta. When roles open up, we’ll post them here.
                    </p>

                    <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
                        <Link
                            href="/about"
                            className="inline-flex items-center justify-center rounded-xl border border-neutral-300 bg-white px-4 py-2 text-sm font-medium text-neutral-900 hover:bg-neutral-100"
                        >
                            Learn about Fortis
                        </Link>
                        <a
                            href="mailto:careers@example.com"
                            className="inline-flex items-center gap-2 rounded-xl bg-neutral-900 text-white px-4 py-2 text-sm font-semibold hover:bg-neutral-800"
                        >
                            <Mail className="h-4 w-4" />
                            Say hello
                        </a>
                    </div>
                </div>

                {/* DEPARTMENTS (minimal placeholder) */}
                <div className="mt-14">
                    <h2 className="text-lg font-semibold text-neutral-900">Teams we’ll hire for</h2>
                    <div className="mt-4 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                        <Dept title="Engineering" tags={["Full-stack", "Infra", "Frontend"]} />
                        <Dept title="Research" tags={["Time-series ML", "NLP", "Backtesting"]} />
                        <Dept title="Product & Design" tags={["Product", "UX", "Design systems"]} />
                    </div>
                </div>

                {/* NOTE */}
                <p className="mt-10 text-xs text-neutral-500 text-center">
                    Hiring updates will appear on this page. For general interest, email us—no form needed.
                </p>
            </div>
        </section>
    );
}
