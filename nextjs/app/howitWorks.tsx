import React from "react";

function IconCheck() {
    return (
        <svg className="h-6 w-6 text-emerald-600 dark:text-emerald-300" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
            <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
}

function IconRocket() {
    return (
        <svg className="h-6 w-6 text-rose-600 dark:text-rose-300" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
            <path d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M16 3v4M8 3v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
}

function IconUser() {
    return (
        <svg className="h-6 w-6 text-indigo-600 dark:text-indigo-300" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
            <path d="M12 12a4 4 0 100-8 4 4 0 000 8z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
}

export default function HowItWorks() {
    return (
        <section id="how" className="py-20">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-3xl text-center">
                    <h2 className="text-base font-semibold text-indigo-600">How it Works</h2>
                    <p className="mt-2 text-3xl font-extrabold text-zinc-900 dark:text-zinc-50">Simple flow — measurable trust</p>
                    <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-300">
                        Join missions, deliver measurable outcomes, and grow a reputation that
                        startups can rely on.
                    </p>
                </div>

                <div className="mt-12 mx-auto grid max-w-4xl grid-cols-1 gap-6 sm:grid-cols-3">
                    <div className="flex flex-col items-start gap-4 rounded-lg bg-white p-6 shadow-sm dark:bg-zinc-900">
                        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-50 dark:bg-indigo-900">
                            <IconUser />
                        </div>
                        <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">Skill‑Proven Talent</h3>
                        <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-300">
                            Candidates are evaluated by mission outcomes, not just CVs —
                            signals that matter to startups.
                        </p>
                    </div>

                    <div className="flex flex-col items-start gap-4 rounded-lg bg-white p-6 shadow-sm dark:bg-zinc-900">
                        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-rose-50 dark:bg-rose-900">
                            <IconRocket />
                        </div>
                        <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">Real Startup Missions</h3>
                        <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-300">
                            Work on high-impact, timeboxed missions that match your skillset and
                            let you show measurable results.
                        </p>
                    </div>

                    <div className="flex flex-col items-start gap-4 rounded-lg bg-white p-6 shadow-sm dark:bg-zinc-900">
                        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-emerald-50 dark:bg-emerald-900">
                            <IconCheck />
                        </div>
                        <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">Trust by Performance</h3>
                        <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-300">
                            Completed missions build a verifiable track record that startups
                            trust when hiring or engaging talent.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
