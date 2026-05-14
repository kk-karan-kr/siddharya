import { Leaf, Mountain, Users, Award, Utensils, Heart } from "lucide-react";

const items = [
  { icon: Mountain, title: "Sacred location", body: "Steps from the Ganga in tranquil Tapovan, surrounded by Himalayan forest." },
  { icon: Award, title: "Certified masters", body: "Senior Indian teachers in the authentic Sivananda and Hatha lineages." },
  { icon: Users, title: "Intimate groups", body: "Capped at 16 guests per cohort — personal attention, never a factory." },
  { icon: Utensils, title: "Sattvic cuisine", body: "Three daily ayurvedic meals from organic Himalayan produce." },
  { icon: Leaf, title: "Eco-conscious", body: "Filtered water, reusable everything, locally sourced — zero single-use plastic." },
  { icon: Heart, title: "Truly transformative", body: "98% of guests describe their stay as 'life-changing' in our exit survey." },
];

export function WhyChooseUs() {
  return (
    <section className="py-28 lg:py-36 bg-sand-soft">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="text-xs tracking-[0.3em] uppercase text-gold">Why Siddharya</span>
          <h2 className="mt-4 font-serif text-4xl lg:text-5xl text-primary leading-[1.1] text-balance">
            A retreat designed with care, down to the smallest detail.
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-14">
          {items.map((it) => (
            <div key={it.title} className="group">
              <div className="size-14 rounded-2xl bg-card border border-border flex items-center justify-center text-gold group-hover:bg-primary group-hover:text-cream group-hover:border-primary transition-all duration-500">
                <it.icon className="size-6" />
              </div>
              <h3 className="mt-6 font-serif text-2xl text-primary">{it.title}</h3>
              <p className="mt-2 text-foreground/70 leading-relaxed">{it.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
