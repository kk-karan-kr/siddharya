import { MapPin, Flame, Waves, Mountain, Sunrise, Footprints } from "lucide-react";
import river from "@/assets/rishikesh-river.jpg";

const places = [
  {
    icon: Flame,
    name: "Ganga Aarti at Triveni Ghat",
    distance: "10 min drive",
    body: "Nightly ceremony of fire, song and floating lamps on the sacred river — an unforgettable Rishikesh ritual.",
  },
  {
    icon: Footprints,
    name: "Ram Jhula & Lakshman Jhula",
    distance: "5 – 8 min walk",
    body: "Iconic suspension bridges over the Ganga, lined with ashrams, cafés and bustling spiritual markets.",
  },
  {
    icon: Waves,
    name: "Neer Garh Waterfall",
    distance: "15 min drive",
    body: "A short forest hike leads to a tiered Himalayan waterfall with cool natural pools — perfect mid-day escape.",
  },
  {
    icon: Mountain,
    name: "Beatles Ashram (Chaurasi Kutia)",
    distance: "12 min drive",
    body: "The legendary abandoned ashram where The Beatles meditated in 1968, now covered in psychedelic murals.",
  },
  {
    icon: Sunrise,
    name: "Kunjapuri Sunrise Trek",
    distance: "45 min drive",
    body: "Pre-dawn drive and short trek to a hilltop temple with 360° views of the snow-capped Himalayan range.",
  },
  {
    icon: MapPin,
    name: "Trimbakeshwar & Tapovan",
    distance: "On our doorstep",
    body: "13-storey riverside temple and the quiet yogic neighbourhood our retreat calls home.",
  },
];

export function NearbyAttractions() {
  return (
    <section id="nearby" className="relative py-28 lg:py-36 overflow-hidden">
      <img src={river} alt="" className="absolute inset-0 w-full h-full object-cover opacity-[0.08]" />
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs tracking-[0.3em] uppercase text-gold">Around the Retreat</span>
          <h2 className="mt-4 font-serif text-4xl lg:text-5xl text-primary leading-[1.1] text-balance">
            Step outside, and Rishikesh unfolds.
          </h2>
          <p className="mt-5 text-foreground/70 leading-relaxed">
            From the riverside aarti to hidden Himalayan waterfalls — every excursion in our program
            is moments away. We arrange transport, guides and timing.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {places.map((p) => (
            <div
              key={p.name}
              className="group relative bg-card border border-border rounded-3xl p-7 hover:border-gold/60 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1 transition-all duration-500"
            >
              <div className="size-12 rounded-2xl bg-secondary flex items-center justify-center text-gold mb-5 group-hover:bg-primary group-hover:text-cream transition-colors duration-500">
                <p.icon className="size-5" />
              </div>
              <div className="flex items-center gap-2 text-[11px] uppercase tracking-widest text-muted-foreground">
                <MapPin className="size-3" /> {p.distance}
              </div>
              <h3 className="mt-2 font-serif text-2xl text-primary leading-tight">{p.name}</h3>
              <p className="mt-3 text-foreground/70 leading-relaxed text-sm">{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
