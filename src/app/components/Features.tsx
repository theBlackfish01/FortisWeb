// components/Features.tsx
'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import {
    LayoutDashboard,
    BellRing,
    MonitorSmartphone,
} from 'lucide-react';
import Temp from '@/public/temp.jpg';

// ────────────────────────────────────────────────────────────────────────────────
// Update: darker typography, indigo accent (removed teal), and subtle UI polish.
// ────────────────────────────────────────────────────────────────────────────────

interface Feature {
    icon: React.ComponentType<{ size?: number }>;
    title: string;
    description: string;
    imageLight: string;
    imageDark: string;
}

const features: Feature[] = [
    {
        icon: LayoutDashboard,
        title: 'Unified Dashboard',
        description:
            'Track portfolio performance, risk metrics and AI-powered forecasts in one clean view.',
        imageLight: '/images/dashboard-light.png',
        imageDark: '/images/dashboard-dark.png',
    },
    {
        icon: BellRing,
        title: 'Real-time Alerts',
        description:
            'Get instant push, email or SMS notifications the moment markets shift.',
        imageLight: '/images/alerts-light.png',
        imageDark: '/images/alerts-dark.png',
    },
    {
        icon: MonitorSmartphone,
        title: 'Any Device',
        description:
            'Native web, mobile & desktop apps keep you connected wherever you go.',
        imageLight: '/images/devices-light.png',
        imageDark: '/images/devices-dark.png',
    },
];

export default function Features() {
    const [index, setIndex] = useState(0);
    const current = features[index];

    return (
        <section id="features" className="py-20 sm:py-28">
            <div className="container mx-auto max-w-7xl px-4">
                {/* Header */}
                <div className="max-w-2xl mb-12">
                    <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900 ">
                        Product Features
                    </h2>
                    <p className="mt-4 text-lg sm:text-xl text-gray-800 ">
                        Fortis Aegis blends cutting-edge AI with bank-grade security to give you complete
                        confidence in every investment decision.
                    </p>
                </div>

                {/* ───────────── MOBILE VIEW ───────────── */}
                <div className="sm:hidden mb-8 flex gap-2 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-gray-400/50">
                    {features.map((f, i) => (
                        <button
                            key={i}
                            onClick={() => setIndex(i)}
                            className={`whitespace-nowrap px-4 py-2 rounded-full border text-sm font-medium transition focus:outline-none focus:ring-2 focus:ring-indigo-500/60
                ${
                                i === index
                                    ? 'bg-white text-white border-dark-500'
                                    : 'border-gray-300 text-gray-800 hover:bg-gray-100 dark:border-gray-700 '
                            }`}
                        >
                            {f.title}
                        </button>
                    ))}
                </div>
                {/* Mobile screenshot + copy */}
                <div className="sm:hidden">
                    <Image
                        src={current.imageLight}
                        alt={current.title}
                        width={800}
                        height={500}
                        className="w-full rounded-xl shadow-xl dark:hidden"
                    />
                    <Image
                        src={current.imageDark}
                        alt={current.title}
                        width={800}
                        height={500}
                        className="w-full rounded-xl shadow-xl hidden dark:block"
                    />

                    <h3 className="mt-6 text-xl font-semibold text-gray-900 ">
                        {current.title}
                    </h3>
                    <p className="mt-3 text-gray-800 ">
                        {current.description}
                    </p>
                </div>

                {/* ───────────── DESKTOP VIEW ───────────── */}
                <div className="hidden sm:grid sm:grid-cols-5 gap-10">
                    {/* Tabs */}
                    <div className="col-span-2 space-y-3">
                        {features.map((f, i) => {
                            const Icon = f.icon;
                            const selected = i === index;
                            return (
                                <button
                                    key={i}
                                    onClick={() => setIndex(i)}
                                    className={`group w-full text-left px-5 py-4 rounded-lg border transition backdrop-blur-lg focus:outline-none focus:ring-2 
                    ${
                                        selected
                                            ? 'border-black bg-indigo-50 dark:bg-white/30'
                                            : 'border-transparent hover:bg-gray-50 dark:hover:bg-gray-800/30'
                                    }`}
                                >
                                    <div className="flex items-start gap-4">
                                        <Icon
                                            size={24}
                                        />
                                        <div>
                                            <h4
                                                className={`font-semibold ${
                                                    selected
                                                        ? 'text-gray-900 '
                                                        : 'text-gray-800 '
                                                }`}
                                            >
                                                {f.title}
                                            </h4>
                                            <p className="mt-1 text-sm text-gray-800 ">
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
                            src={current.imageLight}
                            alt={current.title}
                            fill
                            sizes="(min-width: 640px) 60vw, 100vw"
                            className="object-contain rounded-xl shadow-2xl dark:hidden transition-opacity duration-300"
                            priority
                        />
                        <Image
                            src={current.imageDark}
                            alt={current.title}
                            fill
                            sizes="(min-width: 640px) 60vw, 100vw"
                            className="object-contain rounded-xl shadow-2xl hidden dark:block transition-opacity duration-300"
                            priority
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
