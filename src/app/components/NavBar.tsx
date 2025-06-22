'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Home, Shield, Info } from 'lucide-react';

import FCLogo from '@/public/FCLogoTR.png';
import PFLogoIcon from '@/public/FCLogoTR.png';
import {JSX} from "react";

interface NavLink {
    href: string;
    label: string;
    icon: JSX.Element;
}

export default function NavBar() {
    const pathname = usePathname() ?? '/';

    // Centralised route list makes the bar easy to extend later.
    const links: NavLink[] = [
        { href: '/', label: 'Home', icon: <Home className="w-5 h-5" /> },
        { href: '/aegis', label: 'Fortis Aegis', icon: <Shield className="w-5 h-5" /> },
        { href: '/about', label: 'About', icon: <Info className="w-5 h-5" /> },
    ];

    return (
        <header className="sticky inset-x-0 top-0 z-50 bg-white/70 backdrop-blur-lg shadow">
            <div className="relative mx-auto flex items-center justify-center px-6 py-3 max-w-7xl">
                {/* ── Brand Logo (left‑aligned) ───────────────────────────────────────*/}
                <Link href="/" className="absolute left-6" aria-label="Fortis Capital home">
                    {/* Desktop logo */}
                    <Image src={FCLogo} alt="Fortis Capital logo" className="hidden md:block w-12 h-auto" priority />
                    {/* Mobile icon */}
                    <Image src={PFLogoIcon} alt="Fortis Capital icon" className="md:hidden w-10 h-auto" priority />
                </Link>

                {/* ── Floating pill navigation ───────────────────────────────────────*/}
                <nav className="bg-white/80 backdrop-blur-md shadow-lg rounded-full px-4 py-2 flex gap-4">
                    {links.map(({ href, label, icon }) => {
                        const active = pathname === href || (href !== '/' && pathname.startsWith(href));
                        return (
                            <Link
                                key={href}
                                href={href}
                                className={`flex items-center gap-2 px-3 py-2 rounded-full text-sm font-medium transition
                  ${active ? 'bg-neutral-900 text-white shadow-inner' : 'text-neutral-700 hover:bg-neutral-100'}
                `}
                            >
                                {/* Icon is always visible; label is hidden on small screens */}
                                <span className="md:hidden">{icon}</span>
                                <span className="hidden md:inline">{label}</span>
                            </Link>
                        );
                    })}
                </nav>
            </div>
        </header>
    );
}