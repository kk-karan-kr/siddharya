import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const review = {
  quote:
    "Siddharya gave me the pause I did not know I needed. The teachers were deeply grounded, the food felt healing, and Rishikesh made every morning feel sacred.",
  name: "Ananya Sharma",
  where: "Mumbai, Maharashtra",
};

export function Testimonials() {
  return (
    <section className="py-28 lg:py-36 bg-primary text-cream relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.06] bg-[radial-gradient(circle_at_30%_20%,var(--gold),transparent_50%)]" />
      <div className="relative mx-auto max-w-5xl px-6 text-center">
        <Quote className="size-10 text-gold mx-auto mb-8" />
        <blockquote className="font-serif text-3xl sm:text-4xl lg:text-5xl leading-[1.2] text-cream text-balance">
          "{review.quote}"
        </blockquote>
        <div className="mt-12 flex flex-col items-center gap-2">
          <div className="font-serif text-xl">{review.name}</div>
          <div className="text-xs uppercase tracking-[0.3em] text-cream/60">{review.where}</div>
        </div>

        <div className="mt-12 flex items-center justify-center gap-6">
          <button
            disabled
            className="size-11 rounded-full border border-cream/20 text-cream/35 flex items-center justify-center cursor-not-allowed"
            aria-label="Previous testimonial disabled"
          >
            <ChevronLeft className="size-5" />
          </button>
          <div className="h-1.5 w-8 rounded-full bg-gold" />
          <button
            disabled
            className="size-11 rounded-full border border-cream/20 text-cream/35 flex items-center justify-center cursor-not-allowed"
            aria-label="Next testimonial disabled"
          >
            <ChevronRight className="size-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
