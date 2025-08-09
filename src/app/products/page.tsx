// /src/app/products/page.tsx
import Link from "next/link";
import { Sparkles, Beaker, Hourglass, ArrowRight } from "lucide-react";
import Newsletter from "@/src/app/components/Newsletter";

export const metadata = {
    title: "Products — Fortis Capital",
    description: "The Fortis product family. New things in the lab—stay tuned.",
};

export default function ProductsPage() {
    return (
        <main className="bg-white text-neutral-900">
            <section className="mx-auto max-w-7xl px-6 py-20 md:py-28">
                <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-3 py-1 text-xs font-medium text-neutral-600">
            <span className="h-2 w-2 rounded-full bg-emerald-500" />
            In the lab
          </span>

                    <h1 className="mt-4 text-4xl sm:text-5xl font-bold tracking-tight">
                        New products are brewing
                    </h1>
                    <p className="mt-4 text-base sm:text-lg text-neutral-600">
                        We’re heads-down building the Fortis product family.{" "}
                        <strong>Stay tuned</strong>—and be the first to try early previews.
                    </p>

                    <div className="mt-8 flex flex-col items-center gap-3">
                        <Newsletter />
                        <p className="text-xs text-neutral-500">
                            No spam. Just occasional updates and beta invites.
                        </p>
                    </div>

                    <div className="mt-10">
                        <Link
                            href="/aegis"
                            className="inline-flex items-center gap-2 rounded-xl border border-neutral-300 bg-white px-4 py-2 text-sm font-medium hover:bg-neutral-100"
                        >
                            Explore Aegis now <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>
                </div>

                <div className="mt-16 grid gap-6 sm:grid-cols-3">
                    <div className="rounded-2xl border border-dashed border-neutral-200 p-6">
                        <Beaker className="w-6 h-6" />
                        <h3 className="mt-3 font-semibold">Experiments underway</h3>
                        <p className="mt-1 text-sm text-neutral-600">
                            We’re prototyping tools around execution, risk overlays, and research
                            surfaces.
                        </p>
                    </div>

                    <div className="rounded-2xl border border-dashed border-neutral-200 p-6">
                        <Hourglass className="w-6 h-6" />
                        <h3 className="mt-3 font-semibold">Not quite ready</h3>
                        <p className="mt-1 text-sm text-neutral-600">
                            Details are evolving. We’ll share more when it’s useful—not just noise.
                        </p>
                    </div>

                    <div className="rounded-2xl border border-dashed border-neutral-200 p-6">
                        <Sparkles className="w-6 h-6" />
                        <h3 className="mt-3 font-semibold">Want early access?</h3>
                        <p className="mt-1 text-sm text-neutral-600">
                            Join the list above and we’ll tap you for private betas.
                        </p>
                    </div>
                </div>
            </section>
        </main>
    );
}
