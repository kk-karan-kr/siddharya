import river from "@/assets/rishikesh-river.jpg";

export function AboutRishikesh() {
  return (
    <section id="about" className="relative py-28 lg:py-36 bg-himalaya">
      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        <div className="relative">
          <div className="aspect-[4/5] overflow-hidden rounded-[2rem] shadow-2xl shadow-primary/10">
            <img src={river} alt="The Ganges flowing past temples in Rishikesh" className="w-full h-full object-cover hover:scale-105 transition-transform duration-[1500ms]" />
          </div>
          <div className="hidden lg:block absolute -bottom-10 -right-10 bg-card border border-border rounded-2xl p-6 max-w-[260px] shadow-xl">
            <div className="font-serif text-2xl text-primary leading-tight">"The yoga capital of the world."</div>
            <div className="text-xs tracking-widest uppercase text-muted-foreground mt-3">— National Geographic</div>
          </div>
        </div>

        <div>
          <span className="text-xs tracking-[0.3em] uppercase text-gold">About Rishikesh</span>
          <h2 className="mt-5 font-serif text-4xl lg:text-5xl text-primary text-balance leading-[1.1]">
            Where the Ganga meets the Himalayas — and stillness meets you.
          </h2>
          <p className="mt-6 text-lg text-foreground/75 leading-relaxed text-pretty">
            For thousands of years, sages, seekers and yogis have been drawn to Rishikesh — a sacred
            valley nestled at the foothills of the Himalayas where the Ganga emerges into the plains.
            The air is thinner, the light is softer, and the practice runs deeper.
          </p>
          <p className="mt-4 text-base text-muted-foreground leading-relaxed">
            Our retreat sits in tranquil Tapovan, minutes from Lakshman Jhula and the iconic
            Trimbakeshwar temple, surrounded by forest and the constant, calming voice of the river.
          </p>

          <div className="mt-10 grid grid-cols-2 gap-6">
            {[
              { k: "Founded", v: "Tapovan Valley" },
              { k: "Altitude", v: "372 m / 1,220 ft" },
              { k: "Climate", v: "16°C – 32°C" },
              { k: "Nearest airport", v: "Dehradun (DED)" },
            ].map((i) => (
              <div key={i.k} className="border-l-2 border-gold/60 pl-4">
                <div className="text-xs uppercase tracking-widest text-muted-foreground">{i.k}</div>
                <div className="font-serif text-xl text-primary mt-1">{i.v}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
