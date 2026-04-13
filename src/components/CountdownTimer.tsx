"use client";

import { useEffect, useState } from "react";
import { LAUNCH } from "@/lib/config";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

function calcTimeLeft(): TimeLeft {
  const diff = LAUNCH.date.getTime() - Date.now();
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };

  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

function pad(n: number): string {
  return String(n).padStart(2, "0");
}

export default function CountdownTimer() {
  const [time, setTime] = useState<TimeLeft | null>(null);

  useEffect(() => {
    setTime(calcTimeLeft());
    const interval = setInterval(() => setTime(calcTimeLeft()), 1000);
    return () => clearInterval(interval);
  }, []);

  // Avoid hydration mismatch — render placeholder until client mounts
  if (!time) {
    return (
      <section className="py-20 bg-surface">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-sm font-bold tracking-[0.3em] uppercase mb-10 text-muted">
            Launch Countdown
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {["Days", "Hours", "Mins", "Secs"].map((label) => (
              <div key={label}>
                <div className="text-5xl md:text-6xl font-extrabold tracking-tighter">
                  --
                </div>
                <div className="text-xs uppercase tracking-widest mt-2 text-muted">
                  {label}
                </div>
              </div>
            ))}
          </div>
          <p className="mt-10 text-muted font-medium">
            Coming {LAUNCH.display}
          </p>
        </div>
      </section>
    );
  }

  const blocks: { value: string; label: string }[] = [
    { value: String(time.days), label: "Days" },
    { value: pad(time.hours), label: "Hours" },
    { value: pad(time.minutes), label: "Mins" },
    { value: pad(time.seconds), label: "Secs" },
  ];

  return (
    <section className="py-20 bg-surface" data-testid="countdown-section">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <h2 className="text-sm font-bold tracking-[0.3em] uppercase mb-10 text-muted">
          Launch Countdown
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {blocks.map((block) => (
            <div key={block.label}>
              <div className="text-5xl md:text-6xl font-extrabold tracking-tighter">
                {block.value}
              </div>
              <div className="text-xs uppercase tracking-widest mt-2 text-muted">
                {block.label}
              </div>
            </div>
          ))}
        </div>
        <p className="mt-10 text-muted font-medium">
          Coming {LAUNCH.display}
        </p>
      </div>
    </section>
  );
}
