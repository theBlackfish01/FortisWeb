'use client';

import { useState } from 'react';
import { Check } from 'lucide-react';
import Link from 'next/link';

type Plan = {
    name: string;
    blurb: string;
    priceMonthly: number; // USD
    cta: string;
    features: string[];
    highlight?: boolean;
};

const PLANS: Plan[] = [
    {
        name: 'Free',
        blurb: 'Great for getting started',
        priceMonthly: 0,
        cta: 'Join waitlist',
        features: ['1 linked portfolio', 'Daily forecasts & sentiment', 'Email alerts', 'Export to CSV'],
    },
    {
        name: 'Pro',
        blurb: 'Advanced controls & automation',
        priceMonthly: 19,
        cta: 'Join waitlist',
        features: [
            'Unlimited portfolios',
            'Intraday updates & alerts',
            'Position sizing & rebalancing',
            'Stops & hedges suggestions',
            'Explainability reports',
        ],
        highlight: true,
    },
    {
        name: 'Enterprise',
        blurb: 'For brokers & digital banks',
        priceMonthly: 99,
        cta: 'Contact sales',
        features: ['White-label dashboards', 'Broker plug-ins & API', 'Audit trail & reporting', 'SLA & onboarding support'],
    },
];

export default function Pricing() {
    const [yearly, setYearly] = useState(true); // default to yearly for savings

    return (
        <section id="pricing" className="bg-white text-neutral-900 py-20 sm:py-24">
            <div className="mx-auto max-w-7xl px-6">
                <div className="flex items-end justify-between gap-6 flex-wrap">
                    <div>
                        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Pricing</h2>
                        <p className="mt-3 text-neutral-600">Simple plans for individuals and platforms.</p>
                    </div>

                    {/* Toggle */}
                    <div className="flex items-center gap-3">
                        <span className={`text-sm ${!yearly ? 'text-neutral-900' : 'text-neutral-500'}`}>Monthly</span>
                        <button
                            onClick={() => setYearly(!yearly)}
                            className="relative h-7 w-12 rounded-full bg-neutral-200 border border-neutral-300 transition"
                            aria-label="Toggle monthly/yearly billing"
                        >
              <span
                  className={`absolute top-1/2 -translate-y-1/2 h-5 w-5 rounded-full bg-white border border-neutral-300 shadow transition
                ${yearly ? 'left-6' : 'left-1.5'}`}
              />
                        </button>
                        <span className={`text-sm ${yearly ? 'text-neutral-900' : 'text-neutral-500'}`}>
              Yearly{' '}
                            <span className="ml-1 rounded-full bg-emerald-100 px-2 py-0.5 text-emerald-700 text-xs">Save 20%</span>
            </span>
                    </div>
                </div>

                {/* Plans */}
                <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {PLANS.map((p) => {
                        const price = yearly ? Math.round(p.priceMonthly * 12 * 0.8) : p.priceMonthly;
                        const suffix = yearly ? '/year' : '/month';
                        return (
                            <div
                                key={p.name}
                                className={`rounded-2xl border p-6 flex flex-col
                  ${p.highlight ? 'border-emerald-300 bg-emerald-50' : 'border-neutral-200 bg-white'}
                `}
                            >
                                <div className="flex-1">
                                    <h3 className="text-lg font-semibold">{p.name}</h3>
                                    <p className="mt-1 text-sm text-neutral-600">{p.blurb}</p>

                                    <div className="mt-6">
                                        <div className="text-3xl font-bold">
                                            {p.priceMonthly === 0 ? 'Free' : `$${price}`}
                                            <span className="text-base font-normal text-neutral-500">{` ${suffix}`}</span>
                                        </div>
                                    </div>

                                    <ul className="mt-6 space-y-2 text-sm">
                                        {p.features.map((f) => (
                                            <li key={f} className="flex items-start gap-2">
                                                <Check className="w-4 h-4 mt-0.5 flex-none text-emerald-600" />
                                                <span className="text-neutral-700">{f}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="mt-8">
                                    {p.name === 'Enterprise' ? (
                                        <Link
                                            href="/aegis#waitlist"
                                            className="inline-flex w-full items-center justify-center rounded-xl border border-neutral-300 bg-white px-4 py-2 text-sm font-medium text-neutral-900 hover:bg-neutral-100"
                                        >
                                            {p.cta}
                                        </Link>
                                    ) : (
                                        <Link
                                            href="/aegis#waitlist"
                                            className="inline-flex w-full items-center justify-center rounded-xl bg-neutral-900 text-white px-4 py-2 text-sm font-semibold hover:bg-neutral-800"
                                        >
                                            {p.cta}
                                        </Link>
                                    )}
                                </div>
                            </div>
                        );
                    })}
                </div>

                <p className="mt-6 text-xs text-neutral-500">
                    Fortis Aegis provides analytics only and does not offer investment advice. Pricing subject to change during beta.
                </p>
            </div>
        </section>
    );
}
