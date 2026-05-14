import { ArrowUpRight, Flower2, Sparkles, HeartPulse, GraduationCap } from "lucide-react";
import yogaTree from "@/assets/yoga-tree.jpg";
import meditation from "@/assets/meditation-ganga.jpg";
import yogaHall from "@/assets/yoga-hall.jpg";
import yogaRiver from "@/assets/yoga-river.jpg";

const programs = [
  {
    icon: Flower2,
    title: "Hatha & Vinyasa Yoga",
    duration: "3 – 14 nights",
    price: "from $480",
    img: yogaTree,
    description: "Daily asana, pranayama and traditional Hatha practice taught by senior Indian masters.",
  },
  {
    icon: Sparkles,
    title: "Meditation & Silence",
    duration: "5 – 10 nights",
    price: "from $620",
    img: meditation,
    description: "Vedic meditation, mantra and noble silence by the Ganga to restore deep inner clarity.",
  },
  {
    icon: HeartPulse,
    title: "Ayurvedic Wellness",
    duration: "7 – 21 nights",
    price: "from $980",
    img: yogaRiver,
    description: "Personalised dosha consultation, panchakarma, abhyanga and sattvic cuisine.",
  },
  {
    icon: GraduationCap,
    title: "200hr Teacher Training",
    duration: "28 nights",
    price: "from $1,890",
    img: yogaHall,
    description: "Yoga Alliance certified intensive — anatomy, philosophy, methodology and practicum.",
  },
];

export function ProgramCards() {
  return (
    <section id="programs" className="py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <span className="text-xs tracking-[0.3em] uppercase text-gold">Our Programs</span>
            <h2 className="mt-4 font-serif text-4xl lg:text-5xl text-primary leading-[1.1] text-balance">
              Four paths.<br className="hidden sm:block" /> One inward journey.
            </h2>
          </div>
          <p className="text-muted-foreground max-w-md">
            Curated immersions for every traveller — from the curious first-timer to the dedicated
            teacher seeking depth in the Himalayan tradition.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {programs.map((p) => (
            <article
              key={p.title}
              className="group relative overflow-hidden rounded-3xl bg-card border border-border hover:border-gold/60 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-1"
            >
              <div className="aspect-[16/10] overflow-hidden">
                <img src={p.img} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[1200ms]" />
              </div>
              <div className="p-7 lg:p-9">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="size-11 rounded-full bg-secondary flex items-center justify-center text-gold">
                      <p.icon className="size-5" />
                    </div>
                    <div>
                      <div className="text-xs uppercase tracking-widest text-muted-foreground">{p.duration}</div>
                      <div className="text-sm text-primary font-medium">{p.price}</div>
                    </div>
                  </div>
                  <ArrowUpRight className="text-primary opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                </div>
                <h3 className="mt-5 font-serif text-2xl lg:text-3xl text-primary">{p.title}</h3>
                <p className="mt-3 text-foreground/70 leading-relaxed">{p.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
