import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { AboutRishikesh } from "@/components/site/AboutRishikesh";
import { ProgramCards } from "@/components/site/ProgramCards";
import { WhyChooseUs } from "@/components/site/WhyChooseUs";
import { DailyTimeline } from "@/components/site/DailyTimeline";
import { Testimonials } from "@/components/site/Testimonials";
import { Accommodation } from "@/components/site/Accommodation";
import { NearbyAttractions } from "@/components/site/NearbyAttractions";
import { Gallery } from "@/components/site/Gallery";
import { FAQ } from "@/components/site/FAQ";
import { BookingCTA } from "@/components/site/BookingCTA";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Siddharya Retreats & Wellness — Yoga in Rishikesh, India" },
      {
        name: "description",
        content:
          "Boutique yoga, meditation and ayurvedic wellness retreats on the banks of the Ganga in Tapovan, Rishikesh. Awaken within. Align in nature. Transform forever.",
      },
      { property: "og:title", content: "Siddharya Retreats & Wellness — Yoga in Rishikesh" },
      {
        property: "og:description",
        content: "Boutique Himalayan yoga & wellness sanctuary on the banks of the Ganga.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <AboutRishikesh />
        <ProgramCards />
        <WhyChooseUs />
        <DailyTimeline />
        <Testimonials />
        <Accommodation />
        <NearbyAttractions />
        <Gallery />
        <FAQ />
        <BookingCTA />
      </main>
      <Footer />
    </div>
  );
}
