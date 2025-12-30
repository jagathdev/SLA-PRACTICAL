import HeroBanner from "./heroBanner";
import HowItWorks from "./howitWorks";

export default function Home() {
  return (
    <div className="bg-white dark:bg-black font-sans">
      <main className="mx-auto max-w-7xl">
        <HeroBanner />
        <HowItWorks />
      </main>
    </div>
  );
}
