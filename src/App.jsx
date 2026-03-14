import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Scissors, 
  Clock, 
  MapPin, 
  Phone, 
  Star, 
  ChevronRight, 
  Menu, 
  X,
  CreditCard,
  Crown,
  Sparkles,
  CheckCircle2
} from 'lucide-react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs) {
  return twMerge(clsx(inputs));
}

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-black/80 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex justify-between items-center h-20">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center space-x-2"
          >
            <Scissors className="w-8 h-8 text-gold-500" />
            <span className="text-2xl font-serif text-white tracking-widest uppercase">ArtBarber</span>
          </motion.div>

          <div className="hidden md:flex items-center space-x-8">
            {['Home', 'Services', 'Pricing', 'Testimonials', 'Contact'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`} 
                className="text-sm uppercase tracking-widest text-cream-200 hover:text-gold-400 transition-colors"
              >
                {item}
              </a>
            ))}
            <button className="px-6 py-2 bg-gold-500 text-black text-sm uppercase tracking-widest font-bold hover:bg-gold-400 transition-all">
              Get Started
            </button>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white">
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-black border-b border-white/10 px-6 py-8 space-y-4"
        >
          {['Home', 'Services', 'Pricing', 'Testimonials', 'Contact'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`} 
              className="block text-lg font-serif text-white"
              onClick={() => setIsOpen(false)}
            >
              {item}
            </a>
          ))}
          <button className="w-full py-4 bg-gold-500 text-black uppercase tracking-widest font-bold">
            Get Started
          </button>
        </motion.div>
      )}
    </nav>
  );
};

const Hero = () => {
  return (
    <section id="home" className="relative h-screen flex items-center overflow-hidden pt-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="z-10"
        >
          <span className="inline-block text-gold-500 uppercase tracking-[0.3em] font-medium mb-4">Established 2012</span>
          <h1 className="text-6xl md:text-8xl font-serif text-white leading-[1.1] mb-6">
            Refining the art of <span className="italic text-gold-500">masculine</span> grooming.
          </h1>
          <p className="text-lg text-cream-300 mb-8 max-w-lg leading-relaxed">
            Experience the fusion of traditional craftsmanship and contemporary luxury in the heart of the city.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="px-10 py-5 bg-gold-500 text-black uppercase tracking-widest font-bold hover:bg-gold-400 transition-all flex items-center justify-center group">
              Get Started
              <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-10 py-5 border border-white/20 text-white uppercase tracking-widest font-medium hover:bg-white/5 transition-all">
              View Services
            </button>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
          className="relative aspect-square lg:aspect-auto h-[600px] lg:h-[700px] rounded-2xl overflow-hidden shadow-2xl shadow-gold-500/10"
        >
          <img 
            src="/src/assets/hero.png" 
            alt="Luxury Barber Shop Interior" 
            className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
        </motion.div>
      </div>
      
      {/* Abstract Background Element */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-gold-500/10 rounded-full blur-[120px]"></div>
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-cream-500/5 rounded-full blur-[120px]"></div>
    </section>
  );
};

const SocialProof = () => {
  const logos = [
    { name: "GQ Magazine", icon: "GQ" },
    { name: "Gentleman's Journal", icon: "GJ" },
    { name: "The Times", icon: "THE TIMES" },
    { name: "Esquire", icon: "Esquire" },
    { name: "Vogue Men", icon: "VOGUE" }
  ];

  return (
    <section className="py-20 border-y border-white/5 bg-black/50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <p className="text-center text-cream-500 uppercase tracking-widest text-xs mb-12">Featured & Trusted By</p>
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-40">
          {logos.map((logo) => (
            <span key={logo.name} className="text-2xl md:text-3xl font-serif text-white tracking-tighter whitespace-nowrap">
              {logo.icon}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

const Features = () => {
  const features = [
    {
      icon: <Scissors className="w-8 h-8" />,
      title: "Master Craftsmanship",
      desc: "Each haircut is a bespoke creation tailored to your features and lifestyle."
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "Premium Rituals",
      desc: "Indulge in our signature hot towel shaves using the finest organic oils."
    },
    {
      icon: <Crown className="w-8 h-8" />,
      title: "Elite Environment",
      desc: "A private sanctuary designed for relaxation and sophisticated conversation."
    }
  ];

  return (
    <section id="services" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl font-serif text-white mb-6">Exceptional Standards</h2>
          <div className="w-12 h-[1px] bg-gold-500 mx-auto mb-6"></div>
          <p className="text-cream-400 leading-relaxed">
            We don't just cut hair; we curate experiences. Our barbers are artists dedicated to the perfection of your personal style.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feat, idx) => (
            <motion.div 
              key={feat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.2 }}
              viewport={{ once: true }}
              className="p-10 bg-white/5 border border-white/10 hover:border-gold-500/50 transition-all group"
            >
              <div className="text-gold-500 mb-6 group-hover:scale-110 transition-transform">
                {feat.icon}
              </div>
              <h3 className="text-2xl font-serif text-white mb-4">{feat.title}</h3>
              <p className="text-cream-400 leading-relaxed">{feat.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  const reviews = [
    {
      quote: "The attention to detail here is unparalleled. It's not just a haircut, it's a recalibration of your entire look.",
      author: "James Harrison",
      title: "Art Director",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&h=200&fit=crop"
    },
    {
      quote: "Finally, a place that understands the classic aesthetic while leaning into modern trends. Truly top-tier service.",
      author: "Julian Thorne",
      title: "Editor-in-Chief",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&h=200&fit=crop"
    }
  ];

  return (
    <section id="testimonials" className="py-32 bg-cream-950/20">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-serif text-white mb-8">What our patrons say</h2>
            <p className="text-cream-400 leading-relaxed mb-12">
              Our reputation is built on the satisfaction of our discerning clientele. We take pride in the lasting relationships we've forged.
            </p>
            <div className="flex items-center space-x-2 text-gold-500">
              {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
              <span className="text-white ml-4 font-medium italic">4.9/5 Average Rating</span>
            </div>
          </div>

          <div className="space-y-8">
            {reviews.map((rev, idx) => (
              <motion.div 
                key={rev.author}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.3 }}
                viewport={{ once: true }}
                className="p-8 bg-black/40 border border-white/5 relative"
              >
                <div className="absolute -top-4 -left-4 text-gold-500/20">
                  <Star className="w-12 h-12 fill-current" />
                </div>
                <p className="text-xl font-serif italic text-cream-100 mb-8 leading-relaxed">
                  "{rev.quote}"
                </p>
                <div className="flex items-center">
                  <img src={rev.image} alt={rev.author} className="w-12 h-12 rounded-full object-cover mr-4 grayscale" />
                  <div>
                    <p className="text-white font-serif">{rev.author}</p>
                    <p className="text-gold-500 text-xs uppercase tracking-widest">{rev.title}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const Pricing = () => {
  const plans = [
    {
      name: "The Classic",
      price: "$45",
      features: ["Precision Haircut", "Standard Styling", "Straight Razor Finish", "Hot Towel Cleanse"],
      highlighted: false
    },
    {
      name: "The Royal",
      price: "$85",
      features: ["The Classic Package", "Signature Hot Towel Shave", "Beard Sculpting", "Scalp Massage"],
      highlighted: true
    },
    {
      name: "The Executive",
      price: "$120",
      features: ["The Royal Package", "Luxury Facial Treatment", "Grey Coverage", "Premium Hair Product"],
      highlighted: false
    }
  ];

  return (
    <section id="pricing" className="py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl font-serif text-white mb-6">Service Menu</h2>
          <div className="w-12 h-[1px] bg-gold-500 mx-auto mb-6"></div>
          <p className="text-cream-400">Selected treatments for the modern gentleman.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, idx) => (
            <motion.div 
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.2 }}
              viewport={{ once: true }}
              className={cn(
                "p-10 border transition-all flex flex-col h-full",
                plan.highlighted 
                  ? "bg-gold-500/5 border-gold-500 scale-105" 
                  : "bg-white/5 border-white/10"
              )}
            >
              <h3 className="text-xl uppercase tracking-widest text-gold-500 mb-2">{plan.name}</h3>
              <div className="text-5xl font-serif text-white mb-8">{plan.price}</div>
              <ul className="space-y-4 mb-12 flex-grow">
                {plan.features.map(f => (
                  <li key={f} className="flex items-start text-cream-300">
                    <CheckCircle2 className="w-5 h-5 text-gold-500 mr-3 shrink-0" />
                    <span className="text-sm">{f}</span>
                  </li>
                ))}
              </ul>
              <button className={cn(
                "w-full py-4 uppercase tracking-widest text-sm font-bold transition-all",
                plan.highlighted 
                  ? "bg-gold-500 text-black hover:bg-gold-400" 
                  : "bg-white/10 text-white hover:bg-white/20"
              )}>
                Book Now
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-32 bg-cream-950/20">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <h2 className="text-4xl md:text-5xl font-serif text-white mb-8">Get in Touch</h2>
            <p className="text-cream-400 leading-relaxed mb-12">
              Ready to elevate your appearance? Reach out to schedule your next session or visit us in the gallery.
            </p>
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-white/5 border border-white/10 flex items-center justify-center text-gold-500">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-white font-serif">Location</p>
                  <p className="text-cream-400 text-sm">122 Heritage Row, Metropolitan Square</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-white/5 border border-white/10 flex items-center justify-center text-gold-500">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-white font-serif">Appointment Line</p>
                  <p className="text-cream-400 text-sm">+1 (555) 234-8899</p>
                </div>
              </div>
            </div>
          </div>

          <form className="space-y-6 p-10 bg-black border border-white/10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-cream-500 font-medium">Full Name</label>
                <input type="text" className="w-full bg-white/5 border border-white/10 p-4 text-white focus:border-gold-500 outline-none transition-colors" placeholder="John Doe" />
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-cream-500 font-medium">Email Address</label>
                <input type="email" className="w-full bg-white/5 border border-white/10 p-4 text-white focus:border-gold-500 outline-none transition-colors" placeholder="john@example.com" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-xs uppercase tracking-widest text-cream-500 font-medium">Preferred Service</label>
              <select className="w-full bg-white/5 border border-white/10 p-4 text-white focus:border-gold-500 outline-none transition-colors appearance-none">
                <option className="bg-black">Select a treatment...</option>
                <option className="bg-black">The Classic</option>
                <option className="bg-black">The Royal</option>
                <option className="bg-black">The Executive</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-xs uppercase tracking-widest text-cream-500 font-medium">Message</label>
              <textarea className="w-full bg-white/5 border border-white/10 p-4 text-white focus:border-gold-500 outline-none transition-colors h-32 resize-none" placeholder="Any special requests?"></textarea>
            </div>
            <button className="w-full py-4 bg-gold-500 text-black uppercase tracking-widest font-bold hover:bg-gold-400 transition-all">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-20 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-12 text-center md:text-left">
          <div className="flex items-center space-x-2">
            <Scissors className="w-6 h-6 text-gold-500" />
            <span className="text-xl font-serif text-white tracking-widest uppercase">ArtBarber</span>
          </div>
          <div className="flex space-x-12">
            <div className="space-y-4">
              <p className="text-gold-500 uppercase tracking-widest text-xs font-bold font-serif mb-6">Quick Links</p>
              <ul className="space-y-3 text-cream-400 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Career Opportunities</a></li>
              </ul>
            </div>
          </div>
          <div className="text-cream-500 text-xs font-serif italic">
            © 2024 ArtBarber Studio. All Rights Reserved.
          </div>
        </div>
        
        <div className="mt-20 text-center">
          <button className="px-12 py-5 bg-gold-500 text-black uppercase tracking-widest font-bold hover:bg-gold-400 transition-all flex items-center justify-center mx-auto group">
            Get Started
            <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="min-h-screen bg-background-dark selection:bg-gold-500/20">
      <Navbar />
      <Hero />
      <SocialProof />
      <Features />
      <Testimonials />
      <Pricing />
      <Contact />
      <Footer />
    </div>
  );
}
