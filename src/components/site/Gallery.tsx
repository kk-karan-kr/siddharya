import yogaRiver from "@/assets/yoga-river.jpg";
import yogaTree from "@/assets/yoga-tree.jpg";
import yogaHall from "@/assets/yoga-hall.jpg";
import river from "@/assets/rishikesh-river.jpg";
import meditation from "@/assets/meditation-ganga.jpg";
import room1 from "@/assets/room-1.jpg";
import room2 from "@/assets/room-2.jpg";

const tiles = [
  { src: yogaRiver, alt: "Yoga on the Ganga", span: "lg:col-span-2 lg:row-span-2" },
  { src: meditation, alt: "Meditation by the river", span: "" },
  { src: river, alt: "Rishikesh skyline", span: "" },
  { src: yogaTree, alt: "Tree pose practice", span: "" },
  { src: yogaHall, alt: "Yoga shala interior", span: "lg:col-span-2" },
  { src: room1, alt: "Boutique guest room", span: "" },
  { src: room2, alt: "Suite with valley view", span: "" },
];

export function Gallery() {
  return (
    <section id="gallery" className="py-28 lg:py-36 bg-himalaya">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-14">
          <div>
            <span className="text-xs tracking-[0.3em] uppercase text-gold">Inside the Sanctuary</span>
            <h2 className="mt-4 font-serif text-4xl lg:text-5xl text-primary leading-[1.1] text-balance">
              An immersive glimpse.
            </h2>
          </div>
          <p className="text-muted-foreground max-w-sm">A few moments captured — the river, the practice, the people.</p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 auto-rows-[180px] lg:auto-rows-[230px] gap-3 lg:gap-4">
          {tiles.map((t, i) => (
            <div
              key={i}
              className={`overflow-hidden rounded-2xl group cursor-pointer ${t.span}`}
            >
              <img
                src={t.src}
                alt={t.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[1500ms]"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
