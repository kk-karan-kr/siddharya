import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";
import { cn } from "@/lib/utils";

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-500",
        scrolled
          ? "bg-background/85 backdrop-blur-lg border-b border-border/60 py-3"
          : "bg-transparent py-5",
      )}
    >
      <div className="mx-auto max-w-7xl px-6 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-3">
          <img
            src={logo}
            alt="Siddharya Retreats logo"
            className={cn(
              "h-16 w-16 rounded-full object-cover shadow-lg transition-all",
              scrolled ? "ring-2 ring-gold/50" : "ring-2 ring-cream/70",
            )}
          />
          <div className="leading-tight">
            <div className={cn("font-serif text-2xl transition-colors", scrolled ? "text-primary" : "text-cream")}>Siddharya</div>
            <div className={cn("text-[10px] tracking-[0.25em] uppercase transition-colors", scrolled ? "text-muted-foreground" : "text-cream/75")}>Retreats &amp; Wellness</div>
          </div>
        </a>

        <div>
          <Button asChild className={cn("rounded-full px-6 h-10", scrolled ? "bg-primary hover:bg-primary/90" : "bg-gold text-gold-foreground hover:bg-gold/90")}>
            <a href="#book">Book Retreat</a>
          </Button>
        </div>
      </div>
    </header>
  );
}
