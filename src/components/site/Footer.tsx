import { Instagram, Facebook, Youtube, Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import logo from "@/assets/logo.png";

export function Footer() {
  return (
    <footer className="bg-primary text-cream pt-20 pb-10">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-12 gap-12 pb-16 border-b border-cream/15">
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3">
              <img src={logo} alt="Siddharya" className="size-12 rounded-full ring-1 ring-gold/40" />
              <div>
                <div className="font-serif text-2xl">Siddharya</div>
                <div className="text-[10px] tracking-[0.25em] uppercase text-cream/60">Retreats &amp; Wellness</div>
              </div>
            </div>
            <p className="mt-6 text-cream/70 max-w-sm leading-relaxed">
              A boutique yoga &amp; wellness sanctuary on the banks of the Ganga in Tapovan, Rishikesh —
              where ancient practice meets contemporary care.
            </p>
            <div className="mt-6 flex gap-3">
              {[Instagram, Facebook, Youtube].map((Icon, i) => (
                <a key={i} href="#" className="size-10 rounded-full border border-cream/20 flex items-center justify-center hover:bg-gold hover:text-gold-foreground hover:border-gold transition">
                  <Icon className="size-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="text-xs uppercase tracking-widest text-gold mb-5">Retreats</div>
            <ul className="space-y-3 text-cream/75">
              <li><a href="#programs" className="hover:text-gold">Yoga</a></li>
              <li><a href="#programs" className="hover:text-gold">Meditation</a></li>
              <li><a href="#programs" className="hover:text-gold">Ayurveda</a></li>
              <li><a href="#programs" className="hover:text-gold">Teacher Training</a></li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <div className="text-xs uppercase tracking-widest text-gold mb-5">Explore</div>
            <ul className="space-y-3 text-cream/75">
              <li><a href="#about" className="hover:text-gold">About Rishikesh</a></li>
              <li><a href="#stay" className="hover:text-gold">Accommodation</a></li>
              <li><a href="#gallery" className="hover:text-gold">Gallery</a></li>
              <li><a href="#faq" className="hover:text-gold">FAQ</a></li>
            </ul>
          </div>

          <div className="lg:col-span-4">
            <div className="text-xs uppercase tracking-widest text-gold mb-5">Stay in touch</div>
            <p className="text-cream/70 mb-4 text-sm">Seasonal retreat dates &amp; reflections — once a month, never spam.</p>
            <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
              <Input
                type="email"
                placeholder="your@email.com"
                className="bg-cream/5 border-cream/20 text-cream placeholder:text-cream/40 rounded-full h-11 px-5"
              />
              <Button type="submit" className="rounded-full h-11 px-5 bg-gold text-gold-foreground hover:bg-gold/90">Subscribe</Button>
            </form>

            <ul className="mt-7 space-y-2.5 text-sm text-cream/70">
              <li className="flex items-center gap-3"><MapPin className="size-4 text-gold" /><span>Tapovan, Rishikesh, Uttarakhand 249192</span></li>
              <li className="flex items-center gap-3"><Phone className="size-4 text-gold" /><span>+91 99999 99999</span></li>
              <li className="flex items-center gap-3"><Mail className="size-4 text-gold" /><span>hello@siddharya.com</span></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-cream/50">
          <div>© {new Date().getFullYear()} Siddharya Retreats &amp; Wellness. All rights reserved.</div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-gold">Privacy</a>
            <a href="#" className="hover:text-gold">Terms</a>
            <a href="#" className="hover:text-gold">Cancellation</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
