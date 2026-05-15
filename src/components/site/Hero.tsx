import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImg from "@/assets/yoga-river.jpg";

export function Hero() {
  return (
    <section id="top" className="relative min-h-[100svh] flex items-end overflow-hidden">
      <img
        src={heroImg}
        alt="Yogis practicing on the banks of the Ganga in Rishikesh"
        className="absolute inset-0 w-full h-full object-cover scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-foreground/85 via-foreground/40 to-foreground/30" />
      <div className="absolute inset-0 bg-gradient-to-r from-foreground/30 to-transparent" />

      <div className="relative w-full mx-auto max-w-7xl px-6 pb-24 pt-40 text-cream">
        <div className="max-w-3xl">
          <div className="flex items-center gap-3 mb-6">
            <span className="h-px w-10 bg-gold" />
            <span className="text-xs tracking-[0.3em] uppercase text-gold">Tapovan, Rishikesh, India</span>
          </div>
          <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl xl:text-[5.5rem] leading-[1.02] text-balance text-cream">
            Awaken within.<br />
            <span className="italic text-gold/95">Align in nature.</span><br />
            Transform forever.
          </h1>
          <p className="mt-8 text-lg text-cream/85 max-w-xl text-pretty leading-relaxed">
            A boutique yoga &amp; wellness retreat on the banks of the Ganga - where ancient
            Himalayan practice meets refined contemporary care.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Button asChild size="lg" className="rounded-full h-12 px-7 bg-gold hover:bg-gold/90 text-gold-foreground">
              <a href="#book">
                Reserve your retreat
                <ArrowRight className="ml-1" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
