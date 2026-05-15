import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import yogaRiver from "@/assets/yoga-river.jpg";

export function BookingCTA() {
  return (
    <section id="book" className="relative py-32 lg:py-40 overflow-hidden">
      <img src={yogaRiver} alt="" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-black/55 to-black/30" />

      <div className="relative mx-auto max-w-5xl px-6 text-center text-cream">
        <span className="text-xs tracking-[0.3em] uppercase text-gold">Begin your journey</span>
        <h2 className="mt-5 font-serif text-4xl sm:text-5xl lg:text-6xl leading-[1.1] text-balance text-cream">
          The Himalayas are waiting.<br />
          <span className="italic text-gold">Are you?</span>
        </h2>
        <p className="mt-6 text-lg text-cream/80 max-w-xl mx-auto">
          Limited cohorts each season. Reserve your space now or speak with our retreat team - we
          reply within 24 hours.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Button asChild size="lg" className="rounded-full h-12 px-8 bg-gold text-gold-foreground hover:bg-gold/90">
            <a href="#">
              Reserve a retreat <ArrowRight className="ml-1" />
            </a>
          </Button>
          <Button asChild size="lg" variant="outline" className="rounded-full h-12 px-8 border-cream/40 bg-transparent text-cream hover:bg-cream/10 hover:text-cream">
            <a href="#">Chat on WhatsApp</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
