/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from "motion/react";
import { Coffee, MapPin, Phone, Clock, Instagram, Facebook, Menu as MenuIcon, X, ChevronRight, Utensils } from "lucide-react";
import { useState, useEffect } from "react";
import { MENU_ITEMS, CONTACT_INFO } from "./constants";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState<'Breakfast' | 'Lunch' | 'Coffee' | 'Desserts'>('Breakfast');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const categories = ['Breakfast', 'Lunch', 'Coffee', 'Desserts'] as const;

  return (
    <div className="min-h-screen selection:bg-brand-olive/20">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? "bg-brand-cream/90 backdrop-blur-md py-4 shadow-sm" : "bg-transparent py-6"}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2"
          >
            <Coffee className="w-8 h-8 text-brand-olive" />
            <span className="font-serif text-2xl font-bold tracking-tight">Cafe Arusha</span>
          </motion.div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-10">
            {["Home", "Menu", "About", "Location"].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`}
                className="text-sm font-medium uppercase tracking-widest hover:text-brand-olive transition-colors"
              >
                {item}
              </a>
            ))}
            <button className="bg-brand-olive text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-brand-olive/90 transition-all shadow-lg shadow-brand-olive/20">
              Book a Table
            </button>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden text-brand-ink"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <MenuIcon />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 bg-brand-cream z-40 pt-24 px-6 md:hidden"
          >
            <div className="flex flex-col gap-8 text-center">
              {["Home", "Menu", "About", "Location"].map((item) => (
                <a 
                  key={item} 
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setIsMenuOpen(false)}
                  className="font-serif text-3xl"
                >
                  {item}
                </a>
              ))}
              <button className="bg-brand-olive text-white px-8 py-4 rounded-full text-lg font-medium">
                Book a Table
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80&w=2000" 
            alt="Cafe Interior"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl text-white"
          >
            <span className="inline-block px-4 py-1 bg-brand-olive/80 backdrop-blur-sm rounded-full text-xs font-bold uppercase tracking-[0.2em] mb-6">
              Arusha's Finest Coffee
            </span>
            <h1 className="text-6xl md:text-8xl font-serif mb-8 leading-[0.9]">
              Elevate Your <br />
              <span className="italic">Daily Ritual</span>
            </h1>
            <p className="text-lg md:text-xl text-white/80 mb-10 font-light leading-relaxed max-w-lg">
              Experience the perfect blend of Tanzanian heritage and modern culinary excellence on the 3rd floor of Arusha Mall.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#menu"
                className="bg-white text-brand-ink px-10 py-4 rounded-full font-medium hover:bg-brand-cream transition-all text-center"
              >
                Explore Menu
              </a>
              <a 
                href="#location"
                className="border border-white/30 backdrop-blur-md text-white px-10 py-4 rounded-full font-medium hover:bg-white/10 transition-all text-center"
              >
                Find Us
              </a>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50"
        >
          <div className="w-px h-12 bg-white/30 mx-auto" />
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl"
            >
              <img 
                src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=1000" 
                alt="Coffee Pour"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-8 left-8 right-8 p-6 bg-brand-cream/90 backdrop-blur-md rounded-2xl">
                <p className="font-serif italic text-xl text-brand-olive">
                  "The best coffee in Arusha, with a view that matches the quality of the beans."
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-brand-olive font-bold uppercase tracking-widest text-sm mb-4 block">Our Story</span>
              <h2 className="text-5xl font-serif mb-8 leading-tight">A Sanctuary Above the City</h2>
              <p className="text-brand-ink/70 text-lg leading-relaxed mb-8">
                Nestled on the 3rd floor of the iconic Arusha Mall, Cafe Arusha is more than just a restaurant. It's a gathering place for locals and travelers alike, offering a peaceful escape from the bustling streets below.
              </p>
              <p className="text-brand-ink/70 text-lg leading-relaxed mb-10">
                We take pride in sourcing our beans from the lush slopes of Mount Meru and the Kilimanjaro region, ensuring every cup tells a story of Tanzanian excellence. Our chefs craft each dish with passion, blending international techniques with local flavors.
              </p>
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <h4 className="font-serif text-3xl text-brand-olive mb-2">100%</h4>
                  <p className="text-sm uppercase tracking-widest text-brand-ink/50">Tanzanian Beans</p>
                </div>
                <div>
                  <h4 className="font-serif text-3xl text-brand-olive mb-2">3rd</h4>
                  <p className="text-sm uppercase tracking-widest text-brand-ink/50">Floor Oasis</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-24 bg-brand-cream">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-brand-olive font-bold uppercase tracking-widest text-sm mb-4 block">Taste the Excellence</span>
            <h2 className="text-5xl font-serif mb-6">Our Curated Menu</h2>
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-8 py-3 rounded-full text-sm font-medium transition-all ${activeCategory === cat ? "bg-brand-olive text-white shadow-lg" : "bg-white text-brand-ink hover:bg-brand-olive/10"}`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <motion.div 
            layout
            className="grid md:grid-cols-2 gap-x-12 gap-y-8"
          >
            <AnimatePresence mode="wait">
              {MENU_ITEMS.filter(item => item.category === activeCategory).map((item) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="group flex justify-between items-start p-6 bg-white rounded-2xl hover:shadow-xl transition-all border border-transparent hover:border-brand-olive/10"
                >
                  <div className="flex-1">
                    <h3 className="font-serif text-xl mb-2 group-hover:text-brand-olive transition-colors">{item.name}</h3>
                    <p className="text-brand-ink/60 text-sm leading-relaxed pr-4">{item.description}</p>
                  </div>
                  <div className="text-right">
                    <span className="font-serif text-lg text-brand-olive font-bold">{item.price}</span>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          <div className="mt-16 text-center">
            <p className="text-brand-ink/50 italic mb-8">Prices are inclusive of all taxes.</p>
            <button className="inline-flex items-center gap-2 text-brand-olive font-bold uppercase tracking-widest text-sm hover:gap-4 transition-all">
              Download Full Menu <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* Location & Contact */}
      <section id="location" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <span className="text-brand-olive font-bold uppercase tracking-widest text-sm mb-4 block">Visit Us</span>
              <h2 className="text-5xl font-serif mb-10">Find Your Way to Us</h2>
              
              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="w-12 h-12 rounded-full bg-brand-cream flex items-center justify-center shrink-0">
                    <MapPin className="text-brand-olive" />
                  </div>
                  <div>
                    <h4 className="font-serif text-xl mb-2">Our Address</h4>
                    <p className="text-brand-ink/60">{CONTACT_INFO.address}</p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="w-12 h-12 rounded-full bg-brand-cream flex items-center justify-center shrink-0">
                    <Clock className="text-brand-olive" />
                  </div>
                  <div>
                    <h4 className="font-serif text-xl mb-2">Opening Hours</h4>
                    <p className="text-brand-ink/60">Mon - Fri: {CONTACT_INFO.hours.weekdays}</p>
                    <p className="text-brand-ink/60">Sat - Sun: {CONTACT_INFO.hours.weekends}</p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="w-12 h-12 rounded-full bg-brand-cream flex items-center justify-center shrink-0">
                    <Phone className="text-brand-olive" />
                  </div>
                  <div>
                    <h4 className="font-serif text-xl mb-2">Contact Us</h4>
                    <p className="text-brand-ink/60">{CONTACT_INFO.phone}</p>
                    <p className="text-brand-ink/60">{CONTACT_INFO.email}</p>
                  </div>
                </div>
              </div>

              <div className="mt-12 flex gap-4">
                <a 
                  href={CONTACT_INFO.mapsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-brand-olive text-white px-8 py-4 rounded-full font-medium hover:bg-brand-olive/90 transition-all inline-flex items-center gap-2"
                >
                  Get Directions <ChevronRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            <div className="h-[500px] rounded-[2rem] overflow-hidden shadow-2xl border-8 border-brand-cream">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m12!1m3!1d3982.684!2d36.6951499!3d-3.3705526!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x18371d001e951afb%3A0x2234d2f218ea7b1!2sCafe%20Arusha!5e0!3m2!1sen!2stz!4v1711910000000!5m2!1sen!2stz" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-brand-ink text-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-2">
              <div className="flex items-center gap-2 mb-6">
                <Coffee className="w-8 h-8 text-brand-olive" />
                <span className="font-serif text-3xl font-bold">Cafe Arusha</span>
              </div>
              <p className="text-white/50 max-w-sm leading-relaxed">
                Bringing the rich heritage of Tanzanian coffee to the heart of Arusha. Join us for a moment of peace and a cup of excellence.
              </p>
            </div>
            
            <div>
              <h4 className="font-serif text-xl mb-6">Quick Links</h4>
              <ul className="space-y-4 text-white/50">
                <li><a href="#home" className="hover:text-brand-olive transition-colors">Home</a></li>
                <li><a href="#menu" className="hover:text-brand-olive transition-colors">Menu</a></li>
                <li><a href="#about" className="hover:text-brand-olive transition-colors">About</a></li>
                <li><a href="#location" className="hover:text-brand-olive transition-colors">Location</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-serif text-xl mb-6">Follow Us</h4>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-olive transition-all">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-olive transition-all">
                  <Facebook className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/30">
            <p>© 2026 Cafe Arusha. All rights reserved.</p>
            <div className="flex gap-8">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
