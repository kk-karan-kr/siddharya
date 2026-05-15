import { ArrowUpRight, Flower2, Music2, Snowflake, Palette, Mountain } from "lucide-react";
import meditation from "@/assets/soundhealing.jpeg";
import icebath from "@/assets/DSC03777.jpg";
import rishikeshRiver from "@/assets/excurtion.avif";
import beachMeditation from "@/assets/rock-painting.avif";
import rooftop from "@/assets/yogaandmeditation.jpeg";
import cafe from "@/assets/cafe-floral.jpg";

const programs = [
  {
    icon: Flower2,
    title: "Yoga & Meditation",
    duration: "Daily sessions",
    img: rooftop,
    description: "Sunrise hatha and sunset vinyasa on our open-air rooftop shala, framed by the Himalayas and Ganga valley.",
  },
  {
    icon: Music2,
    title: "Sound Healing",
    duration: "Tibetan bowls and gongs",
    img: meditation,
    description: "Deep restorative sessions with crystal singing bowls, gongs and mantra to release stress and reset the nervous system.",
  },
  {
    icon: Snowflake,
    title: "Ice Bath & Breathwork",
    duration: "Wim Hof inspired",
    img: icebath,
    description: "Guided cold-plunge and conscious breathing rituals beside the Ganga to build resilience, energy and clarity.",
  },
  {
    icon: Palette,
    title: "Rock Painting & Art",
    duration: "Creative riverside ritual",
    img: beachMeditation,
    description: "Slow afternoons by the river painting Himalayan stones - a meditative practice in mindfulness and presence.",
  },
  {
    icon: Mountain,
    title: "Himalayan Excursions",
    duration: "Half and full day",
    img: rishikeshRiver,
    description: "Guided walks to hidden beaches, forest trails, waterfalls and cliffside viewpoints curated by our local team.",
  },
  {
    icon: Flower2,
    title: "Sattvic Cuisine & Tea",
    duration: "Three meals daily",
    img: cafe,
    description: "Seasonal ayurvedic plates, herbal infusions and Himalayan honey - nourishment as part of the practice.",
  },
];

export function ProgramCards() {
  return (
    <section id="programs" className="py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <span className="text-xs tracking-[0.3em] uppercase text-gold">Retreat Experiences</span>
            <h2 className="mt-4 font-serif text-4xl lg:text-5xl text-primary leading-[1.1] text-balance">
              Curated rituals.<br className="hidden sm:block" /> Designed to restore you.
            </h2>
          </div>
          <p className="text-muted-foreground max-w-md">
            Siddharya is a pure retreat - no certifications, no teacher training. Just soulful daily
            experiences crafted to slow you down and bring you home to yourself.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {programs.map((p) => (
            <article
              key={p.title}
              className="group relative overflow-hidden rounded-3xl bg-card border border-border hover:border-gold/60 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-1"
            >
              <div className="aspect-[16/11] overflow-hidden">
                <img src={p.img} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[1200ms]" />
              </div>
              <div className="p-7">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="size-11 rounded-full bg-secondary flex items-center justify-center text-gold">
                      <p.icon className="size-5" />
                    </div>
                    <div className="text-xs uppercase tracking-widest text-muted-foreground">{p.duration}</div>
                  </div>
                  <ArrowUpRight className="text-primary opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                </div>
                <h3 className="mt-5 font-serif text-2xl text-primary">{p.title}</h3>
                <p className="mt-3 text-foreground/70 leading-relaxed text-sm">{p.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
