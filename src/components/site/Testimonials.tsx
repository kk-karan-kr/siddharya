import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const reviews = [
  {
    quote:
      "Siddharya completely re-shaped my relationship with stillness. The teachers held space with such warmth — and the food alone is reason enough to return.",
    name: "Émilie Laurent",
    where: "Paris, France",
    flag: "🇫🇷",
  },
  {
    quote:
      "Ten days that felt like ten years of therapy. I arrived burnt out from a startup launch and left lighter than I have felt in a decade.",
    name: "Daniel Hoffmann",
    where: "Berlin, Germany",
    flag: "🇩🇪",
  },
  {
    quote:
      "The most thoughtful, beautifully run retreat I have ever attended — and I have done many. The location alone is heart-stopping.",
    name: "Sophie Marsden",
    where: "London, United Kingdom",
    flag: "🇬🇧",
  },
  {
    quote:
      "From the welcome chai to the final aarti, every detail was intentional. I came as a guest and left as part of a family.",
    name: "Aiko Tanaka",
    where: "Kyoto, Japan",
    flag: "🇯🇵",
  },
];

export function Testimonials() {
  const [i, setI] = useState(0);
  const r = reviews[i];

  return (
    <section className="py-28 lg:py-36 bg-primary text-cream relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.06] bg-[radial-gradient(circle_at_30%_20%,var(--gold),transparent_50%)]" />
      <div className="relative mx-auto max-w-5xl px-6 text-center">
        <Quote className="size-10 text-gold mx-auto mb-8" />
        <blockquote className="font-serif text-3xl sm:text-4xl lg:text-5xl leading-[1.2] text-cream text-balance">
          “{r.quote}”
        </blockquote>
        <div className="mt-12 flex flex-col items-center gap-2">
          <div className="text-2xl">{r.flag}</div>
          <div className="font-serif text-xl">{r.name}</div>
          <div className="text-xs uppercase tracking-[0.3em] text-cream/60">{r.where}</div>
        </div>

        <div className="mt-12 flex items-center justify-center gap-6">
          <button
            onClick={() => setI((i - 1 + reviews.length) % reviews.length)}
            className="size-11 rounded-full border border-cream/30 hover:bg-cream/10 flex items-center justify-center transition"
            aria-label="Previous"
          >
            <ChevronLeft className="size-5" />
          </button>
          <div className="flex gap-2">
            {reviews.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setI(idx)}
                className={`h-1.5 rounded-full transition-all ${idx === i ? "w-8 bg-gold" : "w-1.5 bg-cream/30"}`}
                aria-label={`Review ${idx + 1}`}
              />
            ))}
          </div>
          <button
            onClick={() => setI((i + 1) % reviews.length)}
            className="size-11 rounded-full border border-cream/30 hover:bg-cream/10 flex items-center justify-center transition"
            aria-label="Next"
          >
            <ChevronRight className="size-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
