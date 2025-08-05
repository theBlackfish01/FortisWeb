// components/Newsletter.tsx
"use client";

import React, { useState } from "react";

/**
 * Lightweight, self‑contained newsletter signup block.
 * ‑ No external design‑system imports
 * ‑ Built entirely with Tailwind utility classes
 * ‑ Basic client‑side email validation + subtle debounced feedback
 */

// -----------------------------------------------------------------------------
// Utility → simple debounce (executes `func` after `delay` ms of no new calls)
// -----------------------------------------------------------------------------
function debounce<T extends (...args: never[]) => void>(func: T, delay: number): T {
    let timeout: ReturnType<typeof setTimeout>;
    return ((...args: Parameters<T>) => {
        clearTimeout(timeout);
        timeout = setTimeout(() => func(...args), delay);
    }) as T;
}

export default function Newsletter() {
    const [email, setEmail] = useState("");
    const [error, setError] = useState("");
    const [touched, setTouched] = useState(false);

    // ---------------------------------------------------------
    // Helpers
    // ---------------------------------------------------------
    const validateEmail = (value: string): boolean => {
        if (value === "") return true; // empty until user types
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setEmail(value);
        if (!validateEmail(value)) {
            setError("Please enter a valid email address.");
        } else {
            setError("");
        }
    };

    // Debounce to avoid flashing error on every keystroke
    const debouncedHandleChange = debounce(handleChange, 500);

    const handleBlur = () => {
        setTouched(true);
        if (!validateEmail(email)) {
            setError("Please enter a valid email address.");
        }
    };

    // Dummy Mailchimp action ‑ replace with your list URL when ready
    const formAction = "https://example.us1.list-manage.com/subscribe/post?u=dummy&id=dummy";

    return (
        <section className="relative w-full overflow-hidden  border border-gray-200 bg-white p-8 shadow-sm">
            {/* Decorative backdrop gradient */}
            <div
                className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br from-blue-50 via-white to-white"
                aria-hidden="true"
            />

            <h2 className="mb-2 text-center text-2xl font-bold text-gray-900">Stay in the loop</h2>
            <p className="mx-auto mb-6 max-w-md text-center text-gray-600">
                Subscribe to our monthly newsletter for Fortis Capital insights &amp; market updates.
            </p>

            <form
                action={formAction}
                method="post"
                className="mx-auto flex max-w-lg flex-col gap-3 sm:flex-row"
            >
                <input
                    type="email"
                    name="EMAIL"
                    placeholder="your@email.com"
                    required
                    className={`flex-1 rounded-md border-2 p-3 outline-none transition-colors focus:border-gray-900 ${
                        error && touched ? "border-red-500" : "border-gray-300"
                    }`}
                    onChange={(e) => {
                        if (error) {
                            handleChange(e);
                        } else {
                            debouncedHandleChange(e);
                        }
                    }}
                    onBlur={handleBlur}
                />

                <button
                    type="submit"
                    className="rounded-md bg-gray-900 px-6 py-3 font-medium text-white transition-colors hover:bg-gray-800"
                >
                    Subscribe
                </button>
            </form>

            {error && touched && (
                <p className="mt-2 text-center text-sm text-red-600" role="alert">
                    {error}
                </p>
            )}
        </section>
    );
}
