// components/AboutTeam.tsx
"use client";

import React from "react";
import Image from "next/image";

interface Member {
    name: string;
    role: string;
    image: string;
    bio?: string;
}

// Replace the placeholder images & copy below with real team data
const members: Member[] = [
    {
        name: "Wadood",
        role: "Co‑Founder / Lead Engineer",
        image: "/images/team/temp.jpg",
        bio: "Architects the Fortis Aegis engine and oversees all things code.",
    },
    {
        name: "Waleed",
        role: "Co‑Founder / Product Designer",
        image: "/images/team/temp.jpg",
        bio: "Shapes the product experience and brand identity—pixel by pixel.",
    },
    {
        name: "Moeez",
        role: "Co‑Founder / Full‑Stack Developer",
        image: "/images/team/temp.jpg",
        bio: "Turns lofty ideas into robust, scalable features across the stack.",
    },
];

export default function TeamCard() {
    return (
        <section id="about-team" className="py-20 bg-white ">
            <div className="container mx-auto px-4">
                {/* Heading */}
                <h2 className="text-4xl font-extrabold text-center text-gray-900 ">
                    About the Team
                </h2>

                {/* Grid */}
                <div className="mt-12 grid gap-10 md:grid-cols-3">
                    {members.map((m) => (
                        <article
                            key={m.name}
                            className="flex flex-col items-center text-center p-6 rounded-2xl border border-gray-200  shadow-sm hover:shadow-md transition"
                        >
                            <Image
                                src={m.image}
                                alt={m.name}
                                width={160}
                                height={160}
                                className="rounded-full object-cover mb-6 shadow-lg"
                            />
                            <h3 className="text-xl font-semibold text-gray-900 ">
                                {m.name}
                            </h3>
                            <p className="mt-1 text-sm font-medium text-gray-700 ">
                                {m.role}
                            </p>
                            {m.bio && (
                                <p className="mt-4 text-sm text-gray-700  max-w-sm">
                                    {m.bio}
                                </p>
                            )}
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
