import meditation from "@/assets/meditation-ganga.jpg";

const schedule = [
  { time: "05:30", title: "Wake & herbal chai", note: "Gentle bell, warm spiced tea on the terrace." },
  { time: "06:15", title: "Pranayama & meditation", note: "Breathwork by the river as the valley wakes." },
  { time: "07:30", title: "Hatha yoga practice", note: "90-minute traditional asana with senior teacher." },
  { time: "09:30", title: "Sattvic breakfast", note: "Seasonal fruits, porridge, Himalayan honey." },
  { time: "11:00", title: "Philosophy & study", note: "Yoga Sutras, Bhagavad Gita, kirtan or satsang." },
  { time: "13:00", title: "Ayurvedic lunch", note: "Three-course thali tailored to your dosha." },
  { time: "15:30", title: "Free time / treatments", note: "Walk to the ghats, abhyanga massage, journaling." },
  { time: "17:00", title: "Vinyasa flow", note: "Dynamic afternoon practice with sunset views." },
  { time: "19:00", title: "Aarti at the Ganga", note: "Witness the river ceremony of light and song." },
  { time: "20:00", title: "Dinner & silence", note: "Light supper followed by noble silence till morning." },
];

export function DailyTimeline() {
  return (
    <section id="timeline" className="py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-12 gap-16">
        <div className="lg:col-span-5 lg:sticky lg:top-32 self-start">
          <span className="text-xs tracking-[0.3em] uppercase text-gold">A day at Siddharya</span>
          <h2 className="mt-4 font-serif text-4xl lg:text-5xl text-primary leading-[1.1] text-balance">
            Slow rhythm. Deep practice. Quiet evenings.
          </h2>
          <p className="mt-6 text-foreground/70 leading-relaxed">
            Every day unfolds with the same gentle cadence — anchored in the ancient yogic schedule
            and softened by space for solitude, treatments and the river.
          </p>
          <div className="mt-10 aspect-[4/3] overflow-hidden rounded-3xl shadow-2xl shadow-primary/10">
            <img src={meditation} alt="Guest meditating beside the Ganga at dusk" className="w-full h-full object-cover" />
          </div>
        </div>

        <ol className="lg:col-span-7 relative border-l border-gold/30 pl-8 space-y-10">
          {schedule.map((s) => (
            <li key={s.time} className="relative">
              <span className="absolute -left-[42px] top-1.5 size-3 rounded-full bg-gold ring-4 ring-background" />
              <div className="flex flex-wrap items-baseline gap-x-5 gap-y-1">
                <span className="font-serif text-2xl text-primary tabular-nums">{s.time}</span>
                <h3 className="font-serif text-xl text-primary">{s.title}</h3>
              </div>
              <p className="mt-1 text-foreground/65">{s.note}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
