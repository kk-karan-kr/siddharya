import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";
import { cn } from "@/lib/utils";

const links = [
  { href: "#about", label: "About" },
  { href: "#programs", label: "Programs" },
  { href: "#timeline", label: "Daily Life" },
  { href: "#stay", label: "Stay" },
  { href: "#gallery", label: "Gallery" },
  { href: "#faq", label: "FAQ" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

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
          <img src={logo} alt="Siddharya Retreats logo" className="h-11 w-11 rounded-full object-cover ring-1 ring-border" />
          <div className="leading-tight">
            <div className="font-serif text-xl text-primary">Siddharya</div>
            <div className="text-[10px] tracking-[0.25em] uppercase text-muted-foreground">Retreats &amp; Wellness</div>
          </div>
        </a>

        <nav className="hidden lg:flex items-center gap-9">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-foreground/75 hover:text-primary transition-colors relative group"
            >
              {l.label}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-gold transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button asChild className="bg-primary hover:bg-primary/90 rounded-full px-6 h-10">
            <a href="#book">Book Retreat</a>
          </Button>
        </div>

        <button className="lg:hidden text-primary" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-background border-t border-border mt-3">
          <div className="px-6 py-6 flex flex-col gap-5">
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-base text-foreground/80">
                {l.label}
              </a>
            ))}
            <Button asChild className="rounded-full mt-2"><a href="#book" onClick={() => setOpen(false)}>Book Retreat</a></Button>
          </div>
        </div>
      )}
    </header>
  );
}
