import React from "react";

export default function HeroBanner() {
    return (
        <section className="bg-zinc-50 dark:bg-black py-20">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-3xl text-center">


                    <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-5xl">
                        Not Jobs.
                    </h1>
                    <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-5xl">
                        Real Missions.
                    </h1>
                    <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-5xl">
                        Real Missions.
                    </h1>
                    <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-300">
                        Real startup problems, measurable outcomes, and skill-verified talent —
                        work on missions that matter and build trust through performance.
                    </p>

                    <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
                        <a
                            href="#missions"
                            className="inline-flex items-center justify-center rounded-full bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow hover:bg-indigo-700"
                        >
                            Explore Missions
                        </a>

                        <a
                            href="#how"
                            className="inline-flex items-center justify-center rounded-full border border-zinc-200 px-6 py-3 text-sm font-medium text-zinc-700 hover:bg-zinc-50 dark:border-zinc-700 dark:text-zinc-200 dark:hover:bg-zinc-800"
                        >
                            How it Works
                        </a>
                    </div>
                </div>

                <div className="mt-12 mx-auto max-w-3xl">
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
                        <div className="flex items-start gap-4 rounded-lg bg-white p-6 shadow-sm dark:bg-zinc-900">
                            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-50 dark:bg-indigo-900">
                                <svg
                                    className="h-6 w-6 text-indigo-600 dark:text-indigo-300"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                >
                                    <path d="M12 12a4 4 0 100-8 4 4 0 000 8z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                            <div>
                                <h3 className="text-sm font-semibold text-zinc-900 dark:text-zinc-50">Skill‑Proven Talent</h3>
                                <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-300">
                                    Talent matched by real mission outcomes and verified work.
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4 rounded-lg bg-white p-6 shadow-sm dark:bg-zinc-900">
                            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-rose-50 dark:bg-rose-900">
                                <svg
                                    className="h-6 w-6 text-rose-600 dark:text-rose-300"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                >
                                    <path d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M16 3v4M8 3v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                            <div>
                                <h3 className="text-sm font-semibold text-zinc-900 dark:text-zinc-50">Real Startup Missions</h3>
                                <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-300">
                                    Short missions built by startups — ship features, learn fast, and
                                    show results.
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4 rounded-lg bg-white p-6 shadow-sm dark:bg-zinc-900">
                            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-emerald-50 dark:bg-emerald-900">
                                <svg
                                    className="h-6 w-6 text-emerald-600 dark:text-emerald-300"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                >
                                    <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                            <div>
                                <h3 className="text-sm font-semibold text-zinc-900 dark:text-zinc-50">Trust by Performance</h3>
                                <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-300">
                                    Build a reputation through delivered outcomes, not resumes.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
