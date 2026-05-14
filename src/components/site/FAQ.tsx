import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  { q: "Do I need prior yoga experience?", a: "No experience required. Our teachers gently adapt every practice for absolute beginners through to advanced practitioners." },
  { q: "How do I get to the retreat?", a: "We arrange complimentary pickup from Dehradun (DED) airport, a 45-minute scenic drive. Delhi (DEL) is also a comfortable 5-hour transfer we can organise." },
  { q: "What is included in the price?", a: "All accommodation, three sattvic meals daily, all classes and workshops, airport transfers, and one ayurvedic consultation. Treatments and excursions are additional." },
  { q: "Is the food vegetarian?", a: "Yes — entirely sattvic vegetarian, with vegan and gluten-free options available. Most produce is grown locally in the Himalayan foothills." },
  { q: "What should I pack?", a: "Comfortable yoga clothing, a light shawl, modest temple-appropriate wear, and an open heart. Mats, props and toiletries are provided." },
  { q: "What is your cancellation policy?", a: "Full refund up to 30 days prior, 50% within 14–30 days. We're happy to reschedule with no fee at any time." },
  { q: "Is the retreat suitable for solo travellers?", a: "Most of our guests come solo — single-occupancy rooms are available and our small-group format makes it easy to connect with like-minded travellers." },
];

export function FAQ() {
  return (
    <section id="faq" className="py-28 lg:py-36 bg-sand-soft">
      <div className="mx-auto max-w-4xl px-6">
        <div className="text-center mb-16">
          <span className="text-xs tracking-[0.3em] uppercase text-gold">Questions</span>
          <h2 className="mt-4 font-serif text-4xl lg:text-5xl text-primary leading-[1.1] text-balance">
            Everything you might wonder.
          </h2>
        </div>

        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((f, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className="border border-border bg-card rounded-2xl px-6 [&[data-state=open]]:border-gold/60 transition"
            >
              <AccordionTrigger className="font-serif text-xl text-primary hover:no-underline py-5 text-left">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-foreground/70 leading-relaxed pb-5">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
