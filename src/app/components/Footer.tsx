// components/Footer.tsx
import Link from 'next/link';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-white border-t border-gray-200 py-6">
            <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
                {/* Brand / Copyright */}
                <div className="text-center md:text-left">
                    <Link href="/" className="text-lg font-semibold text-gray-800 hover:text-gray-900">
                        Fortis Capital
                    </Link>
                    <p className="mt-2 text-sm text-gray-500">
                        &copy; {currentYear} Fortis Capital. All rights reserved.
                    </p>
                </div>

                {/* Policy & Contact Links */}
                <nav aria-label="Footer navigation" className="mt-4 md:mt-0">
                    <ul className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6 text-gray-500 text-sm">
                        <li>
                            <Link href="/privacy" className="hover:text-gray-700">
                                Privacy Policy
                            </Link>
                        </li>
                        <li>
                            <Link href="/terms" className="hover:text-gray-700">
                                Terms of Service
                            </Link>
                        </li>
                        <li>
                            <Link href="/contact" className="hover:text-gray-700">
                                Contact
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </footer>
    );
}
