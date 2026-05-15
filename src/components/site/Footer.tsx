import { Instagram, Facebook, Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import logo from "@/assets/logo.png";

const socials = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/reel/DX34_OjNkFe/?igsh=YXZxbWNvNXk3cGU5",
    icon: Instagram,
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/profile.php?id=61589917852592",
    icon: Facebook,
  },
];

export function Footer() {
  return (
    <footer className="bg-primary text-cream pt-20 pb-10">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-12 gap-12 pb-16 border-b border-cream/15">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-4">
              <img src={logo} alt="Siddharya" className="size-16 rounded-full ring-2 ring-gold/50 shadow-lg" />
              <div>
                <div className="font-serif text-3xl">Siddharya</div>
                <div className="text-[10px] tracking-[0.25em] uppercase text-cream/60">Retreats &amp; Wellness</div>
              </div>
            </div>
            <p className="mt-6 text-cream/70 max-w-sm leading-relaxed">
              A boutique yoga &amp; wellness retreat on the banks of the Ganga in Tapovan, Rishikesh -
              where ancient practice meets contemporary care.
            </p>
            <div className="mt-6 flex gap-3">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href="#"
                  target="_blank"
                  rel="noreferrer"
                  aria-label={social.label}
                  className="size-10 rounded-full border border-cream/20 flex items-center justify-center hover:bg-gold hover:text-gold-foreground hover:border-gold transition"
                >
                  <social.icon className="size-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-3">
            <div className="text-xs uppercase tracking-widest text-gold mb-5">Experiences</div>
            <ul className="space-y-3 text-cream/75">
              <li>Yoga & Meditation</li>
              <li>Sound Healing</li>
              <li>Ice Bath</li>
              <li>Excursions</li>
            </ul>
          </div>

          <div className="lg:col-span-4">
            <div className="text-xs uppercase tracking-widest text-gold mb-5">Stay in touch</div>
            <p className="text-cream/70 mb-4 text-sm">Seasonal retreat dates &amp; reflections - once a month, never spam.</p>
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
              <li className="flex items-center gap-3"><Mail className="size-4 text-gold" /><a href="#" className="hover:text-gold">sales@siddharyawellness.com</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-cream/50">
          <div>© {new Date().getFullYear()} Siddharya Retreats &amp; Wellness. All rights reserved.</div>
        </div>
      </div>
    </footer>
  );
}
