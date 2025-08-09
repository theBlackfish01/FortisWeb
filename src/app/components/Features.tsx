'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { LayoutDashboard, BellRing, MonitorSmartphone } from 'lucide-react';
import dashboard_temp from '@/public/dashboard-temp.png';

interface Feature {
    icon: React.ComponentType<{ size?: number; className?: string }>;
    title: string;
    description: string;
    imageLight: React.ComponentProps<typeof Image>['src'];
    imageDark: React.ComponentProps<typeof Image>['src'];
}

const FEATURES: Feature[] = [
    {
        icon: LayoutDashboard,
        title: 'Unified Dashboard',
        description:
            'Track portfolio performance, risk metrics, and AI-driven forecasts in one clean view.',
        imageLight: dashboard_temp,
        imageDark: dashboard_temp,
    },
    {
        icon: BellRing,
        title: 'Real-time Alerts',
        description:
            'Instant notifications the moment markets shift or events hit your watchlist.',
        imageLight: dashboard_temp,
        imageDark: dashboard_temp,
    },
    {
        icon: MonitorSmartphone,
        title: 'Any Device',
        description:
            'Web-first experience with great mobile and desktop support so you stay connected.',
        imageLight: dashboard_temp,
        imageDark: dashboard_temp,
    },
];

export default function Features() {
    const [index, setIndex] = useState(0);
    const current = FEATURES[index];

    return (
        <section id="features" className="bg-white text-neutral-900 py-20 sm:py-24">
            <div className="mx-auto max-w-7xl px-6">
                {/* Header */}
                <div className="max-w-2xl mb-10">
                    <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
                        Product Features
                    </h2>
                    <p className="mt-4 text-lg text-neutral-600">
                        Fortis Aegis blends forecasting, sentiment, and fundamentals into a single experience.
                    </p>
                </div>

                {/* MOBILE TABS */}
                <div className="sm:hidden mb-6 flex gap-2 overflow-x-auto pb-1">
                    {FEATURES.map((f, i) => (
                        <button
                            key={f.title}
                            onClick={() => setIndex(i)}
                            aria-selected={i === index}
                            className={`whitespace-nowrap px-4 py-2 rounded-full border text-sm font-medium transition
                ${
                                i === index
                                    ? 'bg-neutral-900 text-white border-neutral-900'
                                    : 'border-neutral-300 text-neutral-700 hover:bg-neutral-100'
                            } focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-500`}
                        >
                            {f.title}
                        </button>
                    ))}
                </div>

                {/* MOBILE CONTENT */}
                <div className="sm:hidden">
                    <Image
                        src={current.imageLight}
                        alt={current.title}
                        width={1200}
                        height={700}
                        className="w-full rounded-xl shadow-xl ring-1 ring-inset ring-neutral-200"
                        priority
                    />
                    <h3 className="mt-6 text-xl font-semibold">{current.title}</h3>
                    <p className="mt-3 text-neutral-700">{current.description}</p>
                </div>

                {/* DESKTOP TABS + PREVIEW */}
                <div className="hidden sm:grid sm:grid-cols-5 gap-10">
                    {/* Tabs */}
                    <div className="col-span-2 space-y-3">
                        {FEATURES.map((f, i) => {
                            const Icon = f.icon;
                            const selected = i === index;
                            return (
                                <button
                                    key={f.title}
                                    onClick={() => setIndex(i)}
                                    aria-selected={selected}
                                    className={`group w-full text-left px-5 py-4 rounded-lg border transition
                    ${
                                        selected
                                            ? 'border-neutral-900 bg-neutral-900 text-white'
                                            : 'border-neutral-200 bg-white text-neutral-700 hover:bg-neutral-50'
                                    } focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-500`}
                                >
                                    <div className="flex items-start gap-4">
                                        <Icon
                                            size={22}
                                            className={selected ? 'text-white' : 'text-neutral-500'}
                                        />
                                        <div>
                                            <h4
                                                className={`font-semibold ${
                                                    selected ? 'text-white' : 'text-neutral-900'
                                                }`}
                                            >
                                                {f.title}
                                            </h4>
                                            <p
                                                className={`mt-1 text-sm ${
                                                    selected ? 'text-neutral-200' : 'text-neutral-600'
                                                }`}
                                            >
                                                {f.description}
                                            </p>
                                        </div>
                                    </div>
                                </button>
                            );
                        })}
                    </div>

                    {/* Screenshot */}
                    <div className="col-span-3 relative w-full h-[520px]">
                        <Image
                            src={FEATURES[index].imageLight}
                            alt={FEATURES[index].title}
                            fill
                            sizes="(min-width: 640px) 60vw, 100vw"
                            className="object-contain rounded-xl shadow-2xl ring-1 ring-inset ring-neutral-200 bg-white"
                            priority
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
