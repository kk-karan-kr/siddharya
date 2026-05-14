import { Bed, Wifi, Wind, Bath, Leaf, Coffee } from "lucide-react";
import room1 from "@/assets/room-1.jpg";
import room2 from "@/assets/room-2.jpg";

const amenities = [
  { icon: Bed, label: "King beds" },
  { icon: Bath, label: "En-suite" },
  { icon: Wind, label: "Mountain air" },
  { icon: Wifi, label: "Wi-Fi" },
  { icon: Coffee, label: "Tea bar" },
  { icon: Leaf, label: "Garden view" },
];

export function Accommodation() {
  return (
    <section id="stay" className="py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          <div className="grid grid-cols-2 gap-4">
            <div className="aspect-[3/4] overflow-hidden rounded-3xl shadow-xl shadow-primary/10">
              <img src={room1} alt="Modern boutique room" className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000" />
            </div>
            <div className="aspect-[3/4] overflow-hidden rounded-3xl mt-12 shadow-xl shadow-primary/10">
              <img src={room2} alt="Suite with sunset light" className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000" />
            </div>
          </div>

          <div>
            <span className="text-xs tracking-[0.3em] uppercase text-gold">Stay & Nourish</span>
            <h2 className="mt-4 font-serif text-4xl lg:text-5xl text-primary leading-[1.1] text-balance">
              Refined rooms. Living food. Quiet luxury.
            </h2>
            <p className="mt-6 text-foreground/70 leading-relaxed text-lg">
              Each of our 16 boutique rooms is finished in warm woods, soft linens and natural stone
              — a calm contrast to the energy of the practice. Three sattvic meals each day are
              prepared by our in-house ayurvedic chef from organic Himalayan produce.
            </p>

            <div className="mt-10 grid grid-cols-3 gap-4">
              {amenities.map((a) => (
                <div key={a.label} className="border border-border rounded-2xl p-4 text-center bg-card hover:border-gold/60 transition">
                  <a.icon className="size-5 text-gold mx-auto" />
                  <div className="text-xs mt-2 text-foreground/75">{a.label}</div>
                </div>
              ))}
            </div>

            <div className="mt-10 p-6 rounded-2xl bg-secondary/60 border border-border">
              <div className="flex items-baseline justify-between gap-4">
                <div>
                  <div className="text-xs uppercase tracking-widest text-muted-foreground">Full board, all-inclusive</div>
                  <div className="font-serif text-3xl text-primary mt-1">From $128 <span className="text-base text-muted-foreground">/ night</span></div>
                </div>
                <a href="#book" className="text-sm text-gold hover:text-primary transition underline-offset-4 hover:underline">
                  See room types →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
